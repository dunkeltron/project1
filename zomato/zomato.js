$(document).ready(function(){

    var APIkey = "dd597b949ad3061e6dae13b560b4afd0"
    var queryURL ="https://developers.zomato.com/api/v2.1/search?q=&count=5&apikey=" + APIkey
    
      //  function zomato(){
          
        $.ajax({
            url: queryURL,
            method: "GET"
                        
            })
            .then(function (response){
                
                var restaurantR =response.restaurants[0].restaurant
                var restaurantName = restaurantR.name;
                console.log(restaurantName)
                $("#names").text(restaurantName);
                    $("#names").attr("href", restaurantR.url);
                var restaurantCuisine = restaurantR.cuisines;
                console.log(restaurantCuisine)
                var locationR = restaurantR.location.address;
                $("#address").text("Address: "+locationR)
                $("#rating").text("Ratings: "+ restaurantR.user_rating.aggregate_rating)
                 
            });
   //     };
        //function mealDB(){
            $.ajax({
                url:"https://www.themealdb.com/api/json/v1/1/list.php?a=list",
                method: "GET"

            }).then(function (response){
                
                var mealsArea= response.meals[0];
                console.log(mealsArea.strArea)
            });
       // };


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


