<template>
    <div class="containerEx row">
        <div class="sentence d-flex flex-wrap">
            Hej
            <div :style="choicesStyle" @click="correctChoice" class="choices"></div>jag
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>heter
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>Sandra.
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>Vad  
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>heter
            <div :style="choicesStyle" @click="falseChoice" class="choices"></div>du?
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
            this.$emit('fourthSentence');
            eventBus.$emit('monsterSuccess');
        },
        correctChoice: function() {
            this.BGcolor = 'green';
            this.$emit('fourthSentence');
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