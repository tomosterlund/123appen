<template>
    <div>
        <div class="row">
            <div class="col-md-6 offset-md-3 col-sm-12 col-xs-12 d-flex justify-content-center flex-wrap">
                <sche-monster v-if="showFirstSche || showSecondSche || showThirdSche || showFourthSche || showFifthSche || showSixthSche || showSeventhSche || showEigthSche || showFinished"></sche-monster>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-xs-12" id="container">
                <div id="title">
                    <h2 class="">Sche-ljudet</h2>
                    <p style="font-style: italic">V&#228;lj r&#228;tt stavning</p>
                </div>
                <div id="content">
                    <transition name='fade'>
                        <sche-num-one @secondSentence="nextComp" v-if="showFirstSche"></sche-num-one>
                        <sche-num-two @thirdSentence="thirdComp" v-if="showSecondSche"></sche-num-two>
                        <sche-num-three @fourthSentence="fourthComp" v-if="showThirdSche"></sche-num-three>
                        <sche-num-four @fifthSentence="fifthComp" v-if="showFourthSche"></sche-num-four>
                        <sche-num-five @sixthSentence="sixthComp" v-if="showFifthSche"></sche-num-five>
                        <sche-num-six @seventhSentence="seventhComp" v-if="showSixthSche"></sche-num-six>
                        <sche-num-seven @eigthSentence="eigthComp" v-if="showSeventhSche"></sche-num-seven>
                        <sche-num-eight @finishedPage="finishedComp" v-if="showEigthSche"></sche-num-eight>
                    </transition>
                        <sche-finished  v-show="showFinished"></sche-finished>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import ScheMonster from './ScheMonster'
import ScheStart from './ScheStart'
import ScheNumOne from './ScheNumOne'
import ScheNumTwo from './ScheNumTwo'
import ScheNumThree from './ScheNumThree'
import ScheNumFour from './ScheNumFour'
import ScheNumFive from './ScheNumFive'
import ScheNumSix from './ScheNumSix'
import ScheNumSeven from './ScheNumSeven'
import ScheNumEight from './ScheNumEight'
import ScheFinished from './ScheFinished'

export default {
    components: {
        ScheStart,
        ScheNumOne,
        ScheNumTwo,
        ScheNumThree,
        ScheNumFour,
        ScheNumFive,
        ScheNumSix,
        ScheNumSeven,
        ScheNumEight,
        ScheFinished,
        ScheMonster,

    },
    data() {
        return {
            showFirstSche: true,
            showSecondSche: false,
            showThirdSche: false,
            showFourthSche: false,
            showFifthSche: false,
            showSixthSche: false,
            showSeventhSche: false,
            showEigthSche: false,
            showNinthSche: false,
            showFinished: false
        }
    },
    methods: {
        nextComp: function() {
            let vm = this;
            setTimeout(function(){
                vm.showFirstSche = false;
                vm.showSecondSche = true;
            },500);
        },
        thirdComp: function() {
            let vm = this;
            setTimeout(function(){
                vm.showSecondSche = false;
                vm.showThirdSche = true;
            },500);
        },
        fourthComp: function () {
            let vm = this;
            setTimeout(function() {
                vm.showThirdSche = false;
                vm.showFourthSche = true;
            },500);
        },
        fifthComp: function () {
            let vm = this;
            setTimeout(function() {
                vm.showFourthSche = false;
                vm.showFifthSche = true;
            },500);
        },
        sixthComp: function () {
            let vm = this;
            setTimeout(function() {
                vm.showFifthSche = false;
                vm.showSixthSche = true;
            },500);
        },
        seventhComp: function () {
            let vm = this;
            setTimeout(function() {
                vm.showSixthSche = false;
                vm.showSeventhSche = true;
            },500);
        },
        eigthComp: function () {
            let vm = this;
            setTimeout(function() {
                vm.showSeventhSche = false;
                vm.showEigthSche = true;
            },500);
        },
        finishedComp: function () {
            let vm = this;
            setTimeout(function() {
                vm.showEigthSche = false;
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
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: transparent;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            color: black;
            p {
                font-size: 14px;
            }
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