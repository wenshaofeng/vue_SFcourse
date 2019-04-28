

vue-cli2.0 和 vue-cli3.0 有天壤之别，主要得益于webpack4的零配置特性，vue-cli3.0 创建一个项目，不再需要我们书写庞杂的 vue webpack 配置，基本可以实现什么都不需要配置，就启动，编译，打包我们的项目。

## 使用 Vue UI创建一个项目
Vue UI 是vue-cli提供的一个可视化的项目管理工具。

### 安装vue-cli3.0 打开vue ui
> npm install -g @vue/cli

等待安装成功之后，在命令行输入 **vue ui** 就会自动打开浏览器进入 vue ui页面

> vue ui

```
$ vue ui
🚀  Starting GUI...
🌠  Ready on http://localhost:8000
```

## 项目结构目录整理，初始化文件添加

### 目录及源码分析

#### vue.config.js:
```
module.exports = {
    lintOnSave: false  // 在每次保存的时候是否使用ESlint检查代码
}
```
#### package.json
定义了一些项目的描述。比如说，项目的版本，项目的名称，项目运行的一些脚本和一些项目中的依赖；
**dependencies**: 项目在打包后要用到的一些依赖
**devDependencies**：项目在开发阶段用到的一些依赖

#### babel.config.js
babel的配置文件

#### postcss.config.js
这个是css自动补充一些兼容代码的配置

#### .gitignore
这个是Git提交的忽略文件

#### .eslintrc.js
这个是用来配置eslint规则的，如果想制定一些自己的规则可以在，rules 里面添加
```
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
```
#### public文件夹
public文件夹，里面放的是公共文件，

##### public -> index.html
index.html 这个是个模板文件。那么webpack在运行和打包项目的时候，会使用这个html文件，生成最后的项目的index.html

##### public -> favicon.ico
这个是在标签栏上显示的小图标

#### src文件，项目的主文件

##### src -> assets文件夹
这个用来放置一些静态资源的，比如图片，图标字体文件，都可以放在这个里面

##### src -> components文件夹 components（组件）
我们从代码中抽离出一些可以复用的逻辑，抽里成一个组件，以便我们复用。

##### src -> views文件夹
将写的页面全都放在这个里面

##### src -> App.vue
这个是基础组件

##### src -> main.js
项目入口文件

##### src -> router.js
路由文件

##### src -> store.js
vuex，项目状态管理文件

### 添加的配置或文件

#### 添加 .editorconfig
使用vscode 的，可以添加一个编译器的文件，这个文件可以配置一些编译器的使用习惯

```
root = true         // 让我们配置文件生效
[*]                 // 应用于全部文件
charset = utf-8     // 编码设置成utf-8
indent_style = tab  // 缩进使用tab
indent_size = 2     // 缩进的尺寸
```

在vscode中，需要使用安装一个叫EditorConfig for VS Code

#### 添加 src -> api文件夹
api就是接口，你的一些项目的ajax请求可以写在这个里面，作为一个统一的管理

#### 添加 src -> assets文件夹 -> img文件夹
这是对 assets文件夹进行整理，img文件里面放置图片

#### 添加 src -> assets文件夹 -> font文件夹
这是对 assets文件夹进行整理，font文件里面放置图标字体，字体文件

#### 添加 src -> config文件夹 -> index.js
项目中的一些配置放在config文件夹里面的index.js中。使用es6的模块系统，导出一个配置对象。

```
export default {
	//
}
```

设置好之后想在其他地方用到这个的时候，想要引入的话，需要在 **store.js** 中这样引入
```
import config form './config'   // 路径只写到config，他会自动在config文件夹中找，index.js文件，引入配置对象。

import config form './config/index'  // 如果这样写的话，会直接找到index.js文件，引入配置对象。
```
#### 添加 src -> directive文件夹
用来放置vue的自定义指令

#### 添加 src -> lib文件夹 -> util.js
里面首先一个加util.js。可以将于业务结合的工具和方法

#### 添加 src -> lib文件夹 -> tools.js
放一些与业务没有耦合，纯粹的是一种工具函数

#### 添加 src -> router文件夹 -> index.js


配置完成后 index.js
```javascript
import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

export default new Router({
  routes: routes
})

```

配置完成后 router.js
```
import Home from './views/Home.vue'
export default [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
	}
]
```
#### 添加 src -> store文件夹
stroe文件夹主要用来处理vuex


