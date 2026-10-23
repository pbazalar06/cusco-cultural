
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
    MapContainer,
    TileLayer,
    CircleMarker,
    Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/Mapa.css";

const lugares = [
    {
        id: 1,
        nombre: "Sacsayhuamán",
        categoria: "Arqueología",
        zona: "Cusco",
        coordenadas: [-13.5086, -71.9817],
        descripcion:
            "Complejo arqueológico conocido por sus enormes bloques de piedra y su impresionante arquitectura inca.",
        dato: "Sus muros muestran la precisión de la construcción inca.",
    },
    {
        id: 2,
        nombre: "Q'enqo",
        categoria: "Sitio ceremonial",
        zona: "Cusco",
        coordenadas: [-13.508, -71.9718],
        descripcion:
            "Sitio arqueológico con formaciones rocosas y espacios vinculados a ceremonias de la época inca.",
        dato: "Su nombre se relaciona con la idea de un laberinto.",
    },
    {
        id: 3,
        nombre: "Tipón",
        categoria: "Ingeniería inca",
        zona: "Valle Sur",
        coordenadas: [-13.5657, -71.7857],
        descripcion:
            "Complejo arqueológico reconocido por sus terrazas y canales de agua que siguen funcionando.",
        dato: "Es un ejemplo destacado del manejo del agua en los Andes.",
    },
    {
        id: 4,
        nombre: "Puka Pukara",
        categoria: "Arqueología",
        zona: "Cusco",
        coordenadas: [-13.4963, -71.9714],
        descripcion:
            "Construcción inca ubicada en una zona elevada, con recintos, muros y terrazas.",
        dato: "Su nombre suele traducirse como fortaleza roja.",
    },
    {
        id: 5,
        nombre: "Tambomachay",
        categoria: "Ingeniería inca",
        zona: "Cusco",
        coordenadas: [-13.4806, -71.9728],
        descripcion:
            "Sitio arqueológico con fuentes y canales de agua, asociado al uso ceremonial del agua.",
        dato: "Sus fuentes muestran el dominio inca de los sistemas hidráulicos.",
    },
];

const categorias = [
    "Todas",
    ...new Set(lugares.map((lugar) => lugar.categoria)),
];

