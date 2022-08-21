const receivesAFunction = (me) => {
    me();
};
const returnsANamedFunction = () => {
    return function receivesAFunction(blue){

    }
};
function returnsAnAnonymousFunction(){
    return function(blue){};
};