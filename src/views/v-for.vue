<template>
  <div>
    <h1>列表渲染</h1>
    <div>
      <h3>用v-for把一个数组对应为一组元素</h3>
      <p>
        我们可以用v-for指令基于一个数组来渲染一个列表。v-for指令需要使用item in items
        形式的特殊语法，其中items是源数据数组，而item则是被迭代的数组元素的别名。
      </p>
      <div>
        <ul id="example-1">
          <li v-for="item in items" :key="item.message">
            {{ item.message }}
          </li>
        </ul>
      </div>
      <div>
        <ul id="example-2">
          <li v-for="(item, index) in items" :key="index">{{ parentMessage }}-{{ index }}--{{ item.message }}</li>
        </ul>
      </div>
    </div>
    <div>
      <h3>在v-for里使用对象</h3>
      <p>你也可以用v-for来遍历一个对象的property</p>
      <div>
        <ul id="v-for-object" class="demo">
          <li v-for="(value, name, index) in object" :key="index">{{ value }}--{{ name }}--{{ index }}</li>
        </ul>
      </div>
    </div>
    <div>
      <h3>维护状态</h3>
      <p>
        当Vue正在更新使用v-for渲染的元素列表时，它默认使用"就地更新"的策略。如果数据项的顺序被改变。Vue将不会移动DOM元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。这个类似Vue1.x的track-by="$index"
      </p>
      <p>这个默认的模式时高效的，但是只适用于不依赖组件状态或临时DOM状态（例如：表单输入值）的列表渲染输出。</p>
      <p>
        为了给Vue一个提示，以便它能跟踪每一个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一的key
        attribute
      </p>
      <div>
        <ul v-for="item in items" :key="item.id">
          <li>{{ item.message }}</li>
        </ul>
      </div>
      <p>
        建议尽可能在使用v-for时提供key
        attribute，除非遍历输出的DOM内容非常简单，或者时刻依赖默认行为以获取性能上的提升。
      </p>
      <p>因为它是Vue识别节点的一个通用机制，key并不仅与v-for特别关联。后面我们将在指南中看到，他还具有其他用途</p>
      <p>不要使用对象或数组之类的非基本类型值作为v-for的key</p>
    </div>
    <div>
      <h3>数组更新检测</h3>
      <div>
        <h5>变更方法</h5>
        <p>Vue将被侦听的数组的变更方法进行了包裹，所以他们也将会触发视图更新。这些被包裹过的方法包括：</p>
        <ul>
          <li>push()</li>
          <li>pop()</li>
          <li>shift()</li>
          <li>unshift()</li>
          <li>splice()</li>
          <li>sort()</li>
          <li>reverse()</li>
        </ul>
        <div>
          变更方法：
          <ul id="list" v-for="(item, index) in List" :key="index">
            <li>{{ item.msg }}</li>
          </ul>
        </div>
      </div>
      <div>
        <h5>替换数组</h5>
        <p>
          变更方法，顾名思义，会变更调用了这些方法的原始数组。相比之下，也有非变更方法，例如：filter(),concat(),和slice()。它们不会变更原始数组，而总是返回一个新数组。当使用非变更方法时，可以用新数组替换旧数组：
        </p>
        <ul>
          <li>filter()创建一个新数组，其包含通过所提供函数实现的测试的所有元素</li>
          <li>concat()将一个或多个字符串与源字符串连接合并，形成一个新的字符串并返回。concat方法不影响原字符串。</li>
          <li>slice(beginIndex，endIndex)提取某个字符串的一部分，并返回 一个新的字符串，且不会改动原字符串</li>
        </ul>
        <div>
          <p>{{ filtered.filter(isBigEnough) }}</p>
          <ul id="filter" v-for="(item, index) in filterList" :key="index">
            <li>{{ item.number }}</li>
          </ul>
        </div>
        <div>
          <p>concat方法</p>
          <p>{{ myConcat1.concat(myConcat2) }}</p>
        </div>
        <div>
          slice使用方法
          <p>{{ mySlice.slice(2, 4) }}</p>
        </div>
        <p>
          你可能认为这将导致Vue丢弃现有Dom并重新渲染整个列表，幸运的是，事实并非如此。Vue为了使得Dom原色得到最大范围的重用而实现了一些智能的启发式方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。
        </p>
        <p>注意：由于js的限制，Vue不能检测数组和对象的变化。</p>
      </div>
    </div>
    <h3>显示过滤/排序后的结果</h3>
    <p>
      有时，我们想要显示一个数组经过过滤或排序后的版本，而不实际变更或重置原始数据。再这种情况下，可以创建一个计算属性，来返回过滤或排序后的数组/
    </p>
    <div>
      <ul>
        <li v-for="(n, index) in eventNumbers" :key="index">{{ n }}</li>
      </ul>
    </div>
    <p>在计算属性不适用的情况下（例如，在嵌套v-for循环中）你可以使用一个方法：</p>
    <div>
      <ul v-for="(set, index) in sets" :key="index">
        <li v-for="(n, index) in even(set)" :key="index">{{ n }}</li>
      </ul>
    </div>
    <h3>在v-for里使用值范围</h3>
    <p>v-for也可以接受整数。在这种情况下，它会把模板重复对应次数。</p>
    <div>
      <span v-for="(n, index) in 10" :key="index">{{ n }}</span>
    </div>
    <h3>在template上使用v-for</h3>
    <p>类似于v-if，你也可以利用带有 v-for的template来循环渲染一段包含多个元素的内容。</p>
    <div>
      <!-- template不能直接使用v-for循环 -->
      <!-- <ul>
        <template v-for="item in items">
          <li>{{ item.msg }}</li>
          <li class="divider" role="presentation"></li>
        </template>
      </ul> -->
    </div>
    <h3>v-for与v-if一同使用</h3>
    <p>注意我们不推荐在同一元素上使用v-if和v-for。</p>
    <p>
      当它们处于同一节点，v-for的优先级比v-if更高。这意味着v-if将分别重复运行于每个v-for循环中。当你只想为部分项渲染节点时，这个优先级的机制十分有用
    </p>
    <!-- v-for和v-if不能在一层元素上同时使用，可以将v-if至于外层元素或内层元素 -->
    <!-- <li v-for="(todo, index) in todos" v-if="!todo.isComplete" :key="index">{{ todo }}</li> -->
    <div>
      <ul v-if="todos.length">
        <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
      </ul>
    </div>
    <h3>在组件上使用v-for</h3>
    <p>在自定义组件上，你可以像任何普通元素上一样使用v-for。</p>
    <my-component v-for="item in items" :key="item.id"></my-component>
    <p>注意：在2.2.0+的版本里，当在组件上使用v-for时，key现在时必须的。</p>
    <p>
      然而，任何数据都不会被自动传递到组件里，因为组件有自己独立的作用域。为了把迭代数据传到组件里，我们要使用prop。
    </p>
    <div>
      <my-component
        v-for="(item, index) in items"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:key="item.id"
      ></my-component>
    </div>
    <p>
      不自动将item注入到组件里的原因是，这会使得组件于v-for的运作紧密耦合，明确组件数据的来源能够使组件在其他场合重复使用。
    </p>
    <div id="todo-list-example">
      <form v-on:submit.prevent="addNewTodo">
        <label for="new-todo">Add a todo</label>
        <input v-model="newTodoText" id="new-todo" placeholder="E.g.Feed the cat" />
        <button>Add</button>
      </form>
      <ul>
        <li
          is="todo-item"
          v-for="(todo, index) in todos"
          v-bind:key="todo.id"
          v-bind:title="todo.title"
          v-on:remove="todos.splice(index, 1)"
        ></li>
      </ul>
      <p>
        注意这里的is="todo-item"attribute。这种做法在使用DOM模板时十分必要的，因为在ul元素内只有li元素会被看作有效内容。这样做实现的效果于todo-item相同，但是可以避开以下潜在的浏览器解析错误。
      </p>
    </div>
  </div>
