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
                    <h2 class="">K, Tj eller Sch</h2>
                    <p style="font-style: italic">V&#228;lj r&#228;tt stavning</p>
                </div>
                <div id="content">
                    <transition name='fade'>
                        <div v-if="q === 0" :key="q">
                            <div class="d-flex flex-column align-items-center">
                                <div class="cherriesPic"></div>
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
                        <div v-if="q === 1" :key="q" class="d-flex flex-column align-items-center">
                            <div class="showerPic"></div>
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
                        <div v-if="q === 2" :key="q" class="d-flex flex-column align-items-center">
                            <div class="thiefPic"></div>
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
                            <div class="moneyPic"></div>
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
                            <div class="schlagerPic"></div>
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
                            <div class="lovePic"></div>
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
                            <div class="feelPic"></div>
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
                            <div class="schnitzelPic"></div>
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
                            <div class="chickpeasPic"></div>
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
            {text: 'How old is Tom?',
            answers: [
            {answer: 'Körsbär', correct: true},
            {answer: 'Schörsbär', correct: false},
            {answer: 'Tjörsbär', correct: false},
            ]},
            {text: 'How old is Tom\'s mom?',
            answers: [
            {answer: 'Dusk', correct: false},
            {answer: 'Dusch', correct: true},
            {answer: 'Dutj', correct: false},
            ]},
            {text: 'How old is Tom\'s girlfriend?',
            answers: [
            {answer: 'Kuv', correct: false},
            {answer: 'Schuv', correct: false},
            {answer: 'Tjuv', correct: true},
            ]},
            {text: 'How old is Tom\'s girlfriend?',
            answers: [
            {answer: 'Käna pengar', correct: false},
            {answer: 'Schäna pengar', correct: false},
            {answer: 'Tjäna pengar', correct: true},
            ]},
            {text: 'How old is Tom\'s girlfriend?',
            answers: [
            {answer: 'Klagerfestivalen', correct: false},
            {answer: 'Schlagerfestivalen', correct: true},
            {answer: 'Tjlagerfestivalen', correct: false},
            ]},
            {text: 'How old is Tom\'s girlfriend?',
            answers: [
            {answer: 'Kärlek', correct: true},
            {answer: 'Schärlek', correct: false},
            {answer: 'Tjärlek', correct: false},
            ]},
            {text: 'How old is Tom\'s girlfriend?',
            answers: [
            {answer: 'Att känna', correct: true},
            {answer: 'Att schänna', correct: false},
            {answer: 'Att tjänna', correct: false},
            ]},
            {text: 'How old is Tom\'s girlfriend?',
            answers: [
            {answer: 'Kniztel', correct: false},
            {answer: 'Schnitzel', correct: true},
            {answer: 'Tjnitzel', correct: false},
            ]},
            {text: 'How old is Tom\'s girlfriend?',
            answers: [
            {answer: 'Kikärtor', correct: true},
            {answer: 'Schikärtor', correct: false},
            {answer: 'Tjikärtor', correct: false},
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
            
            
        },
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
    }

    


    .cherriesPic {
        background-image: url('./../images/cherries.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .showerPic {
        background-image: url('./../images/shower.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .thiefPic {
        background-image: url('./../images/thief.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .moneyPic {
        background-image: url('./../images/money.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .schlagerPic {
        background-image: url('./../images/schlager.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .lovePic {
        background-image: url('./../images/love.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .feelPic {
        background-image: url('./../images/feel.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .schnitzelPic {
        background-image: url('./../images/schnitzel.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .chickpeasPic {
        background-image: url('./../images/chickpeas.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }
</style>