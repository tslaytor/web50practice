var myHeaders = new Headers();
myHeaders.append("apikey", "K4vp7mLOj4aMj2Bg1nKJanaPKccNbUOf");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

document.addEventListener('DOMContentLoaded', function() {
    
    // Send a GET request to the URL
    fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=GBP,EUR&base=USD", requestOptions)
    // Put response into json form
    .then(response => response.json())
    .then(data => {
        // Log data to the console
        const rate = data.rates.GBP

        document.querySelector('body').innerHTML = `1 USD is worth ${rate.toFixed(3)} GBP`
    });
});


