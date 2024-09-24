<template>
    <section id="outdoors">
        <div class="section-outdoors">
            <div class="outdoors-top">
                <h1>El entorno</h1>
                <p class="section-home-text home-top-text">La casa, ubicada en la villa de Atanzón, está dentro del pueblo justo a la entrada, camino de la iglesia. La iglesia, digna de visitar, es de estilo renacentista (s. XVI) y está declarada monumento histórico-artístico nacional. Destacan su bello artesonado mudéjar y su espléndido coro. <br>
                Otras curiosidades del pueblo interesantes de visitar son el rollo que data del siglo XIV (el más antiguo de la provincia) y los lavaderos.</p>
            
            <div class="outdoors-top_images">
                <img class="outdoors-img" src="@/assets/outdoors/outdoors-00.jpg" alt="Imagen del Ayuntamiento de Atanzón">
                <img class="outdoors-img" src="@/assets/outdoors/outdoors-01.jpg" alt="Imagen de la naturaleza de Atanzón">
            </div>
            </div>
            <div class="outdoors-bottom">
                <p class="section-home-text home-top-text">El encanto de nuestro pueblo reside en su privilegiada ubicación en la ladera de la vega del río Ungría, que nos regala panorámicas impresionantes. Nuestro término municipal es un tesoro escondido, salpicado de numerosas fuentes con siglos de historia. Estas fuentes, además de ser un regalo para la vista con sus caños y abrevaderos singulares —como los de Los Praillos o el Vallejo Villar—, siguen siendo fundamentales para el cuidado de nuestro ganado y la tierra, manteniendo vivas nuestras tradiciones.</p>
            </div>        
            <button style="margin-bottom: 1.5rem;" class="button_header">
                <img width="48" height="48" src="https://img.icons8.com/color/48/rucksack.png" alt="rucksack"/><router-link to="/activities">Ver actividades en Atanzón</router-link>
        </button> 
        </div>
 
    </section>
</template>

<scrip setup>

</scrip>

<style lang="scss">
.section-outdoors {
    background-color: #FDEA8D;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.outdoors-top_images {
    display: flex;
    gap: 1.5rem;
}

.outdoors-img {
    width: 30rem;
    height: auto;
}

.outdoors-top, .outdoors-bottom{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}


</style>