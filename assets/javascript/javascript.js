$(document).ready(function() {
    console.log( "ready!" );

    var queryURL = ""; // declaration of empty queryURL

    $("#CategoryTab").on("click", function () {
        console.log("hello text to dropdown menu:Category");
        $(".dropdown-menu").empty();
        
    queryURL = "https://www.themealdb.com/api/json/v1/1/list.php?c=list"

    $.ajax({
        url: queryURL,
        method: "GET"
        })
        // After the data comes back from the API
        .then(function(response) {
            // Storing an array of results in the results variable
            var results = response.meals;
            
            //console.log(results);
            console.log("Length of Array: " + results.length);
            //console.log(categoryItem);

            for (i = 0; i < results.length; i++){
                //console.log(results[i]);
                var categoryItem= results[i].strCategory;
                //console.log(i + " " + categoryItem);
                $(".dropdown-menu").append('<a class="dropdown-item" href="#" data-attr = '+ categoryItem +'>' + categoryItem +'</a>');
            } 

        });
   });

    $("#RegionTab").on("click", function () {
        console.log("hello text to dropdown menu:Region");
        $(".dropdown-menu").empty();

        queryURL = "https://www.themealdb.com/api/json/v1/1/list.php?a=list"

        $.ajax({
            url: queryURL,
            method: "GET"
            })
            // After the data comes back from the API
            .then(function(response) {
                // Storing an array of results in the results variable
                var results = response.meals;
                
                //console.log(results);
                console.log("Length of Array: " + results.length);
                //console.log(areaItem);
    
                for (i = 0; i < results.length; i++){
                    //console.log(results[i]);
                    var areaItem= results[i].strArea;
                    //console.log(i + " " + areaItem);
                    $(".dropdown-menu").append('<a class="dropdown-item" href="#" data-attr = '+ areaItem +'>' + areaItem +'</a>');
                } 
    
            });

    });

    $(document).on("click", ".dropdown-item", function () {
        console.log(this.getAttribute("data-attr"));
    });

});