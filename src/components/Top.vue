<template>
    <div>
        <h1>Short Short Storys</h1>
        <div class="input-group mb-2">
            <input type="text" class="form-control" v-model="userName">
        </div>
        <div class="input-group mb-2">
            <b-button variant="light" v-on:click="createRoom">部屋を作成する</b-button>
            <!--
            <b-button variant="light">
                <router-link :to="{name:'room', params:{id: room.number}}">{{ createRoom }}</router-link>
            </b-button>
            -->
        </div>
        <div class="input-group mb-2">
            <input type="text" class="form-control" placeholder="部屋番号を入力">
            <div class="input-group-append">
                <b-button variant="light">
                    <router-link to="/test_sf">{{ enter2room }}</router-link>       
                </b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Top',
    data(){
        return{
            userName: this.$store.state.userName,
            enter2room: "部屋へ入る",
            room: {
                number: Math.round(Math.random() * 100)
            }
        }
    },
    methods: {
        setUserName: function() {
            this.$store.commit("setUserName", this.userName);
        },
        createRoom: function() {
            this.setUserName();
            this.$router.push({name:'room', params:{id: this.room.number}});
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