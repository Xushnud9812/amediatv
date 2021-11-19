<template>
  <div>
    <div class="slider">
      <Carousel v-bind="slickOptions">
        <div class="car">
            <img src="@/assets/img/2.jpg" alt />

          <div class="tex container">
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
          <div class="img">
          </div>
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
  .car {
   z-index: 4;
    position: relative;
    overflow: hidden;
    height: 550px;
    .tex{
      z-index: 3;
    }
    
    .img {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      img {
        width: 100%;
        pointer-events: none;
      }
    }
  }
}
</style>