</template>

<script>
import MyComponent from "../views/BaseComponent.vue";
export default {
  components: {
    myComponent: MyComponent,
  },
  data() {
    return {
      parentMessage: "Parent",
      items: [
        { id: "1", message: "money" },
        { id: "2", message: "monkey" },
      ],
      object: {
        title: "How to do lists in Vues",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
      List: [
        {
          msg: "data1",
        },
        {
          msg: "data2",
        },
        {
          msg: "data3",
        },
      ],
      filtered: [23, 3, 32, 4, 6, 10],
      filterList: [{ number: 2 }, { number: 32 }, { number: 12 }, { number: 10 }, { number: 9 }],
      mySlice: "mySlice",
      myConcat1: "myConcat1",
      myConcat2: "myConcat2",
      numbers: [1, 2, 3, 4, 5],
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
      newTodoText: "",
      todos: [
        {
          id: 1,
          title: "Do the dishes",
        },
        {
          id: 2,
          title: "Take out the trash",
        },
        {
          id: 3,
          title: "Now the lawn",
        },
      ],
      nextTodoId: 4,
    };
  },
  computed: {
    eventNumbers: function() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0;
      });
    },
  },
  methods: {
    isBigEnough(element) {
      return element >= 10;
    },
    even: function(numbers) {
      return numbers.filter(function(number) {
        return number % 2 === 0;
      });
    },
    addNewTodo() {
      this.todos.push({ id: this.nextTodoId++, title: this.newTodoText });
      this.newTodoText = "";
    },
  },
  mounted() {
    this.List.push({ msg: "push" });
    this.List.pop();
    console.log("把数组终端第一个元素从其中删除，并返回第一个元素的值this.List.shift()", this.List.shift());
    /**
     * unshift方法将一个或多个元素添加到数组的开头。
     */
    this.List.unshift({ msg: "unshift" });
    /**
     * splice方法将start开始，深处length个，再添加data
     * splice(start,length,data)
     */
    this.List.splice(1, 0, { msg: "he" });
    /**
     * sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
     */
    // this.List.sort();
    this.List.reverse();
    this.filterList = this.filterList.filter(function(item) {
      return item.number >= 10;
    });
  },
};
</script>

<style></style>
