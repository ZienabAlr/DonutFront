<script setup>
import { ref} from 'vue' 

let company = ref('')
let email = ref('')
let phone = ref('')
let donutname = ref('')
let glaze = ref('')
let amount = ref('')
let notes = ref('')

const postOrder = () => {
    const order = {
        company: company.value,
        email: email.value,
        phone: phone.value,
        donutname: donutname.value,
        glaze: glaze.value,
        amount: amount.value,
        notes: notes.value
    }
    console.log(order)
     const api_url = 'http://localhost:3000/api/v1/donutello'
    fetch(api_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);

        company.value = ""; // make the input empty after sending the order
        email.value = ""; 
        phone.value = ""; 
        donutname.value = ""; 
        glaze.value = ""; 
        amount.value = ""; 
        notes.value = ""


    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

</script>

<template>
<div class="orderForm">
    
    <h1>Bestelling formulier</h1>

    <div class="form">
        <h2>Contact gegevens</h2>
       
        <div class="infoLable">
            <label class="placeholder" for="name">Bedrijfsnaam</label>
            <input class="inputs inputPadding" type="text" id="name" name="name" v-model="company">
        </div>

        <div class="infoLable">
            <label class="placeholder" for="name">E-mail</label>
            <input class="inputs inputPadding" type="text" id="email"   v-model="email">

        </div>

        <div class="infoLable">
            <label class="placeholder" for="name">Telefoonnummer</label>
            <input class="inputs inputPadding" type="text" id="phone" name="name" v-model="phone">

        </div>

    </div>

    <div class="form">
        <h2>Donut Bestelling</h2>

        <div class="infoLable">
            <label class="placeholder" for="donut">Donut Naam</label>
            <input class ="inputs inputPadding" type="text" id="donut"  v-model="donutname">

        </div>
        
        <div class="infoLable">
            <label  class="placeholder" for="glaze">Glazuur</label>
            <select class ="inputs inputPadding" id="glaze" v-model="glaze">
                
                <option disabled value="">Kies een glazuur</option>
                <option>Chocolade</option>
                <option>Melkchocolade</option>
                <option>Witte Chocolade</option>
                <option>Aardbei</option>

            </select>

        </div>

        <div class="infoLable">
            <label class="placeholder">Amount</label> 
            <input class ="inputs inputPadding" type="text" id="donut"  v-model="amount">
        </div>

        <div class="infoLable">
            <label class="placeholder" for="note">Wil je nog iet zeggen?</label>
            <textarea class ="inputs textereaPadding" id="note" v-model="notes"></textarea>
        </div>
    </div>

    <button class ="btn" @click.prevent="postOrder">Bestelling sturen</button>
</div>
</template>

<style scoped>

.orderForm{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 35%;
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
    padding: 0.9rem 0.5rem;
}
.textereaPadding {
    padding: 4rem 0.5rem;
}

.btn {
    color: rgb(247,226,0);
    font-weight: 600;
    font-family:  'Nunito', sans-serif;
    font-size: large;
    background-color: #E72770;
    border: 0;
    border-radius: 2rem;
    padding: 1rem 0;
    margin: 1rem 0;
    cursor: pointer;
}
input:focus {
    outline: none;
    border: 1px solid #E72770;
}

/* @media screen and (max-width: 768px) {
    .orderForm {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
} */


</style>


