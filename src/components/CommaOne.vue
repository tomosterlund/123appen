<template>
    <div>
        <div class="row">
            <div class="col-md-6 offset-md-3 col-sm-12 col-xs-12 d-flex justify-content-center flex-wrap">
                <grammar-monster></grammar-monster>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-xs-12" id="container">
                <div id="title">
                    <h2 class="">Kommatecken</h2>
                </div>
                <div id="content">
                    <transition name="fade">
                        <comma-num-one v-if="showFirstComma" @nextSentence="nextComp"></comma-num-one>
                        <comma-num-two v-if="showSecondComma" @thirdSentence="thirdComp"></comma-num-two>
                        <comma-num-three v-if="showThirdComma" @fourthSentence="fourthComp"></comma-num-three>
                        <comma-num-four v-if="showFourthComma" @fifthSentence="fifthComp"></comma-num-four>
                        <comma-num-five v-if="showFifthComma" @sixthSentence="sixthComp"></comma-num-five>
                        <comma-num-six v-if="showSixthComma" @seventhSentence="seventhComp"></comma-num-six>
                        <comma-num-seven v-if="showSeventhComma" @eigthSentence="eigthComp"></comma-num-seven>
                        <comma-num-eight v-if="showEigthComma" @ninthSentence="ninthComp"></comma-num-eight>
                        <comma-num-nine v-if="showNinthComma" @finishedPage="finishedComp"></comma-num-nine>
                    </transition>
                    <comma-one-finished v-show="showFinished"></comma-one-finished>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import GrammarMonster from './GrammarMonster'
import CommaNumOne from './CommaComps/CommaNumOne'
import CommaNumTwo from './CommaComps/CommaNumTwo'
import CommaNumThree from './CommaComps/CommaNumThree'
import CommaNumFour from './CommaComps/CommaNumFour'
import CommaNumFive from './CommaComps/CommaNumFive'
import CommaNumSix from './CommaComps/CommaNumSix'
import CommaNumSeven from './CommaComps/CommaNumSeven'
import CommaNumEight from './CommaComps/CommaNumEight'
import CommaNumNine from './CommaComps/CommaNumNine'
import CommaOneFinished from './CommaComps/CommaOneFinished'

export default {
    components: {
        CommaNumOne,
        CommaNumTwo,
        CommaNumThree,
        CommaNumFour,
        CommaNumFive,
        CommaNumSix,
        CommaNumSeven,
        CommaNumEight,
        CommaNumNine,
        CommaOneFinished,
        GrammarMonster,

    },
    data() {
        return {
            showFirstComma: true,
            showSecondComma: false,
            showThirdComma: false,
            showFourthComma: false,
            showFifthComma: false,
            showSixthComma: false,
            showSeventhComma: false,
            showEigthComma: false,
            showNinthComma: false,
            showFinished: false
        }
    },
    methods: {
        nextComp: function() {
            let vm = this;
            setTimeout(function(){
                vm.showFirstComma = false;
                vm.showSecondComma = true;
            },500);
        },
        thirdComp: function() {
            let vm = this;
            setTimeout(function(){
                vm.showSecondComma = false;
                vm.showThirdComma = true;
            },500);
        },
        fourthComp: function () {
            let vm = this;
            setTimeout(function() {
                vm.showThirdComma = false;
                vm.showFourthComma = true;
            },500);
        },
        fifthComp: function () {
            let vm = this;
            setTimeout(function() {
                vm.showFourthComma = false;
                vm.showFifthComma = true;
            },500);
        },
        sixthComp: function () {
            let vm = this;
            setTimeout(function() {
                vm.showFifthComma = false;
                vm.showSixthComma = true;
            },500);
        },
        seventhComp: function () {
            let vm = this;
            setTimeout(function() {
                vm.showSixthComma = false;
                vm.showSeventhComma = true;
            },500);
        },
        eigthComp: function () {
            let vm = this;
            setTimeout(function() {
                vm.showSeventhComma = false;
                vm.showEigthComma = true;
            },500);
        },
        ninthComp: function () {
            let vm = this;
            setTimeout(function() {
                vm.showEigthComma = false;
                vm.showNinthComma = true;
            },500);
        },
        finishedComp: function () {
            let vm = this;
            setTimeout(function() {
                vm.showNinthComma = false;
                vm.showFinished = true;
            },500);
        },
    },
}
</script>

<style lang="scss">
    #container {
        height: auto;
        min-height: 250px;
        background-color: rgb(241, 238, 238);
        border-radius: 15px;
        #title {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: transparent;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            color: black;
        }
        #content {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            margin: auto 20px;
        }
        .fade-enter {
        opacity: 0;
        transform: translateX(100px);
        }        
        .fade-enter-active {
            transition: 0.6s;
            transition-delay: 0.4s;
        }
        .fade-leave-active {
            opacity: 0;
            transition: 0.2s ease-in-out;
            transform: translateX(-300px);
        }
    }

    
</style>