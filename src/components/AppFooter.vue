<template>
    <footer id="footer">
        <nav class="footer">
                <ul id="main-menu" class="main-menu">
                    <li>
                        <img class="logotipo" src="../assets/logotipos/logotipo.png" alt="logotipo de Posada de los Antiguos Telares">
                    </li>
                    <li class="main-menu_item">
                        <a href="" class="main-menu_link">Inicio</a>
                    </li>
                    <li class="main-menu_item">
                        <a href="" class="main-menu_link">Exterior</a>
                    </li> 
                    <li class="main-menu_item">
                        <a href="" class="main-menu_link">Interior</a>
                    </li>
                    <li class="main-menu_item">
                        <a href="" class="main-menu_link">Tarifas</a>
                    </li>
                    <li class="main-menu_item">
                        <a href="" class="main-menu_link">Contacto</a>
                    </li>
                    <li class="main-menu_item">
                        <button class="button_header">
                            <img class="icon-header" width="48" height="48" src="https://img.icons8.com/color/48/iphone-x.png" alt="iphone-x"/><a href="tel: 949252654">¡Contáctanos!</a>
                        </button>
                    </li>
                </ul> 
        </nav>
        <div>
            <p>@Desirée Silva · Todos los derechos reservados🗻</p>
        </div>
    </footer>
</template>

<scrip setup>

</scrip>

<style lang="scss">
footer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
    background-color: #99CCFF;
    
    p {
        font-size: 0.9rem;
        margin: 0;
        padding: 0;
        text-align: center;
        background-color: #99CCFF;
        margin-bottom: 1.5rem;
    }
}

.footer {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 10rem;
    align-items: center;
    justify-content: space-around;
    background-color: #99CCFF;
}


.main-menu {
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2rem;
    text-decoration: none;
    cursor: pointer;
}

.main-menu_item {
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
}
.main-menu_link {
    text-decoration: none;
    color: inherit;
    position: relative;
    font-size: 1rem;
    transition: font-size 0.3s ease-in-out;

    &:hover,
    &:active {
    font-size: 1.2rem; 
    }
}

.icon_header {
    display: flex;
    flex-direction: row;
    align-self: center;
    width: 1.2rem;
    height: 1.2rem;
}

.logotipo {
    width: 10rem;
}

</style>

