const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const contactRouter = require('./routes/contact');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [
    process.env.CLIENT_URL,
    'http://localhost:5173',
    'http://localhost:4173',
    /\.vercel\.app$/,
  ].filter(Boolean),
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // ── Keep-alive ping ──────────────────────────────────────────────────────
  // Render free tier sleeps after 15 min of inactivity.
  // Ping self every 10 minutes to stay awake → no cold start delay.
  const SELF_URL = process.env.RENDER_EXTERNAL_URL || `http://localhost:${PORT}`;

  setInterval(() => {
    const url = new URL('/api/health', SELF_URL);
    const client = url.protocol === 'https:' ? require('https') : http;

    const req = client.get(url.toString(), (res) => {
      console.log(`[keep-alive] ping → ${res.statusCode}`);
    });

    req.on('error', (err) => {
      console.error('[keep-alive] ping failed:', err.message);
    });

    req.end();
  }, 10 * 60 * 1000); // every 10 minutes
});
