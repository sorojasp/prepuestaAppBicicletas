console.log("hello")


let btn = document.getElementById("btn")


btn.addEventListener("click", () => {



    var url = 'http://localhost:3000/';
    var data = {
        "num1": 200,
        "num2": 500
    };
    $.post(url, data, function(response){
        console.log(response) 
        alert(response);
        
  })
})