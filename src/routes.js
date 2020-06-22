import CommaOne from './components/CommaOne'
import Sche from './components/sche/Sche'
import SecondSche from './components/SecondSche'
import Korsch from './components/Korsch'
import appPeriod from './components/PeriodExQu'
import multiOne from './components/MultiOne'
import NgSpelling from './components/NgSpelling'
import punctuationThree from './components/PunctuationThree'

export const routes = [
    { path: '/stavning1', component: Sche },
    { path: '/stavning2', component: SecondSche },
    { path: '/stavning3', component: Korsch },
    { path: '/stavning4', component: multiOne },
    { path: '/stavning5', component: NgSpelling},
    { path: '/skiljetecken1', component: appPeriod},
    { path: '/skiljetecken2', component: CommaOne },
    { path: '/skiljetecken3', component: punctuationThree }
]