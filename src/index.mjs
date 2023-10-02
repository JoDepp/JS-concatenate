import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
JS program to concatenate two strings except their first character.
</div>
`;
//basic concating

const ringMetal = "gold";
console.log("She has a " + ringMetal + " ring.");

//use slice to remove the first position 0, so we start at position 1
const concatenate = (str1, str2) =>
str1.slice(1) + str2.slice(1);

console.log(concatenate('abc', 'def'));
console.log(concatenate('Junior', 'Developer'));





//practice exercise from codebubb on youtube