// console.log(window)
// console.log(document)
// console.log(document.body)
// console.log(document.head)
// document.body.style.background = "yellow"


// let runAgain = true;

// while(runAgain)
// {
    //     let age = prompt("Enter your age:")
    // age = Number.parseInt(age)
    // // const canDrive = (age) => {
        // //     return age>=18?true:false;
        
        // if(age<=0)
        // {
            //     console.error("Error!!!");
            // }
            // else if(age<18){
                //     console.log("You cannot derive")
                // }
                // else{
                    //     console.log("You can drive.. ")
                    // }
                    // runAgain = confirm("Do you want to test again")
                    // }
                    let doAgain = true;
                
                        let number = prompt("Enter a number:")
                    number = Number.parseInt(number)

                    switch(number)
                    {
                        case 1:
                            document.body.style.background = "Blue";
                            break;
                           
                         case 2:
                            document.body.style.background = "Green";
                            break;
                        case 3:
                            document.body.style.background = "black"
                            break;

                        default:
                            document.body.style.background= "White";
                    }
                        // doAgain = confirm("Do you want to do again:");
                    



                    
                    // if(number > 4)
                    // {
                    //     location.href = "https://codewithharry.com"
                    //     // location.href = "https://codewithharry.com"
                        
                    // }
                    // else{
                    //     console.log('hello')
                    // }