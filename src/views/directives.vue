<template>
  <div>
    <h1>指令</h1>
    <div>概念：指令时带有v-前缀的特殊attribute。指令attribute的值预期时单个JS表达式（v-for时例外）</div>
    <p>v-if</p>
    <p v-if="seen">变量为true显示出来我</p>
    <div>
      <h3>参数</h3>
      <div>
        <a v-bind:href="url">首页</a>
      </div>
      <p><a v-on:click="doSomething">点击</a></p>
    </div>
    <div>
      <h3>动态参数</h3>
      <div>
        <h3>2.6.0新增[方括号]传参</h3>
        <div>
          <!-- [attributeName] 
          会被强制转化为小写  
          -->

          <p><a v-bind:[attributeName]="url">动态传参</a></p>
          <p><a v-on:[eventName]="doSomething">bug动态传函数</a></p>
        </div>
      </div>
    </div>
    <div>
      <h3>对动态参数表达式的约束</h3>
      <!-- 不能够有空格 -->
      <!-- [foo +bar] -->
      <a v-bind:[foo+bar]="value">click</a>
    </div>
    <div>
      <h3>修饰符</h3>
      <div>概念：修饰符是以半角句号.指明的特殊后缀，用于指出一个指令应该以特殊方式绑定</div>
      <div>
        <form v-on:submit.prevent="onSubmit">
          <input type="text" value=".prevents" />
          <input type="submit" value=".prevents" />
        </form>
      </div>
    </div>
    <div>
      <h3>v-缩写</h3>
      <div>
        概念：前缀作为一种视觉提示，用来识别模板中Vue特定的attribute。当你在使用vue.js为现有标签添加动态行为时，v-前缀很有帮助，然而，对于一些频繁用到的指令来说，就会感到使用繁琐。
      </div>
      <div>
        <p>v-bind缩写</p>
        <p><a v-bind:href="url">v-bind:href</a></p>
        <p><a :href="url">v-bind缩写:href</a></p>
        <!-- 动态参数的缩写 -->
        <p><a :[key]="url">v-bind动态缩写:[key]2.6.0+</a></p>
      </div>
      <div>
        <p>v-on缩写</p>
        <p><a v-on:click="doSomething">v-on:click</a></p>
        <p><a @click="doSomething">v-on缩写@click</a></p>
        <p><a @[event]="doSomething">v-on动态缩写@[event]</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seen: true,
      url: "/",
      attributeName: "href",
      eventName: "focus",
      foo: "ds",
      bar: "sd",
      value: "house",
      key: "href",
      event: "click",
    };
  },
  methods: {
    doSomething() {
      alert("用我来监听Dom事件");
      console.log("doSomething事件");
    },
    onSubmit() {
      event.preventDefault();
      console.log(event);
    },
  },
};
</script>

<style scoped></style>
