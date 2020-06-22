<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="logo"><img src="./images/dsg.png" alt=""></div>
            </div>
            <div class="col-md-9 col-sm-6 col-xs-12 d-flex justify-content-end align-items-center">
                <ul class="nav nav-pills mr-4">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Skiljetecken</a>
                        <div class="dropdown-menu">
                            <router-link class="dropdown-item" to="/skiljetecken1">Punkt, utrops- och fr&#229;getecken</router-link>
                            <router-link class="dropdown-item" to="/skiljetecken2">Kommatecken</router-link>
                            <router-link class="dropdown-item" to="/skiljetecken3">R&#228;tta meningarna</router-link>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Stavning</a>
                        <div class="dropdown-menu">
                            <router-link class="dropdown-item" to="/stavning2">J-ljudet</router-link>
                            <router-link class="dropdown-item" to="/stavning1">Sche-ljudet</router-link>
                            <router-link class="dropdown-item" to="/stavning3">K, Tj eller Sch</router-link>
                            <router-link class="dropdown-item" to="/stavning4">K-ljudet</router-link>
                            <router-link class="dropdown-item" to="/stavning5">Ng-ljudet</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from './main'
import { RenderMixin } from './components/RenderMixin'

export default {
    methods: {
        goToComma() {
            eventBus.$emit('goToComma');
        },
        goToSche() {
            eventBus.$emit('goToSche');
        },
        goToScheTwo() {
            eventBus.$emit('goToScheTwo');
        },
        goToKorsch() {
            eventBus.$emit('goToKorsch');
        },
        goToPeriod() {
            eventBus.$emit('goToPeriod');
        },
        goToMultiOne() {
            eventBus.$emit('goToMultiOne');
        },
    },
    mixins: [RenderMixin]
}
</script>

<style lang="scss">
    $borderColor: rgba(82, 82, 73, 0.685);
</style>