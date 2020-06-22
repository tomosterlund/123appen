<template>
    <div class="containerEx row">
        <div class="sentence d-flex flex-wrap">
            
        </div>
        <div class="symbol">,</div>
    </div>
</template>

<script>
export default {
    methods: {
        falseChoice: function() {
            this.$emit('nextSentence');
        },
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