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
                    <h2 class="">K-ljudet</h2>
                    <p style="font-style: italic">V&#228;lj r&#228;tt stavning</p>
                </div>
                <div id="content">
                    <transition name='fade'>
                        <div v-if="q === 0" :key="q">
                            <div class="d-flex flex-column align-items-center">
                                <div class="bakingPic"></div>
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
                                <div class="clockPic"></div>
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
                            <div class="backingPic"></div>
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
                            <div class="girlPic"></div>
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
                            <div class="goatPic"></div>
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
                            <div class="thinkingPic"></div>
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
                            <div class="racketPic"></div>
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
                            <div class="drawingPic"></div>
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
                            <div class="skeletonPic"></div>
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
                text: 'Baka',
                answers: [
                {answer: 'Baka', correct: true},
                {answer: 'Backa', correct: false},
            ]},
            {
                text: 'Klocka',
                answers: [
                {answer: 'Kloka', correct: false},
                {answer: 'Klocka', correct: true},
            ]},
            {
                text: 'Backa',
                answers: [
                {answer: 'Bilen bakar', correct: false},
                {answer: 'Bilen backar', correct: true},
            ]},
            {
                text: 'Flicka',
                answers: [
                {answer: 'Flika', correct: false},
                {answer: 'Flicka', correct: true},
            ]},
            {
                text: 'Bock',
                answers: [
                {answer: 'Bok', correct: false},
                {answer: 'Bock', correct: true},
            ]},
            {
                text: 'Tänka',
                answers: [
                {answer: 'Hon tänker', correct: true},
                {answer: 'Hon täncker', correct: false},
            ]},
            {
                text: 'Racket',
                answers: [
                {answer: 'Raket', correct: false},
                {answer: 'Racket', correct: true},
            ]},
            {
                text: 'Teckna',
                answers: [
                {answer: 'Tekna', correct: false},
                {answer: 'Teckna', correct: true},
            ]},
            {
                text: 'Skelett',
                answers: [
                {answer: 'Skelett', correct: true},
                {answer: 'Sckelett', correct: false},
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

        .bakingPic {
        background-image: url('./../images/baking.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .clockPic {
        background-image: url('./../images/clock.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .backingPic {
        background-image: url('./../images/backing.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .girlPic {
        background-image: url('./../images/girl.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .goatPic {
        background-image: url('./../images/goat.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .thinkingPic {
        background-image: url('./../images/thinking.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .racketPic {
        background-image: url('./../images/racket.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .drawingPic {
        background-image: url('./../images/drawing.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .skeletonPic {
        background-image: url('./../images/skeleton.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }
</style>