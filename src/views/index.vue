<template>
  <div>
    <h1>首页</h1>
    <h3>目录</h3>
    <div>
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/insertValue">插值</router-link></li>
        <li><router-link to="/directives">指令</router-link></li>
        <li><router-link to="/computed">计算属性和侦听器</router-link></li>
        <li><router-link to="/classOrStyle">class和style</router-link></li>
        <li>
          条件渲染
          <ol>
            <li><router-link to="/vIf">V-if</router-link></li>
            <li><router-link to="/vShow">V-show</router-link></li>
          </ol>
        </li>
        <li>
          列表渲染
          <ol>
            <li><router-link to="/vFor">V-for</router-link></li>
          </ol>
        </li>
        <li>
          <router-link to="/method">事件处理</router-link>
        </li>
        <li><router-link to="/model">表单输入绑定</router-link></li>
        <li><router-link to="/component">组件基础</router-link></li>
        <li><router-link to="/register">组件注册</router-link></li>
        <li><router-link to="/prop">Prop</router-link></li>
        <li><router-link to="/our">自定义事件（还需再看） </router-link></li>
        <li><router-link to="/slot">插槽</router-link></li>
        <li><router-link to="/is">动态组件和异步组件</router-link></li>
        <li><router-link to="/edge">处理边界情况</router-link></li>
        <li><router-link to="/left">进入，离开列表的过渡</router-link></li>
        <li><router-link to="/directive">自定义指令</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
