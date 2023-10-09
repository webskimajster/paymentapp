<script setup>
import { RouterView } from 'vue-router'
import YourOrder from './components/YourOrder.vue'
import TheBreadcrumbs from './components/TheBreadcrumbs.vue'
</script>

<template>
  <section class="container mx-auto grid grid-cols-3 gap-3 px-10 py-4 items-start">
    <TheBreadcrumbs class="col-span-3"></TheBreadcrumbs>
    <section class="col-span-2 md:col-span-2 order-2 md:order-1" style="height: 200vh">
      <RouterView />
    </section>
    <aside class="col-span-3 md:col-span-1 order-1 md:order-2 md:sticky md:top-4">
      <YourOrder />
    </aside>
  </section>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
