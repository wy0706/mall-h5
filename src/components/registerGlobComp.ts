import type { App } from 'vue';
import { Button } from 'vant';
// import { ElColorPicker, ElButton } from 'element-plus'; .use(ElColorPicker).use(ElButton)
export function registerGlobComp(app: App) {
  app.use(Button);
}
