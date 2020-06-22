<template>
    <div id="navBod">
        <div class="navElem" v-for="page in navigationObj">{{ page }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navigationObj: ['Kommatecken 1', 'Kommatecken 2', 'Punkt eller komma 1', 'Punkt eller komma 2'],
        }
    }
}
</script>

<style lang="scss" scoped>
div {
    margin: 0;
}
#navBod {
    width: 100%;
    margin: 0;
}

.navElem {
        list-style-type: none;
        border: 2px solid black;
        padding: 0.3em;
        border-radius: 5px;
        margin: 4px 0px;
        width: 100%;
        background-color: snow;
        &:hover {
           // background-color: rgba(226, 35, 29, 0.911);
           // color: white;
            animation-name: minifyButton;
            animation-duration: 0.5s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
        }
        @keyframes minifyButton {
            0% {
                width: 100%;
            };
            100% {
                width: 80%;
            };
        }
    }
</style>