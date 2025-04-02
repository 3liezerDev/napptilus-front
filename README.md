# 📱 Napptilus Mobile Market

Este es un proyecto profesional de tienda online de smartphones desarrollado como prueba técnica. Incluye funcionalidades completas de visualización, selección y compra de dispositivos móviles con una experiencia de usuario moderna y optimizada.

---

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura limpia, modular y escalable basada en el enfoque **base-feature**:

src/
├── components/          # Componentes reutilizables globales (Button, Logo, etc.)
├── features/            # Módulos por dominio (phones, cart, filters, etc.)
│   ├── phones/
│   │   ├── components/  # Componentes específicos de teléfonos (PhoneCard, PhoneOptions, etc.)
│   │   ├── pages/       # Páginas como PhonesPage, PhoneDetailPage
│   │   └── hooks/       # Hooks personalizados (usePhones, usePhoneById)
│   └── cart/            # Lógica del carrito (Contexto global, vista del carrito)
├── contexts/            # Contextos globales (CartContext)
├── services/            # Lógica de acceso a datos / APIs (phonesApi.js)
├── router/              # Definición de rutas con React Router DOM
├── styles/              # Estilos globales (SCSS, variables, mixins)
└── utils/               # Utilidades (secureUrl, helpers)

---

## 🚀 Tecnologías Utilizadas

- **React** + **Vite**
- **React Router DOM** para el enrutado de páginas
- **React Query** para la gestión y caché de datos
- **SCSS modular** para estilos profesionales y escalables
- **Framer Motion** para animaciones fluidas y modernas
- **Context API** + `localStorage` para mantener el carrito persistente

---

## 🔧 Principales Funcionalidades

### 🔍 Catálogo de Productos

- Listado de teléfonos con datos obtenidos desde una API REST
- Filtro en tiempo real por nombre o marca con debouncing
- Animaciones de entrada para la experiencia de usuario

### 📄 Detalle del Producto

- Vista detallada de un smartphone con selección dinámica de:
  - Color (actualiza imagen en tiempo real)
  - Capacidad de almacenamiento (actualiza precio)
- Botón "Añadir al carrito" habilitado solo cuando se eligen ambas opciones
- Carrusel de productos similares con animación horizontal

### 🛒 Carrito de Compras

- Sección accesible desde el Navbar
- Visualización agrupada de productos según id, color y almacenamiento
- Suma automática de cantidades si coinciden las opciones
- Posibilidad de eliminar un ítem completo o por cantidad
- Visualización del total de productos y precio final
- Persistencia con `localStorage` incluso tras cerrar el navegador

### 💎 Animaciones

- Todas las vistas y componentes clave tienen animaciones suaves:
  - Entrada de productos
  - Cambio de imagen al seleccionar color
  - Cambio de precio
  - Hover en cards
  - Renderizado de ítems del carrito

---

## ✅ Optimizaciones Clave

- **Uso de `React Query`** para cacheo automático de datos y mejoras de rendimiento
- **Debounce** para evitar peticiones innecesarias al buscar
- **Context API + Local Storage** para persistencia y sincronización global del carrito
- **Animaciones desacopladas** y reutilizables desde archivo `fadeVariants`
- **Componentización limpia** y reutilizable bajo estructura base-feature

---

## 🌐 Despliegue

Este proyecto ha sido desplegado con:

- **Frontend**: [Vercel](https://vercel.com)
- **Backend/API**: [Render](https://render.com)

🔗 [Ver demo en vivo](https://napptilus-front.vercel.app)

---

## 📦 Instalación y Desarrollo

npm install
npm run dev


---
## 🧪 Pendiente / Futuras mejoras

- **Checkout y pasarela de pago
- **Autenticación de usuarios
- **Control de stock por opción seleccionada
- **Tests unitarios y de integración (Jest, React Testing Library)
- **Modo oscuro / accesibilidad