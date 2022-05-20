function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    return function named(){
        console.log("named function")
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        
    }
}
    
