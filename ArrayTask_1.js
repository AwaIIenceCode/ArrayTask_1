const prompt = require("prompt-sync")();

// function for generating numbers in an array
function createArray(userArr) 
{
    for(let i = 0; i < arraySize; i++)
        {
            userArr[i] = Math.floor(Math.random() * 101);
        } 
}

// function for writing numbers in console
function writingArray()
{
    for(let i = 0; i < arraySize; i++)
    {
        console.log(userArr[i]);
    }
}

// function for finding the sum in an array 
function findSumNumbersArray()
{

}

function main() 
{
    const arraySize = 10;
    const userArr = [arraySize];

    createArray(userArr);
    writingArray();
}