
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        this.navigator.serviceWorker
        .register("serviceWorker.js")
        .then (function (registro) {
            console.log("Service Worker registrado com sucesso", registro);
        })
        .catch(function(erro) {
            console.log("Service Worker não registrado", erro);
        });
    });
}