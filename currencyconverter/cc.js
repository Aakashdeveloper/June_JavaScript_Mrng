var url = "https://api.exchangeratesapi.io/latest?base="

function convert(){
    var base = document.getElementById('base').value;
    var out = document.getElementById('output').value;
    var amount = document.getElementById('amount').value;
    var final;
    fetch(`${url}${base}`,{method:'GET'})
    .then((response) => response.json())
    .then((data) => {
       final = data.rates;
       final = (final[out]*parseFloat(amount))
       var result = `Converted value of ${amount} ${base} is ${final} ${out}`
       document.getElementById('converted').innerHTML=result;
    })

    
}