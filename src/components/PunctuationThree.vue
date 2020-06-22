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
                    <h2 class="">Skiljetecken 3</h2>
                    <p style="font-style: italic">Fixa till meningen med skiljetecken och stor bokstav.</p>
                </div>
                <div id="content">
                    <transition name='fade'>
                        <div v-if="q === 0" :key="q">
                            <div class="d-flex flex-column align-items-center">
                                <p>{{ quiz[0].hint }}</p>
                                <div class="buttonCont align-items-center justify-content-between mt-3">
                                    <textarea
                                    class="form-control ml-2 mr-2 mb-2"
                                    :style="choicesStyle"
                                    v-model="firstUserSentence">
                                    </textarea>
                                </div>
                                <button @click="verifyChoice(firstUserSentence)" class="btn btn-primary mb-2">N&#228;sta</button>
                            </div>
                        </div>
                        <div v-if="q === 1" :key="q">
                            <div class="d-flex flex-column align-items-center">
                                <p>{{ quiz[1].hint }}</p>
                                <div class="buttonCont align-items-center justify-content-between mt-3">
                                    <textarea
                                    class="form-control ml-2 mr-2 mb-2"
                                    :style="choicesStyle"
                                    v-model="secondUserSentence">
                                    </textarea>
                                </div>
                                <button @click="verifyChoice(secondUserSentence)" class="btn btn-primary mb-2">N&#228;sta</button>
                            </div>
                        </div>
                        <div v-if="q === 2" :key="q">
                            <div class="d-flex flex-column align-items-center">
                                <p>{{ quiz[2].hint }}</p>
                                <div class="buttonCont align-items-center justify-content-between mt-3">
                                    <textarea
                                    class="form-control ml-2 mr-2 mb-2"
                                    :style="choicesStyle"
                                    v-model="thirdUserSentence">
                                    </textarea>
                                </div>
                                <button @click="verifyChoice(thirdUserSentence)" class="btn btn-primary mb-2">N&#228;sta</button>
                            </div>
                        </div>
                        <div v-if="q === 3" :key="q">
                            <div class="d-flex flex-column align-items-center">
                                <p>{{ quiz[3].hint }}</p>
                                <div class="buttonCont align-items-center justify-content-between mt-3">
                                    <textarea
                                    class="form-control ml-2 mr-2 mb-2"
                                    :style="choicesStyle"
                                    v-model="fourthUserSentence">
                                    </textarea>
                                </div>
                                <button @click="verifyChoice(fourthUserSentence)" class="btn btn-primary mb-2">N&#228;sta</button>
                            </div>
                        </div>
                        <div v-if="q === 4" :key="q">
                            <div class="d-flex flex-column align-items-center">
                                <p>{{ quiz[4].hint }}</p>
                                <div class="buttonCont align-items-center justify-content-between mt-3">
                                    <textarea
                                    class="form-control ml-2 mr-2 mb-2"
                                    :style="choicesStyle"
                                    v-model="fifthUserSentence">
                                    </textarea>
                                </div>
                                <button @click="verifyChoice(fifthUserSentence)" class="btn btn-primary mb-2">N&#228;sta</button>
                            </div>
                        </div>
                        <div v-if="q === 5" :key="q">
                            <div class="d-flex flex-column align-items-center">
                                <p>{{ quiz[5].hint }}</p>
                                <div class="buttonCont align-items-center justify-content-between mt-3">
                                    <textarea
                                    class="form-control ml-2 mr-2 mb-2"
                                    :style="choicesStyle"
                                    v-model="sixthUserSentence">
                                    </textarea>
                                </div>
                                <button @click="verifyChoice(sixthUserSentence)" class="btn btn-primary mb-2">N&#228;sta</button>
                            </div>
                        </div>
                        <div v-if="q === 6" :key="q">
                            <div class="d-flex flex-column align-items-center">
                                <p>{{ quiz[6].hint }}</p>
                                <div class="buttonCont align-items-center justify-content-between mt-3">
                                    <textarea
                                    class="form-control ml-2 mr-2 mb-2"
                                    :style="choicesStyle"
                                    v-model="seventhUserSentence">
                                    </textarea>
                                </div>
                                <button @click="verifyChoice(seventhUserSentence)" class="btn btn-primary mb-2">N&#228;sta</button>
                            </div>
                        </div>
                        <div v-if="q === 7" :key="q">
                            <div class="d-flex flex-column align-items-center">
                                <p>{{ quiz[7].hint }}</p>
                                <div class="buttonCont align-items-center justify-content-between mt-3">
                                    <textarea
                                    class="form-control ml-2 mr-2 mb-2"
                                    :style="choicesStyle"
                                    v-model="eigthUserSentence">
                                    </textarea>
                                </div>
                                <button @click="verifyChoice(eigthUserSentence)" class="btn btn-primary mb-2">N&#228;sta</button>
                            </div>
                        </div>
                        <div v-if="q === 8" :key="q">
                            <div class="d-flex flex-column align-items-center">
                                <p>{{ quiz[8].hint }}</p>
                                <div class="buttonCont align-items-center justify-content-between mt-3">
                                    <textarea
                                    class="form-control ml-2 mr-2 mb-2"
                                    :style="choicesStyle"
                                    v-model="ninthUserSentence">
                                    </textarea>
                                </div>
                                <button @click="verifyChoice(ninthUserSentence)" class="btn btn-primary mb-2">N&#228;sta</button>
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
        BGcolor: 'white',
        userCounter: 0,
        monsterCounter: 0,
        firstUserSentence: 'katten gillar inte hunden',
        secondUserSentence: 'om du kan den här så är du riktigt bra',
        thirdUserSentence: 'hunden gillar katten men katten gillar inte hunden',
        fourthUserSentence: 'sven linda och jag reser till usa imorgon',
        fifthUserSentence: 'varför vill du inte äta',
        sixthUserSentence: 'jag skulle vilja ha en kaffe en macka en chokladboll och en servett',
        seventhUserSentence: 'sluta nu',
        eigthUserSentence: 'vill du ha en kanelbulle',
        ninthUserSentence: 'ja gärna',
        quiz: [
            {
                correct: 'Katten gillar inte hunden.',
                hint: 'Stor bokstav: 1 | Punkt: 1'
            },
            {
                correct: 'Om du kan den här, så är du riktigt bra!',
                hint: 'Stor bokstav: 1 | Kommatecken: 1 | Utropstecken: 1'
            },
            {
                correct: 'Hunden gillar katten, men katten gillar inte hunden.',
                hint: 'Stor bokstav: 1 | Kommatecken: 1 | Punkt: 1'
            },
            {
                correct: 'Sven, Linda och jag reser till USA imorgon.',
                hint: 'Stor bokstav: 5 | Kommatecken: 1 | Punkt: 1'
            },
            {
                correct: 'Varför vill du inte äta?',
                hint: 'Stor bokstav: 1 | Frågetecken: 1'
            },
            {
                correct: 'Jag skulle vilja ha en kaffe, en macka, en chokladboll och en servett.',
                hint: 'Stor bokstav: 1 | Kommatecken: 2 | Punkt: 1'
            },
            {
                correct: 'Sluta nu!',
                hint: 'Stor bokstav: 1 | Utropstecken: 1'
            },
            {
                correct: 'Vill du ha en kanelbulle?',
                hint: 'Stor bokstav: 1 | Frågetecken: 1'
            },
            {
                correct: 'Ja, gärna!',
                hint: 'Stor bokstav: 1 | Kommatecken: 1 | Utropstecken: 1'
            },
        ]
        }   
    },
    methods: {
        verifyChoice(answer) {
            let vm = this;
            if(answer === this.quiz[0].correct || answer === this.quiz[1].correct || answer === this.quiz[2].correct || answer === this.quiz[3].correct || answer === this.quiz[4].correct || answer === this.quiz[5].correct || answer === this.quiz[6].correct || answer === this.quiz[7].correct || answer === this.quiz[8].correct) {
                this.BGcolor = 'green';
                eventBus.$emit('userSuccess');
                setTimeout(function(){
                    vm.q++;
                    vm.BGcolor ='white';
                    vm.userCounter++;
                }, 500)
            } else if (answer !== this.quiz[0].correct || answer !== this.quiz[1].correct || answer !== this.quiz[2].correct || answer !== this.quiz[3].correct || answer !== this.quiz[4].correct || answer !== this.quiz[5].correct || answer !== this.quiz[6].correct || answer !== this.quiz[7].correct || answer !== this.quiz[8].correct) {
                this.BGcolor = 'red';
                eventBus.$emit('monsterSuccess');
                setTimeout(function(){
                    vm.q++;
                    vm.BGcolor ='white';
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
            color: black;
        }
    }
</style>