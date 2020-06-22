<template>
    <div class="containerEx">
        <p>Ditt resultat: {{ userScore }}</p>
        <p>Monstrets resultat: {{ monsterScore }}</p>
    </div>
</template>

<script>
import { eventBus } from '../../main'

export default {
    data() {
        return {
            userScore: 0,
            monsterScore: 0,
        }
    },
    beforeCreate() {
        eventBus.$on('userScore', (userProgWidth) => {
            this.userScore = userProgWidth / 20;
        });
        eventBus.$on('monsterScore', (monsterProgWidth) => {
            this.monsterScore = monsterProgWidth / 20;
        });
    }
}
</script>

<style lang="scss" scoped>
    .containerEx {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .sentence {
        margin-bottom: 10px;
        font-size: 20px;
        display: flex;
        flex-wrap: wrap;
        margin-left: 20px;
        margin-right: 20px;
        .choices {
            background-color: yellow;
            height: 10px;
            width: 20px;
            padding: 5px;
            margin-top: 18px;
            margin-left: 3px;
            margin-right: 3px;
            border-radius: 3px;
            &:hover {
                transform: scale(1.25);
            }
        }
    }
    .symbol {
        text-align: center;
        font-size: 40px;
        background-color: snow;
        border-radius: 3px;
        color: black;
        width: 50px;
        margin-top: 10px;
    }
</style>