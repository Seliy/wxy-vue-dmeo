<template>
  <div>
    <h1>进入/离开&列表过渡</h1>
    <div>
      <h3>概述</h3>
      <p>Vue在插入，更新或者移除DOM时，提供多种不同方式的应用过渡效果</p>
      <ul>
        <li>在CSS过渡和动画中自动应用class</li>
        <li>可以配合使用第三方CSS动画库，如animate.css</li>
        <li>在过渡钩子函数中使用js直接操作DOM</li>
        <li>可以配合使用第三方js动画库，如Velocity.js</li>
      </ul>
    </div>
    <hr />
    <br />
    <h3>单元素/组件的过渡</h3>
    <p>Vue提供了transition的封装组件，可以给任何元素和组件添加进入/离开过渡</p>
    <ul>
      <li>条件渲染（使用v-if）</li>
      <li>条件展示（使用v-show）</li>
      <li>动态组件</li>
      <li>组件根节点</li>
    </ul>
    <div>
      <button v-on:click="show = !show">点我</button>
      <transition name="slide-fade">
        <p v-show="show" v-bind:style="styleobj">动画实例</p>
      </transition>
      <p>当插入或删除包含在transition组件中的元素时，Vue将会做以下处理：</p>
      <ul>
        <li>自动嗅探目标元素是否应用了css过渡或动画，如果是，在恰当的时机添加/删除Css类名</li>
        <li>如果没有找到js钩子函数，这些钩子函数将在恰当的时机被调用</li>
        <li>如果没有找到js钩子并且也没有检测到css过渡/动画，DOM操作在下一帧中立即执行</li>
        <li>如果没有找到js钩子并且也没有检测到css过渡/动画，Dom操作在下一帧中立即执行</li>
      </ul>
    </div>
    <hr />
    <br />
    <h3>过渡的类名</h3>
    <p>在进入/离开的过渡中，会有6个class切换</p>
    <ul>
      <li>
        v-enter:定义进入过渡的开始状态，在元素被插入之前生效，在元素被插入之后的下一帧移除
      </li>
    </ul>
    <hr />
    <br />
    <div>
      <h3>CSS动画</h3>
      <div id="example-2">
        <button @click="show2 = !show2">Toggle</button>
        <transition name="bounce">
          <p v-if="show2">hhshdifudfksujfo</p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      show2: false,
      styleobj: {
        fontSize: "30px",
        color: "red",
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
} */
/* .fade-enter, .fade-leave-to  {
  opacity: 0;
} */

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
