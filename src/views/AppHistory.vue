<template>
    <section id="history" class="section-history">
        <div class="history-top">
            <h1>Breve reseña geográfica y socioeconómica</h1>
            <p class="section-home-text">Atanzón es una villa milenaria ubicada en la Alcarria Alta y que asoma su caserío, ligeramente protegido de los vientos mesetarios, a la cuenca del río Ungría. <br>
            Se encuentra aproximadamente a 17 km de Guadalajara y a 75 km de Madrid. Su término municipal, que se extiende entre el llano fundamentalmente y la vega, es grande, de mas de tres mil km cuadrados, evidenciando su dedicación económica a la agricultura extensiva y a la ganadería. <br>
            Limita con Centenera, Aldeanueva, Caspueñas, Valdegrudas, Lupiana y Valdeavellano, que son otras poblaciones alcarreñas de similares características.</p>
        </div>
        <div class="history-bottom">
            <iframe src="https://www.youtube.com/embed/71GXO9-SSlE?si=7ZJldGsmDqFRVg8P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/JR4KeiptllE?si=uRirPwiT0EHbC3MW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/HHHHnCOXFxg?si=-sWcpMkjr4KTvaxT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/b4cHJTjUbDs?si=AXt9zDFFxoNf-5q2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
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