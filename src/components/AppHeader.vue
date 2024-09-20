<template>
    <header>
        <nav class="header">
                <ul id="main-menu" class="main-menu">
                    <li>
                        <img class="logotipo" src="../assets/logotipos/logotipo.png" alt="logotipo de Posada de los Antiguos Telares">
                    </li>
                    <li class="main-menu_item">
                        <a href="" class="main-menu_link">Inicio</a>
                    </li>
                    <li class="main-menu_item">
                        <a href="" class="main-menu_link">Historia</a>
                    </li>
                    <li class="main-menu_item">
                        <a href="" class="main-menu_link">Exterior</a>
                    </li> 
                    <li class="main-menu_item">
                        <a href="" class="main-menu_link">Interior</a>
                    </li>
                    <li class="main-menu_item">
                        <a href="" class="main-menu_link">Actividades</a>
                    </li>
                    <li class="main-menu_item">
                        <a href="" class="main-menu_link">Tarifas</a>
                    </li>
                    <li class="main-menu_item">
                        <a href="" class="main-menu_link">Contacto</a>
                    </li>
                    <button class="button_header">
                        <img class="icon_header" src="" alt=""><a href="tel: 949252654">¡Contáctanos!</a>
                    </button>
                </ul>
            </nav>

    </header>
</template>

<scrip setup>

</scrip>

<style lang="scss">
.header {
    display: flex;
    width: 100%;
    height: 10rem;
    align-items: center;
    justify-content: space-around;
    background-color: #018AB5;
}

.main-menu {
    width: 100%;
    list-style: none;
    display: flex;
    text-align: center;
    align-items: center;
    align-content: center;
    justify-content: space-between;
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
    color: #000000;    
    position: relative;
    color: inherit;
}
.main-menu_link::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #CE93D8, #e878a2, #eb85ab);
    z-index: 1;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease-in-out;
}
.main-menu_link:hover::before {
    transform: scaleX(1);
}

.button_header {
    background-color: #CE93D8;
    width: 10em;
    height: fit-content;
    font-size: 1.3rem;
    font-family: 'Poppins';
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: 0.50rem;
    border-style: none;
    cursor: pointer; 
    text-decoration: none;
    text-align: center;
    justify-content: center;
    display: flex;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
    transition: all 0.3s ease; 
}
.button_header:hover {
    background-color: #CE93D8;
    transform: scale(0.95); 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
}
.icon_header {
    display: flex;
    flex-direction: row;
    align-self: center;
    width: 1.2rem;
    height: 1.2rem;
}
.button_header a {
    text-decoration: none;
    color: #000000;
}

.logotipo {
    width: 3rem;
}

</style>