<template>
  <div>
    <Header txt="广播">
      <img src='@/assets/images/ic_status_search_user.png' class='leftImg' slot="left"/>
      <img src='@/assets/images/ic_chat_green.png' class='rightImg' slot="right"/>
    </Header>
  </div>
</template>

<script>
  import Header from '@/components/header'

  export default {
    name: "broadcasst",
    components: {
      Header
    }
  }
</script>

<style scoped>

</style>