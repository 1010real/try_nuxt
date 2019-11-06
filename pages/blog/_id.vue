<template>
  <div>
    <h2>blog-detail</h2>
    <p>これは、{{ $route.params.id }}のエントリーです</p>
  </div>
</template>

<script>
export default {
  // check parameter
  // もし数字でなければ404に飛ばす(validate関数の中でfalseを返す)
  validate({ params }) {
    return /^\d+$/.test(params.id);
  }
}
</script>