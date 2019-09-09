<template>
  <div id="app">
    <div class="nav">
      <router-link :to="{ name: 'home' }">home</router-link>
    </div>

    <router-view class="view"></router-view>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
