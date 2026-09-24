# Government Services AI Assistant

An AI-powered virtual assistant developed with **Node.js**, **Express**, and **Google Gemini AI** to help users obtain information about government procedures in Mexico through natural language conversations.

The application combines artificial intelligence, a RESTful backend, accessibility features, and a responsive web interface to provide an intuitive user experience.

---

## Features

- AI-powered conversations using Google Gemini
- Natural language understanding
- Government procedures consultation
- Intelligent intent detection
- Conversation history
- PDF export
- Text-to-Speech support
- Dark and Light themes
- Responsive user interface
- Quick access menu for government services

---

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | HTML5, CSS3, JavaScript |
| **Backend** | Node.js, Express.js |
| **Artificial Intelligence** | Google Gemini API |
| **File Upload** | Multer |
| **Configuration** | dotenv |
| **Accessibility** | Speech Synthesis API |
| **Utilities** | CORS |

---

## Technical Highlights

- Integrated Google Gemini API for AI-powered conversations.
- Designed a modular backend architecture using Express.js.
- Implemented intent detection for more accurate responses.
- Added conversation history management.
- Implemented PDF export for AI-generated responses.
- Integrated browser Text-to-Speech functionality.
- Developed a responsive interface with dark and light themes.
- Designed the application following a service-oriented architecture.

---

## Architecture

```text
                 User
                   │
                   ▼
        HTML • CSS • JavaScript
                   │
             HTTP Requests
                   │
                   ▼
             Express Backend
                   │
      ┌────────────┼────────────┐
      ▼            ▼            ▼
 Chat Service  Intent Service  Vision Service
      │            │            │
      └────────────┼────────────┘
                   ▼
             Gemini Service
                   │
                   ▼
          Google Gemini API
```

---

## Project Structure

```text
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

## Screenshots

### Home

<img width="497" height="996" alt="image" src="https://github.com/user-attachments/assets/7be39e52-32ac-40f4-be0d-f55119ae10d2" />

AI assistant home interface.

---

### Chat

<img width="525" height="1007" alt="image" src="https://github.com/user-attachments/assets/07533585-01c4-4b7e-a263-68fa69815db1" />

Conversation with the AI assistant about government procedures.

---

### PDF Export

<img width="141" height="65" alt="image" src="https://github.com/user-attachments/assets/d2698a79-d4b4-4182-b6fb-92b9ca1637e0" />

Export AI-generated responses as PDF documents.

---

### Light Theme

<img width="57" height="42" alt="image" src="https://github.com/user-attachments/assets/0371f0ab-2f93-4d71-8903-dfdbd05ce190" /> <img width="516" height="1005" alt="image" src="https://github.com/user-attachments/assets/2f873dd1-09e3-442e-9eb2-faec679ececb" />

Responsive interface with Light and Dark mode support.

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/DonovanPeredo03/chatbot-tramites.git
cd chatbot-tramites
```

### Install Dependencies

```bash
cd backend
npm install
```

### Configure Environment Variables

Create a `.env` file using `.env.example` as reference.

```env
PORT=3000
GEMINI_API_KEY=YOUR_API_KEY
```

### Start the Backend

```bash
node index.js
```

The server will run at:

```
http://localhost:3000
```

### Run the Frontend

Open:

```
frontend/index.html
```

using **Live Server** or any static web server.

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | Express server port |
| GEMINI_API_KEY | Google Gemini API Key |

---

## Future Improvements

- Intelligent PDF document analysis
- User authentication
- Database integration for conversation history
- Voice recognition
- Multi-language support
- Multi-document processing
- Vector database integration for Retrieval-Augmented Generation (RAG)

---

## Authors

**Samuel Donovan Peredo Jiménez**

**Marcos Esquivel Galvan**

Computer Science Student  
University of Guadalajara (UDG)

**Backend Development • Artificial Intelligence • Data Intelligence**

- GitHub: https://github.com/DonovanPeredo03
- LinkedIn: https://www.linkedin.com/in/samuel-donovan-peredo-jimenez-16275b385/

- GitHub: https://github.com/MarcosE934
