<template>
  <div id="scheMonsterCont" class="monsterCont row">
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
import { eventBus } from '../../main'

export default {
    data() {
        return {
            userProgWidthSche: 0,
            monsterProgWidthSche: 0,
        }
    },
    computed: {
        monsterProgress: function() {
            return {
                backgroundColor: 'red',
                height: '25px',
                width: this.monsterProgWidthSche + 'px',
                borderRadius: '20px',
                margin: '3px',
            }
        },
        userProgress: function() {
            return {
                backgroundColor: 'green',
                height: '25px',
                width: this.userProgWidthSche + 'px',
                borderRadius: '20px',
                margin: '3px',
            }
        }
    },
    watch: {
        userProgWidthSche(oldValue, newValue) {
            eventBus.$emit('userScoreSche', this.userProgWidthSche);
        },
        monsterProgWidthSche(oldValue, newValue) {
            eventBus.$emit('monsterScoreSche', this.monsterProgWidthSche);
        }
    },
    created() {
            eventBus.$on('userSuccessSche', () => {
                this.userProgWidthSche += 22.5;
                eventBus.$emit('userScoreSche', this.userProgWidthSche);
            });
            eventBus.$on('monsterSuccessSche', () => {
                this.monsterProgWidthSche += 22.5;
            });
        },
    
}
</script>

<style lang="scss">
    #scheMonsterCont {
        width: 500px;
        height: auto;
        margin-bottom: 20px;
        margin-top: 20px;
        color: white;
        .picCont {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .monsterPic {
            background-image: url('../images/monster.jpg');
            background-size: cover;
            height: 80px;
            width: 80px;
            border-radius: 50%;
            margin: 10px auto;
        }
        .userPic {
            background-image: url('../images/user.png');
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