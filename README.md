# Prueba-Salinas

Este proyecto es una prueba técnica desarrollada en Vue.js, siguiendo los requerimientos especificados. A continuación, se detallan las características implementadas, la estructura del proyecto y los pasos para ejecutar la aplicación.

---

## **Contenido del Proyecto**

### **Rutas del Menú de Navegación**

1. **Inicio**:
   - Incluye un encabezado con el nombre del desarrollador y una breve descripción.
   - Sección de Gustos e Intereses que contiene:
     - Título y párrafo descriptivo.
     - Tabla con nombres de usuarios obtenidos desde la API pública [Random User API](https://randomuser.me/).
     - Imágenes o íconos que representan los intereses del desarrollador.
     - Formulario de contacto con validación y notificación de éxito al enviarse correctamente.

2. **Carousel**:
   - Página que muestra un carrusel dinámico con imágenes o contenido multimedia.

3. **Empleados**:
   - Página que muestra una lista de empleados obtenida de la API [Random User API](https://randomuser.me/).
   - Incluye tabla con datos como nombre, correo electrónico, teléfono, etc.
   - Botones para paginación y detalles de empleados.

---

## **Requerimientos del Sistema**

- Node.js (versión 14 o superior)
- npm (gestor de paquetes de Node.js)

---

## **Comandos para Ejecutar el Proyecto**

### 1. **Clonar el Repositorio**
git clone https://github.com/tu-usuario/prueba-salinas.git cd prueba-salinas

### 2. **Instalar Dependencias**
Ejecuta el siguiente comando para instalar las dependencias necesarias del proyecto:
npm install

### 3. **Iniciar el Servidor de Desarrollo**
Para ejecutar el proyecto en un entorno de desarrollo:
npm run serve

Esto iniciará el servidor de desarrollo. La aplicación estará disponible en:
http://localhost:8080

### 4. **Construir para Producción**
Si deseas crear una versión optimizada del proyecto para producción:
npm run build

Los archivos optimizados se generarán en la carpeta `/dist`.

---

## **Características del Proyecto**

### **Inicio**
- **Encabezado**: Información personal breve.
- **Sección Gustos e Intereses**:
  - Descripción de intereses con íconos e imágenes.
  - Solicitud a la API de usuarios para mostrar una tabla con nombres.
- **Formulario de contacto**:
  - Validación de campos (nombre, email, mensaje).
  - Notificación de envío exitoso con SweetAlert2.

### **Carousel**
- Componente de carrusel con imágenes dinámicas.

### **Empleados**
- Tabla con detalles de empleados obtenidos desde la API.
- Paginación funcional.
- Detalle de empleados en un modal.

---

## **API Usada**

El proyecto utiliza la API pública [Random User API](https://randomuser.me/) para obtener datos de usuarios y empleados. Ejemplo de la solicitud usada:

```javascript
fetch("https://randomuser.me/api/?results=10")
  .then(response => response.json())
  .then(data => console.log(data));

Dependencias Principales
Vue.js: Framework principal.
Bootstrap: Para diseño responsivo.
SweetAlert2: Para notificaciones.

Autor
BRANDON DANJAIR MONORY RUIZ
