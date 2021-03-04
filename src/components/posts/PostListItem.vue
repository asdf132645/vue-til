<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt }}
    </div>
  </li>
</template>

<script>
export default {
  props: {
    postItem: {
      type: Object,
      //required 넘어오는값 안넘어오면 밸리데이션 에러뜸
      required: true,
    },
  },
};
</script>

<style scoped></style>
