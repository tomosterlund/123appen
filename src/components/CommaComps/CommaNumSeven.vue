<template>
    <div class="containerEx row">
        <div class="sentence d-flex flex-wrap">
            Ida
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>fick
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>glass
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>av
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>sin
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>mamma
            <div :style="choicesStyle" @click="correctChoice" class="choices"></div>trots
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>att
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>hon
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>inte
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>st&#228;dat
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>sitt
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>rum.
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
        }
    },
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
            this.$emit('eigthSentence');
            eventBus.$emit('monsterSuccess');
        },
        correctChoice: function() {
            this.BGcolor = 'green';
            this.$emit('eigthSentence');
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