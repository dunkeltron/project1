$(document).ready(function () {

    $("#pieChart").show();
    $("#pieChart1").show();
    $("#button-select").hide();
    $("#recipe-list").hide();
    $("#recipe-display").hide();

    var queryURL = ""; // declaration of empty queryURL
    var mealIdValue = "";
    var mealRegion = "";

    $(".catBack").on("click", function () {
        $("#button-select").show();
        $("#button-select").empty();

        // scroll           
        $("body, html").animate({
            scrollTop: $("#CategoryTab").offset().top
        }, 1000);

        queryURL = "https://www.themealdb.com/api/json/v1/1/list.php?c=list"

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // After the data comes back from the API
            .then(function (response) {
                // Storing an array of results in the results variable
                var results = response.meals;

                for (var i = 0; i < results.length; i++) {
                    var categoryItem = results[i].strCategory;
                    $("#button-select").append('<a class="btn btn-primary btn-lg" href="#" data-attr = ' + categoryItem + ' data-tab ="category" >' + categoryItem + '</a>');
                }
            });
    });

    $(".areaBack").on("click", function () {
        $("#button-select").show();
        $("#button-select").empty();

        // scroll           
        $("body, html").animate({
            scrollTop: $("#AreaTab").offset().top
        }, 1000);

        queryURL = "https://www.themealdb.com/api/json/v1/1/list.php?a=list"

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // After the data comes back from the API
            .then(function (response) {
                // Storing an array of results in the results variable
                var results = response.meals;

                for (var i = 0; i < results.length; i++) {
                    var areaItem = results[i].strArea;
                    $("#button-select").append('<a class="btn btn-success btn-lg" href="#" data-attr = ' + areaItem + ' data-tab ="area" >' + areaItem + '</a>');
                }
            });
    });

    // click event on selecting a button item

    $(document).on("click", ".btn", function () {
        var selectedValue = this.getAttribute("data-attr"); // stores data attribute of the selected dropdown item
        var selectedCriteria = this.getAttribute("data-tab"); // stores the data attribute of the category where the dropdown was selected from

        $("#recipe-list").show();
        $("#recipe-display").show();
        $("#list-tab").empty();

        // scroll           
        $("body, html").animate({
            scrollTop: $("#recipe-list").offset().top
        }, 1000);

        switch (selectedCriteria) {
            case "category":
                queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + selectedValue;
                $.ajax({
                    url: queryURL,
                    method: "GET"
                })
                    // After the data comes back from the API
                    .then(function (response) {
                        var resultsCategory = response.meals;
                        // Storing an array of results in the results variable
                        for (var i = 0; i < resultsCategory.length; i++) {
                            $("#list-tab").append('<a class="list-group-item list-group-item-action" id="' + resultsCategory[i].idMeal + '" data-toggle="list" href="https://www.themealdb.com/meal/' + resultsCategory[i].idMeal + '" role="tab" aria-controls="Result' + i + '" data-attr = "' + resultsCategory[i].strMeal + '" data-id-attr = "' + resultsCategory[i].idMeal + '" data-strMealThumb = "' + resultsCategory[i].strMealThumb + '" data-strMeal = "' + resultsCategory[i].strMeal + '">' + resultsCategory[i].strMeal + '</a>')
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
                    .then(function (response) {
                        var resultsArea = response.meals;
                        // Storing an array of results in the results variable

                        for (var i = 0; i < resultsArea.length; i++) {
                            $("#list-tab").append('<a  class="list-group-item list-group-item-action" id="' + resultsArea[i].idMeal + '" data-toggle="list" href="https://www.themealdb.com/meal/' + resultsArea[i].idMeal + '" role="tab" aria-controls="Result' + i + '" data-attr = "' + resultsArea[i].strMeal + '" data-id-attr = "' + resultsArea[i].idMeal + '" data-strMealThumb = "' + resultsArea[i].strMealThumb + '" data-strMeal = "' + resultsArea[i].strMeal + '">' + resultsArea[i].strMeal + '</a>')
                        };
                    });
                break;

            default:
                break;
        }

    });

    $(document).on("click", ".list-group-item", function (event) {
        event.preventDefault();
        var mealString = this.getAttribute("data-strMeal");
        var mealURL = "https://www.themealdb.com/meal/" + this.getAttribute("id");
        mealIdValue = this.getAttribute("data-id-attr");
        var jsonURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + this.getAttribute("data-id-attr");
        var mealImageURL = this.getAttribute("data-strMealThumb");
        var header = $('<h1>' + mealString + '</h1>').attr("id", "recipe-title");
        var contentBlock = $("<div>");
        var contentRow = $("<div>");
        var ingredientsBlock = $("<div>");
        var pictureDiv = $("<div>");
        var ingredientDiv = $("<div>");
        var recipeZone = $("<div>");

        //for zomato information
        var footer = $("<div>");
        var button = $("<button>");

        $.ajax({
            url: jsonURL,
            method: "GET"
        })
            .then(function (response) {
                var mealData = response.meals[0];
                mealRegion = mealData.strArea;
                //the ingredients and amounts are stored as individual attributes in the API response 
                //this places those attributes into more workable arrays instead
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
                $("#list-Result1").empty();
                var thumbNail = $("<img>");
                thumbNail.attr("src", mealData.strMealThumb);
                thumbNail.attr("id", "recipe-thumbnail");

                ingredientDiv.append($("<div>").text("Ingredients."));
                for (i = 0; i < amounts.length; i++) {
                    if (amounts[i] != null && ingredients[i] != null && amounts[i].length > 0 && ingredients[i].length > 0) {
                        ingredientDiv.append($("<div>").text(ingredients[i] + ": " + amounts[i]).addClass("col-xs-12"));
                    }

                }
                //set the elements data to the site
                pictureDiv.prepend(thumbNail);
                pictureDiv.addClass("col-xs-12");
                ingredientDiv.addClass("col-xs-12 ")
                ingredientsBlock.addClass("col-xs-12 col-sm-4");
                ingredientsBlock.append(pictureDiv, ingredientDiv);
                recipeZone.append($("<div>").text("Instructions."));
                recipeZone.text(mealData.strInstructions);
                recipeZone.addClass("col-sm-8 col-xs-12 ");
                recipeZone.attr("id", "instructions-tab");
                contentRow.addClass("row");
                button.attr("id", "modalBtn");
                button.attr("class", "btn-danger");
                button.attr("type", "button");
                button.attr("data-toggle", "modal");
                button.text("Click here for Zomato recommendation");

                //appended in specific order to create desired format
                footer.append(button);
                contentRow.append(ingredientsBlock, recipeZone);
                contentBlock.append(header, contentRow, footer);
                $("#list-Result1").append(contentBlock);

                // Zomato
                $(document).on("click", "#modalBtn", function (event) {
                    event.preventDefault;

                    var zomatoAPIkey = "dd597b949ad3061e6dae13b560b4afd0"
                    var zomatoQueryURL = "https://developers.zomato.com/api/v2.1/search?q=" + mealRegion + "&count=1&apikey=" + zomatoAPIkey

                    $.ajax({
                        url: zomatoQueryURL,
                        method: "GET"

                    })
                        .then(function (response) {

                            var zomatoResponse = response.restaurants[0].restaurant;

                            $("#exampleModalCenter").modal();
                            $("#exampleModalLongTitle").html("A nearby " + mealRegion + " option recommended by our friends at Zomato");
                            $("#modalTextGoesHere").html('<strong>' + zomatoResponse.name + '</strong>' + '<br>');
                            $("#modalTextGoesHere").append("Address: " + zomatoResponse.location.address + '<br>');
                            $("#modalTextGoesHere").append("Cuisines: " + zomatoResponse.cuisines + '<br>');

                        })
                        .fail(function (xhr) {
                            var httpStatus = (xhr.status);
                            var ajaxError = 'There was an requesting the call back. HTTP Status: ' + httpStatus;

                            $("#exampleModalCenter").modal();
                            $("#exampleModalLongTitle").html("Error!");
                            $("#modalTextGoesHere").html("Sorry! Zomato could not complete the request. Please select a different recipe from the list, a different category or a differnt area." + '<br>');
                            $("#modalTextGoesHere").append(ajaxError + '<br>');

                        });

                });
            });
    });

});
