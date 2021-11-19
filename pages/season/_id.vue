<template>
  <div>
    <div class="season-id">
      <div class="container">
        <div class="content-id">
          <div class="left">
            <div class="card">
              <Card :card="card" />
            </div>
            <div class="route-text">
              <nuxt-link to="/news">
                <span>
                  <fa icon="angle-right" />
                </span>
                Ma'lumotlar
              </nuxt-link>
            </div>
            <div class="all-info">
              <div class="info">
                <div class="key">
                  <span>
                    <fa icon="map" />
                  </span>
                  <h5>Mamlakat</h5>
                </div>
                <div class="value">AQSH</div>
              </div>
              <div class="info">
                <div class="key">
                  <span>
                    <fa icon="user" />
                  </span>
                  <h5>Rejissor</h5>
                </div>
                <div class="value">AQSH</div>
              </div>
              <div class="info">
                <div class="key">
                  <span>
                    <fa icon="microphone" />
                  </span>
                  <h5>Studiya</h5>
                </div>
                <div class="value">AQSH</div>
              </div>
              <div class="info">
                <div class="key">
                  <span>
                    <fa icon="folder-open" />
                  </span>
                  <h5>Janr</h5>
                </div>
                <div class="value">AQSH</div>
              </div>
              <div class="info">
                <div class="key">
                  <span>
                    <fa icon="list" />
                  </span>
                  <h5>Kategoriya</h5>
                </div>
                <div class="value">AQSH</div>
              </div>
              <div class="info">
                <div class="key">
                  <span>
                    <fa icon="clock" />
                  </span>
                  <h5>Yil</h5>
                </div>
                <div class="value">AQSH</div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="film">
              <iframe src="https://www.youtube.com/embed/d8YSLthFpTM " frameborder="0"></iframe>
            </div>
            <div class="seriya">
              <div class="box">
                <nuxt-link class="active" to="/">
                  1-qism
                  <span class>
                    <fa icon="eye" />
                  </span>
                </nuxt-link>
              </div>
              <div class="box">
                <nuxt-link to="/">
                  1-qism
                  <span class>
                    <fa icon="eye" />
                  </span>
                </nuxt-link>
              </div>
              <div class="box">
                <nuxt-link to="/">
                  1-qism
                  <span class>
                    <fa icon="eye" />
                  </span>
                </nuxt-link>
              </div>
            </div>
            <div class="down">
              <button>Yuklab olish</button>
            </div>
            <div class="about">
              <p>Qadim zamonlarda ulkan yirtqich hayvonlar dengiz tubidan ko'tarilishdi, ammo ular qo'riqchilarning - maxsus ishlab chiqilgan robotlarning qarshiligiga duch kelishdi. Vaqt o'tdi. Endi yirtqich hayvonlar Avstraliyaga bostirib kirishdi va butun qit'aning aholisi evakuatsiya qilinishi kerak. Ikki o'smir - akasi va opasi Teylor va Xeyli yo'qolgan ota-onalarini topish uchun orqada qolishdi. Ular eski o'yinchini topadilar va uni boshqarishni o'rganadilar, bu ularga ota-onalarni topishga va omon qolishlariga yordam beradi deb umid qiladilar.</p>
            </div>
          </div>
        </div>
        <div class="screens">
          <div class="route-text">
            <nuxt-link to="/news">
              <span>
                <fa icon="angle-right" />
              </span>
              Filmdan kadrlar
            </nuxt-link>
          </div>
          <div class="imgs">
              <div class="img-s">
                  
              <img src="@/assets/img/1.jpg" alt="">
              </div>
              <div class="img-s">
                  
              <img src="@/assets/img/1.jpg" alt="">
              </div>
              <div class="img-s">
                  
              <img src="@/assets/img/1.jpg" alt="">
              </div>
              <div class="img-s">
                  
              <img src="@/assets/img/1.jpg" alt="">
              </div>
              <div class="img-s">
                  
              <img src="@/assets/img/1.jpg" alt="">
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../../components/Card.vue";
export default {
  components: { Card },
  data() {
    return {
      card: {
        number: 12,
        image: "as",
        text: "Nar1111uto"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.season-id {
  padding: 30px 0;

  .screens{
      padding: 20px 0;
      border-bottom: 1px solid #c5c5c5;
      .imgs{
          flex-wrap: wrap;
          display: flex;
          align-items: center;
          .img-s{
              margin-right: 20px;
              width: calc((100% - 100px)/5);
              img{
                  width: 100%;
              }
          }

      }
  }
  .content-id {
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
    border-bottom: 1px solid #c5c5c5;
  }
  .right {
    width: calc(100% - 280px);
    .seriya {
      display: flex;
      align-items: center;
      margin: 15px 0;
      .box {
        margin-right: 15px;
        a {
          text-decoration: none;
          padding: 8px 15px;
          color: #ffffff;
          border-radius: 10px;

          background: #6e6e6e;
        }
        a.active {
          background: #6a2fe3;
        }
      }
    }
    .down {
      button {
        width: 100%;
        text-decoration: none;
        padding: 12px 15px;
        color: #ffffff;
        border-radius: 10px;

        background: #6a2fe3;
      }
    }
    .about {
      margin: 15px 0;
    }
    .film {
      iframe {
        border-radius: 10px;
        width: 100%;
        min-height: 350px;
      }
    }
  }

  .left {
    width: 250px;
    .card {
      margin-bottom: 10px;
    }
    .all-info {
      .info {
        padding-bottom: 5px;
        border-bottom: 1px solid #c5c5c5;
        margin-bottom: 10px;

        .key {
          display: flex;
          align-items: center;
          span {
            color: #6a2fe3;
            margin-right: 10px;
          }

          h5,
          span {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 0px;
            margin-bottom: 10px;
          }
        }
        .value {
          font-size: 16px;
          margin-bottom: 0px;
          font-weight: 500;
          margin-left: 30px;
        }
      }
    }
  }
}
</style>