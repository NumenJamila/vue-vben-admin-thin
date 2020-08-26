import { RouteConfigEx, LayoutType, ModuleRouteConfig } from '@/router/types';

import { createAsyncComponent } from '@/common/factory/AsyncComponentFactory';
import { PAGE_LAYOUT_COMPONENT } from '@/router/constant';

import { pageEnum } from '@/enums/pageEnum';

const prefix = '/dashboard';

const layout: LayoutType = {
  path: '/dashboard',
  component: PAGE_LAYOUT_COMPONENT,
  redirect: pageEnum.BASE_HOME,
  meta: {
    title: 'Dashboard',
    icon: 'home|svg',
  },
};

const routes: RouteConfigEx[] = [
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => createAsyncComponent(import('@/views/dashboard/welcome/index.vue')),
    meta: {
      title: '欢迎页',
      affix: true,
    },
  },
];

export default {
  routes: routes,
  prefix,
  layout,
} as ModuleRouteConfig;
