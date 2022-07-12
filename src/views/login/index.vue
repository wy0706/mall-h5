<template>
  <div class="wrapper">
    <div v-if="isRegister">
      <loginFormVue />
      <div
        v-if="isRegister"
        style="height: 50px; line-height: 50px; text-align: right; padding: 10px 20px"
      >
        <span href="#" style="font-size: 12px; color: #40a9ff" @click="noRegister"
          >没有账号?点击注册</span
        >
      </div>
    </div>
    <registerFormVue v-else />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import loginFormVue from './components/loginForm.vue';
  import registerFormVue from './components/registerForm.vue';
  export default defineComponent({
    name: '',
    components: { loginFormVue, registerFormVue },
    setup() {
      const isRegister = ref(true);
      const noRegister = () => {
        isRegister.value = false;
      };
      return { noRegister, isRegister };
    },
  });
</script>
<style lang="less" scoped>
  .wrapper {
    height: 100%;
    padding-top: 300px;
    box-sizing: border-box;
    background-color: #f5f5dc;
  }
</style>
