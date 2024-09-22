<template>
    <header>
        <nav class="header">
                <ul id="main-menu" class="main-menu">
                    <li>
                        <img class="logotipo" src="../assets/logotipos/logotipo.png" alt="logotipo de Posada de los Antiguos Telares">
                    </li>
                    <li class="main-menu_item">
                        <a href="#home" class="main-menu_link">Inicio</a>
                    </li>
                    <li class="main-menu_item">
                        <a href="#history" class="main-menu_link">Historia</a>
                    </li>
                    <li class="main-menu_item">
                        <a href="#outdoors" class="main-menu_link">Exterior</a>
                    </li> 
                    <li class="main-menu_item">
                        <a href="#indoors" class="main-menu_link">Interior</a>
                    </li>
                    <li class="main-menu_item">
                        <a href="#activities" class="main-menu_link">Actividades</a>
                    </li>
                    <li class="main-menu_item">
                        <a href="#prices" class="main-menu_link">Tarifas</a>
                    </li>
                    <li class="main-menu_item">
                        <a href="#contact" class="main-menu_link">Contacto</a>
                    </li>
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
    background-color: #99CCFF;
}

.main-menu {
    width: 100%;
    list-style: none;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
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