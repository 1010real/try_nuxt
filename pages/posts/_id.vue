<template>
  <div class="container">
    <h1 class="title">{{ posts.title }}</h1>
    <p class="body">{{ posts.body }}</p>
    <p>
      <nuxt-link to="/posts">リストへ</nuxt-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({params}) {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    return { posts: data };
  },
  head () {
    return {
      title: this.posts.title
    }
  }
}
</script>

<style scoped>
.container .title {
  color : #333;
}
.container .body {
  color: #999;
}
</style>
