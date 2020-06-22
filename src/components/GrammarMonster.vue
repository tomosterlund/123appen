<template>
  <div class="monsterCont row">
      <div class="col-md-6 col-sm-6 col-xs-6 picCont">
          <h4>Du</h4>
          <div class="userPic"></div>
          <div id="playerProgressBar" class="progressBar">
              <div :style="userProgress"></div>
          </div>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-6 picCont">
          <h4>Grammatikmonstret</h4>
          <div class="monsterPic"></div>
          <div id="monsterProgressBar" class="progressBar">
              <div :style="monsterProgress"></div>
          </div>
      </div>
  </div>
</template>

<script>
import { eventBus } from '../main'

export default {
    data() {
        return {
            userProgWidth: 0,
            monsterProgWidth: 0,
        }
    },
    computed: {
        monsterProgress: function() {
            return {
                backgroundColor: 'red',
                height: '25px',
                width: this.monsterProgWidth + 'px',
                borderRadius: '20px',
                margin: '3px',
            }
        },
        userProgress: function() {
            return {
                backgroundColor: 'green',
                height: '25px',
                width: this.userProgWidth + 'px',
                borderRadius: '20px',
                margin: '3px',
            }
        }
    },
    watch: {
        userProgWidth(oldValue, newValue) {
            eventBus.$emit('userScore', this.userProgWidth);
        },
        monsterProgWidth(oldValue, newValue) {
            eventBus.$emit('monsterScore', this.monsterProgWidth);
        }
    },
    created() {
            eventBus.$on('userSuccess', () => {
                this.userProgWidth += 20;
                // eventBus.$emit('userScore', this.userProgWidth);
            });
            eventBus.$on('monsterSuccess', () => {
                this.monsterProgWidth += 20;
            });
        },
    
}
</script>

<style lang="scss">
    .monsterCont {
        width: 500px;
        height: auto;
        margin-bottom: 20px;
        margin-top: 20px;
        color: black;
        .picCont {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .monsterPic {
            background-image: url('./images/monster.jpg');
            background-size: cover;
            height: 80px;
            width: 80px;
            border-radius: 50%;
            margin: 10px auto;
        }
        .userPic {
            background-image: url('./images/user.png');
            background-size: cover;
            height: 80px;
            width: 80px;
            border-radius: 50%;
            margin: 10px auto;
        }
        .progressBar {
            height: 30px;
            width: 180px;
            border-radius: 20px;
            background-color: lightgray;
            display: flex;
            align-items: center;
        }
    }
    .green {
        background-color: rgb(43, 184, 43);
    }
    
</style>