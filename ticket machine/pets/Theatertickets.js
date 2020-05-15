// variables

// nodes
const price = document.getElementById("price");
const showsprice = document.getElementById("sprice");
const deliveryprice = document.getElementById("dprice");
const totalTicketInput = document.querySelector('.number-of-seats');
const selectedSeats = document.getElementById("counts");
const totalPriceResult = document.getElementById("pricez");
const order = document.getElementById("submit");
const showChoice = document.querySelector("#Shows");
const deliveryChoice = document.getElementById("Delivery");
const Discount = document.getElementById("discounts");
// amount
let ShowCost = 85;
let deliveryCost = 0;
let ticketPrice = 0;
let totalTickets;
let totalPrice;

// event handler
order.addEventListener("click", purchase)
showChoice.addEventListener("change", calculateShowsCost);
deliveryChoice.addEventListener("change", calculatedeliveryCost);


function purchase(event) {
    event.preventDefault()
    ticketPrice = Number(showChoice.value)
    totalTickets = Number(totalTicketInput.value);
    totalPrice = (ticketPrice * totalTickets) + deliveryCost;
    selectedSeats.innerText = totalTickets;
    totalPriceResult.innerText = totalPrice;
    console.log("THANK YOU FOR YOUR ORDER!");
}

showsprice.innerText = `£${(ShowCost + deliveryCost).toFixed(2)}`;

//SHOWS CALCULATIONS
function calculateShowsCost() {
    ShowCost = Number(this.value);
    showsprice.innerText =
        `£${(ShowCost).toFixed(2)}`;
}

//DELIVERY CALCULATIONS
function calculatedeliveryCost() {
    if (this.value == "E-ticket") {
        deliveryCost = 0;
    } else if (this.value == "boxoffice") {
        deliveryCost = 1.50;
    } else if (this.value == "Posted") {
        deliveryCost = 3.99;
    } else {
        deliveryCost = 0.00;
    }
    deliveryprice.innerText =
        `£${(deliveryCost).toFixed(2)}`;
}


