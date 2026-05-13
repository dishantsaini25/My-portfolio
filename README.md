# Dishant Saini — Portfolio

A professional MERN Full Stack Developer portfolio with a working contact form powered by Nodemailer (Gmail) + Resend fallback.

## 🚀 Tech Stack

- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Email:** Nodemailer (Gmail) with Resend as fallback

---

## 📁 Project Structure

```
my-portfolio/
├── src/                  # React frontend
├── server/               # Express backend
│   ├── routes/
│   ├── services/
│   ├── index.js
│   └── .env.example      # Copy to .env and fill values
├── render.yaml           # Render deployment config
└── vite.config.js
```

---

## 🛠️ Local Development

### 1. Backend
```bash
cd server
cp .env.example .env     # Fill in your credentials
npm install
node index.js            # Runs on http://localhost:5000
```

### 2. Frontend
```bash
# In root folder
npm install
npm run dev              # Runs on http://localhost:5173
```

Vite automatically proxies `/api` → `http://localhost:5000` in dev.

---

## ☁️ Deployment

### Backend → Render (Free)

1. Go to [render.com](https://render.com) → New → Web Service
2. Connect your GitHub repo: `dishantsaini25/My-portfolio`
3. Settings:
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `node index.js`
4. Add Environment Variables:
   | Key | Value |
   |-----|-------|
   | `GMAIL_USER` | `sainidishu2002@gmail.com` |
   | `GMAIL_APP_PASSWORD` | your 16-char app password |
   | `RESEND_API_KEY` | your Resend API key |
   | `CLIENT_URL` | your Vercel frontend URL |
5. Deploy → Copy the URL (e.g. `https://portfolio-backend-xxxx.onrender.com`)

### Frontend → Vercel

1. Go to [vercel.com](https://vercel.com) → New Project
2. Import `dishantsaini25/My-portfolio`
3. Add Environment Variable:
   | Key | Value |
   |-----|-------|
   | `VITE_API_URL` | your Render backend URL from above |
4. Deploy ✅

---

## 📧 Contact Form Flow

```
User submits form
      ↓
Frontend → POST /api/contact (Render backend)
      ↓
Try Nodemailer (Gmail)
      ↓ (if fails)
Fallback to Resend API
      ↓
You get email + User gets auto-reply
```
