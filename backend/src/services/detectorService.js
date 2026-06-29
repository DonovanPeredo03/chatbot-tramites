const tramites = require('../data/tramites.json');

function detectarTramite(mensaje) {

    const texto = mensaje.toLowerCase();

    for (const tramite of tramites) {

        for (const keyword of tramite.keywords) {

            if (texto.includes(keyword)) {
                return tramite;
            }

        }

    }

    return null;
}

module.exports = {
    detectarTramite
};