<template>
  <div>

    <div class="card">
      <div class="img">
        <img src="@/assets/img/1.jpg" alt />
        <div class="number">
          <span>{{card.number}}</span>
        </div>
      </div>
      <div class="text">
        <p>{{card.text}}</p>
      </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
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
        background-color: rgb(0 0 0 / 55%);
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