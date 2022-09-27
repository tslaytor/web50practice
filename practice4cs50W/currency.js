var myHeaders = new Headers();
myHeaders.append("apikey", "K4vp7mLOj4aMj2Bg1nKJanaPKccNbUOf");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

document.addEventListener('DOMContentLoaded', function() {
    
  document.querySelector('form').onsubmit = function(){
    const base = document.querySelector('#base').value.toUpperCase()
    const symbol = document.querySelector('#symbol').value.toUpperCase()

    document.querySelector('#base').value = ''
    document.querySelector('#symbol').value = ''

      // Send a GET request to the URL
      fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=${symbol}&base=${base}`, requestOptions)
      // Put response into json form
      .then(response => response.json())
      .then(data => {
          // Log data to the console
          const rate = data.rates[`${symbol}`]
  
          document.querySelector('.result').innerHTML = `1 ${base} is worth ${rate.toFixed(3)} ${symbol}`
      });

    return false

   
  }
  
});


