<template>
    <div>
        <h1>Room {{ $route.params.id }}</h1>
        <h5>Player&lt; {{ this.$store.state.userName }} &gt;</h5>
    </div>
</template>

<script>
export default {
    data(){
        return{
            room: {
                number: Math.round(Math.random() * 100)
            }
        }
    }
}
</script>

<style scoped>
/*
div{
    border: 1px solid blue;
}


h1{
    color: blue;
}
p{
    color: blue;
}*/
</style>