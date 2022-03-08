<template>
    <div>
        <PageTitle :title='post.title' :likes="post.likes"></PageTitle>
    </div>    
</template>

<script>
import PageTitle from '../components/PageTitle'

export default{
    components:{
        PageTitle
    },
    data(){
        return{
            post: {"title": '동적', "likes":73}
        }
    }
}
</script>
