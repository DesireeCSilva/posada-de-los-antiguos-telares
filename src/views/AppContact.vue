<template>
    <section id="contact">
        <div class="section-contact">
            <div class="prices-top">
            <h1>Actividades interesantes en la zona</h1>
            <p class="home-top-text section-home-text"> 
                POSADA DE LOS ANTIGUOS TELARES<br> 
                Calle de la Iglesia, 1<br> 
                CP: 19153. Atanzón, Guadalajara. (ESPAÑA) <br>
                Tel. 949 252 654
            </p>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.302243826528!2d-3.0031888243207194!3d40.66730897715915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4303f2a3e64f4f%3A0xea823283ddb77d98!2sPosada%20de%20los%20Antiguos%20Telares!5e0!3m2!1ses!2sus!4v1727201595497!5m2!1ses!2sus" width="500" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
            <div class="prices-bottom">
                <h1>Contacta con nosotros</h1>
                <form v-if="!mostrarMensaje" class="contact-form">
                <div class="input-container">
                    <label for="nombre"></label>
                    <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    class="input-form"
                    v-model="nombre"
                    placeholder="Nombre y apellidos"
                    />
                </div>
                <div class="input-container">
                    <label for="email"></label>
                    <input
                    id="email"
                    name="email"
                    type="text"
                    class="input-form"
                    v-model="email"
                    placeholder="Email"
                    />
                </div>
                <div class="input-container">
                    <label for="teléfono"></label>
                    <input
                    id="teléfono"
                    name="teléfono"
                    type="text"
                    class="input-form"
                    v-model="teléfono"
                    placeholder="Teléfono"
                    />
                </div>
                <div class="input-container">
                <label for="Comentarios"></label>
                <input
                id="comentarios"
                type="text"
                name="comentarios"
                class="input-placeholder"
                v-model="comentarios"
                placeholder="Comentarios"
                />
                </div>
                <button class="button_header" type="submit" value="Enviar" @click="sendEmail">
                    <img width="48" height="48" src="https://img.icons8.com/color/48/open-envelope.png" alt="open-envelope"/>
                    <router-link to="/contact">Enviar formulario</router-link>
                </button>  
                </form>
            </div>
            <!-- <div class="sweet-alert" v-else>
                <p>Tu formulario ha sido enviado con éxito. <br>¡Gracias por tu mensaje!</p>
            </div> -->
        </div>
    </section>

</template>

<script setup>
//   import { ref } from 'vue'
//   import emailjs from '@emailjs/browser';

//   const nombre = ref(undefined)
//   const email = ref(undefined)
//   const comentarios = ref(undefined)
//   const mostrarMensaje = ref(false)

//   const sendEmail = (e) => {
//     const params = {
//       nombre: nombre.value,
//       email: email.value,
//       comentarios: comentarios.value
//     }
//     e.preventDefault()
//     emailjs
//     .send('service_weteccf', 'template_5zps12h', params, {
//       publicKey: 'L7sGgET0IWB0NrLB9',
//     })
//     .then(
//       () => {
//         mostrarMensaje.value = true
//         setTimeout(() => mostrarMensaje.value = false, 4000)
//       },
//       (err) => console.log('FAILED...', err)
//     )
//   }

</script>

<style lang="scss">
.section-contact {
    background-color: #FDEA8D;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 3rem;
    padding-bottom: 1.5rem;
}

.prices-top, .prices-bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.contact-form {
    background-color: #D2691E;
    border-radius: 60px;
    width: 35rem;
    height: auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.input-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.input-form {
    width: 100%;
    height: 3rem;
    border: solid 2px #D2691E;
    border-radius: 20px;
    font-family: "Nunito Sans", sans-serif;
    font-size: 1rem;
    padding-left: 1rem;
    margin: .5rem 0;
}

.input-placeholder {
    width: 100%;
    height: 9rem;
    border: solid 2px #D2691E;
    border-radius: 20px;
    font-family: "Nunito Sans", sans-serif;
    font-size: 1rem;
    padding-left: 1rem;
    margin: .5rem 0;
    
}

.sweet-alert {
    background-color: #fa8662;
    border-radius: 30px;
    padding: 1rem;
    width: auto;

    p {
        font-family: 'Poppins';
        font-size: 2.5rem;
        color: #ffffff;
        text-align: center;
    }
}
</style>