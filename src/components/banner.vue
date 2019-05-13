<template>
  <div class="banner">
    <div class="swiper-container" :class="swiperid">
      <div class="swiper-wrapper">
        <slot name="swiper-con"></slot>
      </div>
      <div :class="{'swiper-pagination':paginationshow}" :style="{'text-align':paginationdesition}"></div>
    </div>
  </div>
</template>

<script>
  import '@/assets/libs/swiper/js/swiper.js'

  export default {
    name: "banner",
    props: {
      swiperid: {//给轮播图一个唯一的标识
        type: String,
        default: ''
      },
      paginationshow: {//是否显示分页
        type: Boolean,
        default: true
      },
      paginationdesition: {//分页器的位置
        type: String,
        default: 'center'
      },
      paginationType: {//分页器的样式，默认为圆点
        type: String,
        default: 'bullets'
      },
      autoplay: {//轮播图的轮播速度
        type: Number,
        default: 2000
      },
      loop: {//轮播图是否循环
        type: Boolean,
        default: true
      },
      direction: {//轮播图的滑动方向
        type: String,
        default: 'horizontal'
      },
      effect: {//轮播图的切换效果
        type: String,
        default: 'slide'
      }
    },
    mounted() {
      const that = this
      new Swiper('.' + that.swiperid, {
        direction: that.direction,//轮播的方向
        loop: that.loop,
        pagination: '.swiper-pagination',
        paginationType: that.paginationType,
        autoplay: that.autoplay,
        effect: that.effect
      })
    }
  }
</script>

<style scoped>
  @import "../assets/libs/swiper/css/swiper.css";

  .banner {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .banner .swiper-container .swiper-slide img {
    width: 100%;
  }

  .swiper-pagination-bullet-active {
    background: white;
  }
</style>