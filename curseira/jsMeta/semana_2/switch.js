//switch statement

let place = 'first'

switch(place){
    case 'first':
    console.log('Gold');
    break
    case 'second':
    console.log("Silver");
    break
    case'third':
    console.log('Bronze')
    break
    default:
        console.log('No medal')
}

console.log('#########');

let light = "orange"
switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        //this block will run if no condition matches
        console.log('The light is not green, orange, or red');
        break;
 }