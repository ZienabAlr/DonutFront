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

    </div>

    <div class="form">
        <h2>Donut Bestelling</h2>

        <div class="infoLable">
            <!-- <label for="donut">Donut Naam</label> -->
            <input class ="inputs inputPadding" type="text" id="donut" v-model="dountname">

        </div>
        
        <div class="infoLable">
            <label for="glaze">Glazuur</label>
            <select class ="inputs inputPadding" id="glaze" v-model="glaze">
                
                <option disabled value="">Kies een glazuur</option>
                <option>Chocolade</option>
                <option>Melkchocolade</option>
                <option>Witte Chocolade</option>
                <option>Aardbei</option>

            </select>
        </div>

        <div class="infoLable">
            <!-- <label for="amount">Aantal</label> -->
            <input class ="inputs inputPadding" type="text" id="donut" v-model="amount">
        </div>

        <div class="infoLable">
            <label for="note">Wil je nog iet zeggen?</label>
            <textarea class ="inputs textereaPadding" id="note" v-model="note"></textarea>
        </div>
    </div>

    <button class ="btn" @click.prevent="postOrder">Bestelling sturen</button>
</div>
</template>

<style scoped>

.orderForm{
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    justify-content: space-between;
    width: 30%;
    height: 100%;
    background-color: #f5f5f5;
    padding: 2rem;
    border-radius: 1rem;
    margin: 2rem 0 0 0;
}

.form{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    
}

.infoLable {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1rem 0;
}

.inputs {
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: 1px solid #ccc;
    outline: none;
}

.inputPadding {
    padding: 0.5rem;
}
.textereaPadding {
    padding: 4rem 0.5rem;
}

</style>


