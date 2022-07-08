<template>
  <div>
    <div>
      <van-search v-model="searchValue" placeholder="请输入搜索关键词" @search="onSearch" />
    </div>
    <!-- 轮播图 -->
    <div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in imgList" :key="item.id">{{ item.img }}</van-swipe-item>
      </van-swipe></div
    >
    <!-- 分类 -->
    <div class="sort">
      <div class="item" v-for="item in categoryList" :key="item.categoryId">
        <div class="img">
          <img :src="item.imgUrl" />
        </div>
        <div>{{ item.name }}</div>
      </div>
    </div>
    <!-- 列表 -->
    <div class="list"> 商品 </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: '',
    setup() {
      const searchValue = ref('');
      const imgList = ref([
        { img: '1', id: 1 },
        { img: '2', id: 2 },
        { img: '3', id: 3 },
        { img: '4', id: 4 },
      ]);
      const onSearch = (val) => {
        console.log('val', val);
      };

      const categoryList = ref([
        {
          name: '新蜂超市',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png',
          categoryId: 100001,
        },
        {
          name: '新蜂服饰',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
          categoryId: 100003,
        },
        {
          name: '全球购',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png',
          categoryId: 100002,
        },
        {
          name: '新蜂生鲜',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png',
          categoryId: 100004,
        },
        {
          name: '新蜂到家',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
          categoryId: 100005,
        },
        {
          name: '充值缴费',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png',
          categoryId: 100006,
        },
        {
          name: '9.9元拼',
          imgUrl: 'https://s.yezgea02.com/1604041127880/9.9%402x.png',
          categoryId: 100007,
        },
        {
          name: '领劵',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png',
          categoryId: 100008,
        },
        {
          name: '省钱',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
          categoryId: 100009,
        },
        {
          name: '全部',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
          categoryId: 100010,
        },
      ]);
      return { imgList, searchValue, onSearch, categoryList };
    },
  });
</script>
<style lang="less" scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    width: 100%;
    line-height: 200px;
    text-align: center;
    background-color: #ccc;
  }

  .sort {
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 13px;
    background-color: #ccc;

    .item {
      width: 20%;
      margin: 0 auto;
      text-align: center;
      img {
        width: 50%;
        height: 50%;
      }
      div {
        font-size: 12px;
        padding: 5px 0;
      }
    }
  }
</style>
