<template>
    <h1>Mixins</h1>
    <input type="text" v-focus />
    <input type="text"/>
</template>
<script>
import ApiMixin from '../api.js';

export default{
    mixins: [ApiMixin],
    data(){
        return{
            productList: []
        }
    },
    async mounted() {
        this.productList = await this.$callAPI("https://ebde6969-9a4a-400a-a131-caffbbc3bb58.mock.pstmn.io/list","get");
        console.log(this.productList);
        console.log('컴포넌트 mounted')
    },    
    unmounted() {
        console.log('컴포넌트 unmounted')
    }
}
</script>
