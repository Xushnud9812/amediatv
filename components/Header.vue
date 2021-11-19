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
                <button class="flex">
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
      janr: false
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
    clickjanr() {
      this.janr = !this.janr;
      this.year = false;
    }
  }
};
</script>

<style lang="scss" scoped>
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