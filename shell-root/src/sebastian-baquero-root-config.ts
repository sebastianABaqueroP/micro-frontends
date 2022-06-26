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

registerApplication(
  "@sebastian-baquero/micro-react",
  () => System.import("@sebastian-baquero/micro-react"),
  (location) => location.pathname === '/micro-react',
);

registerApplication(
  "@sebastian-baquero/micro-angular",
  () => System.import("@sebastian-baquero/micro-angular"),
  (location) => location.pathname === '/micro-angular',
);

applications.forEach(registerApplication);

layoutEngine.activate();
start();
