const {
    preguntarGemini
} = require('./geminiService');

const {
    detectarTramite
} = require('./detectorService');

const {
    detectarIntento
} = require('./intentService');

// memoria temporal
const conversaciones = {};

const contextoActual = {};

const flujoActivo = {};

async function procesarMensaje(mensaje, usuario = 'default') {

    // crear historial si no existe
    if (!conversaciones[usuario]) {
        conversaciones[usuario] = [];
    }

    // guardar mensaje usuario
    conversaciones[usuario].push({
        role: 'user',
        content: mensaje
    });

    // limitar historial
    if (conversaciones[usuario].length > 10) {
        conversaciones[usuario].shift();
    }

    // convertir historial a texto
    const historial = conversaciones[usuario]
        .map(m => `${m.role}: ${m.content}`)
        .join('\n');

    // preguntar IA con contexto
    const tramiteDetectado = detectarTramite(mensaje);

if (tramiteDetectado) {
    contextoActual[usuario] = tramiteDetectado;
}

if (flujoActivo[usuario]) {

    const flujo = flujoActivo[usuario];

    const respuestaUsuario =
        mensaje.toLowerCase();

   // RFC PASO 1
if (

    flujo.tramite === 'RFC' &&
    flujo.paso === 1

) {

    if (

        respuestaUsuario.includes('sí') ||
        respuestaUsuario.includes('si')

    ) {

        flujo.paso = 2;

        return '👍 Excelente.\n\n¿Ya cuentas con CURP?';
    }

    if (

        respuestaUsuario.includes('no')

    ) {

        delete flujoActivo[usuario];
        delete contextoActual[usuario];

        return '😊 No hay problema.\n\nPara tramitar tu RFC siendo menor de edad necesitarás acudir con tu tutor legal.';
    }

    return '❓ Por favor responde solamente: sí o no.';
}

    // RFC PASO 2
if (

    flujo.tramite === 'RFC' &&
    flujo.paso === 2

) {

    if (

        respuestaUsuario.includes('sí') ||
        respuestaUsuario.includes('si')

    ) {

        delete flujoActivo[usuario];
        delete contextoActual[usuario];

        return `
Perfecto 😊

Entonces ya puedes tramitar tu RFC.

✅ Necesitas:
• Identificación oficial
• Comprobante de domicilio
• Correo electrónico

🌐 https://www.sat.gob.mx
`;
    }

    if (

        respuestaUsuario.includes('no')

    ) {

        delete flujoActivo[usuario];
        delete contextoActual[usuario];

        return `
📌 Antes de sacar tu RFC necesitas obtener tu CURP.

🌐 https://www.gob.mx/curp
`;
    }

    return '❓ Por favor responde solamente: sí o no.';
}

   // PASAPORTE PASO 1
if (

    flujo.tramite === 'Pasaporte' &&
    flujo.paso === 1

) {

    if (

        respuestaUsuario.includes('sí') ||
        respuestaUsuario.includes('si')

    ) {

        flujo.paso = 2;

        return '👍 Perfecto.\n\n¿Eres mayor de edad?';
    }

    if (

        respuestaUsuario.includes('no')

    ) {

        delete flujoActivo[usuario];
        delete contextoActual[usuario];

        return `
😊 Entonces necesitarás tu pasaporte anterior para renovación.

✅ También podrían pedir:
• Identificación oficial
• CURP
• Pago correspondiente
`;
    }

    return '❓ Por favor responde solamente: sí o no.';
}
// PASAPORTE PASO 2
if (

    flujo.tramite === 'Pasaporte' &&
    flujo.paso === 2

) {

    if (

        respuestaUsuario.includes('sí') ||
        respuestaUsuario.includes('si')

    ) {

        delete flujoActivo[usuario];
        delete contextoActual[usuario];

        return `
🌍 Excelente 😊

Ya puedes tramitar tu pasaporte.

✅ Necesitas:
• Acta de nacimiento
• CURP
• Identificación oficial
• Pago del trámite

🌐 https://www.gob.mx/pasaporte
`;
    }

    if (

        respuestaUsuario.includes('no')

    ) {

        delete flujoActivo[usuario];
        delete contextoActual[usuario];

        return `
📌 Para menores de edad:

✅ Debes acudir con:
• Padre, madre o tutor
• Identificaciones oficiales
• CURP
• Acta de nacimiento

🌐 https://www.gob.mx/pasaporte
`;
    }

    return '❓ Por favor responde solamente: sí o no.';
}

// VISA PASO 1
if (

    flujo.tramite === 'Visa americana' &&
    flujo.paso === 1

) {

    if (

        respuestaUsuario.includes('sí') ||
        respuestaUsuario.includes('si')

    ) {

        flujo.paso = 2;

        return '✈️ Excelente.\n\n¿La visa es para turismo?';
    }

    if (

        respuestaUsuario.includes('no')

    ) {

        delete flujoActivo[usuario];
        delete contextoActual[usuario];

        return `
📌 Primero necesitarás tramitar tu pasaporte mexicano vigente.

🌐 https://www.gob.mx/pasaporte
`;
    }

    return '❓ Por favor responde solamente: sí o no.';
}

// VISA PASO 2
if (

    flujo.tramite === 'Visa americana' &&
    flujo.paso === 2

) {

    if (

        respuestaUsuario.includes('sí') ||
        respuestaUsuario.includes('si')

    ) {

        delete flujoActivo[usuario];
        delete contextoActual[usuario];

        return `
🇺🇸 Perfecto 😊

Para tramitar tu visa de turismo necesitarás:

✅ Requisitos:
• Pasaporte vigente
• Formulario DS-160
• Fotografía digital
• Pago consular
• Agendar entrevista

📍 Pasos:
1. Llenar DS-160
2. Realizar pago
3. Agendar cita CAS
4. Acudir a entrevista

🌐 https://mx.usembassy.gov/es/visas-es/
`;
    }

    if (

        respuestaUsuario.includes('no')

    ) {

        delete flujoActivo[usuario];
        delete contextoActual[usuario];

        return `
📌 Dependiendo del tipo de visa:

• Trabajo
• Estudiante
• Intercambio
• Residencia

Los requisitos pueden cambiar.

🌐 https://mx.usembassy.gov/es/visas-es/
`;
    }

    return '❓ Por favor responde solamente: sí o no.';
}

// LICENCIA PASO 1
if (

    flujo.tramite === 'Licencia de conducir' &&
    flujo.paso === 1

) {

    if (

        respuestaUsuario.includes('sí') ||
        respuestaUsuario.includes('si')

    ) {

        flujo.paso = 2;

        return '🪪 Excelente.\n\n¿Cuentas con identificación oficial vigente?';
    }

    if (

        respuestaUsuario.includes('no')

    ) {

        delete flujoActivo[usuario];
        delete contextoActual[usuario];

        return `
📌 Para renovación necesitarás:

✅ Requisitos:
• Licencia anterior
• Identificación oficial
• Comprobante de domicilio
• Pago correspondiente

🌐 https://www.gob.mx
`;
    }

    return '❓ Por favor responde solamente: sí o no.';
}

// LICENCIA PASO 2
if (

    flujo.tramite === 'Licencia de conducir' &&
    flujo.paso === 2

) {

    if (

        respuestaUsuario.includes('sí') ||
        respuestaUsuario.includes('si')

    ) {

        delete flujoActivo[usuario];
        delete contextoActual[usuario];

        return `
🚗 Perfecto 😊

Para tramitar tu licencia necesitarás:

✅ Requisitos:
• Identificación oficial
• CURP
• Comprobante de domicilio
• Examen de manejo
• Pago del trámite

📍 Pasos:
1. Agendar cita
2. Presentar documentos
3. Realizar examen
4. Realizar pago
5. Recibir licencia

🌐 https://www.gob.mx
`;
    }

    if (

        respuestaUsuario.includes('no')

    ) {

        delete flujoActivo[usuario];
        delete contextoActual[usuario];

        return `
📌 Antes de tramitar tu licencia necesitarás una identificación oficial vigente.
`;
    }

    return '❓ Por favor responde solamente: sí o no.';
}

}

// INICIAR FLUJO RFC

if (

    tramiteDetectado &&
    tramiteDetectado.nombre === 'RFC'

) {

    delete flujoActivo[usuario];
    delete contextoActual[usuario];

    flujoActivo[usuario] = {
        tramite: 'RFC',
        paso: 1
    };

    contextoActual[usuario] = {
        nombre: 'RFC'
    };

    return '👋 Perfecto. Antes de ayudarte con tu RFC:\n\n¿Eres mayor de edad?';
}


// INICIAR FLUJO PASAPORTE


if (

    tramiteDetectado &&
    tramiteDetectado.nombre === 'Pasaporte'

) {

    delete flujoActivo[usuario];
    delete contextoActual[usuario];

    flujoActivo[usuario] = {
        tramite: 'Pasaporte',
        paso: 1
    };

    contextoActual[usuario] = {
        nombre: 'Pasaporte'
    };

    return '🌍 Perfecto.\n\n¿Es tu primera vez tramitando pasaporte?';
}


// INICIAR FLUJO VISA
if (

    tramiteDetectado &&
    tramiteDetectado.nombre === 'Visa americana'

) {

    delete flujoActivo[usuario];
    delete contextoActual[usuario];

    flujoActivo[usuario] = {
        tramite: 'Visa americana',
        paso: 1
    };

    contextoActual[usuario] = {
        nombre: 'Visa americana'
    };

    return '🇺🇸 Perfecto.\n\n¿Ya cuentas con pasaporte vigente?';
}

// INICIAR FLUJO LICENCIA
if (

    tramiteDetectado &&
    tramiteDetectado.nombre === 'Licencia de conducir'

) {

    delete flujoActivo[usuario];
    delete contextoActual[usuario];

    flujoActivo[usuario] = {
        tramite: 'Licencia de conducir',
        paso: 1
    };

    contextoActual[usuario] = {
        nombre: 'Licencia de conducir'
    };

    return '🚗 Perfecto.\n\n¿Es tu primera vez tramitando licencia?';
}


const tramiteFinal =
    tramiteDetectado ||
    contextoActual[usuario] ||
    null;

    const intento = detectarIntento(mensaje);

const respuesta = await preguntarGemini(
    mensaje,
    historial,
    tramiteFinal,
    intento
);

    // guardar respuesta IA
    conversaciones[usuario].push({
        role: 'assistant',
        content: respuesta
    });

    return respuesta;

}

module.exports = {
    procesarMensaje
};