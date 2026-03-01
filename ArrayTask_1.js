const prompt = require("prompt-sync")();

// function for generating numbers in an array
function createArray(userArr, arraySize) 
{
    for(let i = 0; i < arraySize; i++)
        {
            userArr[i] = Math.floor(Math.random() * 101);
        } 
}

// function for writing numbers in console
function writingArray(userArr)
{
    console.log(userArr.join(", "));
}

// function for finding the sum in an array 
function findSumNumbersArray(userArr, arraySize)
{
    let sumNumbersArray = 0;

    for(let i = 0; i < arraySize; i++)
    {
        sumNumbersArray += userArr[i];
    }

    return sumNumbersArray;
}

// function for finding the subctraction in an array
function findSubtractionNumbersArray(userArr, arraySize)
{
    let subNumbersArray = 0;

    for(let i = 0; i < arraySize; i++)
    {
        subNumbersArray -= userArr[i];
    }

    return subNumbersArray;
}

function findMaxNumberArray()
{
    
}

function main() 
{
    const arraySize = 10;
    const userArr = new Array(arraySize);

    createArray(userArr,arraySize);
    writingArray(userArr);

    const sumNumbersArray = findSumNumbersArray(userArr, arraySize);
    console.log(`Sum all numbers in array => ${sumNumbersArray}`);

    const subNumbersArray = findSubtractionNumbersArray(userArr, arraySize);
    console.log(`Sub all numbers in array => ${subNumbersArray}`)
}

main();