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
                    <h2 class="">J-ljudet</h2>
                    <p style="font-style: italic">V&#228;lj r&#228;tt stavning</p>
                </div>
                <div id="content">
                    <transition name='fade'>
                        <div v-if="q === 0" :key="q">
                            <div class="d-flex flex-column align-items-center">
                                <div class="depthPic"></div>
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
                                <div class="candlePic"></div>
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
                            <div class="happyPic"></div>
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
                            <div class="juicePic"></div>
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
                            <div class="speakerPic"></div>
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
                            <div class="walkPic"></div>
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
                            <div class="animalPic"></div>
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
                            <div class="homeworkPic"></div>
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
                            <div class="djunglePic"></div>
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
            {answer: 'Havet är jupt', correct: false},
            {answer: 'Havet är ljupt', correct: false},
            {answer: 'Havet är djupt', correct: true},
            {answer: 'Havet är gupt', correct: false},
            ]},
            {text: 'How old is Tom\'s mom?',
            answers: [
            {answer: 'Ett jus', correct: false},
            {answer: 'Ett ljus', correct: true},
            {answer: 'Ett djus', correct: false},
            {answer: 'Ett gus', correct: false},
            ]},
            {text: 'How old is Tom\'s girlfriend?',
            answers: [
            {answer: 'Jätteglad', correct: true},
            {answer: 'Ljätteglad', correct: false},
            {answer: 'Djätteglad', correct: false},
            {answer: 'Gätteglad', correct: false},
            ]},
            {text: 'How old is Tom\'s girlfriend?',
            answers: [
            {answer: 'Juice', correct: true},
            {answer: 'Ljuice', correct: false},
            {answer: 'Djuice', correct: false},
            {answer: 'Guice', correct: false},
            ]},
            {text: 'How old is Tom\'s girlfriend?',
            answers: [
            {answer: 'Jud', correct: false},
            {answer: 'Ljud', correct: true},
            {answer: 'Djud', correct: false},
            {answer: 'Gud', correct: false},
            ]},
            {text: 'How old is Tom\'s girlfriend?',
            answers: [
            {answer: 'Han jick', correct: false},
            {answer: 'Han ljick', correct: false},
            {answer: 'Han djick', correct: false},
            {answer: 'Han gick', correct: true},
            ]},
            {text: 'How old is Tom\'s girlfriend?',
            answers: [
            {answer: 'Jur', correct: false},
            {answer: 'Ljur', correct: false},
            {answer: 'Djur', correct: true},
            {answer: 'Gur', correct: false},
            ]},
            {text: 'How old is Tom\'s girlfriend?',
            answers: [
            {answer: 'Jöra läxor', correct: false},
            {answer: 'Ljöra läxor', correct: false},
            {answer: 'Djöra läxor', correct: false},
            {answer: 'Göra läxor', correct: true},
            ]},
            {text: 'How old is Tom\'s girlfriend?',
            answers: [
            {answer: 'Jungel', correct: false},
            {answer: 'Ljungel', correct: false},
            {answer: 'Djungel', correct: true},
            {answer: 'Gungel', correct: false},
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
            transition: 0.3s;
            transition-delay: 0.2s;
        }
        .fade-leave-active {
            opacity: 0;
            transition: 0.2s ease-in-out;
            transform: translateX(-300px);
        }
    }

    .depthPic {
        background-image: url('./../images/deepsea.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .candlePic {
        background-image: url('./../images/candle.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .happyPic {
        background-image: url('./../images/happy.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .juicePic {
        background-image: url('./../images/juice.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .speakerPic {
        background-image: url('./../images/speaker.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .walkPic {
        background-image: url('./../images/walk.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .animalPic {
        background-image: url('./../images/animals.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .homeworkPic {
        background-image: url('./../images/homework.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }

    .djunglePic {
        background-image: url('./../images/djungle.jpg');
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background-size: cover;
    }
</style>