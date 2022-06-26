import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

//micro-angular
registerApplication(
  "@sebastian-baquero/micro-react",
  () => System.import("@sebastian-baquero/micro-react"),
  (location) => location.pathname === '/micro-react',
);

//micro-angular
registerApplication(
  "@sebastian-baquero/micro-angular",
  () => System.import("@sebastian-baquero/micro-angular"),
  (location) => location.pathname === '/micro-angular',
);

//micro-vue
registerApplication(
  "@sebastian-baquero/micro-vue",
  () => System.import("@sebastian-baquero/micro-vue"),
  (location) => location.pathname === '/micro-vue',
);

//micro-svelte
registerApplication(
  "@sebastian-baquero/micro-svelte",
  () => System.import("@sebastian-baquero/micro-svelte"),
  (location) => location.pathname === '/micro-svelte',
);

applications.forEach(registerApplication);

layoutEngine.activate();
start();
