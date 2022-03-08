<template>
    <child-component @send-message="sendMessage"></child-component>
</template>
<script>
import ChildComponent from './ChildComponent'

export default {
    components: {ChildComponent},
    methods:{
        sendMessage(data){
            console.log(data)
        }
    }    
}
</script>