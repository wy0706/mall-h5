<template>
  <div>
    <!-- 开启顶部安全区适配 -->
    <van-nav-bar safe-area-inset-top />
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" title="商品列表" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  export default defineComponent({
    name: 'GoodsList',
    setup() {
      const router = useRouter();
      const onClickLeft = () => {
        router.go(-1);
      };
      return { onClickLeft };
    },
  });
</script>
