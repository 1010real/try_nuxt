<template>
  <div style="text-align: center;">
    <p>{{ ip }}</p>
    <button @click="fetchIp">IPアドレスを取得</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      ip: '0.0.0.0'
    }
  },
  methods: {
    async fetchIp() {
      this.ip = await this.$axios.$get('http://icanhazip.com/');
    }
  }
}
</script>