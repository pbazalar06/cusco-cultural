
import "../styles/Home.css";

const lugares = [
    {
        nombre: "Sacsayhuamán",
        categoria: "ARQUEOLOGÍA",
        descripcion:
            "Descubre las impresionantes construcciones de piedra del legado inca.",
        imagen:
            "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80",
    },
    {
        nombre: "Q'enqo",
        categoria: "PATRIMONIO HISTÓRICO",
        descripcion:
            "Explora un espacio ceremonial lleno de historia y simbolismo.",
        imagen:
            "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?auto=format&fit=crop&w=800&q=80",
    },
    {
        nombre: "Tipón",
        categoria: "INGENIERÍA INCA",
        descripcion:
            "Conoce las terrazas y los canales de agua de este legado ancestral.",
        imagen:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    },
];


function Home() {
      return (
            <div className="home-page">
                <header className="home-navbar">
                    <a className="home-logo" href="/">
                        <span className="logo-symbol">✦</span>
                        <span>
                            CUSCO
                            <strong>CULTURAL</strong>
                        </span>
                    </a>

                    <nav className="home-nav">
                        <a className="nav-active" href="/">Inicio</a>
                        <a href="/mapa">Mapa cultural</a>
                        <a href="/guia-ia">Guía IA</a>
                    </nav>

                    <a className="nav-cta" href="/mapa">
                        Explorar Cusco <span>↗</span>
                    </a>
                </header>

                <main>
                    <section className="home-hero">
                        <div className="hero-content">
                            <span className="hero-label">
                                CULTURA · HISTORIA · TRADICIÓN
                            </span>

                            <h1>
                                Descubre la historia
                                <br />
                                que vive en <span>Cusco.</span>
                            </h1>

                            <p>
                                Explora sitios históricos, tradiciones y rincones
                                culturales que hacen único al patrimonio cusqueño.
                            </p>

                            <div className="hero-actions">
                                <a className="btn-primary" href="/mapa">
                                    Explorar el mapa <span>→</span>
                                </a>

                                <a className="btn-secondary" href="/guia-ia">
                                    <span>✧</span> Hablar con la guía IA
                                </a>
                            </div>

                            <div className="hero-note">
                                <span className="note-line"></span>
                                UN VIAJE POR NUESTRAS RAÍCES
                            </div>
                        </div>

                        <div className="hero-image">
                            <img
                                src="https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=85"
                                alt="Paisaje histórico de Cusco"
                            />

                            <div className="hero-image-caption">
                                <span>01 — PATRIMONIO VIVO</span>
                                <strong>Una historia por descubrir</strong>
                            </div>
                        </div>
                    </section>

                    <section className="home-places">
                        <div className="section-heading">
                            <div>
                                <span className="section-eyebrow">
                                    EXPLORA EL PATRIMONIO
                                </span>
                                <h2>Lugares que cuentan historias</h2>
                                <p>
                                    Empieza tu recorrido por algunos de los
                                    tesoros culturales de Cusco.
                                </p>
                            </div>

                            <a className="view-all" href="/mapa">
                                Ver mapa completo <span>→</span>
                            </a>
                        </div>

                        <div className="places-grid">
                            {lugares.map((lugar, index) => (
                                <article className="place-card" key={lugar.nombre}>
                                    <div className="place-image">
                                        <img
                                            src={lugar.imagen}
                                            alt={lugar.nombre}
                                            loading="lazy"
                                        />
                                        <span className="place-number">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <div className="place-info">
                                        <span className="place-category">
                                            {lugar.categoria}
                                        </span>
                                        <h3>{lugar.nombre}</h3>
                                        <p>{lugar.descripcion}</p>
                                        <a href="/mapa">
                                            Descubrir lugar <span>↗</span>
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="home-discover">
                        <div>
                            <span className="section-eyebrow">
                                MÁS ALLÁ DE LO CONOCIDO
                            </span>
                            <h2>Hay mucho más por descubrir.</h2>
                            <p>
                                Encuentra lugares poco conocidos, conoce sus
                                historias y descubre una nueva forma de vivir
                                la cultura cusqueña.
                            </p>
                        </div>

                        <a className="btn-light" href="/mapa">
                            Comenzar a explorar <span>→</span>
                        </a>
                    </section>
                </main>

                <footer className="home-footer">
                    <a className="footer-logo" href="/">
                        CUSCO CULTURAL
                    </a>
                    <p>
                        Un espacio para descubrir, valorar y compartir
                        nuestro patrimonio cultural.
                    </p>
                    <span>© 2026 Cusco Cultural</span>
                </footer>
            </div>
        );
    }

export default Home;
