<template>
  <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg">
    <img src="../assets/visit rwanda.png"alt="logo"class="h-10">
    
    <ul class="flex gap-8 text-sm font-medium">
        
        <li><a href="/" class="hover:text-yellow-300">Home</a></li>
        <li><a href="/about " class="hover:text-yellow-300">About</a></li>
        <li><a href="Service" class="hover:text-yellow-300">Services</a></li>


        <li class="relative group">
          <a href="#" class="hover:text-yellow-300">Gallery <span>v</span></a>
          <ul class="absolute left-0 mt-2 bg-green-700 text-white py-2 px-4 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <li><a href="#" class="block py-1 hover:text-yellow-300">Photo</a></li>
            <li><a href="#" class="block py-1 hover:text-yellow-300">Video </a></li>
          </ul>
        </li>


        <li class="relative group">
            <a href="#" class="hover:text-yellow-300">Destination <span>v</span></a>
        <ul class="absolute left-0 mt-2 bg-green-700 text-white py-2 px-4 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <li><a href="East" class="block py-1 hover:text-yellow-300">East</a></li>
            <li><a href="West" class="block py-1 hover:text-yellow-300">West</a></li>
            <li><a href="North" class="block py-1 hover:text-yellow-300">North</a></li>
            <li><a href="South" class="block py-1 hover:text-yellow-300">South</a></li>
            <li><a href="Kigali" class="block py-1 hover:text-yellow-300">Kigali</a></li>
        </ul>
        </li>
        <li><a href="#" class="hover:text-yellow-300">Contact</a></li>
    </ul>

  </nav> 
  </template>
    
    
  