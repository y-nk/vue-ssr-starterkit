<template>
  <div>home page!</div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('change', 'home')
  },
}
</script>
