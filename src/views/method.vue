<template>
  <div>
    <h1>事件处理</h1>
    <h3>监听事件</h3>
    <p>可以用v-on指令监听DOM事件，并在触发时运行以下js代码。</p>
    <div id="example-1">
      <button v-on:click="conter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }}times.</p>
    </div>
    <div id="example-2">
      <!-- greet是在下面定义的方法名 -->
      <button v-on:click="greet">Greet</button>
    </div>
    <h3>内联处理器中的方法</h3>
    <p>除了直接绑定到一个方法，也可以在内联js语句中调用方法：</p>
    <div id="example-3">
      <button v-on:click="say('hi')">Say hi</button>
      <button v-on:click="say('what')">Say what</button>
    </div>
    <p>有时也需要在内联语句处理器中访问原始的DOM事件，可以把特殊变量$event把他传入方法</p>
    <button v-on:click="warn('Form cannot be submitted yet', $event)">submit</button>
    <h3>事件修饰符</h3>
    <p>
      在事件处理程序中调用event.preventDefault()或event.stopPropation()是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是处理Dom事件细节。
    </p>
    <p>为了解决这个问题，Vue.js为v-on提供了事件修饰符，之前提过，修饰符是由点开头的指令后缀来表示的。</p>
    <div>
      <ul>
        <li>.stop:阻止单击事件继续传播</li>
        <li>.prevent：提交事件不在重载页面</li>
        <li>.capture：添加事件监听器时使用事件捕获模式</li>
        <li>.self</li>
        <li>.once</li>
        <li>.passive告诉浏览器你不想阻止事件的默认行为,会提高 性能</li>
      </ul>
      <a v-onclick.stop="doThis">click</a>
      <!-- 提交事件不在重载页面 -->
      <form v-on:submit.prevent="onSubmit">click</form>
      <form v-on:submit.prevent>click</form>
      <div v-on:click.capture="doThis">click</div>
      <!-- 只当在event.target是当前元素自身时触发处理函数 -->
      <!-- 事件不是从内部元素触发的 -->
      <div v-on:click.self="doThat">click</div>
      <p>
        使用修饰符时,顺序很重要;相应的代码会以同样的顺序产生.因此,用v-on:click.prevent.self会阻止所有的点击,而v-on:click.self.prevent只会阻止对元素自身的点击
      </p>
      <a @click.once="doThisOnce">runonce</a>
      <p>不像其它智能对原生的DOM事件起作用的修饰符,.once修饰符还能被用到自定义的组件事件上</p>
      <h3>Vue还对应addEventListener中的passive选项提供 .passive修饰符</h3>
      <div>
        <div v-on:scroll.passive="onScroll">...</div>
      </div>
      <h3>按键修饰符</h3>
      <p>在监听键盘事件时,我们经常需要检查详细的按键,Vue允许在监听键盘事件时添加按键修饰符</p>
      <input v-on:keyup.enter="submit" @keydown="show($event)" />
      <p>你可以直接将keyboardEvent.key暴露的任意有效按键名转换为kebab-case</p>
      <!-- 当按下pagedown按键时,直接onPageDown事件 -->
      <input v-on:keyup.page-down="onPageDown" />
      <br />
      <input v-on:keyup.13="submit" placeholder="按下键码为13的键,会执行submit事件" />
    </div>
    <h3>系统修饰键</h3>
    <p>可以用以下的修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器.ctrl .alt .shift .meta</p>
    <p>注意:在Windows系统键盘,meta对应windows徽标键(田)</p>
    <div>
      <!-- alt+c -->
      <input @keyup.alt.67="clear" placeholder="alt+c" />
      <br />
      <!-- ctrl+click -->
      <div @click.ctrl="doSomething">按下ctrl并点击我</div>
      <p>
        请注意修饰键与常规按键不同,在和keyup事件一起用时,事件触发时修饰键必须处于按下状态.换句说,只有在按住ctrl的情况下释放其他按键,才能触发keyup.ctrl.而单单释放ctrl也不会触发事件,如果你想要这样的行为,请为ctrl换用keyCode:keyup.17
      </p>
    </div>
    <h3>.exact修饰符</h3>
    <p>.exact修饰符允许你控制由精确的系统修饰符组合触发的事件</p>
    <!-- 即便时alt或shift被同时按下也会触发 -->
    <button @click.ctrl="onClickCtrl">按下ctrl并点击我</button>
    <!-- 有且仅有ctrl被按下的时候才触发 -->
    <button @click.ctrl.exact="onClickCtrl">仅仅按下ctrl并点击我</button>
    <!-- 没有任何系统修饰符被按下的时候才触发 -->
    <button v-on:click.exact="submit">就是不按键,没有任何系统修饰符被按下的时候才触发</button>
    <h3>鼠标按钮修饰符.left .right .middle(滚动)</h3>
    <p>这些修饰符会限制处理函数仅仅响应特定的鼠标按钮</p>

    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  //在methods对象中定义方法
  methods: {
    greet(event) {
      //this在方法里指向当前Vue实例
      alert("Hello" + this.name + "!");
      //event是原生Dom事件
      if (event) {
        alert(event.target.tagName);
      }
    },
    say(message) {
      alert(message);
    },
    warn(message, event) {
      // 现在我们可以访问原生事件对象
      if (event) {
        event.preventDefault();
      }
      alert(message);
      alert(event);
    },
    doThisOnce() {
      alert("once");
    },
    onScroll() {
      alert("w");
    },
    submit() {
      alert("submit");
    },
    show(ev) {
      // alert(ev.keyCode);
      if (ev.keyCode == 8) {
        alert("Delete");
      }
    },
    onPageDown() {
      alert("pagedown");
    },
    clear() {
      alert("alt+c");
    },
    doSomething() {
      alert("Ctrl+click");
    },
    onClickCtrl() {
      alert("ctrl");
    },
  },
  mounted() {},
};
</script>

<style></style>
