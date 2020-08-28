<template>
  <div>
    <h1>表单输入绑定</h1>
    <h3>基础用法</h3>
    <p>
      你可以用v-model指令在表单input,textarea及select元素上创建双向数据绑定.他会根据控件类型自动选取正确的方法来更新元素.v-model本质上不过时语法糖.他负责监听用户输入事件以更新数据,并对一些极端场景进行一些特殊处理
    </p>
    <p>
      v-model会忽略所有表单元素的value,checked,selected atrbute
      的初始值而总是将Vue实例的数据作为数据来源,你应该通过js在组件的data选项中声明初始值
    </p>
    <p>在内部为不同的输入元素使用不同的property并抛出不同的事件</p>
    <p>v-model在内部为不同的输入元素使用不同的property并抛出不同的事件</p>
    <div>
      <ul>
        <li>text和textarea元素使用value property并抛出不同的事件</li>
        <li>checkbox和radio使用checked property和change事件</li>
        <li>select字段将value作为prop并将change作为事件</li>
      </ul>
    </div>
    <h3>文本</h3>
    <div>
      <input v-model="message" placeholder="edit me" />
      <p>Message is :{{ message }}</p>
    </div>
    <h3>多行文本</h3>
    <div>
      <span>Multiline message is:</span>
      <p style="white-space:pre-line">{{ message }}</p>
      <br />
      <textarea v-model="message" placeholder="add multiple lines"></textarea>
      在文本区域插值
      <!-- `(<textarea>`{{ `text` }}</textarea>)  -->
      `并不会生效，应用 v-model 来代替。
    </div>
    <h3>复选框</h3>
    <p>单个复选框,绑定到布尔值</p>
    <div>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>
    </div>
    <hr />

    <h3>复选框</h3>
    <p>多个复选框,绑定到同一个数组</p>
    <div>
      <input type="checkbox" id="Wang" value="Wang" v-model="checkedNames" />
      <label for="Wang">Wang</label>
      <input type="checkbox" id="Zhang" value="Zhang" v-model="checkedNames" />
      <label for="Zhang">Zhang</label>
      <input type="checkbox" id="Ding" value="Ding" v-model="checkedNames" />
      <label for="Ding">Ding</label>
      <br />
      <span>Checked names:{{ checkedNames }}</span>
    </div>
    <hr />

    <h3>单选按钮</h3>
    <div id="example-4">
      <p>label的for属性会关联id.表示关联两个标签</p>
      <input type="radio" id="One" value="One" v-model="picked" />
      <label for="One">One</label>
      <br />
      <input type="radio" id="Two" value="Two" v-model="picked" />
      <label for="Two">Two</label>
      <br />
      <span>Picked:{{ picked }}</span>
    </div>
    <hr />
    <h3>选择框</h3>
    <p>单选时</p>
    <div id="example-5">
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>selected:{{ selected }}</span>
    </div>
    <p>如果v-model表达式的初始值未能匹配任何选项,select元素将被渲染为"为选中"状态.</p>
    <hr />
    <p>多选时(绑定到一个数组)</p>
    <div id="example-6">
      <select v-model="selectedMu" multiple style="width:50px">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br />
      <span>Selected:{{ selectedMu }}</span>
    </div>
    <h3>用v-for渲染的动态选项</h3>
    <select v-model="selectedArr">
      <option v-for="(option, index) in options" :key="index" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <span>Selected:{{ selectedArr }}</span>
    <h3>值绑定</h3>
    <p>对于单选按钮,复选框及选择框的选项,v-model绑定的值通常时静态字符串(对于复选框也可以是布尔值)</p>
    <!-- 当选中时,picked为字符串a -->
    <input type="radio" v-model="picked" value="a" />
    <!-- toggle为true或false -->
    <input type="checkbox" v-model="toggle" />
    <select v-model="selectedABC">
      <option value="abc">ABC</option>
    </select>
    <hr />
    <h3>复选框</h3>
    <div>
      <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
    </div>
    <h3>
      修饰符
    </h3>
    <ul>
      <li>
        .lazy在默认情况下,v-model在每次input事件触发后将输入框的值与数据进行同步,你可以添加lazy修饰符,从而转为在change事件之后进行同步
        <ul>
          <li><input v-model.lazy="msg" /></li>
        </ul>
      </li>
      <li>
        .number如果想自动将用户的输入值转为数值类型,可以给v-model添加number修饰符
        <ul>
          <li><input v-model.number="age" type="number" /></li>
        </ul>
        这通常很有用,因为即使在type="number"时,HTML输入元素的值也总会返回字符串.如果这个值无法被parseFloat()解析,则会返回原始的值
      </li>
      <li>
        .trim如果要自动过滤用户输入的首尾空白字符,可以给v-model添加trim修饰符
        <ul>
          <li><input v-model.trim="msg" /></li>
        </ul>
      </li>
    </ul>
    <hr />
    <h3>在组件上使用v-model</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      checked: true,
      checkedNames: [],
      picked: "",
      selected: "",
      selectedMu: [],
      selectedArr: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },

        { text: "Three", value: "C" },
      ],
      toggle: true,
      selectedABC: "abc",
      msg: "",
    };
  },
};
</script>

<style></style>
