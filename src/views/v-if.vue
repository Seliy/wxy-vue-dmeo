<template>
  <div>
    <h1>条件渲染</h1>
    <h3>v-if</h3>
    <p>v-if用于条件性的渲染一块内容，这块内容指挥在指令的表达式返回true时被渲染</p>
    <p v-if="awesome">Vue is awesome</p>
    <p v-else>oh no ,this is not display.very terrible!wuwu~</p>
    <div>
      <h3>在template元素上使用v-if条件渲染分组</h3>
      <p>
        因为v-if是一个指令，所以，必须将它添加到一个元素上。但是如果想切换多个元素，可以吧一个template原色当作不可见的包裹元素，并在上面使用v-if。最终的渲染结果将不包含template
      </p>
      <template v-if="ok">
        <ul>
          <li>列表1</li>
          <li>列表1</li>
          <li>列表1</li>
        </ul>
      </template>
    </div>
    <div>
      <h3>v-else</h3>
      <div v-if="Math.random() > 0.5">
        Now you see me
      </div>
      <div v-else>
        Now you don't
      </div>
      <p>v-else元素必须紧跟在带v-if或者v-else-if的元素的后面，否则它将不会被识别</p>
    </div>
    <div>
      <h3>v-else-if2.1.0新增</h3>
      <p>v-else-if。可以充当v-if发else-if块，可以连续使用</p>
      <div v-if="type === 'A'">A</div>
      <div v-else-if="type === 'B'">B</div>
      <div v-else-if="type === 'C'">C</div>
      <div v-else>Not A/B/C</div>
    </div>
    <div>
      <h3>使用key管理可复用的元素</h3>
      <p>
        Vue会尽可以高效地渲染元素，通常会复用已有元素而不是从头开始渲染，这么做除了使Vue变得非常快之外，还有其他的一些好处，例如，如果你允许用户在不同的登录方式之间切换：
      </p>
      <p>在以下两个输入框填入值，点切换试一下吧</p>
      <div>
        <button @click="changeType">Togger login type</button>
        <template v-if="loginType === 'username'">
          <label>UserName</label>
          <input placeholder="Enter your username" />
        </template>
        <template v-else>
          <label>Email </label>
          <input placeholder="Enter your email" />
        </template>
        <p>
          but,这样不能总是符合实际需求,所以，Vue提供了一种方式来表达“这两个元素是完全独立的，不要复用他们。只需要添加一个具有唯一值的key
          attribute即可。
        </p>
        <template v-if="infoType === 'firstname'">
          <label>firstName</label>
          <input placeholder="Enter firstName" key="firstNameKey" />
        </template>
        <template v-else>
          <label>lastName</label>
          <input placeholder="Enter lastName" key="lastNameKey" />
        </template>
        <p>具有唯一的key值，每次切换时，输入框都会被重新渲染</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      awesome: false,
      ok: true,
      type: "A",
      loginType: "username",
      infoType: "firstname",
    };
  },
  methods: {
    changeType() {
      if (this.loginType === "username") {
        this.loginType = "";
      } else {
        this.loginType = "username";
      }
      if (this.infoType === "firstname") {
        this.infoType = "";
      } else {
        this.infoType = "firstname";
      }
    },
  },
};
</script>

<style></style>
