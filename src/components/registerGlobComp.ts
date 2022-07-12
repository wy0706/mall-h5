import type { App } from 'vue';
import {
  Button,
  Swipe,
  SwipeItem,
  Search,
  Col,
  Row,
  Field,
  Tab,
  Tabs,
  Divider,
  Form,
  CellGroup,
  NavBar,
} from 'vant';
export function registerGlobComp(app: App) {
  app
    .use(Button)
    .use(Swipe)
    .use(SwipeItem)
    .use(Search)
    .use(Row)
    .use(Col)
    .use(Field)
    .use(Tab)
    .use(Divider)
    .use(Form)
    .use(CellGroup)
    .use(NavBar)
    .use(Tabs);
}
