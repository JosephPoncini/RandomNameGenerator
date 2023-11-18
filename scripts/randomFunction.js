export{ RandomName };

function RandomName(array){
    return array[Math.floor(Math.random() * array.length)];
 }

