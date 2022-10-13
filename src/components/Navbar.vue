<template>
    <div class="all">
        <br><br>
        <div class="btn">
           <router-link to="/">Motor</router-link>
        </div><br>
        <div class="btn">
            <router-link to="/about">Mobil</router-link>
        </div><br>
        <div class="btn">
           <router-link to="/contact">Bus</router-link>
        </div><br>
        <div class="btn">
           <router-link to="/detail">Kapal</router-link>
        </div> <br>
        <div class="btn">
            <router-link to="/product">Pesawat</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavComp"
}
</script>

<style scoped>
.all{
    text-align: center;
     border: 1px solid ;
     border-radius: 50px;
     width: 100px;
     height: 500px;
     margin-left: 20px;
     position: fixed;
     background-color: black;
}
.btn a{
    text-decoration: none;
    color: white;
}
.btn{
    margin-top: 50px;
}
</style>