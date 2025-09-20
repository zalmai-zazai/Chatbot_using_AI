---

### 2️⃣ Make it downloadable

If you want to create it directly from a terminal (Linux/Mac/Windows WSL), run:

```bash
cat <<EOL > README.md
# 🤖 AI Chatbot (Full-Stack App)

🚀 Live Demo: [Chatbot AI](https://chatbootai.netlify.app/)

This is a full-stack **AI-powered chatbot** application built with **React + TypeScript** (frontend) and **Node.js + Express + TypeScript** (backend), integrated with **OpenAI GPT models**. The chatbot allows real-time conversational interaction with an elegant, responsive UI.

---

## ✨ Features

- 🌐 **Frontend (React + Vite + TailwindCSS)**

  - Responsive & mobile-friendly chat UI
  - User messages styled in blue bubbles (right side)
  - Bot responses styled in gray bubbles (left side)
  - Smooth "Loading..." indicator while waiting for responses
  - Attractive design with gradient backgrounds and shadows

- 🛠 **Backend (Node.js + Express + TypeScript)**

  - REST API built with Express
  - Input validation using **Zod**
  - Chat conversation handling with unique \`conversationId\`
  - Integrated with **OpenAI API**
  - Secure environment variable handling with **dotenv**
  - Cross-Origin support using **CORS**

- ☁️ **Deployment**
  - **Frontend** hosted on [Netlify](https://www.netlify.com/)
  - **Backend** hosted on [Render](https://render.com/)
  - Fully connected and working end-to-end

---

## 🧑‍💻 Skills Gained

By building and deploying this project, I strengthened my skills in:

### Frontend

- ⚛️ **React** (functional components, hooks)
- 🔷 **TypeScript** (type safety, props & state typing)
- 🎨 **TailwindCSS** (responsive design, styling)
- 🖼 **UI/UX Design** (chat interface, responsive layouts)
- 🔄 **API Integration** (fetching data from backend)

### Backend

- 🟢 **Node.js** + **Express**
- 🔒 **CORS setup** for secure frontend-backend communication
- 📦 **Zod** schema validation for inputs
- 🔑 **dotenv** for managing environment variables
- 🤖 **OpenAI API integration**

### DevOps & Deployment

- 🌍 Hosting frontend on **Netlify**
- ☁️ Hosting backend on **Render**
- 📂 GitHub project setup & version control
- 🛠 Managing \`gitignore\` and multiple \`node_modules\`
- 🔄 Connecting full-stack app in production

---

## 🛠 Tech Stack

- **Frontend:** React, TypeScript, TailwindCSS, Vite
- **Backend:** Node.js, Express, TypeScript, Zod
- **AI:** OpenAI GPT models
- **Deployment:** Netlify (frontend), Render (backend)
- **Other Tools:** UUID, dotenv, cors, Postman (testing)

---

## ⚡ Getting Started (Local Setup)

### Prerequisites

- Install [Bun](https://bun.sh/) or Node.js
- Create an [OpenAI API Key](https://platform.openai.com/)

### 1. Clone Repository

\`\`\`bash
git clone https://github.com/your-username/Chatbot_AI.git
cd Chatbot_AI
\`\`\`

### 2. Install Dependencies

For **frontend**:
\`\`\`bash
cd packages/Client
bun install
\`\`\`

For **backend**:
\`\`\`bash
cd ../Server
bun install
\`\`\`

### 3. Setup Environment Variables

Create a \`.env\` file in the **Server** folder:
\`\`\`env
OPENAI_API_KEY=your_openai_api_key_here
PORT=3000
\`\`\`

### 4. Run the App

Start backend:
\`\`\`bash
bun run dev
\`\`\`

Start frontend:
\`\`\`bash
bun run dev
\`\`\`

- Frontend → \`http://localhost:5173/\`
- Backend → \`http://localhost:3000/\`

---

## 📸 Screenshots

### 💬 Chat Interface

![Chatbot Demo](https://i.ibb.co/fQXp5wp/chatbot-preview.png)

---

## 🙌 Author

This AI-powered chatbot was built with ❤️ by **Zalmai Zazai**.

🔗 Live App: [https://chatbootai.netlify.app/](https://chatbootai.netlify.app/)
EOL
