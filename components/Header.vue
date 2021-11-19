<template>
  <div>
    <header>
      <div class="header">
        <div class="container">
          <div class="flex">
            <div class="logo">
              <a href="#">Amediatv.uz</a>
              <h2>
                Birinchi
                <span>UZ</span> fandab
              </h2>
            </div>
            <div class="catalog">
              <ul class="flex">
                <li>
                  <button @click="clickjanr" v-click-outside="hide1">
                    Janrlar
                    <span class>
                      <fa icon="angle-down" />
                    </span>
                  </button>
                </li>
                <li>
                  <button @click="clickyear" v-click-outside="hide2">
                    Yillar
                    <span class>
                      <fa icon="angle-down" />
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <div class="right flex">
              <div class="search">
                <input type="search" placeholder="Saytdan izlash..." />
                <button>
                  <fa icon="search" />
                </button>
              </div>
              <div class="lang flex">
                <button class="active">uz</button>
                <span class="line"></span>
                <button>ru</button>
              </div>
              <div class="profil">
                <button @click="clickLogin" class="flex">
                  <span class="flex">
                    <fa icon="user" />
                  </span> Xushnud
                </button>
              </div>
              <div class="profil logout">
                <button class="flex">
                  <span class="flex">
                    <fa icon="sign-out-alt" />
                  </span> Chiqish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="janr ? 'janr' : 'janr none'">
        <div class="container">
          <div class="catalog flex">
            <div class="name">
              <nuxt-link to="/">Janr</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">Janr</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">Janr</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">Janr</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">Janr</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">Janr</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">Janr</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">Janr</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">Janr</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">Janr</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">Janr</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">Janr</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div :class="year ? 'yil' : 'yil none'">
        <div class="container">
          <div class="catalog flex">
            <div class="name">
              <nuxt-link to="/">2022</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">2021</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">2020</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">2019</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">2018</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">2017</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">2016</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">2015</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">2014</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">2013</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">2012</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">2011</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">2010</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">2009</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">2008</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">2007</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">2006</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">2005</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">2004</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">2003</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">2002</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">2001</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">1999</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">1998</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">1997</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">1996</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">1995</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">1994</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">1993</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">1992</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">1991</nuxt-link>
            </div>
            <div class="name">
              <nuxt-link to="/">1990</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="login-modal">
      <div @click="isLogin = false" :class="isLogin ? 'fix-vh' : 'fix-vh fix-no'"></div>
      <div :class="isLogin ? 'open-modal login' : 'login '">
        <div class="title-mod flex">
          <h3>Kirish</h3>
          <span>X</span>
        </div>
        <div class="body-mod">
          <div class="form">
            <div class="input-form">
              <span>Email</span>
              <input type="email" placeholder="Emailni kiriting..." />
            </div>
            <div class="input-form">
              <span>Parol</span>
              <input type="password" placeholder="Parolni kiriting..." />
            </div>
          </div>
          <div class="btn">
            <button>Kirish</button>
          </div>
          <div class="foot-mod flex">
            <button @click="clickRegistr">Ro'yhatdan o'tish</button>
            <button>Parolni tiklash</button>
          </div>
        </div>
      </div>
    </div>
    <div class="Registr-modal">
      <div @click="isRegistr = false" :class="isRegistr ? 'fix-vh' : 'fix-vh fix-no'"></div>
      <div :class="isRegistr ? 'open-registr login' : 'login '">
        <div class="title-mod flex">
          <h3>Ro'yhatdan o'tish</h3>
          <span>X</span>
        </div>
        <div class="body-mod">
          <div class="form">
            <div class="input-form">
              <span>Foydalanuvchining nomi</span>
              <input type="email" placeholder="Ismingizni kiriting..." />
            </div>
            <div class="input-form">
              <span>Email</span>
              <input type="email" placeholder="Emailni kiriting..." />
            </div>
            <div class="input-form">
              <span>Parol</span>
              <input type="password" placeholder="Parolni kiriting..." />
            </div>
            <div class="input-form">
              <span>Parolni tasdiqlang</span>
              <input type="password" placeholder="Parolni tasdiqlang..." />
            </div>
          </div>
          <div class="btn">
            <button>Ro'yhatdan o'tish</button>
          </div>
          <div class="foot-mod flex">
            <button @click="clickLogin">Kirish</button>
            <button>Parolni tiklash</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

