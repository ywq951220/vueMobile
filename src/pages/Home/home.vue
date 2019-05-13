<template>
  <div>
    <Header bol="true">
      <div slot="search" class="search">
        <input type="text" placeholder="影视 图书 唱片 小组等"/>
        <img src="@/assets/images/ic_group_search_small.png" class="searchImg"/>
        <img src="@/assets/images/ic_scan_gray.png" class="scanImg"/>
      </div>
      <img src='@/assets/images/ic_chat_white.png' class='rightImg' slot="right"/>
    </Header>
    <Banner swiperid="home">
      <div slot="swiper-con" class="swiper-slide">
        <img src="@/assets/images/banner/01.jpg"/>
      </div>
      <div slot="swiper-con" class="swiper-slide">
        <img src="@/assets/images/banner/02.jpg"/>
      </div>
      <div slot="swiper-con" class="swiper-slide">
        <img src="@/assets/images/banner/03.jpg"/>
      </div>
    </Banner>
    <Cell title="热点" hot="true"></Cell>
    <button @click="fn">btn</button>
    <List></List>
    <List></List>
    <List></List>
    <List></List>
    <List></List>
    <List></List>
    <List></List>
    <List></List>
    <List></List>
    <List></List>
    <List></List>
    <List></List>
    <List></List>
    <List></List>
  </div>
</template>

<script>
  import {getListContactsByName} from '@/api/orgUser'
  import Header from '@/components/header'
  import Banner from '@/components/banner'
  import Cell from '@/components/cell'
  import List from '@/components/newsList'

  export default {
    name: "home",
    components: {
      Header,
      Banner,
      Cell,
      List
    },
    methods: {
      fn() {
        // this.axios.get('/api/homeData').then(response => {
        //   console.log(response)
        // })

        this.axios.get('http://192.168.30.45:8082/bsc/bsc/job/timer/save.do').then(response => {
          console.log(response);
        })

        console.log(111111111);
        // getListContactsByName().then(res => {
        //   console.log(res.data)
        // })

        // this.$axios({
        //   method: 'post',
        //   url: '@/api/orgUser/getListContactsByName',
        //   data: {}
        // })
      }
    }
  }
</script>

<style scoped>

</style>