function Mapa() {
    const [busqueda, setBusqueda] = useState("");
    const [categoria, setCategoria] = useState("Todas");
    const [lugarSeleccionado, setLugarSeleccionado] = useState(lugares[0]);

    const lugaresFiltrados = useMemo(() => {
        return lugares.filter((lugar) => {
            const coincideNombre = lugar.nombre
                .toLowerCase()
                .includes(busqueda.toLowerCase());

            const coincideCategoria =
                categoria === "Todas" || lugar.categoria === categoria;

            return coincideNombre && coincideCategoria;
        });
    }, [busqueda, categoria]);

    function seleccionarLugar(lugar) {
        setLugarSeleccionado(lugar);
    }

    return (
        <div className="mapa-page">
            <header className="mapa-navbar">
                <Link to="/" className="mapa-logo">
                    <span className="mapa-logo-icon">CC</span>
                    <span>
                        Cusco <strong>Cultural</strong>
                    </span>
                </Link>

                <nav className="mapa-nav-links">
                    <Link to="/">Inicio</Link>
                    <Link to="/mapa" className="activo">
                        Mapa cultural
                    </Link>
                    <Link to="/guia-ia">Guía IA</Link>
                </nav>
            </header>

            <main className="mapa-contenido">
                <section className="mapa-intro">
                    <span className="mapa-etiqueta">EXPLORA Y DESCUBRE</span>
                    <h1>Mapa cultural de Cusco</h1>
                    <p>
                        Descubre sitios históricos, espacios ceremoniales y
                        obras de ingeniería inca en Cusco y sus alrededores.
                    </p>
                </section>

                <section className="mapa-layout">
                    <aside className="mapa-panel">
                        <div className="mapa-panel-titulo">
                            <div>
                                <h2>Explorar lugares</h2>
                                <p>
                                    {lugaresFiltrados.length} lugares
                                    encontrados
                                </p>
                            </div>
                            <span className="mapa-brujula">✦</span>
                        </div>

                        <label className="mapa-label" htmlFor="buscar-lugar">
                            Buscar lugar
                        </label>
                        <input
                            id="buscar-lugar"
                            className="mapa-buscador"
                            type="text"
                            placeholder="Ej. Tipón..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                        />

                        <label className="mapa-label" htmlFor="filtro-categoria">
                            Categoría
                        </label>
                        <select
                            id="filtro-categoria"
                            className="mapa-select"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                            {categorias.map((opcion) => (
                                <option key={opcion} value={opcion}>
                                    {opcion}
                                </option>
                            ))}
                        </select>

                        <div className="mapa-lista">
                            {lugaresFiltrados.map((lugar) => (
                                <button
                                    type="button"
                                    key={lugar.id}
                                    className={`mapa-lugar-item ${
                                        lugarSeleccionado.id === lugar.id
                                            ? "seleccionado"
                                            : ""
                                    }`}
                                    onClick={() => seleccionarLugar(lugar)}
                                >
                                    <span className="mapa-lugar-icono">⌖</span>
                                    <span className="mapa-lugar-texto">
                                        <strong>{lugar.nombre}</strong>
                                        <small>{lugar.categoria}</small>
                                    </span>
                                    <span className="mapa-flecha">›</span>
                                </button>
                            ))}

                            {lugaresFiltrados.length === 0 && (
                                <p className="mapa-sin-resultados">
                                    No se encontraron lugares. Prueba con otro
                                    nombre o categoría.
                                </p>
                            )}
                        </div>

                        {lugarSeleccionado && (
                            <div className="mapa-detalle">
                                <span className="mapa-detalle-etiqueta">
                                    LUGAR SELECCIONADO
                                </span>
                                <h3>{lugarSeleccionado.nombre}</h3>
                                <span className="mapa-categoria-chip">
                                    {lugarSeleccionado.categoria}
                                </span>
                                <p>{lugarSeleccionado.descripcion}</p>
                                <div className="mapa-dato">
                                    <strong>¿Sabías que?</strong>
                                    <p>{lugarSeleccionado.dato}</p>
                                </div>
                            </div>
                        )}
                    </aside>

                    <div className="mapa-area">
                        <div className="mapa-area-cabecera">
                            <div>
                                <strong>Patrimonio cultural</strong>
                                <span> Cusco y Valle Sur</span>
                            </div>
                            <span className="mapa-en-vivo">
                                <span /> Mapa interactivo
                            </span>
                        </div>

                        <MapContainer
                            center={[-13.52, -71.94]}
                            zoom={11}
                            scrollWheelZoom={true}
                            className="mapa-leaflet"
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            {lugares.map((lugar) => (
                                <CircleMarker
                                    key={lugar.id}
                                    center={lugar.coordenadas}
                                    radius={
                                        lugarSeleccionado.id === lugar.id
                                            ? 10
                                            : 7
                                    }
                                    pathOptions={{
                                        color:
                                            lugarSeleccionado.id === lugar.id
                                                ? "#762b35"
                                                : "#bd9256",
                                        fillColor:
                                            lugarSeleccionado.id === lugar.id
                                                ? "#762b35"
                                                : "#e4bd7b",
                                        fillOpacity: 0.95,
                                        weight: 3,
                                    }}
                                    eventHandlers={{
                                        click: () => seleccionarLugar(lugar),
                                    }}
                                >
                                    <Popup>
                                        <strong>{lugar.nombre}</strong>
                                        <br />
                                        {lugar.categoria}
                                        <br />
                                        {lugar.zona}
                                    </Popup>
                                </CircleMarker>
                            ))}
                        </MapContainer>

                        <div className="mapa-pie">
                            <span>✦</span>
                            Selecciona un marcador o un lugar de la lista para
                            conocer más.
                        </div>
                    </div>
                </section>
            </main>

            <footer className="mapa-footer">
                <span>© 2026 Cusco Cultural</span>
                <span>Conoce, valora y comparte nuestro patrimonio.</span>
            </footer>
        </div>
    );
}

export default Mapa;
