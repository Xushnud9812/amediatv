<template>
  <div>
    <div class="slider">
      <Carousel v-bind="slickOptions">
        <div class="car">
          <img class="back" src="@/assets/img/2.jpg" alt />
          <div class="opacity-banner"></div>

          <div class="carousel-content">
            <div class="container">
              <div class="text flex">
                <div class="left">
                  <nuxt-link to="/">Parazit: Hayot saboqlari [24] 18+</nuxt-link>
                  <p>Bir yili Yaponiya shaharlaridan birida g'alati qor yog'a boshladi. Kasasalos, xuddi mayda -mayda to'plar kabi, erga tashlandi. Ular bir kechada yiqilib tushishdi, orqasida hech qanday iz qolmadi. Va hech kim bu haqda hech qanday g'alati</p>
                </div>
                <div class="right">
                  <img src="@/assets/img/1.jpg" alt />
                </div>
              </div>
            </div>
          </div>
          <div class="img"></div>
        </div>
        <div class="car">
          <img class="back" src="@/assets/img/1.jpg" alt />
          <div class="opacity-banner"></div>

          <div class="carousel-content">
            <div class="container">
              <div class="text flex">
                <div class="left">
                  <nuxt-link to="/">Parazit: Hayot saboqlari [24] 18+</nuxt-link>
                  <p>Bir yili Yaponiya shaharlaridan birida g'alati qor yog'a boshladi. Kasasalos, xuddi mayda -mayda to'plar kabi, erga tashlandi. Ular bir kechada yiqilib tushishdi, orqasida hech qanday iz qolmadi. Va hech kim bu haqda hech qanday g'alati</p>
                </div>
                <div class="right">
                  <img src="@/assets/img/1.jpg" alt />
                </div>
              </div>
            </div>
          </div>
          <div class="img"></div>
        </div>
      </Carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slickOptions: {
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              dots: true,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 3000,
              arrows: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              dots: true,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 3000,
              arrows: false
            }
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.slider {
  margin-bottom: 50px;
  overflow: hidden;
  .car {
    z-index: 4;
    position: relative;
    overflow: hidden;
    height: 550px;
    width: 100%;
    overflow: hidden;

    img.back {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      object-fit: cover;
    }
    .opacity-banner {
      position: absolute;
      width: 100%;
      z-index: 2;
      top: 0;
      left: 0;
      height: 100%;
      background: #000;
      opacity: 0.7;
    }
    .carousel-content {
      position: absolute;
      padding-top: 60px;
      z-index: 4;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .text {
        width: 100%;
        .left {
          width: 60%;
          a {
            text-decoration: none;
            font-size: 48px;
            color: #fff;
            font-weight: 600;
            line-height: 130%;
            margin-bottom: 40 px;
            display: block;
            &:hover {
              color: #c5c5c5;
            }
          }
          p {
            font-size: 16px;
            line-height: 32px;
            height: 96px;
            width: 100%;
            overflow: hidden;
            color: #fff;
            margin-bottom: 15px;
          }
        }
        .right {
          width: 40%;
          padding-left: 150px;
          img {
            border-radius: 10px;
            pointer-events: none;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>