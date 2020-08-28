<template>
  <div>
    <h1>处理边界情况</h1>
    <div>
      <h3>访问元素&组件</h3>
      <p>在绝大数情况下，我们最好不要触达另一个组件实例内部或手动操作Dom元素。</p>
      <h4>访问根实例</h4>
      <p>在每个new Vue实例的子组件中，其根实例可以通过$root property 进行访问。</p>
      <p>{{ msg }}</p>
      <!-- <p>{{ this.$root.msg }}</p> -->
    </div>
    <hr />
    <br />
    <h3>访问父级组件实例</h3>
    <p>和$root类似，$parent可以用来从一个子组件访问父组件的实例</p>
    <hr />
    <br />
    <h3>访问子组件实例或子元素</h3>
    <p>
      尽管存在prop和事件，有的时候你仍然可能需要在js里直接访问一个子组件/为了达到这个目的，你可以通过ref这个attribute为子组件赋予一个ID引用
    </p>
    <div>
      <base-input ref="usernameInput"></base-input>
      <input ref="input" />
    </div>
    <hr />
    <br />
    <h3>程序化的事件侦听器</h3>
    <p>$emit它可以被v-on侦听，但是Vue实例同时在其事件接口中提供了其他的方法</p>
    <ul>
      <li>通过$on(eventName,eventHandler)侦听一个事件</li>
      <li>通过$once(eventName,eventHandler)一次性侦听一个事件</li>
      <li>通过$off(eventName,eventHandler)停止侦听一个事件</li>
    </ul>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
export default {
  components: {
    BaseInput,
  },
  data() {
    return {
      msg: "hh",
    };
  },
  methods: {
    focus: function() {
      this.$refs.input.focus();
    },
    // focus: function() {
    //   this.$refs.usernameInput.focus();
    // },
  },
  mounted() {
    // console.log(this.$refs.usernameInput);
    this.focus();
    // this.$refs.usernameInput.focus();
    // Pickaday是一个第三方日期选择器的库
    // this.picker = new Pikaday({
    //   field: this.$refs.input,
    //   format: "YYYY-MM-DD",
    // });
  },
  // 在组件被销毁之前，也销毁这个日期选择器
  beforeDestroy() {
    this.picker.destroy();
  },
};
</script>

<style></style>
