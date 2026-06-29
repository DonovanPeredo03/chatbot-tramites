const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
});

async function preguntarGemini(
    mensaje,
    historial,
    tramiteDetectado,
    intento
){

let informacionOficial = '';

let instruccionIntento = '';

const esModoFacil =

    mensaje.toLowerCase().includes('explícamelo fácil') ||

    mensaje.toLowerCase().includes('explicamelo facil') ||

    mensaje.toLowerCase().includes('más simple') ||

    mensaje.toLowerCase().includes('mas simple');

    if (esModoFacil) {

    instruccionIntento =
    'Explica el trámite de forma MUY simple, corta y fácil de entender para cualquier persona. Usa lenguaje casual, evita tecnicismos y resume lo más importante en pocas líneas.'
}

switch (intento) {

    case 'requisitos':
        instruccionIntento =
            'El usuario SOLO quiere saber los requisitos. Responde únicamente esa sección.';
        break;

    case 'costo':
        instruccionIntento =
            'El usuario SOLO quiere saber el costo. Responde breve.';
        break;

    case 'tiempo':
        instruccionIntento =
            'El usuario SOLO quiere saber el tiempo aproximado.';
        break;

    case 'pasos':
        instruccionIntento =
            'El usuario SOLO quiere saber los pasos.';
        break;

    case 'sitio':
        instruccionIntento =
            'El usuario SOLO quiere el sitio oficial.';
        break;

  default:

    if (!esModoFacil) {

        instruccionIntento =
            'Responde normalmente.';
    }
}

if (tramiteDetectado) {

    const esMenor =
    mensaje.toLowerCase().includes('menor') ||
    mensaje.toLowerCase().includes('menor de edad');

    const esCorreccion =
    mensaje.toLowerCase().includes('corregir') ||
    mensaje.toLowerCase().includes('correccion') ||
    mensaje.toLowerCase().includes('corrección') ||
    mensaje.toLowerCase().includes('error');

const esRenovacion =
    mensaje.toLowerCase().includes('renovar') ||
    mensaje.toLowerCase().includes('vencio') ||
    mensaje.toLowerCase().includes('vencida');

const esReposicion =
    mensaje.toLowerCase().includes('perdi') ||
    mensaje.toLowerCase().includes('perdí') ||
    mensaje.toLowerCase().includes('robo') ||
    mensaje.toLowerCase().includes('robaron');

const esCopiaCertificada =
    mensaje.toLowerCase().includes('copia certificada') ||
    mensaje.toLowerCase().includes('certificada');

    const esConsulta =
    mensaje.toLowerCase().includes('consultar') ||
    mensaje.toLowerCase().includes('consulta');

const esAlta =
    mensaje.toLowerCase().includes('alta') ||
    mensaje.toLowerCase().includes('darme de alta');

    const esLiberacion =
    mensaje.toLowerCase().includes('liberar') ||
    mensaje.toLowerCase().includes('liberacion') ||
    mensaje.toLowerCase().includes('liberación');

    const esEntrevista =
    mensaje.toLowerCase().includes('entrevista') ||
    mensaje.toLowerCase().includes('preguntas');

    const esEFirma =
    mensaje.toLowerCase().includes('e.firma') ||
    mensaje.toLowerCase().includes('firma electronica') ||
    mensaje.toLowerCase().includes('firma electrónica');

const esContrasenaSAT =
    mensaje.toLowerCase().includes('contraseña sat') ||
    mensaje.toLowerCase().includes('contrasena sat');

    const esCambioPropietario =
    mensaje.toLowerCase().includes('cambio de propietario') ||
    mensaje.toLowerCase().includes('cambiar propietario');

    informacionOficial = `
TRÁMITE DETECTADO:
${tramiteDetectado.nombre}

REQUISITOS OFICIALES:
${

    esCambioPropietario && tramiteDetectado.cambioPropietario
    ? tramiteDetectado.cambioPropietario.requisitos.join('\n• ')

:

    esEFirma && tramiteDetectado.efirma
    ? tramiteDetectado.efirma.requisitos.join('\n• ')

: esContrasenaSAT && tramiteDetectado.contrasena
    ? tramiteDetectado.contrasena.requisitos.join('\n• ')

    

 :   esEntrevista && tramiteDetectado.entrevista
    ? tramiteDetectado.entrevista.requisitos.join('\n• ')

:

    esLiberacion && tramiteDetectado.liberacion
    ? tramiteDetectado.liberacion.requisitos.join('\n• ')

:

    esAlta && tramiteDetectado.alta
        ? tramiteDetectado.alta.requisitos.join('\n• ')

    : esConsulta && tramiteDetectado.consulta
        ? tramiteDetectado.consulta.requisitos.join('\n• ')

    : esCopiaCertificada && tramiteDetectado.copiaCertificada
        ? tramiteDetectado.copiaCertificada.requisitos.join('\n• ')

    : esReposicion && tramiteDetectado.reposicion
        ? tramiteDetectado.reposicion.requisitos.join('\n• ')

    : esRenovacion && tramiteDetectado.renovacion
        ? tramiteDetectado.renovacion.requisitos.join('\n• ')

    : esCorreccion && tramiteDetectado.correccion
        ? tramiteDetectado.correccion.requisitos.join('\n• ')

    : esMenor && tramiteDetectado.menorEdad
        ? tramiteDetectado.menorEdad.requisitos.join('\n• ')

    : tramiteDetectado.requisitos.join('\n• ')
}

PASOS OFICIALES:
${

    esCambioPropietario && tramiteDetectado.cambioPropietario
    ? tramiteDetectado.cambioPropietario.pasos.join('\n')

:

    esEFirma && tramiteDetectado.efirma
    ? tramiteDetectado.efirma.pasos.join('\n')

: esContrasenaSAT && tramiteDetectado.contrasena
    ? tramiteDetectado.contrasena.pasos.join('\n')

  :  esEntrevista && tramiteDetectado.entrevista
    ? tramiteDetectado.entrevista.pasos.join('\n')

:

    esLiberacion && tramiteDetectado.liberacion
        ? tramiteDetectado.liberacion.pasos.join('\n')

    : esAlta && tramiteDetectado.alta
        ? tramiteDetectado.alta.pasos.join('\n')

    : esConsulta && tramiteDetectado.consulta
        ? tramiteDetectado.consulta.pasos.join('\n')

    : esCopiaCertificada && tramiteDetectado.copiaCertificada
        ? tramiteDetectado.copiaCertificada.pasos.join('\n')

    : esReposicion && tramiteDetectado.reposicion
        ? tramiteDetectado.reposicion.pasos.join('\n')

    : esRenovacion && tramiteDetectado.renovacion
        ? tramiteDetectado.renovacion.pasos.join('\n')

    : esCorreccion && tramiteDetectado.correccion
        ? tramiteDetectado.correccion.pasos.join('\n')

    : esMenor && tramiteDetectado.menorEdad
        ? tramiteDetectado.menorEdad.pasos.join('\n')

    : tramiteDetectado.pasos.join('\n')
}

COSTO:
${

    esCambioPropietario && tramiteDetectado.cambioPropietario
    ? tramiteDetectado.cambioPropietario.costo

:


esEFirma && tramiteDetectado.efirma
    ? tramiteDetectado.efirma.costo

: esContrasenaSAT && tramiteDetectado.contrasena
    ? tramiteDetectado.contrasena.costo

   : esEntrevista && tramiteDetectado.entrevista
    ? tramiteDetectado.entrevista.costo

:

    esLiberacion && tramiteDetectado.liberacion
    ? tramiteDetectado.liberacion.costo

:

    esAlta && tramiteDetectado.alta
        ? tramiteDetectado.alta.costo

    : esConsulta && tramiteDetectado.consulta
        ? tramiteDetectado.consulta.costo

    : esCopiaCertificada && tramiteDetectado.copiaCertificada
        ? tramiteDetectado.copiaCertificada.costo

    : esReposicion && tramiteDetectado.reposicion
        ? tramiteDetectado.reposicion.costo

    : esRenovacion && tramiteDetectado.renovacion
        ? tramiteDetectado.renovacion.costo

    : esCorreccion && tramiteDetectado.correccion
        ? tramiteDetectado.correccion.costo

    : esMenor && tramiteDetectado.menorEdad
        ? tramiteDetectado.menorEdad.costo

    : tramiteDetectado.costo
}



TIEMPO:
${

    esCambioPropietario && tramiteDetectado.cambioPropietario
    ? tramiteDetectado.cambioPropietario.tiempo

:

    esEFirma && tramiteDetectado.efirma
    ? tramiteDetectado.efirma.tiempo

: esContrasenaSAT && tramiteDetectado.contrasena
    ? tramiteDetectado.contrasena.tiempo

   : esEntrevista && tramiteDetectado.entrevista
    ? tramiteDetectado.entrevista.tiempo

:

    esLiberacion && tramiteDetectado.liberacion
    ? tramiteDetectado.liberacion.tiempo

:
    esAlta && tramiteDetectado.alta
        ? tramiteDetectado.alta.tiempo

    : esConsulta && tramiteDetectado.consulta
        ? tramiteDetectado.consulta.tiempo

    : esCopiaCertificada && tramiteDetectado.copiaCertificada
        ? tramiteDetectado.copiaCertificada.tiempo

    : esReposicion && tramiteDetectado.reposicion
        ? tramiteDetectado.reposicion.tiempo

    : esRenovacion && tramiteDetectado.renovacion
        ? tramiteDetectado.renovacion.tiempo

    : esCorreccion && tramiteDetectado.correccion
        ? tramiteDetectado.correccion.tiempo

    : esMenor && tramiteDetectado.menorEdad
        ? tramiteDetectado.menorEdad.tiempo

    : tramiteDetectado.tiempo
}

SITIO OFICIAL:
${tramiteDetectado.sitio}

USA ESTA INFORMACIÓN COMO PRIORIDAD.
NO INVENTES DATOS DIFERENTES.
`;

}

    const prompt = `
Eres un asistente virtual experto en trámites gubernamentales mexicanos.

Tu función es ayudar ciudadanos mexicanos con:

- RFC
- INE
- CURP
- Pasaporte
- Licencias
- Actas de nacimiento
- SAT
- IMSS
- y otros trámites oficiales de México.

REGLAS IMPORTANTES:

- responde de forma clara y profesional
- usa respuestas cortas y organizadas
- usa emojis moderadamente
- separa la información por secciones
- usa saltos de línea entre secciones
- evita escribir todo en un solo bloque
- NO escribas párrafos gigantes
- NO inventes información falsa
- si no sabes algo, dilo honestamente
- responde amigablemente
- enfócate únicamente en México
- recuerda el contexto de la conversación
- limita respuestas a máximo 200 palabras
- usa listas cuando sea necesario
- cuando menciones un trámite incluye el sitio oficial correspondiente
- incluye enlaces completos comenzando con https://

SITIOS OFICIALES IMPORTANTES:

RFC / SAT:
https://www.sat.gob.mx

CURP:
https://www.gob.mx/curp

INE:
https://www.ine.mx

Acta de nacimiento:
https://www.gob.mx/ActaNacimiento

Pasaporte:
https://www.gob.mx/pasaporte

IMSS:
https://www.imss.gob.mx

${

esModoFacil

? `

NO uses el formato formal.

Responde como una explicación corta, sencilla y natural.

Evita secciones largas y tecnicismos.

`

:

`

FORMATO OBLIGATORIO:

✅ Requisitos:
• requisito 1
• requisito 2

📍 Pasos:
1. paso uno
2. paso dos

💰 Costo:
• información

⏱️ Tiempo:
• aproximado

📌 Consejo:
• recomendación útil

🌐 Sitio oficial:
https://...

Si alguna sección no aplica, no la incluyas.

`

}

Intención detectada:
${instruccionIntento}

Información oficial del trámite:
${informacionOficial}

Historial de conversación:
${historial}

Pregunta actual del usuario:
${mensaje}
`;

    const result = await model.generateContent(prompt);

    const response = await result.response;

    let texto = response.text();

    // limpiar markdown
    texto = texto.replace(/\*\*/g, '');
    texto = texto.replace(/`/g, '');

    return texto;

}

module.exports = {
    preguntarGemini
};