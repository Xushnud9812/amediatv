<template>
  <div>
    <div class="container">
      <div class="animes flex">
        <div class="left">
          <div class="box">
            <h2>Yangi anime</h2>
          </div>
        </div>
        <div class="right">
          <div class="video">
            <iframe src="https://www.youtube.com/embed/d8YSLthFpTM " frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.animes {
  margin-bottom: 30px;
  .left {
    width: calc((100% - 60px)/3) !important;
    .box {
      min-height: 350px;
      border-radius: 10px;
      overflow: hidden;
      padding: 15px;
      border: 2px solid #6a2fe3;
      height: 100%;
      position: relative;
      background-color: #6a2fe3;
    }
  }
  .right{
    width: calc((100% - 34%));
    border-radius: 10px;
      overflow: hidden;
    .video{
      width: 100%;
      iframe{
         border-radius: 10px;
        width: 100%;
        min-height: 350px;
      }

    }
  }
}
</style>