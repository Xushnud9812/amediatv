<template>
  <div>
    <div class="anime">
      <div class="container">
        <div class="tab-menu">
          <button
            :class="tabIndex -1 == i ? 'active' : ''"
            v-for="(item, i) in tabMenus"
            :key="i"
            @click="tabindex(i)"
          >{{item.title}}</button>
        </div>
        <div class="animes flex" v-if="tabIndex == 1">
          <div class="films" v-for="(item, i) in cards1" :key="i">
            <Card :card="item" />
          </div>
        </div>
        <div class="animes flex" v-if="tabIndex == 2">
          <div class="films" v-for="(item, i) in cards2" :key="i">
            <Card :card="item" />
          </div>
        </div>
        <div class="animes flex" v-if="tabIndex == 3">
          <div class="films" v-for="(item, i) in cards3" :key="i">
            <Card :card="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: { Card },
  data() {
    return {
      tabIndex: 1,
      tabMenus: [
        {
          title: "ANime1"
        },
        {
          title: "ANime2"
        },
        {
          title: "ANime3"
        }
      ],
      cards1: [
        {
          number: 12,
          image: "as",
          text: "Nar1111uto"
        },
        {
          number: 12,
          image: "as",
          text: "Naruto"
        },
        {
          number: 12,
          image: "as",
          text: "Naruto"
        },
        {
          number: 12,
          image: "as",
          text: "Naruto"
        },
        {
          number: 12,
          image: "as",
          text: "Naruto"
        }
      ],
      cards2: [
        {
          number: 12,
          image: "as",
          text: "22222222"
        },
        {
          number: 12,
          image: "as",
          text: "Naruto"
        },
        {
          number: 12,
          image: "as",
          text: "Naruto"
        },
        {
          number: 12,
          image: "as",
          text: "Naruto"
        },
        {
          number: 12,
          image: "as",
          text: "Naruto"
        }
      ],
      cards3: [
        {
          number: 12,
          image: "as",
          text: "Naruto3333333"
        },
        {
          number: 12,
          image: "as",
          text: "Naruto"
        },
        {
          number: 12,
          image: "as",
          text: "Naruto"
        },
        {
          number: 12,
          image: "as",
          text: "Naruto"
        },
        {
          number: 12,
          image: "as",
          text: "Naruto"
        }
      ]
    };
  },
  methods: {
    tabindex(i) {
      this.tabIndex = i + 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.animes {
  flex-wrap: wrap;
}
.films {
  width: calc((100% - 100px) / 5);
  margin-bottom: 20px;
}
.anime {
  width: 100%;
  margin-bottom: 30px;
  .tab-menu {
    margin-bottom: 20px;
    button {
      border-radius: 6px;
      margin-right: 10px;
      cursor: pointer;
      padding: 10px 20px;
      background: rgba(59, 10, 99, 0.2);
      &::after {
        content: "";
        background: red;
        width: 100%;
        height: 2px;
      }
    }
    .active {
      background: #6a2fe3;
      color: #fff;
    }
  }
  .img {
    position: relative;
    width: 100%;
    .number {
      width: 100%;
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: 20px;
      span {
        padding: 3px 8px;
        z-index: 100;
        color: white;
        text-decoration: none;
        background-color: rgba(51, 51, 51, 0.391);
        border-radius: 4px;
        margin-bottom: 0.5rem;
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 1.2;
      }
    }
    img {
      width: 100%;
    }
  }
  .text {
    font-size: 18px;
    color: #111;
    text-align: center;
    margin-top: 10px;
  }
}
</style>