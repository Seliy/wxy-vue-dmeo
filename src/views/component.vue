<template>
  <div>
    <h1>组件基础</h1>
    <div id="components-demo">
      <button-counter></button-counter>
    </div>
    <h3>组件的复用</h3>
    <div id="components-demo">
      <button-counter></button-counter>
      <button-counter></button-counter>
      <button-counter></button-counter>
    </div>
    <p>注意当点击按钮时，每个组件都会各自独立维护它的count，因为你每用一次组件，就会有一个它的新实例被创建。</p>
    <h3>data必须是一个函数</h3>
    <div>
      <p>
        当我们定义这个button-counter组件时,一个组件的data选项必须是一个函数，因此每个实例可以维护一份被返回对象的对立的拷贝
      </p>
    </div>
    <hr />
    <h3>组件的组织</h3>
    <p>
      通常一个应用会以一颗嵌套的组件树的形式来组织，可能会有很多的组件，为了使这些组件能够在模板中使用，这些组件必须先注册以便Vue能够识别。这里有两种组件的注册类型：全局注册和局部注册。
      vue.component属于全局注册
    </p>
    <hr />
    <h3>通过Prop向子组件传递数据</h3>
    <p>
      Prop是你可以在组件上注册的一些自定义attribute。当一个值传递给一个prop
      attribute的时候，它就变成了那个组件实例的一个property。为了给博文组件传递一个标题，我们看可以用一个props选项将其包含在该组件可接受的prop列表中：
    </p>
    <div>
      <blog-post title="My journey with Vue"></blog-post>
      <blog-post title="Wang xin xin hahae"></blog-post>
      <blog-post title="My journey with Vue"></blog-post>
    </div>
    <hr />
    <div>
      <blog-post v-for="post in posts" v-bind:key="post.id" v-bind:title="post.title"></blog-post>
      <p>
        我们可以使用v-bind来动态传递prop，这在你一开始不清楚要渲染的具体内容，比如从一个api获取博文列表的时候，是非常有用的
      </p>
    </div>
    <h3>单个跟元素</h3>
    <p>当构建一个blog-post组件时，你的模板最终会包含的东西远不止一个标题：</p>
    <h3>{{ title }}</h3>
    <div v-html="content"></div>
    <div :style="{ fontSize: postFontSize + 'px' }">
      <list-post v-for="post in posts" :key="post.id" :post="post" @enlarge-text="postFontSize += $event"></list-post>
      <!-- @enlarge-text="postFontSize += 0.1 -->
    </div>
    <h3>监听子组件事件</h3>
    <p>在我们开发blog-post组件时，它的一些功能可能要求我们和父级组件进行沟通，</p>
    <hr />
    <h3>使用事件抛出一个值</h3>
    <p>有的时候用一个事件来抛出一个特定的值时非常有用的，</p>
    <hr />
    <div>
      <h3>在组件上使用v-model</h3>
      <p>自定义事件也可以用于创建支持v-model的自定义输入组件</p>
      <input v-model="searchText" />
      <!-- 等价于 -->
      <input v-bind:value="searchText" @input="searchText = $event.target.value" />
      <h3>通过插槽分发内容</h3>
      <p>
        和html元素一样，我们经常需要向一个组件传递内容,vue自定义的slot元素让这变得非常简单。我们只要在需要的地方加入插槽就可以了，就是这么简单
      </p>
      <alert-box>Something bad</alert-box>
    </div>
    <hr />
    <h3>动态组件</h3>
    <p>有的时候，在不同组件之间进行动态切换时非常有用的。</p>
    <p>可以通过Vue的component元素加一个特殊的is attribute来实现</p>
    <p>currentTabComponent可以包括已经注册组件的名字和一个组件的选项对象</p>
    <p>is的特点不受html模板限制</p>
    <component :is="currentTabComponent"></component>
    <hr />
    <h3>解析DOM模板时的注意事项</h3>
    <p>
      有些html元素，ul ol table select对于哪些元素可以出现在其内部时有严格限制的，而有些元素，诸如，li tr
      option智能出现在其他特定的元素内部
    </p>
    <table>
      <tr is="blog-post-row"></tr>
    </table>
  </div>
</template>

<script>
// import ButtonCounter from "./VueComponent";
import Vue from "vue";
const ButtonCounter = Vue.component("ButtonCounter", {
  data: function() {
    return {
      count: 10,
      currentTabComponent: "currentTabComponent",
    };
  },
  template: `<button @click="count++">You Clicked me {{count}} times</button>`,
});
const BlogPost = Vue.component("BlogPost", {
  props: ["title"],
  template: `<h3>{{title}}</h3>
  `,
});
const ListPost = Vue.component("ListPost", {
  props: ["post"],
  template: `<div>
    <h3>{{post.title}}</h3>    
     <button v-on:click="$emit('enlarge-text', 0.1)">Enlarge text</button>
    <div v-html="post.content"></div>
  </div>
  `,
});
// <button @click="$emit('enlarge-text')">Enlarge text</button>
const AlertBox = Vue.component("alert-box", {
  template: `<div class="demo-alert-box">
  <strong>Error</strong>
  <slot></slot></div>`,
});
const BlogPostRow = Vue.component("blog-post-row", {
  template: `<div class="demo-alert-box">
  <strong>Error</strong>
 </div>`,
});
export default {
  components: {
    ButtonCounter,
    BlogPost,
    ListPost,
    AlertBox,
    BlogPostRow,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "My journey with Vue", content: "dsdsdpskdpsd" },
        { id: 2, title: "W journey with Vue", content: "dsdsdpskdpsd" },
        { id: 3, title: "Z journey with Vue", content: "dsdsdpskdpsd" },
      ],
      title: "one",
      content: `<h2>hellp</h2>`,
      postFontSize: 14,
      searchText: "dsds",
    };
  },
  methods: {},
};
</script>

<style scoped>
.demo-alert-box {
  background: pink;
}
</style>
