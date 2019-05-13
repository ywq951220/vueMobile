<template>
  <div>
    <Header txt="小组">
      <img src='@/assets/images/ic_actionbar_search_icon.png' class='leftImg' slot="left"/>
      <img src='@/assets/images/ic_chat_green.png' class='rightImg' slot="right"/>
    </Header>
  </div>
</template>

<script>
  import Header from '@/components/header'

  export default {
    name: "group",
    components: {
      Header
    }
  }
</script>

<style scoped>

</style>