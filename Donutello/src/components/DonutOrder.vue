<script setup>
import { ref } from 'vue' 



</script>

<template>
<div class="orderForm">
    <h1>Bestelling formulier</h1>

    <div class="form">
        <h2>Contact gegevens</h2>
       
        <div class="infoLable">
            <!-- <label for="name">Bedrijfsnaam</label> -->
            <input class="inputs inputPadding" type="text" id="name" name="name" placeholder="Bedrijfsnaam" v-model="company">
        </div>

        <div class="infoLable">
            <!-- <label for="name">E-mail</label> -->
            <input class="inputs inputPadding" type="text" id="email"  placeholder="E-mail" v-model="company">
        </div>

        <div class="infoLable">
            <!-- <label for="name">Telefoonnummer</label> -->
            <input class="inputs inputPadding" type="text" id="phone" name="name" placeholder="Telefoonnummer" v-model="phone">
        </div>

        <div class="infoLable">
            <!-- <label for="name">Donut naam</label> -->
            <input class="inputs inputPadding" type="text" id="donut" name="name" placeholder="Donut naam" v-model="company">
        </div>

    </div>

</div>

</template>

<style scoped>

</style>


