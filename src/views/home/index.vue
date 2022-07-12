<template>
  <div class="container">
    <!-- 开启顶部安全区适配 -->
    <van-nav-bar safe-area-inset-top />
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
    <div class="list">
      <!-- tab切换 -->
      <van-tabs v-model:active="active">
        <van-tab v-for="item in tabList" :title="item.label" :key="item.value" />
      </van-tabs>
      <div class="contain">
        <div class="contain_item" v-for="item in goods" :key="item.id">
          <div class="contain_left">
            <img class="contain_img" :src="item.imgUrl" alt="" />
          </div>
          <div class="contain_right">
            <div class="title">{{ item.title }}</div>
            <div class="sub_title">{{ item.subTitle }}</div>
            <div class="cart">
              <van-icon name="shopping-cart" color="orange" :size="20" />
            </div>
          </div>
        </div>
        <div @click="handleMore">
          <van-divider :style="{ padding: '0 16px 10px' }"> 加载更多 </van-divider>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import IMG from '/@/assets/image/home/demo1.png';
  import { useGo } from '/@/utils/usePage';
  export default defineComponent({
    name: '',
    setup() {
      const go = useGo();
      const searchValue = ref('');
      const active = ref(0);
      const imgList = ref([
        { img: '1', id: 1 },
        { img: '2', id: 2 },
        { img: '3', id: 3 },
        { img: '4', id: 4 },
      ]);

      const tabList = ref([
        { label: '服饰', value: 0 },
        { label: '生鲜', value: 1 },
        { label: '农产品', value: 2 },
      ]);

      const goods = ref([
        {
          title: '阿曼达旗袍',
          subTitle: '中国风',
          imgUrl: IMG,
          id: 1,
        },
        {
          title: '阿曼达旗袍',
          subTitle: '中国风',
          imgUrl: IMG,
          id: 21,
        },
        {
          title: '阿曼达旗袍',
          subTitle: '中国风',
          imgUrl: IMG,
          id: 3,
        },
        {
          title: '阿曼达旗袍',
          subTitle: '中国风',
          imgUrl: IMG,
          id: 4,
        },
        {
          title: '阿曼达旗袍',
          subTitle: '中国风',
          imgUrl: IMG,
          id: 5,
        },
        {
          title: '阿曼达旗袍',
          subTitle: '中国风',
          imgUrl: IMG,
          id: 6,
        },
      ]);
      const onSearch = (val) => {
        console.log('val', val);
      };

      const handleMore = () => {
        go('/goods');
      };

      const categoryList = ref([
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
      return { imgList, searchValue, onSearch, categoryList, tabList, active, goods, handleMore };
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
  .list {
    padding: 10px;
  }
  .contain {
    padding: 10px 0 20px;
    .contain_item {
      display: flex;
      background-color: #fff;
      border-radius: 6px;
      padding: 10px 5px;
      margin-bottom: 10px;
      .contain_left {
        width: 60px;

        margin-right: 10px;
      }
      .contain_img {
        width: 60px;
        height: 60px;
      }
      .contain_right {
        flex: 1;
        .title {
          font-size: 14px;
          padding: 5px 0;
        }
        .sub_title {
          color: #999;
          padding: 5px 0;
          font-size: 12px;
        }
      }
    }
    .cart {
      display: flex;
      justify-content: flex-end;
      padding-right: 20px;
    }
  }
</style>
