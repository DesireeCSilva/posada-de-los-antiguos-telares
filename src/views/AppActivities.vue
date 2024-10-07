<template>
    <section id="activities">
        <div class="section-activities">
            <h1>Actividades interesantes en la zona</h1>
            <p class="home-top-text section-home-text"> Las rutas y senderos de Atanzón ofrecen una experiencia inigualable para los amantes de la naturaleza. A lo largo del término municipal, se pueden observar las antiguas cabañas que, en tiempos pasados, servían de refugio a pastores y labradores frente a las inclemencias del tiempo. Muchas de ellas se encuentran en un estado de conservación sorprendente, destacando por sus dimensiones y acabados impecables. <br>
            El entorno invita a recorrerlo a pie o en bicicleta, gracias a sus rutas de senderismo y mountain bike, que revelan paisajes tranquilos y alejados del tráfico, ideales para desconectar. A tan solo 50 minutos de Madrid y 20 de Guadalajara, este rincón es un auténtico refugio de paz. <br>
            Desde aquí, también es fácil explorar pueblos con encanto cercanos como Torija, Brihuega, Hita, Horche, y Pastrana, o sumergirse en rutas como el "Viaje a la Alcarria", el Hayedo de Tejera Negra, el Alto Tajo, e incluso las tierras del Quijote.
            </p>
        </div>   
        <div class="activities-images">
            <img src="@/assets/outdoors/outdoors-02.jpg" alt="Imagen del Ayuntamiento de Atanzón">
            <img src="@/assets/outdoors/outdoors-03.jpg" alt="Imagen de la naturaleza de Atanzón">
        </div> 
        <button class="button_header">
                <img width="48" height="48" src="https://img.icons8.com/color/48/suitcase.png" alt="suitcase"/><router-link to="/contact">Solicitar mi reserva</router-link>
        </button> 
    </section>
</template>

<scrip setup>

</scrip>

<style lang="scss">

#activities {    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #FDEA8D;
    padding-bottom: 1.5rem;

}
.section-activities {
    background-image: url('@/assets/logotipos/Vector.png');
    background-size: contain; 
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.activities-images {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 1.5rem;
    height: 20rem;
    gap: 1.5rem;

    img {
        width: 25rem;
        height: 100%;
    }
}

</style>