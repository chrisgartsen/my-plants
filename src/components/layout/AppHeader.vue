<template>
  <header id="app-header">
    <nav class="navbar">
      <div class="container">
        <div class="logo">My Plants</div>
        <div class="nav-menu">
          <nav-menu @toggleMenu="toggleMobileMenu" />
        </div>

        <div class="hamburger" :class="{ active: showMobileMenu }" @click="toggleMobileMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>

    <div class="mobile-menu" :class="{ active: showMobileMenu }">
      <nav-menu @toggleMenu="toggleMobileMenu" />
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import NavMenu from '@/components/nav/NavMenu.vue'

const showMobileMenu = ref(false)

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}
</script>
