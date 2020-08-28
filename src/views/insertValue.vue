<template>
  <div>
    <h1>插值</h1>
    <div>
      <h3>1.文本插值</h3>
      <h6>
        <span>Mesg:{{ msg }}</span>
      </h6>
      <h6>
        <input type="text" v-model="msgNoChange" />
        <span v-once>{{ msgNoChange }}</span>
      </h6>
      <h3>2.原始HTML</h3>
      <div>
        <p>输出HTML文本：{{ rawHTML }}</p>
        <p>渲染HTML代码：<span v-html="rawHTML"></span></p>
      </div>
      <h3>3.Attribute插入属性值</h3>
      <div>
        <div v-bind:id="styleId">
          id为styleId的样式
        </div>
        <button v-bind:disabled="isButtonDisabled">这是一个使用v-bind插入disabled属性不能点击的按钮</button>
      </div>
      <h3>4.使用JS表达式</h3>
      <div>
        <h6>
          {{ number + 1 }}
        </h6>
        <h6>
          {{ ok ? "YES" : "NO" }}
        </h6>
        <h6>
          这个数据会被拆分然后翻转最后合并在一起比如：HELLO <br />输出：{{
            message
              .split("")
              .reverse()
              .join("")
          }}
        </h6>
        <h6 v-bind:id="'list-' + id">在定义id时使用了字符串和变量的合体</h6>
        <h6>
          注意：每个绑定都只能包含单个表达式； <br />不会生效
          <!-- {{var a = 1}} -->
        </h6>
        <h6>
          不会生效：
          <!-- {{if(ok) {return message}}} -->
        </h6>
      </div>
      <h3>5.过滤</h3>
      <div>
        {{ score | getScoreText | getPercent }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "这是文本插值的方式",
      msgNoChange: "这个插值将不能改变",
      rawHTML: `<span style="color:red">This should be red</span>`,
      styleId: "styleId",
      isButtonDisabled: true,
      //使用JS表达式中的数据
      number: 1,
      ok: false,
      message: "这个数据会被拆分然后翻转最后合并在一起比如：HELLO",
      id: "05",
      score: 90,
    };
  },
  filters: {
    getScoreText(val) {
      if (val > 90) {
        return val + "优秀";
      } else if (val > 80) {
        return val + "良好";
      } else {
        return val + "一般";
      }
    },
    getPercent(val) {
      return val + "的成绩";
    },
  },
  mounted() {
    console.log(this.id);
  },
};
</script>

<style scoped>
#styleId {
  border: 1px solid red;
}
#list-05 {
  letter-spacing: 30px;
}
</style>
