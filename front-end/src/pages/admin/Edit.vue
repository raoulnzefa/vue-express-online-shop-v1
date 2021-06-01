<template>
  <div>
    <div class="title">
        <!-- $route 这个变量是 Vue 在运行时为我们自动插入到所有组件属性中的, 所有不用手动去管理它 -->
      <h1>This is Admin/Edit/{{$route.params.id}}</h1>
    </div>
  </div>
</template>