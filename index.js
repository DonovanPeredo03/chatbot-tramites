require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const datos = require('./datos.json');

// 🔐 Contexto por usuario
const contexto = {};
const ultimaRespuesta = {};

// Middleware
app.use(cors());
app.use(express.json());

// 🔤 Normalizar texto
function normalizar(texto) {
    return texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

// 🔎 Tokenización
function tokenizar(texto) {
    return texto.split(/\s+/).filter(Boolean);
}

// 🧹 Palabras irrelevantes
const palabrasIgnoradas = ["como", "hacer", "sacar", "tramitar", "quiero", "mi", "el", "la"];

// ✔️ Confirmaciones
const confirmaciones = ["si", "sí", "ok", "claro", "va", "chi", "yes"];

// 🎲 Elegir respuesta
function elegirRespuesta(item) {
    if (Array.isArray(item.respuestas) && item.respuestas.length > 0) {
        const i = Math.floor(Math.random() * item.respuestas.length);
        return item.respuestas[i];
    }
    return item.respuesta || 'Sin respuesta definida.';
}

// 💡 Sugerencias
function sugerencias() {
    return "Puedes preguntarme sobre RFC, INE, CURP o acta de nacimiento.";
}

// Ruta base
app.get('/', (req, res) => {
    res.send('Servidor activo');
});

// 🔥 CHATBOT
app.post('/chat', (req, res) => {
    let mensaje = req.body.mensaje;

    if (!mensaje || typeof mensaje !== 'string') {
        return res.json({
            respuesta: 'El mensaje debe ser texto válido.'
        });
    }

    const usuario = req.ip || 'default';

    if (!contexto[usuario]) contexto[usuario] = null;

    const mensajeNorm = normalizar(mensaje);

    // 🔥 CONFIRMACIONES
    if (confirmaciones.includes(mensajeNorm)) {
        if (contexto[usuario]) {
            return res.json({
                respuesta: `Perfecto 👍 seguimos con ${contexto[usuario]}. ¿Qué más quieres saber?`
            });
        }
    }

    // 🔥 FILTRO DE PALABRAS
    const tokens = tokenizar(mensajeNorm).filter(
        t => !palabrasIgnoradas.includes(t)
    );

    let mejorCoincidencia = null;
    let mejorPuntaje = 0;

    // 🔥 SCORING
    for (let item of datos) {
        let puntaje = 0;

        for (let palabraClave of item.palabras_clave) {
            const claveNorm = normalizar(palabraClave);

            if (mensajeNorm.includes(claveNorm)) {
                puntaje += 3;
            }

            for (let t of tokens) {
                if (t === claveNorm) {
                    puntaje += 2;
                } else if (t.includes(claveNorm) || claveNorm.includes(t)) {
                    puntaje += 1;
                }
            }
        }

        if (puntaje > mejorPuntaje) {
            mejorPuntaje = puntaje;
            mejorCoincidencia = item;
        }
    }

    // 🔁 CONTEXTO
    if ((!mejorCoincidencia || mejorPuntaje < 3) && contexto[usuario]) {
        return res.json({
            respuesta: `No estoy seguro 🤔 ¿sigues preguntando sobre ${contexto[usuario]}?`
        });
    }

    // ✅ RESPUESTA LOCAL
    if (mejorCoincidencia && mejorPuntaje >= 3) {
        contexto[usuario] = mejorCoincidencia.nombre;

        let respuesta = elegirRespuesta(mejorCoincidencia);

        // 🔁 EVITAR REPETICIÓN
        if (ultimaRespuesta[usuario] === respuesta) {
            respuesta = "Ya te había comentado eso 😅 ¿quieres saber algo más?";
        }

        ultimaRespuesta[usuario] = respuesta;

        return res.json({
            respuesta: `${respuesta} ¿Necesitas algo más?`
        });
    }

    // ❌ FALLBACK INTELIGENTE
    return res.json({
        respuesta: `No entendí bien 🤔 pero ${sugerencias()}`
    });
});

// Servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});