<template>
  <main>
    <AppHeader v-if="!isMobileDevice" />
    <AppHeaderMobile v-else />
    <AppHome />
    <AppHistory />
    <AppIndoors />
    <AppOutdoors />
    <AppContact />
    <AppActivities />
    <AppPrices />
    <AppFooter />
  </main>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppHeaderMobile from './components/AppHeaderMobile.vue'
import AppContact from './views/AppContact.vue'
import AppHome from './views/AppHome.vue'
import AppHistory from './views/AppHistory.vue'
import AppIndoors from './views/AppIndoors.vue'
import AppOutdoors from './views/AppOutdoors.vue'
import AppActivities from './views/AppActivities.vue'
import AppPrices from './views/AppPrices.vue'
import AppFooter from './components/AppFooter.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMobileDevice = ref(false)

const setScreenSize = () => isMobileDevice.value = window.innerWidth < 1280

onMounted(() => {
  setScreenSize()
  window.addEventListener('resize', setScreenSize)
})
onBeforeUnmount(() => window.removeEventListener('resize', setScreenSize))
</script>

<style lang="scss">

body {
  margin: 0;
  box-sizing: border-box;
  min-height: 100vh;
  font-family: "Nunito Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;

  .title_sidebar {
    font-size: 1.4rem;
    font-style: bold;
    text-decoration: none;
  }
}

@media (max-width: 768px) {
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    main > :not(header) {
      padding: 1rem;
    }
  }
}
</style>

