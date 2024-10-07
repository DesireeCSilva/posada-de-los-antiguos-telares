<template>
    <section id="history" class="section-history">
        <div class="history-top">
            <h1>Breve reseña geográfica y socioeconómica</h1>
            <p class="section-home-text">Atanzón es una villa milenaria enclavada en la Alcarria Alta, cuya arquitectura tradicional se despliega, ligeramente resguardada de los vientos de la meseta, a orillas del río Ungría. Ubicada a tan solo 17 km de Guadalajara y 75 km de Madrid, esta localidad cuenta con un extenso término municipal de más de 3.000 kilómetros cuadrados, que refleja su vocación agrícola y ganadera. <br> El paisaje de Atanzón combina llanuras fértiles y vegas, evidenciando su importante actividad económica basada en la agricultura extensiva y el cuidado del ganado. Sus límites fronterizos la conectan con otros pueblos alcarreños de similares características, como Centenera, Aldeanueva, Caspueñas, Valdegrudas, Lupiana y Valdeavellano, enriqueciendo su entorno rural con una profunda tradición y un arraigo cultural compartido.</p>
        </div>
        <div class="history-bottom">
            <iframe src="https://www.youtube.com/embed/71GXO9-SSlE?si=7ZJldGsmDqFRVg8P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/JR4KeiptllE?si=uRirPwiT0EHbC3MW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/HHHHnCOXFxg?si=-sWcpMkjr4KTvaxT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/b4cHJTjUbDs?si=AXt9zDFFxoNf-5q2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <a style="color: #000; margin: 2rem 0; text-decoration: none" href="http://www.atanzon.com/" target="_blank">http://www.atanzon.com/</a>
    </section>
</template>

<scrip setup>

</scrip>

<style lang="scss">
.section-history {
    background-color: #FDEA8D;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.history-top {
    width: 80%;
}

.history-bottom {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.history-bottom iframe {
    width: 18rem;
    height: 13rem;
    transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;

    &:hover{
        transform: scale(0.95); 
        filter: sepia(100%); 
    }
}

</style>