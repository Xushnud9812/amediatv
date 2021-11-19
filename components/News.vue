<template>
  <div>
    <div class="news">
      <div class="container">
        <div class="title-news">
          <nuxt-link to="/news"><span>
              <fa icon="angle-right" /> 
              </span>
              Barcha yangiliklar</nuxt-link>
        </div>
        <div class="news-content flex">
          <nuxt-link to="/news" class="news-box">
            <div class="img">
              <img src="@/assets/img/1.jpg" alt />
            </div>
            <p>Tez kunda adasdasd asd asdasas asdasdas daasdasd</p>
          </nuxt-link>
          <div class="news-box">
            <div class="img">
              <img src="@/assets/img/1.jpg" alt />
            </div>
            <p>Tez kunda adasdasd asd asdasas asdasdas daasdasd</p>
          </div>
          <div class="news-box">
            <div class="img">
              <img src="@/assets/img/1.jpg" alt />
            </div>
            <p>Tez kunda adasdasd asd asdasas asdasdas daasdasd</p>
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
.news {
  margin-bottom: 30px;
  .title-news {
      
    a {
        text-decoration: none;
      font-size: 30px;
      color: #000;
      font-weight: 600;
      display: inline-block;
      margin-bottom: 30px;
      span{
          color: #6a2fe3;
      }
    }
  }
  .news-box {
    width: calc((100% - 60px) / 3);
    position: relative;
    img {
      width: 100%;
      border-radius: 10px;
    }
    p {
      padding: 0 30px;
      color: #fff;
      position: absolute;
      bottom: 20px;
      color: #fff;
      font-size: 28px;
      width: 100%;
      max-height: 30px;
      line-height: 30px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;

      overflow: hidden;
    }
  }
}
</style>