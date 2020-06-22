<template>
    <div class="container-fluid">
        <div class="row">
            <!-- <app-navigation id="leftNav" class="col-md-3 col-sm-3 col-xs-12"></app-navigation> -->
            <div id="appBod" class="col-md-12 col-sm-12 col-xs-12">
                <div>
                    <transition name="compFade" mode="out-in">
                        <!-- <comma-one id="comma-one" v-if="commaTrue"></comma-one>
                        <app-sche id="app-sche" v-if="scheTrue"></app-sche>
                        <app-sche-two id="appScheTwo" v-if="scheTwoTrue"></app-sche-two>
                        <app-korsch id="appKorsch" v-if="korschTrue"></app-korsch>
                        <app-period id="appPeriod" v-if="periodTrue"></app-period>
                        <multi-one v-if="multiOneTrue"></multi-one> -->
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { RenderMixin } from './components/RenderMixin'
import Navigation from './LeftNav'
import Comma1 from './components/CommaOne'
import Sche from './components/sche/Sche'
import { eventBus } from './main'
import ScheTwo from './components/SecondSche'
import Korsch from './components/Korsch'
import PeriodExQu from './components/PeriodExQu'
import MultiOne from './components/MultiOne'

export default {
    
    components: {
        appNavigation: Navigation,
        commaOne: Comma1,
        appSche: Sche,
        appScheTwo: ScheTwo,
        appKorsch: Korsch,
        appPeriod: PeriodExQu,
        multiOne: MultiOne
    },
    created() {
        eventBus.$on('goToComma', () => {
                this.scheTrue = false;
                this.commaTrue = true;
                this.scheTwoTrue = false;
                this.korschTrue = false;
                this.periodTrue = false;
                this.multiOneTrue = false;
            }),
        eventBus.$on('goToSche', () => {
                this.commaTrue = false;
                this.scheTrue = true;
                this.scheTwoTrue = false;
                this.korschTrue = false;
                this.periodTrue = false;
                this.multiOneTrue = false;
        }),
        eventBus.$on('goToScheTwo', () => {
                this.commaTrue = false;
                this.scheTrue = false;
                this.scheTwoTrue = true;
                this.korschTrue = false;
                this.periodTrue = false;
                this.multiOneTrue = false;
        }),
        eventBus.$on('goToKorsch', () => {
                this.commaTrue = false;
                this.scheTrue = false;
                this.scheTwoTrue = false;
                this.korschTrue = true;
                this.periodTrue = false;
                this.multiOneTrue = false;
        }),
        eventBus.$on('goToPeriod', () => {
                this.commaTrue = false;
                this.scheTrue = false;
                this.scheTwoTrue = false;
                this.korschTrue = false;
                this.periodTrue = true;
                this.multiOneTrue = false;
        }),
        eventBus.$on('goToMultiOne', () => {
                this.commaTrue = false;
                this.scheTrue = false;
                this.scheTwoTrue = false;
                this.korschTrue = false;
                this.periodTrue = false;
                this.multiOneTrue = true;
        })
    },
    mixins: [RenderMixin]
}
</script>

<style lang="scss">
    #leftNav {
        margin: 0;
        background-color: rgb(49, 65, 131);
    }

    #appBod {
        // background-color: #7c9299;
        background-color: #fff;
        min-height: 90vh;
    }

    .compFade-enter {
        transition-delay: 0.11s;
        transform: scale(0.1);
    }

    .compFade-enter-active {
        transition: 0.6s;
        transition-delay: 0.11s;
    }
    
    .compFade-leave-active {
        transition: 0.01s linear;
        transform: translateX(-500px);
        opacity: 0;
    }

</style>