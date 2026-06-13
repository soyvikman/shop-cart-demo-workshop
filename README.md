# Shop Cart Demo — Workshop Skills

> Demo interactivo para el taller **"Creación de Skills para Agentes de IA"**  
> Parte de **GDG Arequipa — Build with AI** 🚀

---

## ¿Qué es este proyecto?

Este repositorio contiene una aplicación de **carrito de compras** construida con **Next.js 14**, **React 18**, **TypeScript** y **Tailwind CSS**. Fue diseñada como una base práctica para enseñar cómo crear y configurar **skills personalizadas para agentes de IA** (como Claude, OpenCode, etc.).

La idea es simple: usar un proyecto real y funcional para demostrar cómo un agente puede entender el contexto del código, responder preguntas técnicas, ayudar a depurar y extender funcionalidades cuando tiene una **skill** bien definida.

---

## 🛠 Skill de ejemplo incluida

Dentro de la carpeta [`.agents/skills/sse/`](./.agents/skills/sse/) encontrarás una skill llamada **Senior Software Engineer** (`senior-swe`).

Esta skill le dice al agente:
- Que actúe como un ingeniero senior que construyó este proyecto.
- Que responda preguntas sobre el código con precisión y contexto.
- Que explique las decisiones de diseño, no solo el *qué*.
- Que siga los patrones ya establecidos (App Router, Context + useReducer, Tailwind, TypeScript).
- Que advierta si una solicitud aumenta la complejidad innecesariamente para una demo.

Es un ejemplo práctico de cómo una skill puede transformar la calidad de las respuestas de un agente al trabajar sobre un codebase específico.

---

## 🚀 Instalación y ejecución local

### 1. Clonar el repositorio

```bash
git clone https://github.com/soyvikman/shop-cart-demo-workshop.git
cd shop-cart-demo-workshop
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Correr en modo desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

### 4. Construir para producción (opcional)

```bash
npm run build
```

---

## 📁 Estructura del proyecto

```
shop-cart-demo-workshop/
├── .agents/
│   └── skills/
│       └── sse/          # Skill de ejemplo: Senior Software Engineer
├── app/                  # Rutas de Next.js (App Router)
├── components/           # Componentes React (ProductCard, CartItem, Navbar)
├── context/              # Contexto de React para el estado del carrito
├── lib/                  # Datos y utilidades
├── types/                # Tipos de TypeScript
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🎯 Objetivo del taller

Aprender a escribir, estructurar y desplegar **skills** que permitan a los agentes de IA trabajar de manera más efectiva sobre proyectos de código reales. Usaremos este carrito de compras como caso de estudio para crear skills que guíen, expliquen y mejoren la experiencia de desarrollo asistida por IA.

---

**Hecho con ❤️ para GDG Arequipa — Build with AI**
<!-- TODO: Agregar persistencia del carrito en localStorage -->
