
        const form = document.getElementById("billingForm");
        const promoCode = document.getElementById("promoCode");
        const promoRow = document.getElementById("promoRow");
        const totalPrice = document.getElementById("totalPrice");
        let orginalPrice = 25;

        function promoCodefun(){
              const codeInput =document.getElementById("promoInput").value.trim();
            if(codeInput==="DISCOUNT5") {
                promoCode.textContent="-$5";
                totalPrice.textContent="$"+(orginalPrice-5);
                alert("Promo Code applied...");
            }
            else
            alert("Invalid Promo code...");
        }

        form.addEventListener('submit',function(e){
            e.preventDefault();

            const payMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
            alert(`Form submitted...\n Payment method: ${payMethod}`);
        })



    