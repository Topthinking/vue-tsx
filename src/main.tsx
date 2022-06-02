import { createApp, defineComponent } from "vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { ConfigProvider } from "ant-design-vue";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

dayjs.locale("zh-cn");

import App from "./App";

createApp(
  defineComponent({
    setup() {
      return () => (
        <ConfigProvider locale={zhCN}>
          <App />
        </ConfigProvider>
      );
    },
  })
).mount("#app");
