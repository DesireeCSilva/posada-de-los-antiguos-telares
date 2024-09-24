<template>
    <section id="prices">
        <div class="section-prices">
            <h1>Nuestras habitaciones y tarifas</h1>
            <div class="prices-intro">
                <div class="prices-intro_top">
                    <p class="prices-text">Las habitaciones normales o dobles
                        <strong>Melliza Marisa, Melliza Loli y Abuelos.</strong>
                    </p>
                    <div class="prices-intro_image-container">
                        <img class="prices-intro_image" src="@/assets/indoors/indoors-01.jpg" alt="">
                        <img class="prices-intro_image" src="@/assets/indoors/indoors-02.jpg" alt="">
                        <img class="prices-intro_image" src="@/assets/indoors/indoors-03.jpg" alt="">
                        <img class="prices-intro_image" src="@/assets/indoors/indoors-06.jpg" alt="">
                    </div>
                </div>
                <div class="prices-intro_top">
                    <p class="prices-text">Las habitaciones tipo suite 
                        <strong>Tres balcones, Tulipanes, Época, Oliva y Romántica.</strong>
                    </p>
                    <div class="prices-intro_image-container">
                        <img class="prices-intro_image" src="@/assets/indoors/indoors-11.jpg" alt="">
                        <img class="prices-intro_image" src="@/assets/indoors/indoors-05.jpg" alt="">
                        <img class="prices-intro_image" src="@/assets/indoors/indoors-04.jpg" alt="">
                        <img class="prices-intro_image" src="@/assets/indoors/indoors-00.jpg" alt="">
                    </div>
                </div>
            </div>

            <ul class="notice-list">
                    <li>
                    <strong>TEMPORADA BAJA.</strong> De domingo a jueves no festivos, ni vísperas de festivos, ni fechas determinadas como temporada alta.
                    </li>
                    <li>
                    <strong>TEMPORADA MEDIA.</strong> Viernes y sábado, visperas de festivos, puentes, ni fechas determinadas como temporada alta.
                    </li>
                    <li>
                    <strong>TEMPORADA ALTA.</strong> Semana Santa, Navidades, Año Nuevo (a determinar los días).
                    </li>
            </ul>            
            <button class="button_header">
                <img width="48" height="48" src="https://img.icons8.com/color/48/suitcase.png" alt="suitcase"/><router-link to="/contact">Solicitar mi reserva</router-link>
            </button> 

            <div class="prices_table-container">
                <div style="display: flex, align-items: center, justify-content: center">
                    <h1>HABITACIONES NORMALES O DOBLES</h1>
                    <table class="price-table">
                    <thead>
                        <tr>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Temporada</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1 noche en viernes o sábado</td>
                            <td>105€</td>
                            <td>Media</td>
                        </tr>
                        <tr>
                            <td>2 noches viernes y sábado</td>
                            <td>170€</td>
                            <td>Media</td>
                        </tr>
                        <tr>
                            <td>1 noche entre el domingo y el jueves</td>
                            <td>83€</td>
                            <td>Baja</td>
                        </tr>
                        <tr>
                            <td>2 o más noches (de dom. a juev.) por noche</td>
                            <td>73€</td>
                            <td>Baja</td>
                        </tr>
                        <tr>
                            <td>1 noche en temporada Alta</td>
                            <td>125€</td>
                            <td>Alta</td>
                        </tr>
                        <tr>
                            <td>2 o más noches en temporada Alta</td>
                            <td>105€/noche</td>
                            <td>Alta</td>
                        </tr>
                    </tbody>
                    </table>
                </div>   
                <div style="display: flex, align-items: center, justify-content: center">
                    <h1>HABITACIONES TIPO SUITE</h1>
                    <table class="price-table">
                    <thead>
                        <tr>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Temporada</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1 Noche en viernes o sábado</td>
                            <td>125€</td>
                            <td>Media</td>
                        </tr>
                        <tr>
                            <td>2 Noches viernes y sábado</td>
                            <td>200€</td>
                            <td>Media</td>
                        </tr>
                        <tr>
                            <td>1 Noche (entre el domingo y el jueves)</td>
                            <td>95€</td>
                            <td>Baja</td>
                        </tr>
                        <tr>
                            <td>2 o más noches (de dom. a juev.) por noche</td>
                            <td>85€</td>
                            <td>Baja</td>
                        </tr>
                        <tr>
                            <td>1 Noche en temporada Alta</td>
                            <td>140€</td>
                            <td>Alta</td>
                        </tr>
                        <tr>
                            <td>2 o más noches en temporada Alta</td>
                            <td>120€/noche</td>
                            <td>Alta</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>

            <div class="prices-info">
                <h1>Información importante</h1>
                    <ul class="notice-list">
                        <li><strong>El SPA está cerrado</strong> por reformas y mantenimiento.</li>
                        <li>Los precios son por habitación, incluyen alojamiento para dos personas y desayuno.</li>
                        <li><strong>Suplementos:</strong> Cama supletoria gratis para niños menores de 3 años. 30% del precio de la habitación.</li>
                        <li>No servimos comidas al mediodía, excepto para grupos.</li>
                        <li><strong>Cenas:</strong> Disponibles, el precio por persona y servicio oscila entre los 25€ y 30€.</li>
                        <li>Es posible concertar masajes, siempre con antelación.</li>
                    </ul>
            </div>
            <button class="button_header">
                <img width="48" height="48" src="https://img.icons8.com/color/48/valet.png" alt="valet"/><router-link to="/contact">Pedir más información</router-link>
            </button> 
            
        </div>
    </section>
</template>

<scrip setup>

</scrip>

<style lang="scss">
.section-prices {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: #fdea8d;

    .prices-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 1.2rem;
        font-style: normal;
    }

    .prices-intro {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 1.5rem;

    .prices-intro_top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    .prices-intro_image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
    }
    }

    .prices-intro_image {
        width: 15rem;
        height: 10rem;
    }
}

.prices_table-container {
    display: flex;
    gap: 3rem;
    margin-bottom: 1.5rem;

}
.price-table {
    width: 100%;
    max-width: 40rem;
    border-collapse: collapse;
    text-align: center;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    thead {
        background-color: #D2691E;
        color: #000000;

        th {
        padding: 1rem;
        font-size: 1.2rem;
        }
    }

    tbody {
        tr {
        &:nth-child(odd) {
            background-color: #FFFFCC;
        }

        &:hover {
            background-color: rgba(153, 204, 255, 0.2);
        }

        td {
            padding: 1rem;
            border: 1px solid #ddd;
            font-size: 1rem;
        }
        }
    }
}
.notice-list {
    list-style-type: none;
    padding: 0;
    max-width: 600px;
    font-size: 1.2rem;
    color: #000000;
    
    li {
        margin-bottom: 1rem;
        padding: 0.5rem 1rem;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    strong {
        color: #D2691E; 
    }
    }

    li:hover {
        background-color: rgba(210, 105, 30, 0.1);
    }
}
}
</style>
