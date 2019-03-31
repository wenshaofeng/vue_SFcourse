# vue-router基础

> **课程主要内容**<br>
1、 router-link 和 router-view组件 <br>
2、 路由配置 <br> &emsp;&emsp;a. 动态路由<br> &emsp;&emsp;b. 嵌套路由<br>  &emsp;&emsp;c. 命名路由 <br> &emsp;&emsp;d. 命名视图 <br>
3、 JS操作路由 <br>
4、 重定向和别名 <br>

### router-link 和 router-view 组件

- `router-link` 是导航组件，支持用户在具有路由功能的应用中 (点击) 导航。 
- `router-view` 组件是一个 functional 组件，渲染路径匹配到的视图组件。<router-view> 渲染的组件还可以内嵌自己的 <router-view>，根据嵌套路径，渲染嵌套组件。

配合 <transition> 和 <keep-alive> 使用。如果两个结合一起用，要确保在内层使用 <keep-alive>：
```html
<transition>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</transition>
```



