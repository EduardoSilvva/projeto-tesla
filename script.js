var header = document.getElementById("header");
var ms = document.getElementById("models");
var m3 = document.getElementById("model3");
var mx = document.getElementById("modelx");
var my = document.getElementById("modely");
var model = document.getElementById("model");

ms.onclick = function () {
    header.style.backgroundImage = "url(https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop)";
    model.innerHTML = "Model S";
}

m3.onclick = function () {
    header.style.backgroundImage = "url(https://tesla-cdn.thron.com/delivery/public/image/tesla/e90a341e-f9ca-4aa1-8eab-94afea118786/bvlatuR/std/2880x1800/M3-Homepage-D)";
    model.innerHTML = "Model 3";
}

mx.onclick = function () {
    header.style.backgroundImage = "url(https://tesla-cdn.thron.com/delivery/public/image/tesla/325743a2-d187-4e28-91a3-5a2e47e317f7/bvlatuR/std/2880x1800/ModelX-Homepage-D)";
    model.innerHTML = "Model X";
}

my.onclick = function () {
    header.style.backgroundImage = "url(https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70)";
    model.innerHTML = "Model Y";
}