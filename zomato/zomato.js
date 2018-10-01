$(document).ready(function(){

    var APIkey = "dd597b949ad3061e6dae13b560b4afd0"
    var queryURL ="https://developers.zomato.com/api/v2.1/search?q=Breakfast&count=5&apikey=" + APIkey
    
        $.ajax({
            url: queryURL,
            method: "GET"
                        
            })
            .then(function (response){
            
                var restaurantName = response.restaurants[0];
                console.log(restaurantName.restaurant.name)
                $("#results").text(restaurantName.restaurant)     
            });

var modal = document.getElementById("simpleModal");

var modalBtn = document.getElementById("modalBtn");
    
var closeBtn = document.getElementsByClassName("closeBtn")[0];
    
modalBtn.addEventListener("click", openModal);
    
closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", oustideClick);
    
function openModal(){
        modal.style.display = "block";
}
function closeModal(){
    modal.style.display = "none";
}
    
function oustideClick(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}
});


