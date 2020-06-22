<template>
    <div class="containerEx row">
        <div class="sentence d-flex flex-wrap">
            Katter
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>&#228;r
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>s&#246;ta
            <div :style="choicesStyle" @click="correctChoice" class="choices"></div>men
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>det
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>&#228;r
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>apor
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>ocks&#229;.
        </div>
        <div class="symbol">,</div>
    </div>
</template>

<script>
import { eventBus } from '../../main'

export default {
    data() {
        return {
            BGcolor: 'cornflowerblue',
            userProgWidth: 0,
            monsterProgWidth: 0
        }
    },
    // props: ['monsterProgWidth', 'userProgWidth'],
    computed: {
        choicesStyle: function() {
            return {
                backgroundColor: this.BGcolor,
            }
        }
    },
    methods: {
        falseChoice: function() {
            this.BGcolor = 'red';
            this.$emit('nextSentence');
            eventBus.$emit('monsterSuccess');
        },
        correctChoice: function() {
            this.BGcolor = 'green';
            this.$emit('nextSentence');
            eventBus.$emit('userSuccess');
        }
    }
}
</script>

<style lang="scss" scoped>
    .containerEx {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .sentence {
        margin-bottom: 10px;
        font-size: 20px;
        display: flex;
        .choices {
            background-color: cornflowerblue;
            height: 10px;
            width: 20px;
            padding: 5px;
            margin-top: 18px;
            margin-left: 3px;
            margin-right: 3px;
            border-radius: 3px;
            &:hover {
                transform: scale(1.35);
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