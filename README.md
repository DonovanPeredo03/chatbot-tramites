# Asistente Inteligente de Trámites Gubernamentales

Un asistente virtual desarrollado con **Node.js**, **Express** y **Google Gemini AI** que ayuda a los ciudadanos a consultar información sobre trámites gubernamentales de forma rápida e intuitiva.

---

## Descripción

Este proyecto fue desarrollado como una aplicación web que permite a los usuarios realizar consultas sobre distintos trámites gubernamentales utilizando Inteligencia Artificial.

El sistema identifica la intención del usuario y genera respuestas apoyándose en una base de información local y en el modelo Gemini de Google.

Además, incorpora herramientas para mejorar la experiencia del usuario como:

- Conversión de texto a voz
- Exportación de conversaciones a PDF
- Historial de conversación
- Cambio entre modo claro y oscuro
- Interfaz responsiva

---

# Funcionalidades

- Consultas inteligentes mediante IA
- Integración con Google Gemini
- Detección automática de intención
- Historial de conversación
- Conversión de texto a voz
- Descarga de conversaciones en PDF
- Interfaz moderna
- Modo claro/oscuro
- Arquitectura cliente-servidor

---

# Tecnologías utilizadas

## Backend

- Node.js
- Express
- Google Gemini API
- Multer
- CORS
- Dotenv

## Frontend

- HTML5
- CSS3
- JavaScript

---

# Arquitectura del proyecto

```
chatbot-tramites

│

├── backend

│   ├── src

│   │   ├── controllers

│   │   ├── routes

│   │   ├── services

│   │   ├── middlewares

│   │   └── data

│   │

│   ├── uploads

│   ├── package.json

│   └── index.js

│

├── frontend

│   └── index.html

│

└── README.md
```

---

# ⚙Instalación

## 1 Clonar el repositorio

```bash
git clone https://github.com/DonovanPeredo03/chatbot-tramites.git
```

Entrar al proyecto

```bash
cd chatbot-tramites
```

---

## 2 Instalar dependencias

```bash
cd backend
npm install
```

---

## 3 Configurar variables de entorno

Crear un archivo

```
.env
```

Basándose en

```
.env.example
```

Ejemplo

```env
PORT=3000
GEMINI_API_KEY=TU_API_KEY
```

---

## 4 Iniciar servidor

```bash
node index.js
```

El servidor iniciará en

```
http://localhost:3000
```

---

## 5 Abrir el Frontend

Abrir

```
frontend/index.html
```

utilizando Live Server.

---

# Capturas

## Pantalla principal

<img width="495" height="995" alt="image" src="https://github.com/user-attachments/assets/a89bd4a3-2600-4f60-a555-12c7c3f4cf1a" />

```
docs/inicio.png
```

---

## Consulta de un trámite

<img width="511" height="1001" alt="image" src="https://github.com/user-attachments/assets/28789397-249f-4289-a951-09a2a2f6059d" />


```
docs/chat.png
```

---

## Exportación a PDF

<img width="358" height="88" alt="image" src="https://github.com/user-attachments/assets/f48ff44f-0b0d-46b4-bad6-58fae1253dae" />


```
docs/pdf.png
```

---

# Variables de entorno

| Variable | Descripción |
|-----------|-------------|
| PORT | Puerto del servidor |
| GEMINI_API_KEY | API Key de Google Gemini |

---

# Estructura del Backend

```
src/

controllers/

chatController.js

routes/

chatRoutes.js

services/

chatService.js

geminiService.js

intentService.js

detectorService.js

visionService.js

data/

tramites.json
datos.json
```

---

# Autor

**Samuel Donovan Peredo Jiménez**

Ingeniería en Ciencias Computacionales

Universidad de Guadalajara

GitHub:

https://github.com/DonovanPeredo03

---

#Licencia

Este proyecto está bajo la licencia MIT.
