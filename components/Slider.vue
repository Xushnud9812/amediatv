<template>
  <div>
    <div class="slider">
      <Carousel v-bind="slickOptions">
        <div class="car">
          <div class="container-slider">
            <div class="text flex">
              <div class="left">
                <h2>asjgdfa</h2>
                <p>ajdajdfajsdfas asdgaskudg</p>
              </div>
              <div class="right">
                <div class="img">
                  <img src="@/assets/img/2.jpg" alt />
                </div>
              </div>
            </div>
          </div>
          <img src="@/assets/img/2.jpg" alt />
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
        // autoplay: true,
        speed: 1000,
        // autoplaySpeed: 4000,
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
  width: 100%;
  overflow: hidden;
  margin-bottom: 30px;
  .car {
    width: 100%;
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    .container-slider{
      width: 1140px;
      margin: 0 auto;
    }
    .text {

      z-index: 10;
      position: absolute;
      top: 50%;
      transform: translate(0%, -50%);
      display: flex;
      .left {
        width: 200px;
      }
      .right {
        width: 400px;
        img {
          width: 100%;
        }
      }
      h2 {
        font-size: 48px;
        color: #fff;
        font-weight: 600;
        line-height: 130%;
        margin-bottom: 40px;
        display: block;
      }
    }
    img {
      pointer-events: none;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 0;
    }
  }
}
</style>