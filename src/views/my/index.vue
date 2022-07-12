<template>
  <div>
    <!-- 开启顶部安全区适配 -->
    <van-nav-bar safe-area-inset-top />
    <div class="container">
      <div class="userInfo"> 我的用户信息 </div>
      <div class="order">
        <div class="all">
          <div>订单</div>
          <div style="color: #ccc; font-size: 12px"
            ><span style="margin-right: 5px">查看全部</span><van-icon name="arrow"
          /></div>
        </div>
        <div class="order_list">
          <div class="order_item" v-for="item in orderList" :key="item.key">
            <div style="margin: 5px 0"><van-icon :name="item.icon" :size="20" /></div>
            <div>{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: '',
    setup() {
      const orderList = ref([
        {
          name: '待付款',
          icon: 'credit-pay',
          key: 1,
        },

        {
          name: '待发货',
          icon: 'send-gift-o',
          key: 2,
        },
        {
          name: '待收货',
          icon: 'logistics',
          key: 3,
        },
        {
          name: '待评价',
          icon: 'chat-o',
          key: 4,
        },
        {
          name: '退款/售后',
          icon: 'cash-back-record',
          key: 5,
        },
      ]);
      return { orderList };
    },
  });
</script>
<style lang="less" scoped>
  .container {
    padding: 10px;
    .userInfo {
      margin-bottom: 10px;
    }
    .list {
      background-color: #fff;
      margin-bottom: 10px;
      border-radius: 6px;
    }
    .order {
      background-color: #fff;
      border-radius: 6px;
      .all {
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #ececec;
      }
      .order_list {
        display: flex;
        padding: 20px 10px;
        font-size: 12px;
        text-align: center;
      }
      .order_item {
        width: 20%;
      }
    }
  }
</style>
