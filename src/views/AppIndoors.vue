<template>
    <section id="indoors">
        <div class="indoors">
            <div class="indoors-top">
                <h1>Descubre los encantadores interiores de la Posada de los Antiguos Telares</h1>
                <p class="home-top-text section-home-text">En la Posada de los Antiguos Telares, cada rincón cuenta una historia. Nuestros interiores están diseñados para ofrecerte un refugio acogedor y elegante, donde la tradición y la modernidad se entrelazan armoniosamente. Desde la cálida iluminación que realza la belleza de los muebles artesanales hasta los suaves textiles que invitan al descanso, cada detalle ha sido cuidadosamente seleccionado para brindarte una experiencia inolvidable.</p>
                <div class="indoors-top_images">
                    <img class="indoors-image" src="@/assets/indoors/indoors-00.jpg" alt="Foto del patio de la Posada de los Antiguos Telares">
                    <img class="indoors-image" src="@/assets/indoors/indoors-01.jpg" alt="Foto de una de las habitaciones de la Posada de los Antiguos Telares">
                    <img class="indoors-image" src="@/assets/indoors/indoors-02.jpg" alt="Foto de una de las habitaciones de la Posada de los Antiguos Telares">
                    <img class="indoors-image" src="@/assets/indoors/indoors-03.jpg" alt="Foto de una de las habitaciones de la Posada de los Antiguos Telares">
                    <img class="indoors-image" src="@/assets/indoors/indoors-04.jpg" alt="Foto de una de las habitaciones de la Posada de los Antiguos Telares">
                    <img class="indoors-image" src="@/assets/indoors/indoors-05.jpg" alt="Foto de una de las habitaciones de la Posada de los Antiguos Telares">
                    <img class="indoors-image" src="@/assets/indoors/indoors-06.jpg" alt="Foto de una de las habitaciones de la Posada de los Antiguos Telares">
                    <img class="indoors-image" src="@/assets/indoors/indoors-11.jpg" alt="Foto de una de las habitaciones de la Posada de los Antiguos Telares">
                </div>
            </div>
            <div class="indoors-bottom">
                <p class="home-top-text section-home-text">Adéntrate en espacios que evocan la calidez del hogar, donde podrás disfrutar de momentos de tranquilidad y desconexión. Nuestras habitaciones, decoradas con un toque rústico y sofisticado, ofrecen un ambiente perfecto para relajarte después de un día de exploración. <br>Ven y descubre un lugar donde la comodidad y el encanto se unen para hacer de tu estancia una experiencia única y memorable.</p> 
                <button class="button_header">
                    <img width="48" height="48" src="https://img.icons8.com/color/48/old-sofa.png" alt="old-sofa"/><router-link to="/contact">Solicitar mi reserva</router-link>
                </button> 
                <div class="indoors-top_images">
                    <img class="indoors-image" src="@/assets/indoors/indoors-08.jpg" alt="Foto de uno de los baños la Posada de los Antiguos Telares">
                    <img class="indoors-image" src="@/assets/indoors/indoors-09.jpg" alt="Foto de una de las habitaciones de la Posada de los Antiguos Telares">
                    <img class="indoors-image" src="@/assets/indoors/indoors-10.jpg" alt="Foto de una de las habitaciones de la Posada de los Antiguos Telares">
                    <img class="indoors-image" src="@/assets/indoors/indoors-07.jpg" alt="Foto de una de las habitaciones de la Posada de los Antiguos Telares">
                </div>
            </div>
        </div>
    </section>
</template>

<scrip setup>

</scrip>

<style lang="scss">
.indoors {
    background-color: #FDEA8D;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.indoors-top, .indoors-bottom{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.indoors-top_images {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    padding: 1rem 3rem;
    gap: 2rem;
}

.indoors-image {
    width: 18rem;
    height: 10rem;
}

.indoors-bottom button {
    margin: 1rem 0 1.5rem 0;
}

</style>