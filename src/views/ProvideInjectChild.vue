<template>
    <div class="test">
        <p>TEST</p>
    </div>
</template>
<script>
    export default {
        inject: ['itemLength'],
        mounted(){
            console.log(this.itemLength)
        }
    }
</script>
