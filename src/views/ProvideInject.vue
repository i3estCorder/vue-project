<template>
    <ProvideInjectChild />
</template>
<script>
    import ProvideInjectChild from './ProvideInjectChild'
    export default {
        components: {ProvideInjectChild},
        data(){
            return{
                items:['A', 'B', 'C']
            }
        },
        provide(){
            return{
                itemLength: this.items.length
            }
        }
    }
</script>
