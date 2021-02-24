<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-2">
                
            </div>
            <div class="col-4">
                <div class="form-group">
                    <label for="text1">Text</label>
                    <textarea class="form-control" id="text1" rows="10" disabled v-model="text"></textarea>
                </div>
            </div>
            <div class="col-4">
                <div class="form-group">
                    <label for="text1">Text</label>
                    <textarea class="form-control" id="text1" rows="10"></textarea>
                </div>
            </div>
            <div class="col-2">
                
            </div>
        </div>
    </div>
    
    
</template>

<script>
export default {
    data(){
        return{
            title: "Test_sf",
            text: "Hello Vue.js!"
        }
    }
}
</script>

<style scoped>
/*
div {
    border: 1px solid black;
}
*/
</style>