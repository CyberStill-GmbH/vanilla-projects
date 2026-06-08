/* ============================================================
   data.js — Datos simulados (Mock Data) para la UI
   ============================================================ */

const statsData = [
  { id: 1, label: "Miembros Activos", value: "42", trend: "+3 este mes", color: "blue", trendType: "up" },
  { id: 2, label: "Eventos Realizados", value: "12", trend: "+2 este mes", color: "green", trendType: "up" },
  { id: 3, label: "Vulnerabilidades Resueltas", value: "8", trend: "-1 esta semana", color: "red", trendType: "down" },
  { id: 4, label: "Puntos CTF", value: "1250", trend: "Top 5 local", color: "gold", trendType: "up" }
];

const tasksData = [
  { 
    id: 101, 
    title: "Finalizar maquetado del frontend", 
    status: "pendiente", 
    priority: "alta", 
    dueDate: "Hoy", 
    assignee: "Tú" 
  },
  { 
    id: 102, 
    title: "Investigar vulnerabilidad en WP-file-manager", 
    status: "progreso", 
    priority: "alta", 
    dueDate: "Mañana", 
    assignee: "Bayron" 
  },
  { 
    id: 103, 
    title: "Configurar React Router y Vite", 
    status: "revision", 
    priority: "media", 
    dueDate: "26/04", 
    assignee: "Tú" 
  },
  { 
    id: 104, 
    title: "Revisar optimización de inputs en Python (sys.stdin)", 
    status: "pendiente", 
    priority: "baja", 
    dueDate: "28/04", 
    assignee: "Bayron" 
  }
];

const eventsData = [
  { 
    id: 201, 
    name: "Taller de Ciberseguridad", 
    type: "taller", 
    date: "24/04/2026 - 15:00", 
    location: "Laboratorio CTIC" 
  },
  { 
    id: 202, 
    name: "Hackathon Interna", 
    type: "hackathon", 
    date: "30/04/2026 - 09:00", 
    location: "Auditorio FIC" 
  },
  { 
    id: 203, 
    name: "Reunión de Directiva", 
    type: "reunion", 
    date: "02/05/2026 - 18:00", 
    location: "Google Meet" 
  }
];