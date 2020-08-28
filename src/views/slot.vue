<template>
  <div>
    <h1>slot插槽</h1>
    <div>
      <h3>插槽内容</h3>
      <p>Vue实现了一套内容分发的API，将slot元素作为承载分发内容的出口</p>
      <p>它允许你像这样合成组件</p>
      <navigation-link url="/prop"> <a-icon type="bug"></a-icon>Your prop </navigation-link>
      <p>
        注意：如果navigation-link的template中没有包含一个slot元素，则该组件起始标签和结束标签之间的任何内容都会被抛弃
      </p>
    </div>
    <hr />
    <br />
    <h3>编译作用域</h3>
    <p>当你想在一个插槽中使用数据时，</p>
    <navigation-link url="/prop">Lool in ad {{ user.name }}</navigation-link>
    <p>
      该插槽跟模板的其他地方一样可以访问相同的实例property，（相同的作用域），而不能访问navigation-link的作用域，url是访问不到的
    </p>
    <h4>point:父级模板里的所有内容都是在父级作用域中编译的：子模版里的所有内容都是在子作用域中编译的</h4>
    <hr />
    <br />
    <h3>后备内容</h3>
    <p>后备内容有时为一个插槽设置具体的后备内容是很有用的，它只会在没有提供内容的时候被渲染。</p>
    <div>
      <p>
        现在当我在一个父级组件中使用submit-button组件并且不提供任何插槽内容时，后备内容submit将会被渲染，但是如果我们提供内容，则这个提供的内容将会被渲染从而取代后备内容
      </p>
      <submit-button></submit-button>
      <submit-button>Remove</submit-button>
    </div>
    <hr />
    <br />
    <h3>具名插槽</h3>
    <div>
      <p>
        有时我们需要多个插槽，对于这样的情况，slot元素有一个特殊的attribute:name。这个attribute可以用来定义额外的插槽：
      </p>
      <base-layout>
        <template v-slot:header>
          <h1>Here might be a page title</h1>
        </template>
        <template v-slot:default>
          <p>A paragraph for the main content</p>
        </template>
        <template v-slot:footer>
          <p>Here's some contact info</p>
        </template>
      </base-layout>
    </div>
    <hr />
    <br />
    <h3>作用域插槽</h3>
    <p>有时让插槽内容能够访问子组件中才有的数据是很有用的，</p>
    <div>
      <!-- <slot-user>{{ users.firstName }}</slot-user> -->
      <slot-user>
        <template v-slot:default="slotProps">
          {{ slotProps.users.firstName }}
        </template>
      </slot-user>
    </div>
    <hr />
    <br />
    <h3>独占默认插槽的缩写语法</h3>
    <p>当被提供的内容只有默认插槽时,组件的标签才可以被当作插槽的模板来使用.这样我们就可以把v-slot直接用在组件上</p>
    <slot-user v-slot:default="slotProps">{{ slotProps.users.firstName }}</slot-user>
    <slot-user v-slot="slotProps">{{ slotProps.users.firstName }}</slot-user>
    <p>注意默认插槽的缩写语法不能和具名插槽混用,因为他会导致作用域不明确</p>
    <!-- <slot-user v-slot="slotProps">
      {{ slotProps.users.firstName }}
      <template v-slot:other="otherSlotProps">
        slotProps is not availabel here
      </template>
    </slot-user> -->
    <p>只要出现多个插槽,请始终为所有的插槽使用完整的基于template语法</p>
    <slot-user>
      <template v-slot="slotProps">{{ slotProps.users.firstName }}</template>
      <!-- <template v-slot:other="otherSlotProps">
        slotProps is not availabel here
        {{ otherSlotProps.users.name }}
      </template> -->
    </slot-user>
    <hr />
    <br />
    <h3>解构插槽prop</h3>
    <p>作用域插槽的内部工作原理时将你的插槽内容包括在一个传入单个参数的函数里</p>
    <slot-user v-slot="{ users }">
      {{ users.name }}
      {{ users.firstName }}
    </slot-user>
    <p>
      这意味着v-slot的值实际上可以时任何作为函数定义中的参数的js表达式.这样,可以使模板更简洁,尤其使在该插槽提供了多个prop的时候.它同样开启了prop重命名等其他可能,可以重命名
    </p>
    <slot-user v-slot="{ users: person }">
      {{ person.firstName }}
    </slot-user>
    你甚至可以定义后备内容,用于插槽prop是undefined的情形:
    <slot-user v-slot="{users={firstName:'Guest'}}">
      {{ users.firstName }}
    </slot-user>
    <hr />
    <br />
    <h3>动态插槽名</h3>
    <p>动态指令参数也可以用在v-slot上,来定义动态的插槽名</p>
    <div>
      <base-layout>
        <template v-slot:[dynamicSlotName]>{{ dynamicSlotContent }}</template>
      </base-layout>
    </div>
    <hr />
    <br />
    <h3>具名插槽的缩写#</h3>
    <div>
      <p>跟v-on和v-bind一样，v-slot也有缩写，即把参数之前的所有内容（v-slot）替换为字符#。v-slot:header->#header</p>
      <base-layout>
        <template #footer>哈哈哈哈</template>
        <p>我会显示在上面main上</p>
        <template #header>
          我会显示在header上
        </template>
      </base-layout>
      <p>以下语法是无效的</p>
      <!-- <slot-user #="{user}">{{ users.firstName }}</slot-user> -->
    </div>
    <hr />
    <br />
    <h3>其他</h3>
    <p>
      插槽prop允许我们将插槽转换为可复用的模板，这些模板可以基于输入的prop渲染出不同的内容。着在设计封装数据逻辑同时允许父级组件自定义部分布局的可复用组件时是最有用的
    </p>
    <div>
      <todo-list>
        <template v-slot:todo="{ todo }">
          <span v-if="todo.isComplete">V</span>
          {{ todo.text }}
        </template>
      </todo-list>
    </div>
    <hr />
    <br />
    <h3>数据暴露</h3>
    <div>
      <p>当我们压迫父组件插槽内容访问到子组件的数据时，可以在子组件中使用数据暴露</p>
      <slot-prop #default="slotData1">{{ slotData1.userInfo.sex }}</slot-prop>
      <p></p>
      <p>不需要再自定义一个名字，直接使用es6的语法直接解构slotProp</p>
      <slot-prop #default="{userInfo}">{{ userInfo.name }}</slot-prop>
    </div>
    <hr />
    <br />
    <h3>废弃了的语法</h3>
    <p>slot,slot-scope</p>
  </div>
</template>

<script>
import NavigationLink from "@/components/NavigationLink.vue";
import SubmitButton from "@/components/SubmitButton.vue";
import BaseLayout from "@/components/BaseLayout.vue";
import SlotUser from "@/components/SlotUser.vue";
import TodoList from "@/components/TooList.vue";
import SlotProp from "@/components/SlotProp.vue";
export default {
  components: {
    NavigationLink,
    SubmitButton,
    BaseLayout,
    SlotUser,
    TodoList,
    SlotProp,
  },
  data() {
    return {
      user: [{ name: "wang" }],
      dynamicSlotName: "footer",
    };
  },
  computed: {
    dynamicSlotContent() {
      const dynamicSlotContent = {
        header: "填充头部内容",
        default: "填充默认内容",
        footer: "填充底部内容",
      };
      return dynamicSlotContent[this.dynamicSlotName];
    },
  },
};
</script>

<style></style>
