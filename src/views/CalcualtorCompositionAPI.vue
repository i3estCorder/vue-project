<template>
    <div>
        <h2>Calculator</h2>
    </div>
    <div>
        <input type="text" v-model="num1" />
        <span> + </span>
        <input type="text" v-model="num2" />
        <span> = </span>
        <span>{{result}}</span>
    </div>
</template>
<script>
import {plusCalculator} from '../common.js'

export default{
    setup(){
        let {num1, num2, result} = plusCalculator()
        return {
            num1, num2, result
        }
    }
}
</script>
