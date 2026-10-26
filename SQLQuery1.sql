
CREATE DATABASE cultura_cusco
    WITH 
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

    -- Tabla 1: Periodos Históricos
CREATE TABLE periodos_historicos (
    periodo_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    inicio_aprox VARCHAR(50),
    fin_aprox VARCHAR(50),
    descripcion TEXT
);

-- Tabla 2: Sitios Arqueológicos
CREATE TABLE sitios_arqueologicos (
    sitio_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ubicacion_distrito VARCHAR(100),
    altitud_masl INT, -- Metros sobre el nivel del mar
    periodo_id INT REFERENCES periodos_historicos(periodo_id) ON DELETE SET NULL,
    descripcion TEXT
);

-- Tabla 3: Gobernantes / Sapa Inca
CREATE TABLE gobernantes_incas (
    inca_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    dinastia VARCHAR(50) CHECK (dinastia IN ('Hurin Cusco', 'Hanan Cusco')),
    orden_cronologico INT UNIQUE,
    logros_principales TEXT
);

-- Tabla 4: Expresiones Culturales y Artefactos
CREATE TABLE expresiones_culturales (
    expresion_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    categoria VARCHAR(50), -- Ej. Arquitectura, Textilería, Cerámica, Festividad
    material_o_medio VARCHAR(100),
    sitio_asociado_id INT REFERENCES sitios_arqueologicos(sitio_id) ON DELETE SET NULL,
    descripcion TEXT
);
-- Insertar Periodos Históricos
INSERT INTO periodos_historicos (nombre, inicio_aprox, fin_aprox, descripcion) VALUES
('Cultura Killke (Preinca)', '900 d.C.', '1200 d.C.', 'Cultura preincaica que ocupó el valle del Cusco antes de la consolidación del Imperio.'),
('Tawantinsuyu (Imperio Inca)', '1438 d.C.', '1533 d.C.', 'Periodo de máxima expansión y consolidación del Imperio Inca iniciado con Pachacútec.');

-- Insertar Gobernantes Incas
INSERT INTO gobernantes_incas (nombre, dinastia, orden_cronologico, logros_principales) VALUES
('Manco Cápac', 'Hurin Cusco', 1, 'Fundador legendario de la dinastía inca en el valle del Cusco.'),
('Pachacútec', 'Hanan Cusco', 9, 'Transformó el señorío inca en imperio, mandó a construir Machu Picchu y reorganizó Cusco en forma de puma.');

-- Insertar Sitios Arqueológicos
INSERT INTO sitios_arqueologicos (nombre, ubicacion_distrito, altitud_masl, periodo_id, descripcion) VALUES
('Qorikancha', 'Cusco', 3399, 2, 'Templo del Sol, el centro religioso más sagrado del Imperio Inca.'),
('Sacsayhuamán', 'Cusco', 3700, 2, 'Fortaleza y complejo ceremonial caracterizado por sus gigantescos bloques de piedra megaproporcionales.'),
('Machu Picchu', 'Machupicchu', 2430, 2, 'Llaqta o santuario religioso y residencia de descanso atribuida a Pachacútec.');

-- Insertar Expresiones Culturales
INSERT INTO expresiones_culturales (nombre, categoria, material_o_medio, sitio_asociado_id, descripcion) VALUES
('Muro Inca / Aparejo Ciclópeo', 'Arquitectura', 'Piedra (Andesita/Diorita)', 2, 'Técnica de tallado y encaje perfecto de piedras sin mortero.'),
('Kero', 'Cerámica / Artefacto', 'Madera o Arcilla', 1, 'Vaso ceremonial utilizado en rituales y alianzas políticas.'),
('Inti Raymi', 'Festividad', 'Tradición viva / Ritual', 2, 'Fiesta del Sol celebrada en el solsticio de invierno.');
SELECT s.nombre AS sitio, s.altitud_masl, p.nombre AS periodo
FROM sitios_arqueologicos s
JOIN periodos_historicos p ON s.periodo_id = p.periodo_id;
SELECT e.nombre AS expresion, e.categoria, s.nombre AS sitio
FROM expresiones_culturales e
JOIN sitios_arqueologicos s ON e.sitio_asociado_id = s.sitio_id
WHERE s.nombre = 'Sacsayhuamán';