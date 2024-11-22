<template>
    <div class="intereses bg-dark text-light py-5">
      <div class="container">
        <h2 class="text-center mb-4">Mis Gustos e Intereses</h2>
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <!-- Tecnología -->
            <div class="carousel-item active">
              <img
                src="https://images.pexels.com/photos/3861955/pexels-photo-3861955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                class="d-block w-100"
                alt="Tecnología"
              />
              <div class="carousel-caption">
                <h5 class="bg-dark rounded py-1 px-3 d-inline-block">Tecnología</h5>
              </div>
            </div>
            <!-- Naturaleza -->
            <div class="carousel-item">
              <img
                src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                class="d-block w-100"
                alt="Naturaleza"
              />
              <div class="carousel-caption">
                <h5 class="bg-dark rounded py-1 px-3 d-inline-block">Naturaleza</h5>
              </div>
            </div>
            <!-- Cine -->
            <div class="carousel-item">
              <img
                src="https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                class="d-block w-100"
                alt="Cine"
              />
              <div class="carousel-caption">
                <h5 class="bg-dark rounded py-1 px-3 d-inline-block">Cine</h5>
              </div>
            </div>
          </div>
          <!-- Controles del Carrusel -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Carousel",
  };
  </script>
  
  <style scoped>
  /* Estilo general */
  .intereses {
    background-color: #212529;
    color: #f8f9fa;
  }
  .carousel-caption {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
  }
  .carousel img {
    object-fit: cover;
    height: 500px;
  }
  @media (max-width: 768px) {
    .carousel img {
      height: 300px;
    }
  }
  </style>
  