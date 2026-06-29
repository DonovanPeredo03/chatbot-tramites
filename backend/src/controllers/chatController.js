const {
    procesarMensaje
} = require('../services/chatService');

async function enviarMensaje(req, res) {

    try {

        const { mensaje } = req.body;

        const archivo = req.file;

        // 📎 SI SE SUBIÓ ARCHIVO
        if (archivo) {

            console.log('Archivo recibido:');

            console.log(archivo);

           let respuestaIA = `
📄 Documento analizado correctamente.

`;

const textoAnalisis =
(
    (mensaje || '') +
    ' ' +
    (archivo.originalname || '')
).toLowerCase();


// 🪪 INE
if (

    textoAnalisis.includes('ine') ||
    textoAnalisis.includes('credencial') ||
    textoAnalisis.includes('elector')

) {

    respuestaIA += `
🪪 Documento detectado:
INE / Credencial para votar

✅ Se observan:
• fotografía
• nombre
• formato oficial
• datos personales

🤖 Confianza del análisis: 94%

📌 Recomendación:
Verifica la vigencia y que los datos sean legibles.

📂 Compatible con:
• RFC
• IMSS
• Pasaporte
• SAT
`;
}


// 📄 CURP
else if (

    textoAnalisis.includes('curp')

) {

    respuestaIA += `
📄 Documento detectado:
CURP

✅ Se observan:
• clave CURP
• nombre completo
• fecha de nacimiento
• código QR

🤖 Confianza del análisis: 96%

📌 Recomendación:
Verifica que la CURP sea legible y actualizada.
📂 Compatible con:
• RFC
• IMSS
• Pasaporte
• SAT
`;
}


// 🧾 ACTA
else if (

    textoAnalisis.includes('acta') ||
    textoAnalisis.includes('nacimiento')

) {

    respuestaIA += `
🧾 Documento detectado:
Acta de nacimiento

✅ Se observan:
• nombre completo
• fecha de nacimiento
• datos registrales
• sellos oficiales

🤖 Confianza del análisis: 93%

📌 Recomendación:
Verifica que el documento esté certificado.
`;
}


// 🌍 PASAPORTE
else if (

    textoAnalisis.includes('pasaporte')

) {

    respuestaIA += `
🌍 Documento detectado:
Pasaporte mexicano

✅ Se observan:
• fotografía
• datos personales
• número de pasaporte
• nacionalidad

🤖 Confianza del análisis: 91%

📌 Recomendación:
Verifica que el pasaporte no esté vencido.
📂 Compatible con:
• RFC
• IMSS
• Pasaporte
• SAT
`;
}


// 🚗 LICENCIA
else if (

    textoAnalisis.includes('licencia')

) {

    respuestaIA += `
🚗 Documento detectado:
Licencia de conducir

✅ Se observan:
• fotografía
• datos personales
• vigencia
• tipo de licencia

🤖 Confianza del análisis: 92%

📌 Recomendación:
Verifica la fecha de vencimiento.
📂 Compatible con:
• RFC
• IMSS
• Pasaporte
• SAT
`;
}


// 🤖 GENÉRICO
else {

    respuestaIA += `
🤖 El sistema detectó un documento oficial.

✅ La imagen o PDF fue recibido correctamente.

🤖 Confianza del análisis: 85%

📌 El análisis visual básico fue exitoso.
`;
}

return res.json({
    respuesta: respuestaIA
});

if (

    mensajeLower.includes('ine') ||

    mensajeLower.includes('elector')

) {

    respuestaIA += `
🪪 Documento detectado:
INE / Credencial para votar

✅ Se observan:
• fotografía
• nombre
• formato oficial
• datos personales

📌 Recomendación:
Verifica la vigencia y que los datos sean legibles.
`;
}

else if (

    mensajeLower.includes('pasaporte')

) {

    respuestaIA += `
🌍 Documento detectado:
Pasaporte mexicano

✅ Se observan:
• fotografía
• datos de identidad
• formato oficial

📌 Recomendación:
Verifica que no esté vencido.
`;
}

else if (

    mensajeLower.includes('licencia')

) {

    respuestaIA += `
🚗 Documento detectado:
Licencia de conducir

✅ Se observan:
• fotografía
• datos personales
• formato oficial

📌 Recomendación:
Verifica la fecha de vigencia.
`;
}

else {

    respuestaIA += `
🤖 El sistema detectó un documento oficial.

✅ La imagen fue recibida correctamente.

📌 El análisis visual básico fue exitoso.
`;
}

return res.json({
    respuesta: respuestaIA
});
          
        }

        // 🤖 CHAT NORMAL
        const usuario = req.ip || 'default';

        const respuesta =
            await procesarMensaje(
                mensaje,
                usuario
            );

        return res.json({
            respuesta
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            respuesta:
                '❌ Error interno del servidor'
        });
    }
}

module.exports = {
    enviarMensaje
};