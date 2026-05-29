<template>
    <footer class="bg-green-800 text-white py-10 py-6"> 
        <div class="flex flex-wrap justify-between gap-8">
            <!--this is about footer-->
        <div>
<h3 class="text yellow-300 font-bold text-lg mb-3">TEMBERA U RWANDA</h3>
<p class="text-green-200">Discover the beauty of the land of thousand hills</p>
        </div>
        <!--Quick links--> 
        <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">Quick Links</h3>
            <ul class="space-y-2 text-sm">
                <li>
                    <RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink><br>
                    <RouterLink to="/About" class="hover:text-yellow-300">About</RouterLink><br>
                    <RouterLink to="/services" class="hover:text-yellow-300">Destination</RouterLink><br>
                    <RouterLink to="/contact" class="hover:text-yellow-300">Contact</RouterLink><br>
                </li>
            </ul>
        </div>
        <!--Destination-->
        <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">Destination</h3>
            <ul class="space-y-2 text-sm">
                <li>
                    <RouterLink to="/North"class="hover.text-yellow-300">North Province</RouterLink><br>
                    <RouterLink to="/South"class="hover.text-yellow-300">South Province</RouterLink><br>
                    <RouterLink to="/East"class="hover.text-yellow-300">East Province</RouterLink><br>
                    <RouterLink to="/West"class="hover.text-yellow-300">West Province</RouterLink><br>
                    <RouterLink to="/Kigali"class="hover.text-yellow-300">Kigali city</RouterLink><br>
                </li>
            </ul>
        </div>
        <!--contact info-->
        <div>
            <h4 class="text-yellow-300 font-bold text-ld mb-3">contact</h4>
            <ul class="space-y-2 taxt-green-300">
            <li>ahantunyaburanga@gmail.com</li>
            <li>+25079145681o</li>
            <li>kagugu kigali Rwanda</li>
            </ul>
        </div>
        </div>
        <!--place for copyright-->
        <div class="border-green-600 mt-8 pt-4 text-sm text-green-300"></div>
        <p class="text-center">@ 2026 visit Rwanda.ALL right reserved</p>
    </footer> 
    </template>