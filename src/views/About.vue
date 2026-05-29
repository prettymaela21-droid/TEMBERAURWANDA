<script setup></script>

<template>
  <!-- About Hero Section -->
  <section
    class="relative min-h-screen bg-cover bg-center text-white"
    style="background-image: url('/src/assets/Rwanda.jpg');"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/70"></div>

    <!-- Content -->
    <div
      class="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center text-center"
    >
      <!-- Title -->
      <p
        class="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm uppercase tracking-widest border border-white/30 mb-6"
      >
        About Rwanda 🌍
      </p>

      <h1
        class="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
      >
        The Land of
        <span class="text-yellow-400">A Thousand Hills</span>
      </h1>

      <!-- Description -->
      <p
        class="max-w-3xl text-lg md:text-2xl text-gray-200 leading-relaxed mb-12"
      >
        Rwanda is one of Africa’s most beautiful and peaceful countries,
        known for its breathtaking hills, rich culture, wildlife,
        and clean modern cities. Discover unforgettable experiences,
        warm hospitality, and amazing adventures waiting for you ✨
      </p>

      <!-- Cards -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        <!-- Card 1 -->
        <div
          class="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:scale-105 transition duration-300 shadow-xl"
        >
          <div class="text-5xl mb-4">🏞️</div>
          <h2 class="text-2xl font-bold mb-3">Nature</h2>
          <p class="text-gray-200">
            Explore beautiful mountains, lakes, national parks,
            and breathtaking green landscapes.
          </p>
        </div>

        <!-- Card 2 -->
        <div
          class="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:scale-105 transition duration-300 shadow-xl"
        >
          <div class="text-5xl mb-4">🦍</div>
          <h2 class="text-2xl font-bold mb-3">Wildlife</h2>
          <p class="text-gray-200">
            Visit famous gorilla trekking destinations and discover
            Rwanda’s incredible wildlife experience.
          </p>
        </div>

        <!-- Card 3 -->
        <div
          class="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:scale-105 transition duration-300 shadow-xl"
        >
          <div class="text-5xl mb-4">🏙️</div>
          <h2 class="text-2xl font-bold mb-3">Modern Kigali</h2>
          <p class="text-gray-200">
            Experience one of Africa’s cleanest and fastest-growing cities,
            full of innovation and culture.
          </p>
        </div>
      </div>

      <!-- Buttons -->
      <div class="mt-14 flex flex-col sm:flex-row gap-5">
        <button
          class="px-8 py-4 rounded-full bg-yellow-400 text-black font-semibold text-lg shadow-lg hover:scale-110 hover:bg-yellow-300 transition duration-300"
        >
          Learn More ✨
        </button>

        <button
          class="px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-lg bg-white/10 backdrop-blur-md hover:bg-white hover:text-black hover:scale-110 transition duration-300"
        >
          Explore Places 🚀
        </button>
      </div>
    </div>
  </section>
</template>