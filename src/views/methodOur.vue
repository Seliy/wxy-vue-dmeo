<template>
  <div>
    <h1>自定义事件</h1>
    <p>当子组件需要向父组件传递数据时。就要用到自定义事件</p>
    <p>子组件用emit()来触发事件，父组件用on来监听子组件的事件</p>
    <h3>事件名</h3>
    <div>
      <p>不同于组件和prop，事件名不存在任何自动化的大小写转换，而是触发的时间名需要完全匹配监听这个事件所用的名称，</p>
      <my-component></my-component>
      <p>
        不同于组件和prop，事件名不会被用作一个js变量名或property名，所以i就没有理由使用camelCase或PascalCase。并且v-on时间啊监听器在DOM模板中会被自动转换为全小写，（因为HTML是大小写不敏感的），所以v-on：myEvent将会变成v-on:myevent导致myEvent不可能被监听到。我们推荐你始终使用kebab-case的事件名
      </p>
      <hr />
      <br />
      <h3>自定义组件的v-model</h3>
      <p>
        一个组件上的v-model默认会利用名为value的prop和名为input的事件，但是像单选框，复选框等类型的输入控件可能会将value
        attribute用于不同的目的。model选项可以用来避免这样的冲突
      </p>
      <base-checkbox v-model="lovingVue"></base-checkbox>
      <hr />
      <br />
      <h3>将原生事件绑定到组件上</h3>
      <p>你可能有很多此想要在一个组件的根元素上直接监听一个原生事件。这时，可以使用v-on的.native修饰符</p>
      <base-checkbox @focus.native="onFocus"></base-checkbox>
      <h3>$listeners</h3>
      <base-input-one></base-input-one>
    </div>

    <hr />
    <br />

    <h3>.sync修饰符</h3>
    <p>
      可能需要对一个prop进行“双向绑定”，不幸的是，真正的双向绑定会带来维护上的问题，因为子组件可以变更父组件，且在父组件和子组件都没有明显的变更来源。我们推荐以update：myPropName的模式触发事件取而代之。举个例子，在一个包含title
      prop的假设的组件中，我们可以用以下方法表达对其赋新值的意图 this.$emit('update:title',mewTitle)
    </p>
    <p>然后父组件可以监听那个事件并根据需要更新一个本地的数据property。</p>
    <base-input-one></base-input-one>
  </div>
</template>

<script>
import Vue from "vue";
import MyComponent from "@/components/MyComponent.vue";
const BaseCheckbox = Vue.component("base-checkbox", {
  model: {
    prop: "checked",
    event: "change",
  },
  props: {
    checked: Boolean,
  },
  template: `<input type="checkbox" v-bind:checked='checked' v-on:change="$emit('change',$event.target.checked)" @focus="$emit(onFocus)">`,
});
const BaseInputOne = Vue.component("base-input-one", {
  inheritAttrs: false,
  props: ["label", "value"],
  computed: {
    inputListeners: function() {
      var vm = this;
      //Object.assign将所有的对象合并为一个新对象
      return Object.assign(
        {},
        //我们从父级添加所有的监听器
        this.$listeners,
        //我添加自定义监听器
        //覆写一些监听器的行为
        {
          input: function(event) {
            vm.$emit("input", event.target.value);
          },
        }
      );
    },
  },
  template: `<label>{{label}}<input v-bind="$attrs" v-bind:value="value" v-on="inputListeners"></label>`,
});
export default {
  components: {
    MyComponent,
    BaseCheckbox,
    BaseInputOne,
  },
  data() {
    return {
      lovingVue: true,
    };
  },
  computed: {},
  method: {
    doSomething() {
      alert("父组件接受事件");
    },
    onFocus() {
      alert("接受");
    },
  },
  mounted() {},
};
</script>

<style></style>
