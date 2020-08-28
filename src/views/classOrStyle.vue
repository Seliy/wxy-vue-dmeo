<template>
  <div>
    <h1>Class与Style绑定</h1>
    <p>
      操作元素的class列表和内联样式是数据绑定的一个常见需求，因为他们都是attribute，所以我们可以用v-bind处理他们：只需要通过表达式计算出字符串结果即可。不过，自负床拼接麻烦且易错，因此，在将v-bind用于class和style时，Vue.js做了专门的增强。表达式结果的类型除了字符串之外，还可以时对象或数组。
    </p>
    <div>
      <h3>绑定HTMLCLASS</h3>
      <div>
        <h5>对象语法</h5>
        <p>我们可以传给v-bind:class一个对象，动态的切换class</p>
        <div v-bind:class="{ active: isActive, 'text-danger': hasError }">多个class可共存，我存在</div>
        <p>我们可以在这里绑定一个返回对象的计算属性</p>
        <div v-bind:class="classObject">11</div>
      </div>
      <div>
        <h5>数组语法</h5>
        <p>我们可以吧一个数组传给v-bind：class，应用一个class列表</p>
        <div v-bind:class="[activeClass, errorClass]">我是噢使用了与上面黄色相同的class</div>
        <p>如果你想根据条件切换列表中的class，可以用三元表达式</p>
        <div v-bind:class="[isActive ? activeClass : '', errorClass]">我使用了三元运算符法</div>
        <div :class="[{ active: isActive }, errorClass]"></div>
      </div>
      <div>
        <h5>用在组件上</h5>
        <p>
          当在一个自定义组件上使用class
          property时。这些class将被添加到该组件的根元素上。这个元素上已经存在的class不会被覆盖
        </p>
        <!-- <my-component class="baz boo"></my-component> -->
      </div>
      <h3>绑定内联样式</h3>
      <div>
        <h5>对象语法</h5>
        <p>
          v-bind:style 的对象语法十分直观--看着非常像css，但其实是一个javascript对象，CSS propety名可以用驼峰式
          或短横线分隔。记得用引号括起来）命名
        </p>
        <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">issue使用了style</div>
        <p>直接绑定一个样式对象通常更好，这会让模板更清晰</p>
        <div v-bind:style="styleObject">:style使用对象</div>
        <p>对象语法常常结合返回对象的计算属性使用</p>
      </div>
      <div>
        <h5>数组语法</h5>
        <p>v-bind:style的数组语法可以将多个样式对象应用到同一个元素上</p>
        <div v-bind:style="[baseStyles, overridingStyles]">使用多个样式对象</div>
      </div>
      <div>
        <h5>自动添加前缀</h5>
        <p>当v-bind：style使用需要添加浏览器引擎前缀的CSS property时。如transform，vue.js会自动侦测并添加响应的前缀</p>
      </div>
      <div>
        <h5>多重值</h5>
        <p>从2.3.0起你可以为style绑定中的property提供一个包含多个值的数组，常用于提供多个带前缀的值</p>
        <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'], color: 'red' }">多个值渲染最后一个</div>
        <p>如上述例子，只会渲染数组中最后一个被浏览器 支持的值。</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: true,
      error: null,
      activeClass: "active",
      errorClass: "text-danger",
      activeColor: "red",
      fontSize: 30,
      styleObject: {
        color: "red",
        fontSize: "19px",
      },
      baseStyles: {
        color: "green",
        background: "gray",
      },
      overridingStyles: {
        width: "auto",
        height: "100px",
      },
    };
  },
  computed: {
    classObject: function() {
      return {
        active: this.isActive && !this.error,
        "taxt-danger": this.error && this.error.type === "fatal",
      };
    },
  },
};
</script>
<style scoped>
.active {
  width: 300px;
  height: 30px;
  background: yellow;
}
.text-danger {
  color: red;
}
</style>
