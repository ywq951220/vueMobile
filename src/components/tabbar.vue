<template>
  <div class="tabbar">
    <Item txt="首页" mark="home" :selected="selected" @change="getVal">
      <img src="@/assets/images/ic_tab_home_active.png" slot="activeImg"/>
      <img src="@/assets/images/ic_tab_home_normal.png" slot="normalImg"/>
    </Item>
    <Item txt="书影音" mark="audio" :selected="selected" @change="getVal">
      <img src="@/assets/images/ic_tab_subject_active.png" slot="activeImg"/>
      <img src="@/assets/images/ic_tab_subject_normal.png" slot="normalImg"/>
    </Item>
    <Item txt="广播" mark="broadcast" :selected="selected" @change="getVal">
      <img src="@/assets/images/ic_tab_status_active.png" slot="activeImg"/>
      <img src="@/assets/images/ic_tab_status_normal.png" slot="normalImg"/>
    </Item>
    <Item txt="小组" mark="group" :selected="selected" @change="getVal">
      <img src="@/assets/images/ic_tab_group_active.png" slot="activeImg"/>
      <img src="@/assets/images/ic_tab_group_normal.png" slot="normalImg"/>
    </Item>
    <Item txt="我的" mark="mine" :selected="selected" @change="getVal">
      <img src="@/assets/images/ic_tab_profile_active.png" slot="activeImg"/>
      <img src="@/assets/images/ic_tab_profile_normal.png" slot="normalImg"/>
    </Item>
  </div>
</template>

<script>
  import Item from '@/components/item'

  export default {
    name: "tabbar",
    components: {
      Item
    },
    data() {
      return {
        selected: 'home'
      }
    },
    methods: {
      getVal(val) {
        this.selected = val
      }
    }
  }
</script>

<style scoped>
  .tabbar {
    width: 100%;
    height: 64px;
    border-top: 1px solid #ccc;
    position: fixed; /*固定定位*/
    left: 0;
    bottom: 0;
    background: #fff;
  }
</style>