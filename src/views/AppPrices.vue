<template>
    <section id="prices">
        <div class="section-prices">
            <div class="prices-intro">
                <h1>Nuestras tarifas</h1>
                <p class="home-top-text section-home-text">
                    <b>Hay dos tipos de habitaciones normales (dobles) o tipo suite.</b>
                    <br />Las habitaciones normales o dobles
                    <strong>Melliza Marisa, Melliza Loli y Abuelos.</strong>
                </p>
                <p class="home-top-text section-home-text">Las habitaciones tipo suite
                    <strong>Tres balcones, Tulipanes, Epoca, Oliva y Romantica.</strong>
                </p>
                <p class="home-top-text section-home-text"></p>
                <ol>
                    <li>
                    TEMPORADA BAJA. De domingo a jueves no festivos ni visperas de festivos, ni fechas determinadas como temporada alta.
                    </li>
                    <li>
                    TEMPORADA MEDIA. Viernes y sábado, visperas de festivos, puentes, ni fechas determinadas como temporada alta.
                    </li>
                    <li>
                    TEMPORADA ALTA. Semana Santa, Navidades, Año Nuevo (a determinar los días)
                    </li>
                </ol>
            </div>
            <div class="prices-tables">
                <h1>PRECIOS HABITACIONES NORMALES O DOBLES (*)</h1>
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
                
                <h1>PRECIOS HABITACIONES TIPO SUITE</h1>
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
            
            <div class="prices-info">
                <h1>Información importante</h1>
                <p class="home-top-text section-home-text">
                    <ul class="notice-list">
      <li><strong>El SPA está cerrado</strong> por reformas y mantenimiento.</li>
      <li>Los precios son por habitación, incluyen alojamiento para dos personas y desayuno.</li>
      <li><strong>Suplementos:</strong> Cama supletoria gratis para niños menores de 3 años. 30% del precio de la habitación.</li>
      <li>No servimos comidas al mediodía, excepto para grupos.</li>
      <li><strong>Cenas:</strong> Disponibles, el precio por persona y servicio oscila entre los 25€ y 30€.</li>
      <li>Es posible concertar masajes, siempre con antelación.</li>
    </ul>
                </p>
            </div>
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

  .price-table {
    width: 100%;
    max-width: 700px;
    border-collapse: collapse;
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    thead {
      background-color: #ffc107;
      color: #333;

      th {
        padding: 1rem;
        font-size: 1.2rem;
      }
    }

    tbody {
      tr {
        &:nth-child(odd) {
          background-color: #f1f1f1;
        }

        &:hover {
          background-color: #ffebc5;
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
    color: #333;
    
    li {
      margin-bottom: 1rem;
      padding: 0.5rem 1rem;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      strong {
        color: #d9534f; /* Resaltar ciertas palabras */
      }
    }

    li:hover {
      background-color: #ffebc5;
    }
  }
}
</style>
