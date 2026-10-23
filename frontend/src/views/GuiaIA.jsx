
import { Link } from "react-router-dom";
import "../styles/GuiaIA.css";

const sugerencias = [
    {
        icono: "landmark",
        titulo: "Historia inca",
        descripcion: "Conoce las historias y el legado de los incas.",
    },
    {
        icono: "map-pin",
        titulo: "Lugares poco conocidos",
        descripcion: "Descubre sitios culturales menos visitados.",
    },
    {
        icono: "route",
        titulo: "Crear una ruta",
        descripcion: "Explora opciones para tu recorrido por Cusco.",
    },
    {
        icono: "book-open",
        titulo: "Datos culturales",
        descripcion: "Aprende sobre tradiciones y patrimonio.",
    },
];

function GuiaIA() {
    return (
        <div className="guia-page">
            <header className="guia-navbar">
                <Link to="/" className="guia-logo">
                    <span className="guia-logo-icon">CC</span>
                    <span>
                        Cusco <strong>Cultural</strong>
                    </span>
                </Link>

                <nav className="guia-nav-links">
                    <Link to="/">Inicio</Link>
                    <Link to="/mapa">Mapa cultural</Link>
                    <Link to="/guia-ia" className="activo">
                        Guía IA
                    </Link>
                </nav>
            </header>

            <main className="guia-contenido">
                <section className="guia-intro">
                    <span className="guia-etiqueta">
                        CONOCIMIENTO Y CULTURA
                    </span>
                    <h1>Tu guía cultural de Cusco</h1>
                    <p>
                        Prepárate para descubrir historias, tradiciones y
                        lugares que hacen único al patrimonio cusqueño.
                    </p>
                </section>

                <section className="guia-layout">
                    <div className="guia-chat">
                        <div className="guia-chat-header">
                            <div className="guia-avatar">
                                <span className="material-symbol">✦</span>
                            </div>

                            <div className="guia-chat-identidad">
                                <h2>Guía Cultural</h2>
                                <span>
                                    Asistente de patrimonio de Cusco
                                </span>
                            </div>

                            <span className="guia-estado">
                                En desarrollo
                            </span>
                        </div>

                        <div className="guia-chat-cuerpo">
                            <div className="guia-bienvenida">
                                <span className="guia-bienvenida-icono">
                                    ✦
                                </span>
                                <h3>¡Bienvenido a Cusco!</h3>
                                <p>
                                    Muy pronto podrás conversar con nuestra
                                    guía cultural, descubrir lugares y conocer
                                    más sobre la historia de esta tierra.
                                </p>
                            </div>

                            <div className="guia-mensaje-preview">
                                <div className="guia-mini-avatar">CC</div>
                                <div className="guia-burbuja">
                                    <span className="guia-preview-label">
                                        VISTA PREVIA
                                    </span>
                                    <p>
                                        Aquí aparecerán las respuestas
                                        personalizadas de la guía cuando se
                                        conecte el servicio de inteligencia
                                        artificial.
                                    </p>
                                </div>
                            </div>

                            <div className="guia-aviso">
                                <span>ⓘ</span>
                                <p>
                                    El chat todavía no está conectado a una IA.
                                    Las consultas estarán disponibles en una
                                    próxima versión.
                                </p>
                            </div>
                        </div>

                        <div className="guia-chat-composer">
                            <input
                                type="text"
                                placeholder="La consulta estará disponible próximamente..."
                                disabled
                                aria-label="Consulta para la guía cultural"
                            />
                            <button type="button" disabled aria-label="Enviar consulta">
                                <span>➤</span>
                            </button>
                        </div>

                        <p className="guia-chat-pie">
                            La guía estará disponible cuando se integre la API.
                        </p>
                    </div>

                    <aside className="guia-panel">
                        <div className="guia-panel-encabezado">
                            <span className="guia-panel-icono">✧</span>
                            <div>
                                <h2>¿Qué quieres descubrir?</h2>
                                <p>
                                    Temas que podrás consultar con la guía.
                                </p>
                            </div>
                        </div>

                        <div className="guia-sugerencias">
                            {sugerencias.map((sugerencia) => (
                                <div
                                    className="guia-sugerencia"
                                    key={sugerencia.titulo}
                                >
                                    <div className="guia-sugerencia-icono">
                                        {sugerencia.icono === "landmark" && "⌂"}
                                        {sugerencia.icono === "map-pin" && "⌖"}
                                        {sugerencia.icono === "route" && "⤴"}
                                        {sugerencia.icono === "book-open" && "▤"}
                                    </div>

                                    <div className="guia-sugerencia-texto">
                                        <h3>{sugerencia.titulo}</h3>
                                        <p>{sugerencia.descripcion}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="guia-recomendacion">
                            <span className="guia-recomendacion-etiqueta">
                                EXPLORA TAMBIÉN
                            </span>
                            <h3>El patrimonio te espera</h3>
                            <p>
                                Recorre el mapa cultural y conoce algunos de
                                los sitios históricos de Cusco.
                            </p>
                            <Link to="/mapa" className="guia-boton-mapa">
                                <span>Explorar mapa</span>
                                <span>→</span>
                            </Link>
                        </div>
                    </aside>
                </section>
            </main>

            <footer className="guia-footer">
                <span>© 2026 Cusco Cultural</span>
                <span>Conoce, valora y comparte nuestro patrimonio.</span>
            </footer>
        </div>
    );
}

export default GuiaIA;
