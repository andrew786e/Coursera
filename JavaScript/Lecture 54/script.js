// Event Handling

// Waiting for all the content of the html page to be loaded scriptis usually at the ending

// function sayHello (event){
//     console.log(this) ;
//     this.textContent = "Said it" ;
//     var name = document.getElementById("name").value ;
//     var message = "<h2>Hello " + name + " </h2>" ;

//     document.getElementById("content").innerHTML = message ;

//     if(name === "student"){
//         var title  = document.querySelector("#title").textContent ;
//         title += "&Loving it" ;
        
//         document.querySelector("h1").textContent = title ;
//     }
// }


// Unobstrutive event binding 
// document.querySelector("button").addEventListener("click",sayHello) ;

// Another way 
// document.querySelector("button").onclick = sayHello ;



// Listening for the event when all the document has loaded
document.addEventListener("DOMContentLoaded",
    function(event){
        function sayHello (event){
            console.log(event) ;
            this.textContent = "Said it" ;
            var name = document.getElementById("name").value ;
            var message = "<h2>Hello " + name + " </h2>" ;
        
            document.getElementById("content").innerHTML = message ;
        
            if(name === "student"){
                var title  = document.querySelector("#title").textContent ;
                title += "&Loving it" ;
                
                document.querySelector("h1").textContent = title ;
            }
        }

        // Unobstrutive event binding 
        document.querySelector("button").addEventListener("click",sayHello) ;
    }

) ;