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
                    <h2 class="">Ng-ljudet</h2>
                    <p style="font-style: italic">V&#228;lj r&#228;tt stavning</p>
                </div>
                <div id="content">
                    <transition name='fade'>
                        <div v-if="q === 0" :key="q">
                            <div class="d-flex flex-column align-items-center">
                                <div class="singingPic"></div>
                                <div class="buttonCont d-flex justify-content-between mt-3">
                                    <button
                                    class="btn btn-primary ml-2 mr-2 mb-2"
                                    :style="choicesStyle"
                                    v-for="answer in quiz[0].answers"
                                    @click="verifyChoice(answer.correct)"
                                    :key="answer[0]">
                                    {{ answer.answer }}</button>
                                </div>
                            </div>
                        </div>
                        <div v-if="q === 1" :key="q" >
                            <div class="d-flex flex-column align-items-center">
                                <div class="calmPic"></div>
                                <div class="buttonCont d-flex justify-content-between mt-3">
                                    <button
                                    class="btn btn-primary ml-2 mr-2 mb-2"
                                    :style="choicesStyle"
                                    v-for="answer in quiz[1].answers"
                                    @click="verifyChoice(answer.correct)"
                                    :key="answer[1]">
                                    {{ answer.answer }}</button>
                                </div>
                            </div>
                        </div>
                        <div v-if="q === 2" :key="q" class="d-flex flex-column align-items-center">
                            <div class="campingPic"></div>
                            <div class="buttonCont d-flex justify-content-between mt-3">
                                <button
                                class="btn btn-primary ml-2 mr-2 mb-2"
                                :style="choicesStyle"
                                v-for="answer in quiz[2].answers"
                                @click="verifyChoice(answer.correct)"
                                :key="answer[2]">
                                {{ answer.answer }}</button>
                            </div>
                        </div>
                        <div v-if="q === 3" :key="q" class="d-flex flex-column align-items-center">
                            <div class="lingonPic"></div>
                            <div class="buttonCont d-flex justify-content-between mt-3">
                                <button
                                class="btn btn-primary ml-2 mr-2 mb-2"
                                :style="choicesStyle"
                                v-for="answer in quiz[3].answers"
                                @click="verifyChoice(answer.correct)"
                                :key="answer[3]">
                                {{ answer.answer }}</button>
                            </div>
                        </div>
                        <div v-if="q === 4" :key="q" class="d-flex flex-column align-items-center">
                            <div class="ovenPic"></div>
                            <div class="buttonCont d-flex justify-content-between mt-3">
                                <button
                                class="btn btn-primary ml-2 mr-2 mb-2"
                                :style="choicesStyle"
                                v-for="answer in quiz[4].answers"
                                @click="verifyChoice(answer.correct)"
                                :key="answer[4]">
                                {{ answer.answer }}</button>
                            </div>
                        </div>
                        <div v-if="q === 5" :key="q" class="d-flex flex-column align-items-center">
                            <div class="rainPic"></div>
                            <div class="buttonCont d-flex justify-content-between mt-3">
                                <button
                                class="btn btn-primary ml-2 mr-2 mb-2"
                                :style="choicesStyle"
                                v-for="answer in quiz[5].answers"
                                @click="verifyChoice(answer.correct)"
                                :key="answer[5]">
                                {{ answer.answer }}</button>
                            </div>
                        </div>
                        <div v-if="q === 6" :key="q" class="d-flex flex-column align-items-center">
                            <div class="bedPic"></div>
                            <div class="buttonCont d-flex justify-content-between mt-3">
                                <button
                                class="btn btn-primary ml-2 mr-2 mb-2"
                                :style="choicesStyle"
                                v-for="answer in quiz[6].answers"
                                @click="verifyChoice(answer.correct)"
                                :key="answer[6]">
                                {{ answer.answer }}</button>
                            </div>
                        </div>
                        <div v-if="q === 7" :key="q" class="d-flex flex-column align-items-center">
                            <div class="penguinsPic"></div>
                            <div class="buttonCont d-flex justify-content-between mt-3">
                                <button
                                class="btn btn-primary ml-2 mr-2 mb-2"
                                :style="choicesStyle"
                                v-for="answer in quiz[7].answers"
                                @click="verifyChoice(answer.correct)"
                                :key="answer[7]">
                                {{ answer.answer }}</button>
                            </div>
                        </div>
                        <div v-if="q === 8" :key="q" class="d-flex flex-column align-items-center">
                            <div class="strollerPic"></div>
                            <div class="buttonCont d-flex justify-content-between mt-3">
                                <button
                                class="btn btn-primary ml-2 mr-2 mb-2"
                                :style="choicesStyle"
                                v-for="answer in quiz[8].answers"
                                @click="verifyChoice(answer.correct)"
                                :key="answer[8]">
                                {{ answer.answer }}</button>
                            </div>
                        </div>
                        <div v-if="q === 9" :key="q" class="d-flex flex-column align-items-center">
                            <div class="mt-3">Ditt resultat: {{ userCounter }}</div>
                            <div class="mt-3 mb-3">Monstrets resultat: {{ monsterCounter }}</div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import grammarMonster from './GrammarMonster'
