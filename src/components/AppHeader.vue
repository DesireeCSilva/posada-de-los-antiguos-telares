<template>
    <header>
        <nav class="header">
            <ul id="main-menu" class="main-menu">
                <li>
                    <img class="logotipo" src="../assets/logotipos/logotipo.png" alt="logotipo de Posada de los Antiguos Telares">
                </li>
                <li class="main-menu_item">
                    <router-link to="/" class="main-menu_link">Inicio</router-link>
                </li>
                <li class="main-menu_item">
                    <router-link to="/history" class="main-menu_link">Historia</router-link>
                </li>
                <li class="main-menu_item">
                    <router-link to="/outdoors" class="main-menu_link">Exterior</router-link>
                </li> 
                <li class="main-menu_item">
                    <router-link to="/indoors" class="main-menu_link">Interior</router-link>
                </li>
                <li class="main-menu_item">
                    <router-link to="/activities" class="main-menu_link">Actividades</router-link>
                </li>
                <li class="main-menu_item">
                    <router-link to="/prices" class="main-menu_link">Tarifas</router-link>
                </li>
                <li class="main-menu_item">
                    <router-link to="/contact" class="main-menu_link">Contacto</router-link>
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
    font-size: .9rem;
    transition: font-size 0.3s ease-in-out, background-color 0.3s ease;
    padding: 0.5rem 1rem; 

    &:hover,
    &:active {
        background-color: rgba(255, 255, 255, 0.3); 
        font-size: 1rem; 
        border-radius: 5px; 
    }
}

.main-menu_link:active {
    transform: skew(20deg, 10deg);

    transition: transform 0.1s ease; // Transición rápida para el efecto
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