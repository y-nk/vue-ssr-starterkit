<template>
  <div>about page!</div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('change', 'about')
  },
}
</script>