Vue.directive("click-outside", {
  bind: function(el, binding, vnode) {
    el.clickOutsideEvent = function(event) {
      // here I check that click was outside the el and his childrens
      if (!(el === event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind: function(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  }
});
export default {
  data() {
    return {
      year: false,
      janr: false,
      isLogin: false,
      isRegistr: false,
    };
  },
  methods: {
    hide1() {
      this.janr = false;
    },
    hide2() {
      this.year = false;
    },
    clickyear() {
      this.year = !this.year;
      this.janr = false;
    },
    clickLogin() {
      this.isLogin = true;
      this.isRegistr = false;
    },
    clickRegistr() {
      this.isLogin = false;
      this.isRegistr = true;
    },
    clickjanr() {
      this.janr = !this.janr;
      this.year = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.fix-vh {
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.5;
  width: 100%;
  height: 100vh;
  z-index: 116;
}
.fix-no {
  display: none;
  opacity: 0;
}
.open-modal {
  top: 40% !important;
  opacity: 1 !important;
  transform: translate(-50%, -50%) scale(1) !important;
}
.open-registr {
  z-index: 1000 !important;
  top: 50% !important;
  opacity: 1 !important;
  transform: translate(-50%, -50%) scale(1) !important;
}

.login {
  opacity: 0;
  transition: 0.3s;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  z-index: 10;
  background: #fff;
  width: 500px;
  border-radius: 10px;
  z-index: 151;

  .title-mod {
    padding: 15px;
    border-bottom: 1px solid #c5c5c5;
    h3 {
      color: #212529;
    }
  }
  .body-mod {
    .form {
      padding: 15px;
      border-bottom: 1px solid #c5c5c5;
      .input-form {
        display: flex;
        flex-direction: column;
        span {
          margin-bottom: 10px;
          font-size: 18px;
          font-weight: 600;
        }
        input {
          border-radius: 5px;
          border: 1px solid #999;
          padding-left: 10px;
          margin-bottom: 20px;
          width: 100%;
          height: 40px;
          &:focus {
            outline: #6187ad;
          }
        }
      }
    }
    .btn {
      padding: 15px;
      display: flex;
      justify-content: center;
      button {
        cursor: pointer;
        padding: 10px 20px;
        color: #fff;
        border-radius: 6px;
        background: #6a2fe3;
      }
    }
    .foot-mod {
      padding: 15px;
      padding-top: 0;
    }
  }
}
.none {
  height: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
  border: 0 !important;
  transition: 1s;
  z-index: 0 !important;
  .catalog {
    display: none;
  }
}
header {
  .janr,
  .yil {
    height: fit-content;
    transition: 0.3s;
    padding: 20px 0 10px 0;
    margin-top: 10px;
    border-top: 1px solid #c5c5c5;
    z-index: 12;
    .catalog {
      flex-wrap: wrap;
      .name {
        width: 250px;
        display: inline-flex;

        a {
          color: #fff;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          font-size: 14px;
          font-weight: normal;
          padding: 5px 0px;
          margin-bottom: 10px;
          &::after {
            content: "";
            height: 1px;
            width: 0;
            background: #fff;
            transition: 0.2s;
          }
        }
        a:hover {
          &::after {
            width: 100%;
          }
        }
      }
    }
  }
}

header {
  background-color: #6a2fe3;
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 111;
  .logo {
    a {
      text-decoration: none;
      color: #fff;
      line-height: 24px;
      font-size: 24px;
    }
    h2 {
      font-size: 11px;
      font-weight: 200;
      color: #cccccc;
      span {
        font-weight: 400;
        margin: 0px 3px;
        color: #fff;
      }
    }
  }
  .catalog {
    ul {
      li {
        margin-right: 35px;
        button {
          cursor: pointer;
          font-size: 14px;
          color: #fff;
          font-weight: 400;
          span {
            margin-left: 3px;
          }
        }
      }
    }
  }
  .right {
    .search {
      width: 250px;
      position: relative;
      input {
        width: 100%;
        background: #fff;
        padding: 10px;
        border: 0;
        border-radius: 5px;
        padding-right: 35px;
        &:focus {
          outline: none;
        }
      }
      button {
        position: absolute;
        top: 50%;
        right: 5px;
        color: #6a2fe3;
        transform: translate(0, -50%);
      }
    }
    .lang {
      margin: 0 20px;
      span.line {
        width: 1px;
        height: 20px;
        background-color: #fff;
      }
      button {
        padding: 10px;
        color: #fff;
      }
      .active {
        font-weight: 500;
      }
    }
    button {
      cursor: pointer;

      padding: 5px 10px;
      font-size: 14px;
      &:hover {
        text-decoration: underline;
      }
    }
    .profil {
      margin-right: 20px;
      button {
        color: #fff;
        padding: 0;
        span {
          color: #fff;
          margin-right: 8px;
        }
      }
    }
    .logout {
      margin-right: 0;
    }
  }
}
</style>