<template>
  <div style="height: 100%">
    <van-config-provider style="height: 100%" :theme-vars="themeVars">
      <router-view />
    </van-config-provider>
    <!-- 开启底部安全区适配 -->
    <van-number-keyboard safe-area-inset-bottom />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: '',
    setup() {
      const rate = ref(4);
      const slider = ref(50); // themeVars 内的值会被转换成对应 CSS 变量
      // 比如 sliderBarHeight 会转换成 `--van-slider-bar-height`
      const themeVars = {
        rateIconFullColor: '#ffa500',
        sliderBarHeight: '4px',
        sliderButtonWidth: '20px',
        sliderButtonHeight: '20px',
        sliderActiveBackgroundColor: '#ffa500',
        buttonPrimaryBorderColor: '#ffa500',
        buttonPrimaryBackgroundColor: '#ffa500',
      };
      return {
        rate,
        slider,
        themeVars,
      };
    },
  });
</script>
<style></style>
