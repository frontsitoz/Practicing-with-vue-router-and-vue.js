<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <!-- Logo a la izquierda -->
      <div>
        <a class="flex items-center gap-2 font-semibold" href="/">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
        </a>
      </div>

      <!-- Enlaces de navegación a la derecha -->
      <nav class="flex items-center ml-auto">
        <div class="flex space-x-6">
          <RouterLink :to="{ name: 'home' }"> Home </RouterLink>
          <!--exact-active-class="underline bold-->
          <!-- Esto es para que en mis links del menu se refleje cada vez que entramos a una sección
          diferente-->
          <RouterLink to="/features"></RouterLink>
          <RouterLink :to="'/pricing'"> Pricing </RouterLink>
          <RouterLink to="/contact"> Contact </RouterLink>
        </div>

        <!-- Login separado y alineado a la derecha -->
        <div class="ml-8">
          <RouterLink to="/pokemon/1">Pokémons</RouterLink>
        </div>

        <div class="ml-8">
          <RouterLink to="/auth"> Login </RouterLink>
        </div>
      </nav>
    </header>

    <!-- Fin Header -->

    <!-- Main -->
    <main class="flex-1 flex items-center justify-center">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>

      <!--<Router View/>-->
    </main>
    <!-- Fin Main -->

    <!-- Footer -->
    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center">
        © {{ new Date().getFullYear() }} Acme Corporation. Derechos reservados
      </p>
    </footer>
    <!-- Fin Footer -->
  </div>
</template>
