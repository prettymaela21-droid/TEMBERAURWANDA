<script setup>
import { ref, computed } from "vue";

const language = ref("rw");

const translations = {
  rw: {
    title: "Twandikire",
    text: "Twishimiye kwakira ubutumwa bwawe 😊",
    name: "Andika amazina yawe",
    email: "Andika email yawe",
    message: "Andika ubutumwa bwawe",
    button: "Ohereza",
  },

  en: {
    title: "Contact Us",
    text: "We are happy to receive your message 😊",
    name: "Enter your name",
    email: "Enter your email",
    message: "Write your message",
    button: "Send Message",
  },
};

const content = computed(() => translations[language.value]);
</script>

<template>
  <section
    class="min-h-screen bg-cover bg-center flex items-center justify-center relative"
    style="background-image: url('/src/assets/Rwanda.jpg');"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/70"></div>

    <!-- Contact Box -->
    <div
      class="relative z-10 bg-white/10 backdrop-blur-lg p-10 rounded-3xl w-[90%] max-w-2xl text-white shadow-2xl"
    >

      <!-- Language Dropdown -->
      <div class="flex justify-end mb-6">

        <select
          v-model="language"
          class="bg-green-700 text-white px-4 py-2 rounded-full outline-none cursor-pointer hover:text-black transition"
        >
          <option value="rw">Kinyarwanda 🇷🇼</option>
          <option value="en">English 🇬🇧</option>
        </select>

      </div>

      <!-- Heading -->
      <h1 class="text-4xl font-bold text-yellow-400 mb-4">
        {{ content.title }}
      </h1>

      <p class="text-gray-200 mb-8">
        {{ content.text }}
      </p>

      <!-- Form -->
      <form class="space-y-5">

        <input
          type="text"
          :placeholder="content.name"
          class="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none placeholder-gray-300"
        />

        <input
          type="email"
          :placeholder="content.email"
          class="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none placeholder-gray-300"
        />

        <textarea
          rows="5"
          :placeholder="content.message"
          class="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none placeholder-gray-300"
        ></textarea>

        <button
          class="w-full py-4 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
        >
          {{ content.button }}
        </button>

      </form>
    </div>
  </section>
</template>