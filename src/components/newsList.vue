<template>
  <div class="listWrap">
    <div class="left">
      <h4>《加勒比海盗》14年老粉给你带来所有彩蛋</h4>
      <p>此影评送给那些不离不弃的老粉和船长杰克.斯派洛</p>
      <div class="sep"></div>
      <p class="author">作者：女神的秋裤</p>
    </div>
    <img src="../assets/images/banner/01.jpg"/>
  </div>
</template>

<script>
  export default {
    name: "newsList"
  }
</script>

<style scoped>
  .listWrap {
    padding: 20px;
    text-align: left;
    height: 150px;
    border-bottom: 1px solid #eee;
  }

  .listWrap img {
    width: 100px;
    height: 100px;
    float: right;
  }

  .listWrap .left {
    width: 65%;
    float: left;
  }

  .listWrap p {
    margin: 5px 0;
    color: #999;
    font-size: 14px;
  }

  .listWrap .author {
    color: #ccc;
    font-size: 12px;
  }

  .listWrap .sep {
    width: 20px;
    height: 1px;
    background: #eee;
  }
</style>