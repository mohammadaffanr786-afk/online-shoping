
    function placeorder() {
        console.log("javascript loaded");
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        let address = document.getElementById("address").value;
        let city = document.getElementById("city").value;
        let payment= document.querySelector('input[name="payment"]:checked').value;
        document.getElementById("result").innerHTML = "Order placed successfully!<br></br>" + "Name: " + name + "<br></br>" + "Phone: " + phone + "<br></br>" + "Email: " + email + "<br></br>" + "Address: " + address + "<br></br>" + "City: " + city + "<br></br>" + "Payment: " + payment;
    }
