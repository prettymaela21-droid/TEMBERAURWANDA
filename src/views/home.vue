<script setup></script>

<template>
  <!-- Hero Section -->
  <section
    class="relative h-screen bg-cover bg-center flex items-center justify-center"
    style="background-image: url('/src/assets/kigali.jpg');"
  >
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- Content -->
    <div
      class="relative z-10 text-center px-6 max-w-3xl animate-fade"
    >
      <!-- Small Tag -->
      <p
        class="inline-block px-4 py-2 mb-5 rounded-full bg-white/20 backdrop-blur-md text-sm tracking-widest uppercase border border-white/30"
      >
        Explore Rwanda ✨
      </p>

      <!-- Main Heading -->
      <h1
        class="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
      >
        Discover the Beauty of
        <span class="text-yellow-400">Kigali</span>
      </h1>

      <!-- Description -->
      <p
        class="text-lg md:text-2xl text-gray-200 mb-10 leading-relaxed"
      >
        Experience breathtaking landscapes, vibrant culture,
        and unforgettable adventures in the heart of Africa 🌍
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-5 justify-center">
        
        <!-- Primary Button -->
        <button
          class="px-8 py-4 rounded-full bg-yellow-400 text-black font-semibold text-lg shadow-lg hover:scale-110 hover:bg-yellow-300 transition duration-300"
        >
          Explore Now 🚀
        </button>

        <!-- Secondary Button -->
        <button
          class="px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-lg backdrop-blur-md bg-white/10 hover:bg-white hover:text-black hover:scale-110 transition duration-300"
        >
          Watch Video ▶
        </button>

      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade {
  animation: fadeIn 1.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>