import { eventBus } from './../main'

export default {
    data () {
        return {
        q: 0,
        BGcolor: 'cornflowerblue',
        userCounter: 0,
        monsterCounter: 0,
        quiz: [
            {
                text: 'singing',
                answers: [
                {answer: 'Hon sjunger', correct: true},
                {answer: 'Hon sjugner', correct: false},
            ]},
            {
                text: 'calm',
                answers: [
                {answer: 'Han är lungn', correct: false},
                {answer: 'Han är lugn', correct: true},
            ]},
            {
                text: 'Camping',
                answers: [
                {answer: 'Camping', correct: true},
                {answer: 'Campign', correct: false},
            ]},
            {
                text: 'Lingon',
                answers: [
                {answer: 'Lingon', correct: true},
                {answer: 'Lignon', correct: false},
            ]},
            {
                text: 'Ugn',
                answers: [
                {answer: 'Ung', correct: false},
                {answer: 'Ugn', correct: true},
            ]},
            {
                text: 'Regn',
                answers: [
                {answer: 'Reng', correct: false},
                {answer: 'Regn', correct: true},
            ]},
            {
                text: 'bed',
                answers: [
                {answer: 'Säng', correct: true},
                {answer: 'Sägn', correct: false},
            ]},
            {
                text: 'Pingin',
                answers: [
                {answer: 'Pingviner', correct: true},
                {answer: 'Pignviner', correct: false},
            ]},
            {
                text: 'Barnvagn',
                answers: [
                {answer: 'Barnvangn', correct: false},
                {answer: 'Barnvagn', correct: true},
            ]},
        ]
        }   
    },
    methods: {
        verifyChoice(e) {
            let vm = this;
            if(e === true) {
                this.BGcolor = 'green';
                eventBus.$emit('userSuccess');
                setTimeout(function(){
                    vm.q++;
                    vm.BGcolor ='cornflowerblue';
                    vm.userCounter++;
                }, 500)
            } else if (e === false) {
                this.BGcolor = 'red';
                
                eventBus.$emit('monsterSuccess');
                setTimeout(function(){
                    vm.q++;
                    vm.BGcolor ='cornflowerblue';
                    vm.monsterCounter++;
                }, 500);
            };
        }
    },
    computed: {
        choicesStyle: function() {
            return {
                backgroundColor: this.BGcolor,
            }
        }
    },
    components: {
        grammarMonster,
    }
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
            .qText {
                font-size: 20px;
                font-weight: 500;
            }
        }
        button {
            &:hover {
                transform: scale(1.15);
            }
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
        textarea {
            width: 300px;
        }
    }

        .singingPic {
        background-image: url('./../images/singing.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .calmPic {
        background-image: url('./../images/calm.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .campingPic {
        background-image: url('./../images/camping.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .lingonPic {
        background-image: url('./../images/lingon.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .ovenPic {
        background-image: url('./../images/oven.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .rainPic {
        background-image: url('./../images/rain.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .bedPic {
        background-image: url('./../images/bed.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .penguinsPic {
        background-image: url('./../images/penguins.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .strollerPic {
        background-image: url('./../images/stroller.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }
</style>