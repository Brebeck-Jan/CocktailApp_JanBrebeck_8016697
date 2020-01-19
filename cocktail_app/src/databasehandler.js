import $ from 'jquery';
const Database_url = "https://cocktailapp-d9581.firebaseio.com/"

// I need those function to the database;
// getAllReceipts
// getOneReceipt
// addReceipts
// updateReceipt
// addIngridients
// updateIngridient
// deleteIngridient

export function getAllReceipts() {
    let response
    $.ajax({
        url: Database_url + 'receipts.json',
        dataType: "json",
        type: 'GET',
        async: false,
        success: function (serverResponse) {
            console.log("Response: ", serverResponse);
            response = serverResponse;
        },
        error: function (serverResponse) {
            console.log("Response: ", serverResponse);
            response = serverResponse;
            debugger;
            throw new Error("Error during loading of all receipts");
        }
    });
    return response;
}

export function getOneReceipt(receiptID) {
    let response
    $.ajax({
        url: Database_url + 'receipts/'+receiptID+'.json',
        dataType: "json",
        type: 'GET',
        async: false,
        success: function (serverResponse) {
            console.log("Response: ", serverResponse);
            response = serverResponse;
        },
        error: function (serverResponse) {
            console.log("Response: ", serverResponse);
            response = serverResponse;
            debugger;
            throw new Error("Error during loading of one receipts");
        }
    });
    return response;
}

export function addReceipt(receipt) {
    let response
    $.ajax({
        url: Database_url + 'receipts.json',
        dataType: "json",
        data: JSON.stringify(receipt),
        type: 'POST',
        async: false,
        success: function (serverResponse) {
            console.log("Response: ", serverResponse);
            response = serverResponse;
        },
        error: function (serverResponse) {
            console.log("Response: ", serverResponse);
            response = serverResponse;
            debugger;
            throw new Error("Error during adding of given receipt");
        }
    });
    return response;
}

export function updateReceipt(receiptID, receipt) {
    let response
    $.ajax({
        url: Database_url + 'receipts/'+receiptID+'.json',
        dataType: "json",
        data: JSON.stringify(receipt),
        type: 'PUT',
        async: false,
        success: function (serverResponse) {
            console.log("Response: ", serverResponse);
            response = serverResponse;
        },
        error: function (serverResponse) {
            console.log("Response: ", serverResponse);
            response = serverResponse;
            debugger;
            throw new Error("Error during updateing of given receipt");
        }
    });
    return response;
}

export function deleteReceipt(receiptID) {
    let response
    $.ajax({
        url: Database_url + 'receipts/'+receiptID+'.json',
        dataType: "json",
        type: 'Delete',
        async: false,
        success: function (serverResponse) {
            console.log("Response: ", serverResponse);
            response = serverResponse;
        },
        error: function (serverResponse) {
            console.log("Response: ", serverResponse);
            response = serverResponse;
            debugger;
        }
    });
    return response;
}

export function addIngridients(ingridients) {
    let response
    $.ajax({
        url: Database_url + 'ingridients.json',
        dataType: "json",
        type: 'GET',
        async: false,
        success: function (serverResponse) {
            console.log("Response: ", serverResponse);
            response = serverResponse;
        },
        error: function (serverResponse) {
            console.log("Response: ", serverResponse);
            response = serverResponse;
            debugger;
        }
    });
    return response;
}

export function updateIngridient(ingridientID, ingridient) {
    let response
    $.ajax({
        url: Database_url + 'receipts/'+ingridientID+'.json',
        dataType: "json",
        data: JSON.stringify(ingridient),
        type: 'PUT',
        async: false,
        success: function (serverResponse) {
            console.log("Response: ", serverResponse);
            response = serverResponse;
        },
        error: function (serverResponse) {
            console.log("Response: ", serverResponse);
            response = serverResponse;
            debugger;
        }
    });
    return response;
}

export function deleteIngridient(ingridientID) {
    let response
    $.ajax({
        url: Database_url + 'receipts/'+ingridientID+'.json',
        dataType: "json",
        type: 'Delete',
        async: false,
        success: function (serverResponse) {
            console.log("Response: ", serverResponse);
            response = serverResponse;
        },
        error: function (serverResponse) {
            console.log("Response: ", serverResponse);
            response = serverResponse;
            debugger;
        }
    });
    return response;
}



