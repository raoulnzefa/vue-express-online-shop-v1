<template>
  <div>
    <div class="admin-new">
      <div class="container">
         <!-- <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <ul class="admin-menu">
            <li>
              <router-link to="/admin">查看商品</router-link>
            </li>
            <li>
              <router-link to="/admin/new">添加商品</router-link>
            </li>
            <li>
              <router-link to="/admin/manufacturers">查看生产商</router-link>
            </li>
            <li>
              <router-link to="/admin/manufacturers/new">添加生产商</router-link>
            </li>
          </ul>
        </div> -->
        <h1>后台管理</h1>
        <!-- router-view 用于渲染子路由组件，比如我们此时访问 /admin/new 页面，那么 router-view 部分会被替换成 New.vue 组件的内容 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>