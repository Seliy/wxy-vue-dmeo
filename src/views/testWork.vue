<template>
  <div>
    <a-button type="danger">请点击！！</a-button>
    <p>{{ max + 1 }}</p>
    <div class="style-div" v-for="(item, index) in navList" :key="index">
      <div class="style-ul">
        <div class="style-li" @click="clickNav(index)" :class="navIndex == index ? 'is-border' : ''">
          {{ item.value }}
        </div>
        <div class="border-line" :class="navIndex == index ? 'is-borderline' : ''"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      max: "1",
      navIndex: 0,
      navList: [
        {
          value: "click",
          title: "hello",
          href: "/#",
        },
        {
          value: "click",
          title: "hello",
          href: "/#",
        },
        {
          value: "click",
          title: "hello",
          href: "/#",
        },
        {
          value: "click",
          title: "hello",
          href: "/#",
        },
        {
          value: "click",
          title: "hello",
          href: "/#",
        },
      ],
    };
  },
  methods: {
    clickNav(index) {
      console.log(index);
      this.navIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.style-ul {
  float: left;
  margin-left: 20px;
  margin-top: 10px;
}
.style-li {
  text-align: center;
  font-size: 30px;
  width: 120px;
  height: 60px;
  border: 1px solid red;
}
.border-line {
}
.style-li:hover ~ .border-line {
  /* transform: translateX(94px); */
  /* transition: transform 0.1s; */
  width: 26px;
  /* height: 4px; */
  border: 4px solid blue;
  transform: translateX(60px) translateX(-50%);
}
.is-border {
  /* border: 4px solid blue; */
  color: blue;
}
.is-borderline {
  width: 26px;
  /* height: 4px; */
  border: 4px solid blue;
  transform: translateX(60px) translateX(-50%);
  /* transform: translateX(94px);
  transition: transform 0.1s; */
}
</style>
