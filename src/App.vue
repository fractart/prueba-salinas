<template>
  <div id="app">
    <!-- Barra de navegación -->
    <nav class="navbar navbar-dark bg-dark">
  <div class="container">
    <ul class="navbar-nav mx-auto d-flex flex-row">
      <li class="nav-item px-3">
        <router-link to="/" class="nav-link" active-class="active">Inicio</router-link>
      </li>
      <li class="nav-item px-3">
        <router-link to="/carousel" class="nav-link" active-class="active">Carousel</router-link>
      </li>
      <li class="nav-item px-3">
        <router-link to="/empleados" class="nav-link" active-class="active">Empleados</router-link>
      </li>
    </ul>
  </div>
</nav>

    <!-- Vista del router -->
    <div class="container my-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Fuente adicional (opcional) */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}

/* Clases adicionales para personalizar enlaces activos */
.nav-link.active {
  font-weight: bold;
  border-bottom: 2px solid #FFFFFF;
}
</style>
