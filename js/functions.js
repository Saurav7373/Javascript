console.log('Practice on the functions in javascript');
if(1){
    let i =234;
    console.log(i)


console.log(i);
}
function ui(name)
{
    let i = 9;
    console.log(i);

console.log(ui("Saurav"), i)
}
const mygreet = function(name, thank='Thank You'){
    let msg = `Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`;
    return msg;

}


let name = 'Sk';
let name2 ='Ra';

let val = mygreet(name, 'Thanks a lot');
console.log(val);


const myobj = {
    name: "SkillF",
    game: function(){
        return "GTA";
    }
}
console.log(myobj.game())

arr = ['fruit', 'vegetable', 'furniture'];

arr.forEach(function(element, index, array) {
    console.log(element, index)
});         
