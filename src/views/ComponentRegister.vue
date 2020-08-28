<template>
  <div>
    <h1>组件注册</h1>
    <h3>组件名</h3>
    <p>在注册一个组件的时候，我们始终需要给他一个名字，该组件名就是Vue.component的第一个参数。</p>
    <p>
      你给予组件的名字可能依赖你打算拿他来做什么。当直接在DOM中使用一个组件的时候，我们强烈推荐祖训W3c规范中的自定义组件名，字母全小写且必须包含一个连字符。
    </p>
    <hr />
    <h3>组件名大小写</h3>
    <p>定义组件名的方式有两种：使用kebab-case（短横线分隔命名），和PascalCase（首字母大写命名）</p>
    <hr />
    <h3>全局注册</h3>
    <h3>局部注册</h3>
    <p>
      局部注册往往时不够理想的。如果你使用一个像webpack的构建系统，全局注册所有的组件意味着即便你已经不在使用一个组件了，它仍然会被包含在你最终的构建结果中，这造成了用户下载的js的无畏的增加
    </p>
    <h4>在这些情况下，你可以通过一个不同的js对象来定义组件</h4>
    <p>var comA = {}</p>
    <component-a></component-a>
    <div>
      <h3>模块系统</h3>
      <p>你通过import/require使用一个模块系统。</p>
      <h4>在模块系统中局部注册</h4>
      <p>如果你使用了Babel，webpack的模块系统，我们推荐创建一个components目录，并将每个组件放置在其各自的文件中</p>
      <component-a></component-a>
      <h3>基础组件的自动化全局注册</h3>
      <p>
        可能你的许多组件只是包裹了一个输入框或按钮之类的元素，时相对通用的，我们有时候会把他们称为基础组件，他们会在各个组件中被频繁的用到
      </p>
      <p>所以会导致很多组件里都会有一个包含基础组件的长列表</p>
      <base-icon name="search"></base-icon>
      <base-input class="input-width" v-model="searchText" @keydown.enter.native="search"> </base-input>
      <base-button class="button-inline" @click.native="search">
        <base-icon name="search"></base-icon>
      </base-button>
      <p>
        注意：自定义组件调用时，不能直接使用事件方法，需要使用.native如@click.native：主要时为了监听组件跟元素的原生事件，给自定义的组件添加原生事件
      </p>
    </div>
  </div>
</template>

<script>
import ComponentA from "@/components/ComponentRegisterChildren.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import BaseInput from "@/components/BaseInput.vue";

export default {
  components: {
    ComponentA,
    BaseButton,
    BaseIcon,
    BaseInput,
  },
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    search() {
      debugger;
      console.log("aa");
    },
  },
};
</script>

<style scoped>
.input-width {
  width: 200px;
  display: inline-block;
}
.button-inline {
  display: inline-block;
}
</style>
