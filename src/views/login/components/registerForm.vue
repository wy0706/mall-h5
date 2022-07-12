<template>
  <div class="container">
    <van-cell-group inset>
      <van-field v-model="form.phone" label="手机号" placeholder="请输入手机号" />
      <van-field
        v-model="form.sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue';
  export default defineComponent({
    name: '',
    setup() {
      const form = reactive({
        phone: '',
        sms: '',
      });
      return {
        form,
      };
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
