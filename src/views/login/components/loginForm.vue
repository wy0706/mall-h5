<template>
  <div class="container">
    <van-form @submit="onSubmit" class="form">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="padding: 30px 16px 5px">
        <van-button round block type="primary" native-type="submit"> 登录 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: '',
    setup() {
      const username = ref('');
      const password = ref('');
      const onSubmit = (values) => {
        console.log('submit', values);
      };
      return { username, password, onSubmit };
    },
  });
</script>
<style lang="less" scoped>
  .container {
    box-sizing: border-box;
    background-color: #fff;
    margin: 10px;
    padding: 20px 10px;
    border-radius: 6px;
    box-shadow: 1px 1px 10px #ccc;
  }
</style>
