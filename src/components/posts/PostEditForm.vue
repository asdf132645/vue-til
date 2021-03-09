<template>
  <div class="contents">
    <h1 class="page-header">수정페이지</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">title: </label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">contents:</label>
          <textarea
            id="contents"
            type="text"
            v-model="contents"
            rows="5"
          ></textarea>
          <p v-if="!isContentsValid" class="validation-text warning">
            텍스트 길이는 200자 이하
          </p>
        </div>
        <button class="btn" type="submit">수정</button>
      </form>
      <P class="log">
        {{ logMessage }}
      </P>
    </div>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length < 200;
    },
  },
  methods: {
    async submitForm() {
      const id = this.$route.params.id;
      try {
        await editPost(id, {
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/main');
      } catch (err) {
        console.log(err);
        this.logMessage = err;
      }
    },
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    this.title = data.title;
    this.contents = data.contents;
    // console.log(data);
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: #fff;
}
</style>
