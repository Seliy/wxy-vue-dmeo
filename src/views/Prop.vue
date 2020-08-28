<template>
  <div>
    <h1>Prop</h1>
    <h3>Prop的大小写camelCase VS kebab-case</h3>
    <p>
      html中的attribute名时大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符，这意味着当你使用Dom中的模板时，camelCase（驼峰命名法）的prop名需要使用其等价的kebab-case（短横线分隔命名）命名：
    </p>
    <!-- prop在html中使用时短横线分隔法 -->
    <prop-a :prop-title="propData == 0 ? 'Prop' : '空'"></prop-a>
    <h3>prop类型</h3>
    <div>
      <p>prop可以这样写：props:['title','lien','author','sex']</p>
      <p>
        但是，通常你希望每个prop都有指定的值类型，这时，你可以以对象形式列出prop，这些property的名称和值分别是prop各自的名称和类型
      </p>
    </div>
    <h3>传递静态或动态Prop</h3>
    <div>
      <p>传一个静态的值</p>
      <prop-a prop-title="jingtai"></prop-a>
      <p>传一个动态的值</p>
      <prop-a :prop-title="propData + '使用了动态传值'"></prop-a>
      <p>任何类型都可以传给prop</p>
      <h3>传入一个数字</h3>
      <prop-a :likes="32"></prop-a>
      <p>使用一个变量进行动态赋值</p>
      <prop-a :likes="prop.likes"></prop-a>
      <hr />
      <h3>传入一个布尔值</h3>
      <p>在prop没有值的情况下，都意味着true</p>
      <prop-a is-published></prop-a>
      <hr />
      <p>静态</p>
      <prop-a is-published="false"></prop-a>
      <hr />
      <p>动态</p>
      <prop-a :is-published="prop.isPublished"></prop-a>
      <hr />
      <h3>传入一个数组</h3>
      <prop-a is-published :commentIds="[123, 324, 436]"></prop-a>
      <hr />
      <h3>传入一个对象</h3>
      <prop-a
        is-published
        :author="{
          name: 'wa',
          company: 'Vue',
        }"
      ></prop-a>
      <h3>传入一个对象的所有property</h3>
      <p>如果你想要将一个对象的所有property都作为prop传入，你可以使用不带参数的v-bind取代</p>
      <prop-a v-bind="prop"></prop-a>
      等价于
      <prop-a :likes="prop.likes" :isPublished="prop.isPublished"></prop-a>
    </div>
    <hr />
    <br />
    <h3>单向数据流</h3>
    <p>
      所有的prop都使得其父子prop之间形成了一个单向下行绑定：
      父级prop的更新会向下流动到子组件中，但是反过来则不行。这样会防止子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。额外的，每次父级组件发生变更时，子组件中所有的prop都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变prop，如果你这样做了，Vue会在浏览器的
      控制台中发出警告。
    </p>
    <p>
      1
      这个prop用来传递一个初始值：这个子组件接下来希望将其作为一个本地的prop数据来使用。在这种情况下，最好定义一个本地的data
      property 并将这个prop用作其初始值
    </p>
    <base-button :initialCounter="initialCounter" :size="size"></base-button>
    <base-button :initialCounter="initialCounter" :size="size"></base-button>
    <p>2 这个prop以一种原始的值传入且需要进行转换，在这种情况下，最好使用这个prop的值来定义一个计算属性</p>
    <!-- <p>{{ size }}</p> -->
    <p>
      注意在js中对象和数组时通过引用传入的，所以对于一个数组或对象类型的prop来说，在子组件中改变变更这个对象或数组本身将会影响到父组件的状态
    </p>
    <hr />
    <br />
    <h3>Prop验证</h3>
    <p>
      我们可以为组件的prop指定验证要求，例如，你知道的这些类型，如果有一个需求没有被满足，则Vue会在浏览器控制台警告你，这在开发一个会被别人用到的组件时尤其时有帮助的。
    </p>
    <p>为了定制prop的验证方式，你可以为props中的值提供一个带有验证需求的对象，而不是一个字符串数组。</p>
    <prop-b propString="true"></prop-b>
    <h3>类型检查</h3>
    <p>type可以是下列原生构造函数中的一个string,number,boolean,array,object,date,function,symbol，</p>
    <p>type还可以是一个自定义的构造函数，并且通过instanceof类进行检查确认。</p>
  </div>
</template>

<script>
import Vue from "vue";
import BaseButton from "@/components/BaseButton.vue";
const PropA = Vue.component("prop-a", {
  // 在js中时驼峰命名法
  props: { propTitle: String, likes: Number, isPublished: Boolean, commentIds: Array, author: Object },
  template: "<h3>{{propTitle}}{{likes}}{{isPublished}}{{commentIds}}{{author}}</h3>",
});

const PropB = Vue.component("prop-b", {
  props: {
    propNumber: Number,
    propTypes: [String, Number],
    propString: {
      type: String,
      required: true,
    },
    // 带有默认值的数字
    propNormalNumber: {
      type: Number,
      default: 100,
    },
    propNormalObject: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function() {
        return { message: "hello" };
      },
    },
    propValidator: {
      validator: function(value) {
        //这个值必须匹配字符串中的一个
        return ["success", "warning", "danger".indexOf(value) !== -1];
      },
    },
  },
  template: "<h3>{{propString}}</h3>",
});
export default {
  components: {
    PropA,
    PropB,
    BaseButton,
  },

  data() {
    return {
      propData: 0,
      initialCounter: "prop父向子传值",
      prop: {
        likes: 2,
        isPublished: true,
      },
      size: "2Sdkw",
      success: "",
    };
  },
  computed: {},
  // props: {
  //   title: String,
  //   likes: Number,
  //   sex: String,
  //   commentIds: Array,
  //   author: Object,
  //   callback: Function,
  //   contactPromise: Promise,
  //   isPublished: Boolean,
  // },
  mounted() {},
};
</script>

<style></style>
