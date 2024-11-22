<template>
  <div class="usuarios bg-light py-5">
    <div class="container">
      <h2 class="text-center mb-4">Lista de Empleados</h2>
      <table class="table table-hover table-bordered table-striped mt-3" v-if="users.length > 0">
        <thead class="table-dark text-center">
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.login.uuid">
            <td>
              <img :src="user.picture.thumbnail" :alt="user.name.first" class="rounded-circle" />
            </td>
            <td>{{ user.name.first }} {{ user.name.last }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else class="text-center">
        <p class="text-muted">Cargando usuarios...</p>
      </div>

      <!-- Paginación -->
      <div class="d-flex justify-content-between align-items-center mt-4">
        <button
          class="btn btn-secondary"
          :disabled="currentPage === 1"
          @click="changePage(currentPage - 1)"
        >
          Anterior
        </button>
        <span class="text-muted">Página {{ currentPage }} de {{ totalPages }}</span>
        <button
          class="btn btn-secondary"
          :disabled="currentPage === totalPages"
          @click="changePage(currentPage + 1)"
        >
          Siguiente
        </button>
      </div>

      <!-- Formulario de Contacto -->
      <div class="mt-5">
        <h3 class="text-center mb-3">Formulario de Contacto</h3>
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              class="form-control"
              :class="{ 'is-invalid': errors.name }"
            />
            <div class="invalid-feedback">{{ errors.name }}</div>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="form-control"
              :class="{ 'is-invalid': errors.email }"
            />
            <div class="invalid-feedback">{{ errors.email }}</div>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Mensaje</label>
            <textarea
              id="message"
              v-model="form.message"
              class="form-control"
              rows="4"
              :class="{ 'is-invalid': errors.message }"
            ></textarea>
            <div class="invalid-feedback">{{ errors.message }}</div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      users: [],
      selectedUser: null,
      currentPage: 1,
      totalPages: 1,
      form: {
        name: "",
        email: "",
        message: "",
      },
      errors: {},
    };
  },
  methods: {
    async fetchUsers(page = 1) {
      try {
        const response = await fetch(`https://randomuser.me/api/?results=5&page=${page}`);
        const data = await response.json();
        this.users = data.results;
        this.currentPage = data.info.page;
        this.totalPages = Math.ceil(data.info.results / 5); // Ajusta según la lógica de la API.
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.fetchUsers(page);
      }
    },
    validateForm() {
      this.errors = {};
      if (!this.form.name.trim()) {
        this.errors.name = "El nombre es obligatorio.";
      }
      if (!this.form.email.trim()) {
        this.errors.email = "El correo electrónico es obligatorio.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.errors.email = "El correo electrónico no es válido.";
      }
      if (!this.form.message.trim()) {
        this.errors.message = "El mensaje es obligatorio.";
      }
      return Object.keys(this.errors).length === 0;
    },
    handleSubmit() {
  if (this.validateForm()) {
    Swal.fire({
      icon: "success",
      title: "¡Registro Exitoso!",
      text: "Tu formulario ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.",
      imageAlt: "Registro Exitoso",
      background: "#1e1e2f", // Fondo oscuro
      color: "#ffffff", // Texto blanco
      confirmButtonColor: "#4caf50", // Botón verde profesional
    });
    // Restablecer el formulario
    this.form.name = "";
    this.form.email = "";
    this.form.message = "";
  } else {
    Swal.fire({
      icon: "error",
      title: "Error en el formulario",
      text: "Por favor corrige los campos marcados antes de enviar.",
      background: "#1e1e2f", // Fondo oscuro
      color: "#ffffff", // Texto blanco
      confirmButtonColor: "#e74c3c", // Botón rojo
    });
  }
},
  },
  mounted() {
    this.fetchUsers(); // Carga inicial de usuarios
  },
};
</script>

<style scoped>
.usuarios {
  min-height: 100vh;
}
.table-hover tbody tr:hover {
  background-color: #f8f9fa;
}
img {
  width: 50px;
  height: 50px;
}
.modal-content {
  border-radius: 10px;
  overflow: hidden;
}
.is-invalid {
  border-color: #dc3545;
}
.invalid-feedback {
  display: block;
}
</style>
