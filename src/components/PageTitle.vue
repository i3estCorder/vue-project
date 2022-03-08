<template>
    <h2>{{ title }}, Likes : {{ likes }}</h2>
</template>
<script>
export default{
    props:{
        title: {
            type: String,
            default: '페이지 제목입니다.'
        },
        likes:{
            type: Number,
        }
    }
}
</script>
