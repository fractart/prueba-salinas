<template>
    <div class="usuarios bg-light py-5">
      <div class="container">
        <h2 class="text-center mb-4">Lista de Usuarios</h2>
        <table class="table table-hover table-bordered table-striped mt-3" v-if="users.length > 0">
          <thead class="table-dark">
            <tr>
              <th>Foto</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Acciones</th>
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
              <td>
                <button class="btn btn-info btn-sm" @click="openModal(user)">Ver</button>
              </td>
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
  
        <!-- Modal -->
        <div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalLabel">Detalles del Usuario</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p><strong>Nombre:</strong> {{ selectedUser?.name?.first }} {{ selectedUser?.name?.last }}</p>
                <p><strong>Email:</strong> {{ selectedUser?.email }}</p>
                <p><strong>Teléfono:</strong> {{ selectedUser?.phone }}</p>
                <p><strong>Ciudad:</strong> {{ selectedUser?.location?.city }}</p>
                <p><strong>País:</strong> {{ selectedUser?.location?.country }}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [],
        selectedUser: null,
        currentPage: 1,
        totalPages: 1,
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
      openModal(user) {
        this.selectedUser = user;
        const modal = new bootstrap.Modal(document.getElementById("userModal"));
        modal.show();
      },
    },
    mounted() {
      this.fetchUsers(); // Carga inicial de usuarios
    },
  };
  </script>
  
  <style scoped>
  /* Estilo adicional para usuarios */
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
  </style>
  