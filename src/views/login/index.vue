<template>
  <div class="container">
    <div class="form">
      <van-field v-model="form.name" placeholder="请输入用户名" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  export default defineComponent({
    name: '',
    setup() {
      const form = reactive({ name: '', password: '' });
      return { form };
    },
  });
</script>
<style lang="less" scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form {
    height: 200px;
    width: 100%;
    background-color: #ccc;
  }
</style>
