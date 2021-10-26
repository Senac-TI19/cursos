const cacheName= 'cursos-v1'

const recursosCacheados=[
    "./index.html",
    "./styles.css",
    "./favicon.ico",
    "./compra1.html",
    "./compra2.html",
    "./compra3.html",
    "./cursos1.html",
    "./cursos2.html",
    "./cursos3.html",
    "./index.js",
    "./manifest.json",
    "./icons/apple-icon-57x57.png", 
    "./icons/apple-icon-60x60.png", 
    "./icons/apple-icon-72x72.png", 
    "./icons/apple-icon-76x76.png", 
    "./icons/apple-icon-114x114.png", 
    "./icons/apple-icon-120x120.png", 
    "./icons/apple-icon-144x144.png", 
    "./icons/apple-icon-152x152.png", 
    "./icons/apple-icon-180x180.png", 
    "./icons/android-icon-192x192.png", 
    "./icons/favicon-32x32.png", 
    "./icons/favicon-96x96.png", 
    "././icons/favicon-16x16.png", 
    "./icons/favicon-512x512.png", 

];

self.addEventListener('install', function(event){
    console.log('Service Worker instalado!')
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(recursosCacheados);
        })
    );
});

self.addEventListener ("activate", function () {
    console.log("Service worker ativado!")

});