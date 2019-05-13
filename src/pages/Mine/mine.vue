<template>
  <div>
    <Header txt="我的">
      <img src='@/assets/images/ic_settings.png' class='rightImg' slot="right"/>
    </Header>
    <Cell title="提醒">
      <img src="@/assets/images/ic_mine_notification.png" slot="icon" class="cell-img"/>
      <img src="@/assets/images/ic_arrow_gray_small.png" slot="cell-right" class="cell-right-img"/>
    </Cell>
  </div>
</template>

<script>
  import Header from '@/components/header'
  import Cell from '@/components/cell'

  export default {
    name: "mine",
    components: {
      Header,
      Cell
    }
  }
</script>

<style scoped>

</style>