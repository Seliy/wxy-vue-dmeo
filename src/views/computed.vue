<template>
  <div>
    <h1>计算属性和侦听器</h1>
    <div>
      <h3>计算属性</h3>
      <div>
        <p id="example">
          逆转：
          {{
            message
              .split("")
              .reverse()
              .join("")
          }}
        </p>
        <p>原本的数据:"{{ msg }}"</p>
        <p>经过计算属性的数据："{{ reversedMsg }}"</p>
        <p>Ma:'{{ Ma }}'</p>
        <p>reversedMa:"{{ reversedMa() }}"</p>
        <p>
          我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是计算属性是基于他们的响应式依赖进行缓存的。旨在相关响应式依赖发生改变时他们才会重新求值。这就意味着只要msg依赖还没有发生改变，多次访问msg计算属性会立即返回之前的计算结果，二不必再次执行函数。
        </p>

        <p>Date.now:返回自1970年1月1日00:00:00到当前时间的毫秒数：{{ now }}</p>
        <p>
          我们为什么需要缓存？假设我们有一个性能开销比较大的计算属性A，他需要遍历一个巨大的数组并做大量的计算，然后我们可能有其他的计算属性依赖于A。如果没有缓存，我们将不可避免的多次执行A的getter。如果你不希望有缓存，请用其他方法来替代。
        </p>
      </div>
      <div>
        <h3>计算属性PK侦听属性</h3>
        <p>
          Vue提供了一种更通用的方式来观察和响应Vue实例上的数据变动：侦听属性。当你有一些数据需要随着其他数据变动而变动时，你很容易滥用Watch。特别时如果你之前使用过AngulatJS。然而，通常更好的做法是使用计算属性而不是命令式的watch回调。
        </p>
        <p id="demo">{{ fullName }}</p>
      </div>
      <div>
        <h3>计算属性的setter</h3>
        <p>计算属性只有getter，不过在需要时你也可以提供一个setter</p>
        <p id="demo">{{ full1Name }}</p>
        <p>段落1：{{ paragraph1 }}</p>
        <p>段落2：{{ paragraph2 }}</p>
        <p>段落3：{{ paragraph3 }}</p>
        <button @click="clickMe">clickMe</button>
      </div>
      <div>
        <h3>侦听器</h3>
        <p>
          虽然计算属性在大多数情况更合适，但是有时也需要一个自定义的侦听器。这就是为什么Vue通过watch选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时。这个方式最有用的
        </p>
        <p>Ask a yes question:<input v-model="question" /></p>
        <p>{{ answer }}</p>
        <div>{{ str1 }}</div>
        <div><button @click="clickButton">请点击我</button></div>
        <p>完全声明方式</p>
        <div>
          {{ person.name }}
          <button @click="ClickStyle">点击完全声明方式</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hello.split.reverse.join",
      msg: "xinyue",
      Ma: "计算属性缓存Vs方法",
      firstName: "Foo",
      lastName: "Bar",
      fullName: "Foo Bar",
      question: "",
      answer: "I cannot give you an anser until you",
      paragraph1: "段落1的段落",
      paragraph2: "段落2的段落",
      str1: "原来的文本",
      person: { name: "joy" },
    };
  },
  watch: {
    person: {
      handler(newV, oldV) {
        console.log("newV", newV);
        console.log("oldV", oldV);
      },
      deep: true,
      immediate: true,
    },
    str1(newV, oldV) {
      console.log("===newV===", newV);
      console.log("===oldV===", oldV);
    },
    // question: function(newQuestion, oldQuestion) {
    //   this.answer = "Waiting for you to stop typing";
    //   newQuestion = "";
    //   oldQuestion = "";
    //   this.debouncedGetAnswer();
    // },
    firstName: function(val) {
      this.fullName = val + "" + this.lastName;
    },
    lastName: function(val) {
      this.fullName = this.firstName + "" + val;
    },
  },
  // created: function() {
  //_.debounce是一个通过Loadash限制操作频率的函数
  //在这个例子中，我们希望限制访问yesno.wtf/api的频率
  //AJAX请求直到用户输入完毕才会发出。想要了解更多关于
  //_.debounce函数
  //   this.debouncedGetAnswer = _.debounce(this.debouncedGetAnswer, 500);
  // },
  computed: {
    full1Name: {
      //getter
      get: function() {
        return this.firstName + "" + this.lastName;
      },
      //setter
      set: function(newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
    //计算属性的getter
    reversedMsg: function() {
      // this指向vm实例
      return this.msg
        .split("")
        .reverse()
        .join("");
    },
    now: function() {
      // Date.now:返回自1970年1月1日00:00:00到当前时间的毫秒数
      return Date.now();
    },
    paragraph3: {
      get() {
        return `${this.paragraph1}|${this.paragraph2}`;
      },
      set(value) {
        this.paragraph1 = value.split("|")[0];
        this.paragraph2 = value.split("|")[1];
      },
    },
  },
  methods: {
    clickMe() {
      this.paragraph3 = "段落3|段落3的段落";
    },
    reversedMa: function() {
      return this.Ma.split("")
        .reverse()
        .join("");
    },
    clickButton() {
      this.str1 = "已改变";
    },
    ClickStyle() {
      this.person.name = "mark";
    },
  },
  mounted() {
    console.log("this.reversedMsg", this.reversedMsg);
  },
};
</script>

<style></style>
