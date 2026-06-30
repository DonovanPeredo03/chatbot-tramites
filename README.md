# Asistente Inteligente de Trámites Gubernamentales

Un asistente virtual desarrollado con **Node.js**, **Express** y **Google Gemini AI** que permite consultar información sobre trámites gubernamentales en México mediante Inteligencia Artificial.

El proyecto combina procesamiento de lenguaje natural, una interfaz web moderna y herramientas de accesibilidad para facilitar la consulta de información oficial.

---

# Descripción

El objetivo de este proyecto es proporcionar una plataforma donde los usuarios puedan obtener información clara y organizada sobre diferentes trámites gubernamentales sin necesidad de navegar por múltiples sitios web.

El asistente interpreta las preguntas del usuario utilizando **Google Gemini AI**, consulta información estructurada y responde de manera natural, además de incorporar funciones que mejoran la experiencia de uso como conversión de texto a voz, descarga en PDF e historial de conversación.

---

# Características

## Inteligencia Artificial

- Integración con Google Gemini AI.
- Comprensión de lenguaje natural.
- Detección automática de intención.
- Respuestas inteligentes.
- Consultas dinámicas sobre trámites.

---

## Gestión de trámites

- Consulta de distintos trámites gubernamentales.
- Información organizada por pasos.
- Enlaces hacia páginas oficiales.
- Selección rápida de trámites mediante menú desplegable.

---

## Experiencia de usuario

- 🌙 Modo oscuro.
- ☀️ Modo claro.
- Historial de conversación.
- Eliminación del historial del chat.
- Interfaz moderna y responsiva.
- Indicador visual del estado de la IA.

---

## Accesibilidad

- Conversión de texto a voz mediante Speech Synthesis API.
- Lectura automática de las respuestas del asistente.

---

## Exportación

- Descarga de respuestas en formato PDF.
- Conservación del contenido generado por la IA.

---

## Procesamiento de documentos

El sistema incluye la estructura necesaria para permitir el análisis de documentos PDF.

**Estado actual**

Funcionalidad parcialmente implementada.

Actualmente permite preparar la carga del documento, pero la integración completa con el análisis mediante IA se encuentra pendiente de desarrollo.

---

# Funcionalidades implementadas

| Funcionalidad | Estado |
|---------------|:------:|
| Consultas mediante IA | ✅ |
| Integración con Google Gemini | ✅ |
| Historial del chat | ✅ |
| Eliminar historial | ✅ |
| Texto a voz | ✅ |
| Descargar PDF | ✅ |
| Selección rápida de trámites | ✅ |
| Modo claro / oscuro | ✅ |
| Procesamiento de PDF | 🚧 En desarrollo |

---

# Tecnologías utilizadas

## Backend

- Node.js
- Express
- Google Gemini API
- Multer
- Dotenv
- CORS

## Frontend

- HTML5
- CSS3
- JavaScript

## APIs

- Google Gemini API
- Speech Synthesis API

---

# Arquitectura del proyecto

```
chatbot-tramites/

│

├── backend/

│   ├── src/

│   │   ├── controllers/

│   │   ├── routes/

│   │   ├── services/

│   │   ├── middlewares/

│   │   └── data/

│   │

│   ├── uploads/

│   ├── .env.example

│   ├── package.json

│   └── index.js

│

├── frontend/

│   └── index.html

│

└── README.md
```

---

# Arquitectura de funcionamiento

```
                  Usuario
                      │
                      ▼
           Frontend (HTML, CSS, JS)
                      │
                Solicitudes HTTP
                      │
                      ▼
              Express (Backend)
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
 ChatService   IntentService   VisionService
        │             │             │
        └─────────────┼─────────────┘
                      ▼
               GeminiService
                      │
                      ▼
             Google Gemini API
```

---

# Estructura del Backend

## Controllers

Controlan la lógica de las solicitudes HTTP.

```
chatController.js
```

---

## Routes

Definen los endpoints del sistema.

```
chatRoutes.js
```

---

## Services

Contienen la lógica principal del chatbot.

```
chatService.js
detectorService.js
geminiService.js
intentService.js
visionService.js
```

---

## Data

Información utilizada por el asistente.

```
datos.json
tramites.json
```

---

# Instalación

## 1. Clonar el repositorio

```bash
git clone https://github.com/DonovanPeredo03/chatbot-tramites.git
```

Entrar al proyecto

```bash
cd chatbot-tramites
```

---

## 2. Instalar dependencias

```bash
cd backend
npm install
```

---

## 3. Configurar variables de entorno

Crear un archivo

```
.env
```

utilizando como referencia

```
.env.example
```

Ejemplo

```env
PORT=3000
GEMINI_API_KEY=TU_API_KEY
```

---

## 4. Ejecutar el servidor

```bash
node index.js
```

El backend iniciará en

```
http://localhost:3000
```

---

## 5. Ejecutar el Frontend

Abrir el archivo

```
frontend/index.html
```

utilizando **Live Server** o cualquier servidor estático.

---

# Variables de entorno

| Variable | Descripción |
|-----------|-------------|
| PORT | Puerto donde se ejecuta Express |
| GEMINI_API_KEY | API Key de Google Gemini |

---

# Capturas

## Pantalla principal

<img width="497" height="996" alt="image" src="https://github.com/user-attachments/assets/7be39e52-32ac-40f4-be0d-f55119ae10d2" />


```
docs/inicio.png
```

---

## Consulta de un trámite

<img width="525" height="1007" alt="image" src="https://github.com/user-attachments/assets/07533585-01c4-4b7e-a263-68fa69815db1" />


```
docs/chat.png
```

---

## Descarga de PDF

<img width="141" height="65" alt="image" src="https://github.com/user-attachments/assets/d2698a79-d4b4-4182-b6fb-92b9ca1637e0" />


```
docs/pdf.png
```

---

## Cambio de tema

<img width="57" height="42" alt="image" src="https://github.com/user-attachments/assets/0371f0ab-2f93-4d71-8903-dfdbd05ce190" />

<img width="516" height="1005" alt="image" src="https://github.com/user-attachments/assets/2f873dd1-09e3-442e-9eb2-faec679ececb" />


```
docs/tema-claro.png
```

---

# Mejoras futuras

- Completar el análisis inteligente de documentos PDF.
- Implementar autenticación de usuarios.
- Integrar una base de datos para almacenar conversaciones.
- Incorporar más trámites gubernamentales.
- Añadir soporte para múltiples idiomas.
- Mejorar la accesibilidad mediante reconocimiento de voz.
- Implementar carga de múltiples documentos.

---

# Autor

**Samuel Donovan Peredo Jiménez**

Estudiante de Ingeniería en Ciencias Computacionales

Universidad de Guadalajara

GitHub:

https://github.com/DonovanPeredo03

---


