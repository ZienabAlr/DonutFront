export default class Order{

    //post order to server
    postOrder(){
        //get form values
        const company = document.querySelector('.company');
        const email = document.querySelector('.email');
        const phone = document.querySelector('.phone');
        const donutname = document.querySelector('.donutname');
        const glaze = document.querySelector('.glaze');
        const amount = document.querySelector('.amount');
        const notes = document.querySelector('.note');
        
        //create order object
        const order = {
            company: company.value,
            email: email.value,
            phone: phone.value,
            donutname: donutname.value,
            glaze: glaze.value,
            amount: amount.value,
            notes: notes.value
        }
        //post order to server
        fetch('http://localhost:3000/api/v1/donutello', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        }).then((res) => res.json())
        .then((data) => {
            console.log(data);

            company.value = '';
            email.value = '';
            phone.value = '';
            donutname.value = '';
            glaze.value = '';
            amount.value = '';
            notes.value = '';

        })
    }
   
    //select the btn and add event listener
    setupForm(){
        const btn = document.querySelector(".btn");
        btn.addEventListener('click', function(e){
            console.log('clicked');
            e.preventDefault();
            
            // excute the postOrder function
            this.postOrder();
        }.bind(this));

    

    }

}


