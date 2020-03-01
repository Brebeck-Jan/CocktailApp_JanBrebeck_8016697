import $ from 'jquery';
const Database_url = "https://cocktailapp-d9581.firebaseio.com/"

// I need those function to the database;
// getAllRecipes
// getAllIngredients

export function getAllRecipes() {
    let response
    $.ajax({
        url: Database_url + 'receipts.json',
        dataType: "json",
        type: 'GET',
        async: false,
        success: function (serverResponse) {
            response = serverResponse;
        },
        error: function (serverResponse) {
            console.log("Response: ", serverResponse);
            response = serverResponse;
            debugger;
            throw new Error("Error during loading of all recipes");
        }
    });
    return response;
}

export function getAllIngridients() {
    let response
    $.ajax({
        url: Database_url + 'ingredients.json',
        dataType: "json",
        type: 'GET',
        async: false,
        success: function (serverResponse) {
            response = serverResponse;
        },
        error: function (serverResponse) {
            console.log("Response: ", serverResponse);
            response = serverResponse;
            debugger;
            throw new Error("Error during loading of all ingredients");
        }
    });
    return response;
}
