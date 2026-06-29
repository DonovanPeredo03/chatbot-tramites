function detectarIntento(mensaje) {

    const texto = mensaje.toLowerCase();

    // requisitos
    if (
        texto.includes('requisito') ||
        texto.includes('necesito') ||
        texto.includes('documentos')
    ) {
        return 'requisitos';
    }

    // costo
    if (
        texto.includes('costo') ||
        texto.includes('cuesta') ||
        texto.includes('precio')
    ) {
        return 'costo';
    }

    // tiempo
    if (
        texto.includes('tiempo') ||
        texto.includes('tarda') ||
        texto.includes('demora')
    ) {
        return 'tiempo';
    }

    // pasos
    if (
        texto.includes('como') ||
        texto.includes('cómo') ||
        texto.includes('tramitar') ||
        texto.includes('sacar')
    ) {
        return 'pasos';
    }

    // sitio oficial
    if (
        texto.includes('sitio') ||
        texto.includes('pagina') ||
        texto.includes('portal')
    ) {
        return 'sitio';
    }

    return 'general';
}

module.exports = {
    detectarIntento
};