import type { AppRouteModule } from '/@/router/types';
const goods: AppRouteModule = {
  path: '/goods',
  name: 'Goods',
  component: () => import('/@/views/good/list/index.vue'),
  meta: {
    title: '商品',
  },
};

export default goods;
