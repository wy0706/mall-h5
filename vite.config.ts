import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';
import { UserConfig, ConfigEnv, loadEnv } from 'vite';
import { createProxy } from './src/utils/proxy';
import { wrapperEnv } from './src/utils/utils';
import { primaryColor } from './src/settings/projectSetting';
import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import';
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root); // 加载env环境

  // The boolean type read by loadEnv is a string. This function can be converted to boolean type
  const viteEnv = wrapperEnv(env);

  console.log('viteEnv====', viteEnv);
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv;
  const isBuild = command === 'build'; //是否生产环境

  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    server: {
      // Listening on all local IPs
      host: true,
      port: VITE_PORT,
      // Load proxy configuration from .env
      proxy: createProxy(VITE_PROXY),
    },

    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            '--van-primary-color': primaryColor,
            'text-color': 'red',
            'font-size-md': '15px',
            'font-size-lg': '17px',
            'action-bar-button-danger-color': '#7232dd',
            'action-bar-button-warning-color': '#3eaf7c',
          },
        },
      },
    },

    // The vite plugin used by the project. The quantity is large, so it is separately extracted and managed

    plugins: [
      vue(),
      // createStyleImportPlugin({
      //   resolves: [VantResolve()],
      //   libs: [
      //     {
      //       libraryName: 'vant',
      //       esModule: true,
      //       resolveStyle: (name) => `vant/es/${name}/style`,
      //     },
      //   ],
      // }),
      Components({
        resolvers: [VantResolver()],
      }),
    ],
  };
};
