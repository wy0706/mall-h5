<template>
  <div>
    <router-view></router-view>
    <van-tabbar
      v-model="active"
      active-color="#FFA500"
      inactive-color="#000"
      @change="tabChange"
    >
      <van-tabbar-item
        v-for="item in tabbars"
        :icon="item.meta.icon"
        :key="item.name"
        >{{ item.meta.title }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { useRouter } from "vue-router";
import home from "/@/router/routes/modules/home";
import { AppRouteRecordRaw } from "/@/router/types";
export default defineComponent({
  name: "",
  setup() {
    console.log(home.children);
    const active = ref(0);
    const router = useRouter();
    let tabbars = reactive<AppRouteRecordRaw[]>([]);

    tabbars = home.children || [];
    const tabChange = (index) => {
      active.value = index;
      router.push(tabbars[index].path);
    };
    return { active, tabbars, tabChange };
  },
});
</script>
