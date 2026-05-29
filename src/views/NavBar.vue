<template>
  <nav
    class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg sticky top-0 z-50"
  >
    <!-- Logo -->
    <div class="flex items-center gap-3">
      <img
        src="../assets/visit rwanda.png"
        alt="logo"
        class="h-12 w-auto"
      />

      <h1 class="text-2xl font-extrabold text-yellow-300">
        Visit Rwanda
      </h1>
    </div>

    <!-- Navigation -->
    <ul class="flex items-center gap-8 text-sm font-semibold">

      <!-- Home -->
      <li>
        <RouterLink
          to="/"
          class="hover:text-yellow-300 transition duration-300"
        >
          Home
        </RouterLink>
      </li>

      <!-- About -->
      <li>
        <RouterLink
          to="/about"
          class="hover:text-yellow-300 transition duration-300"
        >
          About
        </RouterLink>
      </li>

      <!-- Services -->
      <li>
        <RouterLink
          to="/service"
          class="hover:text-yellow-300 transition duration-300"
        >
          Services
        </RouterLink>
      </li>

      <!-- Gallery Dropdown -->
      <li class="relative group">
        <div
          class="hover:text-yellow-300 flex items-center gap-1 cursor-pointer transition duration-300"
        >
          Gallery
          <span class="text-xs">▼</span>
        </div>

        <ul
          class="absolute left-0 mt-3 w-40 bg-green-700 rounded-xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
        >
          <li>
            <RouterLink
              to="/photo"
              class="block px-4 py-3 hover:bg-yellow-400 hover:text-black transition"
            >
              Photo
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/video"
              class="block px-4 py-3 hover:bg-yellow-400 hover:text-black transition"
            >
              Video
            </RouterLink>
          </li>
        </ul>
      </li>

      <!-- Destination Dropdown -->
      <li class="relative group">
        <div
          class="hover:text-yellow-300 flex items-center gap-1 cursor-pointer transition duration-300"
        >
          Destination
          <span class="text-xs">▼</span>
        </div>

        <ul
          class="absolute left-0 mt-3 w-44 bg-green-700 rounded-xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
        >
          <li>
            <RouterLink
              to="/east"
              class="block px-4 py-3 hover:bg-yellow-400 hover:text-black transition"
            >
              East
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/west"
              class="block px-4 py-3 hover:bg-yellow-400 hover:text-black transition"
            >
              West
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/north"
              class="block px-4 py-3 hover:bg-yellow-400 hover:text-black transition"
            >
              North
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/south"
              class="block px-4 py-3 hover:bg-yellow-400 hover:text-black transition"
            >
              South
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/kigali"
              class="block px-4 py-3 hover:bg-yellow-400 hover:text-black transition"
            >
              Kigali
            </RouterLink>
          </li>
        </ul>
      </li>

      <!-- Contact -->
      <li>
        <RouterLink
          to="/contact"
          class=" text-white "
        >
          Contact
        </RouterLink>
      </li>

    </ul>
  </nav>
</template>