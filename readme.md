# Microfronts Project with Angular, React, Vue and Svelte

## Table of Contents
1. [Requirements Info](#requirements-info)
2. [Installation requirements](#installation-requirements)
3. [SingleSPA framework](#singleSpa-framework)
4. [Shell root](#shell-root)
5. [React micro](#react-micro)
6. [Angular micro](#angular-micro)
7. [Vue micro](#vue-micro)
8. [Svelte micro](#svelte-micro)


## Table of Contents
<a name="requirements-info"></a>

### Requirements Info

```
Node: 16.10.0 or later
Angular CLI: 14.0.3 or later
React: 18.2.0 or later
Npm: 8.13.1 or later
```

```
ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 14.0.3
Node: 16.10.0
Package Manager: npm 8.13.1 
OS: darwin x64

Angular: 
... 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1400.3 (cli-only)
@angular-devkit/core         14.0.3 (cli-only)
@angular-devkit/schematics   14.0.3 (cli-only)
@schematics/angular          14.0.3 (cli-only)

```

<a name="installation-requirements"></a>

### Installation Requirements

#### Node Installation

<img src="https://the-guild.dev/blog-assets/nodejs-esm/nodejs_logo.png" alt="node-js"  width="200" height="200" />

Go to the site "https://nodejs.org/es/download" choose the latest stable version

#### Angular CLI

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7RhB1S-cFZdd0xIaOxVErCRNaQv8xH3eaz3twVQSn&s" alt="angular-cli"  width="200" height="200" />


***
Run into terminal the following command:
```
$ npm install -g @angular/cli #Latest Angular version
```

***
But if you want to install an specific version of Angular CLI please do the next command:
```
$ npm install -g @angular/cli@14  #Angular 14
```

<a name="singleSpa-framework"></a>

### SingleSPA framework

<img src="https://single-spa.js.org/img/single-spa-mark-magenta.svg" alt="single-spa"  width="200" height="200" />

***
Install SingleSPA framework running into terminal the following command:
```
$ npm install --goblal create-single-spa
```

<a name="shell-root"></a>

### Shell root

***
1. Create the shell root project in the root that you are going to work and access.

```
$ mkdir shell-root && cd shell-root
```
2. Setup project.

```
$ npm init single-spa
```

3. Choose:

> Directory for new project -- *.*

> Select type to generate -- *single-spa root config*

> Which package manager do you want to user? -- *npm*

> Will this project use Typescript -- *y*

> Organization name -- *your-name*


4. Install dependencies.

```
$ npm install
```

5. Open **src/microfrontend-layout.html** and remove the following line:

```
<application name="@single-spa/welcome"></application>
```

6. Open **src/index.ejs** and remove the line inside *systemjs-importmap* section:

```
 "@single-spa/welcome": "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js",
```
7. Run the project, which will run on *http://localhost:9000*

```
npm start
```

<a name="react-micro"></a>

### React Micro

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react"  width="200" height="200" />

***
1. Create the react micro project in the root that you are going to work and access.

```
$ mkdir micro-react && cd micro-react
```
2. Setup project.

```
$ npm init single-spa --framework react
```

3. Choose:

> Select type to generate -- *single-spa application / parcel*

> Which framework do you want to use? -- *react*

> Which package manager do you want to user? -- *npm*

> Will this project use Typescript -- *y*

> Organization name -- *your-name*

> Project name -- *micro-react*


> :warning: *Note:* After finish the process it will create a folder **/react** inside the folder **/micro-react**, that will have all sources of react micro app.

4. Install dependencies.

```
$ npm install
```

5. Run micro locally.

```
$ npm run start -- --port 8500
```

6. Setup micro into Shell Root project

> :warning: *Note:* First of all, you should move all the files inside **/react** to folder **/micro-react** and delete the folder **/react**

File: *index.ejs* 

```
...
<script type="systemjs-importmap">
    {
      "imports": {
        "react": "https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js",
        "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js",
        "@sebastian-baquero/root-config": "//localhost:9000/sebastian-baquero-root-config.js",
        "@sebastian-baquero/micro-react": "//localhost:8500/sebastian-baquero-micro-react.js"
      }
    }
  </script>
...
```

Update **src/sebastian-baquero-root-config.ts** adding this:

```
...
registerApplication(
  "@sebastian-baquero/micro-react",
  () => System.import("@sebastian-baquero/micro-react"),
  (location) => location.pathname === '/micro-react',
);
applications.forEach(registerApplication);

layoutEngine.activate();
start();
```

Update **src/microfronten-layout.html** adding this:

```
<main>
    <route default>
      <!-- React Micro-frontend implementation -->
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="./micro-react">React</a>
        </li>
      </ul>
    </route>
  </main>
```

<a name="angular-micro"></a>

### Angular Micro

<img src="https://cdn.worldvectorlogo.com/logos/angular-icon.svg" alt="react"  width="200" height="200" />

***
1. Create the angular micro project in the root that you are going to work and access.

```
$ mkdir micro-angular && cd micro-angular
```
2. Setup project.

```
$ npm init single-spa --framework angular
```

3. Choose:

> Select type to generate -- *single-spa application / parcel*

> Which framework do you want to use? -- *angular*

> Which package manager do you want to user? -- *npm*

> Will this project use Typescript -- *y*

> Project name -- *micro-angular*

> Would you like to add Angular Routing? -- *y*

> Which stylesheet format would you like to use? -- *SCSS*


:warning: *Note:* Wait some minutes until ask you to install something else.

> The package *single-spa-angular@x.x.x version will be installed an executed.
Would you like to proceed? -- *y*

> Does your application use Angular routing? -- *y*

> What port should your project run on? -- *4200*

*Note:* Review if a folder **/single-spa** was created inside the folder **/src** in your project and a file **main.single-spa.ts**, so if those appear in your project you could continue toward the next step.

> :warning: *Note:* After finish the process it will create a folder **/angular/micro-angular** inside the folder **/micro-angular**, that will have all sources of react micro app.

4. Install dependencies.

```
$ npm install
```

5. Update **src/app/app.module.ts**

```
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/micro-angular'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

5. Remove folder **src/app/empty-route**

6. Install *systemjs-webpack-interop* module

> :warning: *Note:* Before you continue towards to do this step, you should move all the files inside folder **/angular/micro-angular** to father folder **/micro-angular** and delete the child folder **/angular/micro-angular**.

Do the command bellow in the root of the angular project 'micro-angular' project.

```
npm install systemjs-webpack-interop -S
```

7. Add file **src/set-public-path.js** 

```
import { setPublicPath } from "systemjs-webpack-interop";

setPublicPath("@sebastian-baquero/micro-angular");
```

8. Inside **src/main.single-spa.ts** add the line bellow as the first line

```
import './set-public-path';

```

9. Install again the dependencies.

```
$ npm install
```

10. Run the project.

```
$ npm run start
```

11. Setup micro into Shell Root project

Add *zone.js* script ot the **src/index.ejs**

```
...
<script src="https://unpkg.com/zone.js"></script>
...
```

Update import map in the **src/index.ejs**

```
...
<script type="systemjs-importmap">
    {
      "imports": {
        "react": "https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js",
        "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js",
        "@sebastian-baquero/root-config": "//localhost:9000/sebastian-baquero-root-config.js",
        "@sebastian-baquero/micro-react": "//localhost:8500/sebastian-baquero-micro-react.js",
        "@sebastian-baquero/micro-angular": "//localhost:4200/main.js",
      }
    }
  </script>
...
```

Update **src/sebastian-baquero-root-config.ts** adding this:

```
...
registerApplication(
  "@sebastian-baquero/micro-angular",
  () => System.import("@sebastian-baquero/micro-angular"),
  (location) => location.pathname === '/micro-angular',
);
applications.forEach(registerApplication);

layoutEngine.activate();
start();
```

Update **src/microfronten-layout.html** adding this:

```
<main>
    <route default>
      <!-- React Micro-frontend implementation -->
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="./micro-react">React</a>
        </li>
        <li>
          <a href="./micro-angular">Angular</a>
        </li>
      </ul>
    </route>
  </main>
```

### Vue Micro

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" alt="react"  width="200" height="200" />

***
1. Create the vue micro project in the root that you are going to work and access.

```
$ mkdir micro-vue && cd micro-vue
```
2. Setup project.

```
$ npm init single-spa --framework vue
```

3. Choose:

> Select type to generate -- *single-spa application / parcel*

> Which framework do you want to use? -- *vue*

> Which package manager do you want to user? -- *npm*

> Will this project use Typescript -- *y*

> Organization name -- *your-name*

> Please pick a preset -- *Defaul ([Vue 3] babel, eslint)*


> :warning: *Note:* After finish the process it will create a folder **/vue** inside the folder **/micro-vue**, that will have all sources of react micro app.

4. Rename **src/components/HelloWord.vue** to **src/components/ACom.vue**.

5. Update **src/components/ACom.vue**

```
<template>
  <div>
    A component works!
  </div>
</template>

<script>
export default {
  name: 'ACom'
}
</script>

<style scoped>
</style>
```

6. Add **src/router/index.js**.

```
import { createRouter, createWebHistory} from "vue-router";
import ACom from "../components/ACom.vue";

const routes = [
  {
    path: "/micro-vue/a-com",
    name: "ACom",
    component: ACom
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
```

7. Update **src/main.js**

```
import "./set-public-path";
import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';
import router from "./router";

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecycle-props
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
        /*
        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
        */
      });
    },
  },
  handleInstance: app => {
    app.use(router);
  }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
```

8. Udpate **src/App.vue**

```
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div id="nav">
    <router-link to="/micro-vue">Home</router-link> | <router-link to="/micro-vue/a-com">A component</router-link>
  </div>
  <router-view></router-view>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active { 
  color: #42b983;
}
</style>

```

9. Add file **src/set-public-path.js** 

```
import { setPublicPath } from "systemjs-webpack-interop";

setPublicPath("@sebastian-baquero/micro-vue");
```

10. Install *systemjs-webpack-interop* module

Do the command bellow in the root of the angular project 'micro-vue' project.

```
npm install systemjs-webpack-interop -S
```

11. Install *vue-router* package (^4.0.0-0 and greater)

```
npm install vue-router
```

12. Install *vue-router* package (^4.0.0-0 and greater)

```
npm run serve
```

13. Setup micro into Shell Root project

File: *index.ejs* 

```
...
<script type="systemjs-importmap">
    {
      "imports": {
        "react": "https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js",
        "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js",
        "vue": "https://cdn.jsdelivr.net/npm/vue@3.2.37/dist/vue.global.js",
        "vue-router": "https://cdn.jsdelivr.net/npm/vue-router@4.0.16/dist/vue-router.global.js",
        "@sebastian-baquero/root-config": "//localhost:9000/sebastian-baquero-root-config.js",
        "@sebastian-baquero/micro-react": "//localhost:8500/sebastian-baquero-micro-react.js",
        "@sebastian-baquero/micro-angular": "//localhost:4200/main.js",
        "@sebastian-baquero/micro-vue": "//localhost:8080/js/app.js"
      }
    }
  </script>
...
```

Update **src/sebastian-baquero-root-config.ts** adding this:

```
...
registerApplication(
  "@sebastian-baquero/micro-vue",
  () => System.import("@sebastian-baquero/micro-vue"),
  (location) => location.pathname === '/micro-vue',
);
applications.forEach(registerApplication);

layoutEngine.activate();
start();
```

Update **src/microfronten-layout.html** adding this:

```
<main>
    <route default>
      <!-- React Micro-frontend implementation -->
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="./micro-react">React</a>
        </li>
        <li>
          <a href="./micro-vue">Vue</a>
        </li>
      </ul>
    </route>
  </main>
```

> :warning: *Note:* If something is bad when you are running the project and you are trying to access to vue micro project and you see and error that say like:
```*Cannot read properties of undefined (reading 'meta') at autoPublicPath*
```
Please add the code bellow inside the file **vue.config.js**

```
  configureWebpack: {
    output: {
      libraryTarget: 'system',
    },
  },
```

### Svelte Micro

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1702px-Svelte_Logo.svg.png" alt="react"  width="200" height="200" />

***
1. Create the svelte micro project in the root that you are going to work and access.

```
$ mkdir micro-svelte && cd micro-svelte
```
2. Setup project.

```
$ npm init single-spa --framework svelte
```

3. Choose:

> Select type to generate -- *single-spa application / parcel*

> Which framework do you want to use? -- *svelte*

> Which package manager do you want to user? -- *npm*

> Organization name -- *your-name*

> Project name -- *micro-svelte*


*Note:* After finish the process it will create a folder **/svelte** inside the folder **/micro-svelte**, that will have all sources of react micro app.

> :warning: *Note:* Before you continue towards to do this step, you should move all the files inside folder **/svelte** to father folder **/micro-svelte** and delete the child folder **/svelte**.


4. Setup micro into Shell Root project

File: *index.ejs* 

```
...
<script type="systemjs-importmap">
    {
      "imports": {
        "react": "https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js",
        "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js",
        "vue": "https://cdn.jsdelivr.net/npm/vue@3.2.37/dist/vue.global.js",
        "vue-router": "https://cdn.jsdelivr.net/npm/vue-router@4.0.16/dist/vue-router.global.js",
        "@sebastian-baquero/root-config": "//localhost:9000/sebastian-baquero-root-config.js",
        "@sebastian-baquero/micro-react": "//localhost:8500/sebastian-baquero-micro-react.js",
        "@sebastian-baquero/micro-angular": "//localhost:4200/main.js",
        "@sebastian-baquero/micro-vue": "//localhost:8080/js/app.js",
        "@sebastian-baquero/micro-svelte": "//localhost:5000/micro-svelte.js"
      }
    }
  </script>
...
```

Update **src/sebastian-baquero-root-config.ts** adding this:

```
...
registerApplication(
  "@sebastian-baquero/micro-svelte",
  () => System.import("@sebastian-baquero/micro-svelte"),
  (location) => location.pathname === '/micro-svelte',
);
applications.forEach(registerApplication);

layoutEngine.activate();
start();
```

Update **src/microfronten-layout.html** adding this:

```
<main>
    <route default>
      <!-- React Micro-frontend implementation -->
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="./micro-react">React</a>
        </li>
        <li>
          <a href="./micro-vue">Vue</a>
        </li>
        <li>
          <a href="./micro-svelte">Svelte</a>
        </li>
      </ul>
    </route>
  </main>
```




