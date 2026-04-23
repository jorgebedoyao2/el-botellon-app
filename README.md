# 💧 El Botellón - App de Logística y Pedidos

![Versión](https://img.shields.io/badge/Versión-1.0-blue)
![Estado](https://img.shields.io/badge/Estado-En_Producción-success)

Aplicación Web Progresiva (PWA) orientada a la venta y distribución de agua purificada en presentaciones de 20 Litros para el municipio de Ubaté, Cundinamarca (Colombia). 

El sistema elimina la fricción de los pedidos manuales por WhatsApp, automatizando la captura de datos y centralizando la operación logística en un ERP ligero basado en Google Sheets.

## 🚀 Enlaces a Producción
* **App del Cliente:** [el-botellon-app.vercel.app](https://el-botellon-app.vercel.app/)
* **Panel de Mando (Admin):** [el-botellon-app.vercel.app/admin.html](https://el-botellon-app.vercel.app/admin.html)

## ⚙️ Arquitectura del Sistema
El sistema utiliza una arquitectura **Low-Code / Serverless**:
* **Frontend (Interfaz de Usuario):** Construido con HTML5, CSS3 y Vanilla JavaScript. Diseño *Mobile-First* orientado a alta conversión.
* **Backend & Base de Datos:** Google Sheets actúa como motor de base de datos relacional para ventas.
* **Middleware (API):** Google Apps Script. Recibe peticiones asíncronas (`fetch` POST/GET) desde la app.
* **Despliegue (Hosting):** Vercel CI/CD.

## ✨ Características Principales
1. **Fricción Cero:** Formulario de pedido rápido (*Slide-up modal*) sin necesidad de registro previo.
2. **Motor de Horarios Inteligente:** Calcula automáticamente si el pedido se entrega hoy o el próximo día hábil, leyendo un array de festivos oficiales de Colombia.
3. **Panel de Repartidor en Tiempo Real:** Interfaz administrativa (`admin.html`) que lee la base de datos en tiempo real y permite cambiar estados (de "PENDIENTE" a "ENTREGADO") con un solo toque (Optimistic UI).

## 📊 Estructura de la Base de Datos
El sistema se conecta a una pestaña llamada `Ventas` con la siguiente estructura de columnas:
`Fecha` | `Nombre` | `WhatsApp` | `Cantidad` | `Barrio` | `Dirección` | `Estado` | `Fecha Asignada`

---
*Desarrollado para la automatización logística en Ubaté.*