#### 操作 src -> store文件夹 -> index.js 
将生成的3个文件， **state.js**， **mutations.js**， **actions.js**三个文件引入 **index.js** 中

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions
})
```
使用es6模块，默认引用的时候，可以使用简写方式，对上面代码修改为：
```
export default new Vuex.Store({
  state
  mutations
  actions
})
```
随着我们的项目越加复杂，有一些板块，我们可以创建一些板块，模块，将他们加载进来，例如：首先我们要先创建一个 **module文件夹** 里面放着我们的板块，比如与用户相关的，比如用户的用户名，用户信息，都放在 **user.js** 中。

```javascript
const state = {
  //
}
const mutations = {
  //
}
const actions = {
  //
}

// 使用es6模块将导出去
export default {
  state,
  mutations,
  actions
}

```
创建完成之后，如何引进来呢？ 在index.js中,首先import进来，然后再export default 的 modules中引入就行。示例代码如下：

```javascript
import Vue from 'vue'
import Vuex from 'vuex'
// import config form './config/index'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    user
  }
})

```


#### 添加 mock

##### src -> mock -> index.js
```javascript
// 引入Mock
import Mock from 'mockjs'

// 后面定义的接口模拟器都定义在中间位置

// 最后要导出Mock
export default Mock

```

## 基本配置讲解，跨域配置 

#### vue.config.js配置

##### 定义项目的基本路径
```javascript
// 定义BASE_URL常量，我们分两种情况，当前是在开发环境还是要打包编译
// 如果当前是开发环境（procution），那这种情况下我们的路径设置为了 /iview-admin/ 如果不是，路径为 /
const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin/' : '/'
// 在上面一个 / (斜线) 代表你的项目是要指定在域名的根目录下，如果你的项目要指定在 iview-admin 下，那么你就需要这样写（'/iview-admin/'）

baseUrl: BASE_URL,
```


##### 颗粒化配置webpack（方便开发的配置）
它里面是一个方法，它里面是一个链式调用，首先我们需要在之前先定义一个方法，先引入node的path模块，接下来，定义一个resolve方法，后来加载路径。那么这种也可以进行简写,这个使用的是ES6的简短函数。然后引入src。 那么这个路径就代表你的当前路径拼接上你的src。

.set('@', resolve('src')) 这样设置，@符号就代表src这个路径，以后再项目中引用到东西的地方，都可以使用@符号代替前面的src到这一级的目录。比如要引入api的话，就是 @/api 就可以了。为了方便，还会用 _C 来代替 src/components 

```javascript
const path = require('path')
// 首先我们需要先定义一个方法
const resolve = dir => {
  return path.join(__dirname, dir)
}

chainWebpack: config => {
  config.resolve.alias
    .set('@', resolve('src'))
    .set('_c', resolve('src/components'))
}
```

resolve方法的简写
```javascript
const resolve = (dir) => path.join(__dirname, dir)

```

##### 跨域配置
使用devServer配置，devServer来配置proxy， proxy的值是我们需要代理的url，如果我的代理url为：http://localhost:4000 那么他会告诉开发服务器，将任何未知请求，也就是没有匹配到静态文件的请求都代理到 这个url，来满足跨域的需求
```javascript
devServer: {
    proxy: 'http://localhost:4000'
  }
```

##### vue.config.js全部源码
```javascript
const path = require('path')
// 首先我们需要先定义一个方法
const resolve = dir => {
  return path.join(__dirname, dir)
}

// 定义BASE_URL常量，我们分两种情况，当前是在开发环境还是要打包编译
// 如果当前是开发环境（procution），那这种情况下我们的路径设置为了 /iview-admin/ 如果不是，路径为 /
const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin/' : '/'
// 在上面一个 / (斜线) 代表你的项目是要指定在域名的根目录下，如果你的项目要指定在 iview-admin 下，那么你就需要这样写（'/iview-admin/'）

module.exports = {
  // 在每次保存的时候是否使用ESlint检查代码
  lintOnSave: false,
  // 定义项目的基本路径
  baseUrl: BASE_URL,
  // 颗粒化的配置一下webpack,它是一个方法，
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件，会减少我们打包的体积，加快打包速度
  productionSourceMap: false,
  // 跨域配置
  devServer: {
    proxy: 'http://localhost:4000'
  }
}

```