<template>
  <div class="contents">
    <h1 class="page-header">생성페이지</h1>
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
        <button class="btn" type="submit">생성</button>
      </form>
      <P class="log">
        {{ logMessage }}
      </P>
    </div>
  </div>
</template>

<script>
import { createPost } from '@/api/posts';

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
      try {
        const response = await createPost({
          //현재 입력한값을 넘긴다는것
          title: this.title,
          contents: this.contents,
        });
        console.log(response);
      } catch (error) {
        console.log(error.response.data.message);
        this.logMessage = error.response.data.message;
      }
    },
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
