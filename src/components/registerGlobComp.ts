import type { App } from 'vue';
import { Button, Swipe, SwipeItem, Search, Col, Row, Field } from 'vant';

// import { ElColorPicker, ElButton } from 'element-plus'; .use(ElColorPicker).use(ElButton)
export function registerGlobComp(app: App) {
  app.use(Button).use(Swipe).use(SwipeItem).use(Search).use(Row).use(Col).use(Field);
}
