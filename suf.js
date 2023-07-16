function shuffleElements(input){
    let shuffledElements;
    let tempElements,randIndex;
    for (let index=0; index < input.length; index++){
        randIndex = Math.floor(Math.random()*input.length);
        tempElements= input[index];
        input[index]=input[randIndex];
        input[randIndex]=tempElements;


    }
    return shuffledElements;
}
let inputArr=["prabha","saranya","sharvesh","neevika"];
console.log("suffle Elements");
console.log('Before shuffle : ${inputArr}')
let outputArr = shuffleElements(inputArr);
console.log('After Shuffle : ${outputArr}')
