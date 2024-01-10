// if else

var result = 50

if(result > 40){
    console.log('you passed the test')
}else{
    console.log('you did not pass the test')
}

//if, else if, else

let place = "first"

if(place == 'first'){
    console.log('Gold')
}else if(place == 'second'){
    console.log('Silver')
}else if(place == 'third'){
    console.log('Bronze')
}else{
    console.log("No medal")
}

console.log('#########');

let light = "green"
if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The light is not green, orange, or red");
}