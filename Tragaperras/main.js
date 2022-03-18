let loading = document.querySelector(".loading");

window.onload = inicio();

function inicio() {
    loading.classList.remove("hidden");
    loading.classList.add("show");
    //setInterval(i++,10);

    setTimeout(hide(), 5000);
}

function hide() {
    loading.classList.add("hidden");
    loading.classList.remove("show");
} 