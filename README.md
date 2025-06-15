# 💬 Saylo — Real-time Chat & Language Exchange Platform

A modern, full-stack chat application that brings people together through real-time messaging, video calls, and immersive language exchange experiences. Built with cutting-edge technologies and designed for global communities.

---

## ✨ What Makes Saylo Special

Saylo isn't just another chat app—it's a cultural bridge that connects people worldwide through seamless communication and authentic language exchange experiences.

### 🎯 Core Features

**💬 Real-time Messaging**
- Instant message delivery with typing indicators
- Emoji reactions and threaded conversations
- Message status tracking (sent, delivered, read)
- Rich media support

**📹 HD Video Calling**
- Crystal-clear 1-on-1 video calls
- Screen sharing capabilities
- Call recording functionality
- Adaptive bitrate for optimal quality

**🌍 Language Exchange Hub**
- Match with native speakers worldwide
- 32+ stunning UI themes representing different cultures
- Language difficulty levels and progress tracking
- Cultural conversation starters and prompts

**🔒 Enterprise-Grade Security**
- JWT-based authentication with refresh tokens
- End-to-end message encryption
- Rate limiting and spam protection
- GDPR compliant data handling

**⚡ Performance Optimized**
- Sub-100ms message delivery
- Lazy loading and virtualized lists
- Offline message queuing
- Progressive Web App (PWA) ready

---

## 🏗️ Architecture

```
graph TB
    A[React Frontend] --> B[Express API]
    B --> C[MongoDB]
    B --> D[Stream Chat API]
    A --> E[Stream Video SDK]
    B --> F[JWT Auth]
    A --> G[Zustand Store]
```

### Tech Stack Deep Dive

| Category | Technology | Purpose |
|----------|------------|---------|
| **Frontend** | React 18 + Vite | Lightning-fast development and builds |
| **Styling** | TailwindCSS + DaisyUI | Utility-first CSS with pre-built components |
| **State Management** | Zustand | Lightweight, no-boilerplate state |
| **Data Fetching** | TanStack Query | Powerful async state management |
| **Backend** | Node.js + Express | Scalable REST API server |
| **Database** | MongoDB + Mongoose | Flexible document storage |
| **Real-time** | Stream Chat API | Production-ready messaging infrastructure |
| **Authentication** | JWT + bcrypt | Secure token-based auth |



## ⚙️Setting up environmenal variables

```
frontend/ .env

VITE_STREAM_API_KEY=
```


```
backend/ .env

PORT=
MONGO_URI=
STREAM_API_KEY=
STREAM_API_SECRET=fw
JWT_SECRET_KEY=
NODE_ENV=development
```
![saylo](./frontend/public/saylo.png)
