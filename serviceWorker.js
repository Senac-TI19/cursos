const cacheName= 'cache-app-v1'

const recursosCacheados=[
    "index.html",
    "styles.css",
    "favicon.ico",
    "compra1.html",
    "compra2.html",
    "compra3.html",
    "cursos1.html",
    "cursos2.html",
    "cursos3.html",
   "index.js",
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