import { createApp } from 'vue';
import { setupRouter } from '/@/router';
import App from './App.vue';
import { registerGlobComp } from './components/registerGlobComp';
// 引入全局样式
import './styles/index.less';
import { ConfigProvider } from 'vant';
function Init() {
  const app = createApp(App);
  app.use(ConfigProvider);
  setupRouter(app);
  registerGlobComp(app);
  app.mount('#app');
}

Init();
