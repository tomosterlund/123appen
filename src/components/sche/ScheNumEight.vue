<template>
    <div class="containerEx row">
        <div class="shirtPic"></div>
        <div class="sentence d-flex flex-wrap">
            <div @click="falseChoice" :style="choicesStyle" class="choices">Stjorta</div>
            <div @click="falseChoice" :style="choicesStyle" class="choices">Chorta</div>
            <div @click="correctChoice" :style="choicesStyle" class="choices">Skjorta</div>
        </div>
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
            this.$emit('finishedPage');
            eventBus.$emit('monsterSuccessSche');
        },
        correctChoice: function() {
            this.BGcolor = 'green';
            this.$emit('finishedPage');
            eventBus.$emit('userSuccessSche');
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
        font-size: 18px;
        font-weight: 600;
        display: flex;
        .choices {
            padding: 5px;
            margin-top: 10px;
            margin-left: 6px;
            margin-right: 6px;
            border-radius: 3px;
            &:hover {
                transform: scale(1.15);
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

    .shirtPic {
        background-image: url('shirt.jpg');
        background-size: cover;
        height: 130px;
        width: 130px;
        border-radius: 20px;
    }
</style>