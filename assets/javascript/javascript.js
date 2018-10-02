$(document).ready(function() {
    console.log( "ready!" );

    $("#pieChart").hide();
    $("#pieChart1").hide();


    var queryURL = ""; // declaration of empty queryURL

    $("#CategoryTab").on("click", function () {
        console.log("Category Tab Selected");

        $(".dropdown-menu").empty();
        $("#pieChart1").hide();
        $("#pieChart").show();
        
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
            console.log("Length of Array: " + results.length + " items for Category Tab");
            //console.log(categoryItem);

            for (var i = 0; i < results.length; i++){
                //console.log(results[i]);
                var categoryItem= results[i].strCategory;
                //console.log(i + " " + categoryItem);
                $(".dropdown-menu").append('<a class="dropdown-item" href="#" data-attr = '+ categoryItem +' data-tab ="category" >' + categoryItem +'</a>');
            } 
        });
   });

    $("#AreaTab").on("click", function () {
        console.log("Area Tab Selected");
        $(".dropdown-menu").empty();
        $("#pieChart").hide();
        $("#pieChart1").show();


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
                console.log("Length of Array: " + results.length + " items for Area Tab");
                //console.log(areaItem);
    
                for (var i = 0; i < results.length; i++){
                    //console.log(results[i]);
                    var areaItem= results[i].strArea;
                    //console.log(i + " " + areaItem);
                    $(".dropdown-menu").append('<a class="dropdown-item" href="#" data-attr = '+ areaItem +' data-tab ="area" >' + areaItem +'</a>');
                } 
            });
    });

    // click event on selecting a dropdown item

    $(document).on("click", ".dropdown-item", function () {
        var selectedValue = this.getAttribute("data-attr"); // stores data attribute of the selected dropdown item
        var selectedCriteria = this.getAttribute("data-tab"); // stores the data attribute of the category where the dropdown was selected from
        console.log(this.getAttribute("data-attr") + " sub-section selected by user.");
        //console.log(this.getAttribute("data-tab"));
        $("#list-tab").empty();

        switch(selectedCriteria){
            case "category":
                queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + selectedValue;
                $.ajax({
                    url: queryURL,
                    method: "GET"
                    })
                    // After the data comes back from the API
                    .then(function(response) {
                        var resultsCategory = response.meals; 
                        // Storing an array of results in the results variable
                        for (var i = 0; i < resultsCategory.length; i++){
                        // console.log("Category Recipes: " + resultsCategory[i].strMeal);
                        $("#list-tab").append('<a class="list-group-item list-group-item-action" id="' + resultsCategory[i].idMeal + '" data-toggle="list" href="https://www.themealdb.com/meal/' + resultsCategory[i].idMeal + '" role="tab" aria-controls="Result'+i+'" data-attr = "' + resultsCategory[i].strMeal + '" data-id-attr = "' +resultsCategory[i].idMeal +'" data-strMealThumb = "' + resultsCategory[i].strMealThumb +'" data-strMeal = "' + resultsCategory[i].strMeal +'">' + resultsCategory[i].strMeal + '</a>')
                        };
                    });
            break;

            case "area":
                queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + selectedValue;
                $.ajax({
                    url: queryURL,
                    method: "GET"
                    })
                    // After the data comes back from the API
                    .then(function(response) {
                        var resultsArea = response.meals;
                        // Storing an array of results in the results variable
        
                        for (var i = 0; i < resultsArea.length; i++){
                        //console.log("Area Recipes: " + resultsArea[i].strMeal);
                        $("#list-tab").append('<a  class="list-group-item list-group-item-action" id="' + resultsArea[i].idMeal + '" data-toggle="list" href="https://www.themealdb.com/meal/' + resultsArea[i].idMeal + '" role="tab" aria-controls="Result'+i+'" data-attr = "' + resultsArea[i].strMeal + '" data-id-attr = "' + resultsArea[i].idMeal + '" data-strMealThumb = "' + resultsArea[i].strMealThumb +'" data-strMeal = "' + resultsArea[i].strMeal +'">' + resultsArea[i].strMeal + '</a>')
                        };
                    });
            break;

            default:
            break;
        }
       
    });

    $(document).on("click", ".list-group-item", function(){
        var mealString = this.getAttribute("data-strMeal");
        var mealURL = "https://www.themealdb.com/meal/" + this.getAttribute("id");
        var jsonURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + this.getAttribute("data-id-attr");
        var mealImageURL = this.getAttribute("data-strMealThumb");
        var header = $('<h1>' + mealString + '</h1>');
        var contentBlock = $("<div>");
        var contentRow= $("<div>");
        var ingredientsBlock = $("<div>");
        var pictureDiv = $("<div>");
        var ingredientDiv = $("<div>");
        var recipeZone = $("<div>");
        //for zomato information
        var footer = $("<div>");

        $("#list-Result1").empty();
        $.ajax({
            url: jsonURL,
            method: "GET"
        })
        .then(function (response) {
            console.log(response);
            var mealData = response.meals[0];
            var ingredients = [
                mealData.strIngredient1,
                mealData.strIngredient2,
                mealData.strIngredient3,
                mealData.strIngredient4,
                mealData.strIngredient5,
                mealData.strIngredient6,
                mealData.strIngredient7,
                mealData.strIngredient8,
                mealData.strIngredient9,
                mealData.strIngredient10,
                mealData.strIngredient11,
                mealData.strIngredient12,
                mealData.strIngredient13,
                mealData.strIngredient14,
                mealData.strIngredient15,
                mealData.strIngredient16,
                mealData.strIngredient17,
                mealData.strIngredient18,
                mealData.strIngredient19,
                mealData.strIngredient20
            ];
            var amounts = [
                mealData.strMeasure1,
                mealData.strMeasure2,
                mealData.strMeasure3,
                mealData.strMeasure4,
                mealData.strMeasure5,
                mealData.strMeasure6,
                mealData.strMeasure7,
                mealData.strMeasure8,
                mealData.strMeasure9,
                mealData.strMeasure10,
                mealData.strMeasure11,
                mealData.strMeasure12,
                mealData.strMeasure13,
                mealData.strMeasure14,
                mealData.strMeasure15,
                mealData.strMeasure16,
                mealData.strMeasure17,
                mealData.strMeasure18,
                mealData.strMeasure19,
                mealData.strMeasure20
            ];
            var thumbNail=$("<img>");
            thumbNail.attr("src",mealData.strMealThumb);
            thumbNail.attr({"height":"150px","width":"150px"});
            
            //console.log(amounts);
            //console.log(ingredients);
            for (i = 0; i < amounts.length; i++) {
                if (amounts[i]!=null && ingredients[i]!=null && amounts[i].length > 0 && ingredients[i].length > 0) {
                   ingredientDiv.append($("<div>").text(ingredients[i]+ ": " +  amounts[i]  ));
                }

            }
            //display data to the site
            pictureDiv.prepend(thumbNail);
            ingredientsBlock.append(pictureDiv,ingredientDiv)
            ingredientsBlock.attr("class","col-4");
            recipeZone.text(mealData.strInstructions);
            recipeZone.attr("class","col-8");
            contentRow.attr("class","row");
            footer.text("area for zomato information.");
            //appended in order to create desired format
            contentRow.append(ingredientsBlock,recipeZone);
            contentBlock.append(header,contentRow,footer);
            $("#list-Result1").append(contentBlock);

        });


    });

});