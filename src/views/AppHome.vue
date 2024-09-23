<template>
    <section id="home" class="section-home">
        <div class="section-home_top">
            <div class="home-top-text">
                <h1>Bienvenido a Posada de los Antiguos Telares</h1>
                <p class="section-home-text">Sea bienvenid@ a la Posada de los Antiguos Telares, su mejor elección si busca casas rurales en Guadalajara para desconectar y evadirse de las preocupaciones de la vida moderna. <br>Deseamos que, desde ahora mismo, sienta esta casa como la suya propia. En la posada de los Antiguos Telares tenemos un sólo propósito: agradarle y atenderle como usted se merece, ofreciéndole siempre la mejor experencia que podrá encontrar en su búsqueda de hoteles rurales en Guadalajara, con la mejor calidad y a un precio realmente asequible para todos los bolsillos. </p>
            </div>
            <div class="home-carousel">
            <img class="carousel-image" src="@/assets/rooms/cabecera01.jpg" alt="Imagen 1">
            <img class="carousel-image" src="@/assets/rooms/cabecera02.jpg" alt="Imagen 2">
            <img class="carousel-image" src="@/assets/rooms/cabecera03.jpg" alt="Imagen 3">
            <img class="carousel-image" src="@/assets/rooms/cabecera04.jpg" alt="Imagen 4">
            <img class="carousel-image" src="@/assets/rooms/cabecera05.jpg" alt="Imagen 5">
            <img class="carousel-image" src="@/assets/rooms/cabecera06.jpg" alt="Imagen 6">
            <img class="carousel-image" src="@/assets/rooms/cabecera07.jpg" alt="Imagen 7">
            <img class="carousel-image" src="@/assets/rooms/cabecera08.jpg" alt="Imagen 8">
            </div>
        </div>

        <div class="section-home-bottom">
            <button class="button_header">
                <img width="48" height="48" src="https://img.icons8.com/color/48/door-opened.png" alt="door-opened"/><router-link to="#indoors">Ver habitaciones</router-link>
            </button>
            <p class="home-top-text section-home-text">
            Desde nuestros inicios, cada día ha supuesto para nosotros un maravilloso reto en pos de lograr la excelencia y la satisfacción de todos nuestros clientes, intentando superar siempre sus expectativas. <br>
            Póngase en nuestras manos y no se arrepentirá. Estamos convencidos de que quedará completamente encantad@ y que, cuando busque casas rurales en Guadalajara, o hoteles rurales en Guadalajara, seremos por siempre su primera opción. <br>
            Muchas gracias por visitarnos. Aquí tiene ya su segunda casa.</p>
            <img class="section-home_image" src="@/assets/home/imagen-contenido01.png" alt="Imagen del Spa">
            <button class="button_header">
                <img width="48" height="48" src="https://img.icons8.com/color/48/old-sofa.png" alt="old-sofa"/><router-link to="#contact">Solicitar mi reserva</router-link>
            </button>   
        </div>


    </section>
</template>


<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    const images = document.querySelectorAll('.carousel-image')
    let currentIndex = 0

    function showImage(index) {
    images.forEach((img) => img.classList.remove('active'))
    images[index].classList.add('active')
    }

    function nextImage() {
    currentIndex = (currentIndex + 1) % images.length
    showImage(currentIndex)
    }

    // Show the first image initially
    showImage(currentIndex)

    // Change the image every 4 seconds
    setInterval(nextImage, 4000)
})
</script>


<style lang="scss">

.section-home {
    background-color: #FDEA8D;
}

.section-home_top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.section-home-bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    padding-bottom: 1.5rem;
}

.home-top-text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 80%;
}

.home-top-text h1 {
    color: #D2691E;
}

.section-home-text {
    font-size: 1.2rem;
    font-style: normal;
}

.home-carousel {
    width: 100%;
    align-self: flex-start;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel-image {
    display: none;
    width: auto;
    max-width: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.carousel-image.active {
    display: block;
    opacity: 1;
}

.button_header {
    background-color: #018AB5;
    width: auto;
    height: fit-content;
    font-size: 1.3rem;
    font-weight: 700;
    font-family: "Nunito Sans", sans-serif;
    padding: 0.5rem 1.2rem 0.5rem 1rem;
    border-radius: 4rem;
    border: none;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    &:hover {
    background-color: #99CCFF;
    transform: scale(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    a {
    text-decoration: none;
    color: #000000;
    }
}

.section-home_image {
    width: 60%;
    height: auto;
    margin-bottom: 1.5rem;
}

</style>