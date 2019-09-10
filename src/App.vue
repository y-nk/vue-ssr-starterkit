<template>
  <div id="app">
    <div class="nav">
      <router-link :to="{ name: 'home' }">home</router-link>
      <router-link :to="{ name: 'about' }">about</router-link>
     </div>

    <pre>{{ $store.state }}</pre>

    <router-view class="view"></router-view>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
