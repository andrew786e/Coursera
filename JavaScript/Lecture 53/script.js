//Retrieve the value the user inputs into the text box 

// function sayHello(){
//     var name = 
//         document.getElementById("name").value ;
//         var message = "Hello " + name + "!" ;

//     document
//         .getElementById("content")
//         .textContent = message ;
// }

function sayHello(){
    var name = 
        document.getElementById("name").value ;
        var message = "<h2> Hello " + name + "! </h2>" ;

    // document
    //     .getElementById("content")
    //     .textContent = message ;

    document
        .getElementById("content")
        .innerHTML = message ;

    if(name === "student"){
        // document.getElementById("title").textContent += " @ student"
        // Same as 
        var title = document
                        .querySelector("#title")
                        .textContent; 
        title += "& Lovin it" ;

        document.querySelector("#title").textContent = title ;
    }
}