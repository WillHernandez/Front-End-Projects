const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const plural = document.getElementById("plural");
const movieSelect = document.getElementById("movie");
let ticketPrice = movieSelect.value;

let updateSelectedCount = () =>{
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = ticketPrice * selectedSeatsCount;

// pluralize seats if selectedSeatsCount === 0 | > 1
selectedSeatsCount === 1 ? plural.innerText = "seat" : plural.innerText = "seat's"
}

// seat click event
movieSelect.addEventListener('change', (e) =>{
    ticketPrice = e.target.value;
    updateSelectedCount();
})

// The best way to add an event listener to all of the seats is to add the event listener on to the parent element they all share
// classList.contains === checks if an element contains a className
// classList.add === add a class to an element
// classList.remove === remove a class from an element
// classList.toggle === add or remove a class from an element by an event

container.addEventListener('click', (e) =>{
    if(e.target.classList.contains("seat") 
    && !e.target.classList.contains("occupied")){
        e.target.classList.toggle("selected");
    }

    updateSelectedCount();
})

