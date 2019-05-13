<template>
  <div class="itemWrap" @click="fn">
    <span v-show="bol">
      <slot name="activeImg"></slot><br/>
    </span>
    <span v-show="!bol">
      <slot name="normalImg"></slot><br/>
    </span>
    <span :class="{'active':bol}">{{txt}}</span>
  </div>
</template>

<script>
  export default {
    name: "item",
    props: ['txt', 'mark', 'selected'],
    computed: {
      bol() {
        if (this.mark == this.selected) {
          return true;
        }
        return false;
      }
    },
    methods: {
      fn() {
        this.$emit('change', this.mark);
        //路由跳转
        this.$router.push('/' + this.mark)
      }
    }
  }
</script>

<style scoped>
  /* 在对应的组件里设置自己的样式 */
  .itemWrap {
    width: 20%;
    float: left;
    text-align: center;
    line-height: 14px;
  }

  .itemWrap img {
    width: 40px;
  }

  .itemWrap span {
    font-size: 13px;
    color: #666;
  }

  .itemWrap .active {
    color: #42bd56;
  }
</style>