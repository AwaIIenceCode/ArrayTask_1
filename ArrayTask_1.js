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

// function for finding the max number in an array
function findMaxNumberArray(userArr, arraySize)
{
    let maxNumberInArray = userArr[0];
    
    for(let i = 0; i < arraySize; i++)
    {
        if(userArr[i] > maxNumberInArray)
            {
                maxNumberInArray = userArr[i];
            } 
    }

    return maxNumberInArray;
}

// function for finding the min number in an array
function findMinNumberArray(userArr, arraySize)
{
    let minNumberInArray = userArr[0];
    
    for(let i = 0; i < arraySize; i++)
    {
        if(userArr[i] < minNumberInArray)
            {
                minNumberInArray = userArr[i];
            } 
    }

    return minNumberInArray;
}

//
function findMeanValueArray(userArr, arraySize)
{
    let count = 0;
    let meanValueInArray = 0;
    const sumNumbersArray = findSumNumbersArray(userArr, arraySize);

    for(let i = 0; i < arraySize; i++)
    {
        count++;
    }

    meanValueInArray = sumNumbersArray / count;
    
    return meanValueInArray;
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
    console.log(`Sub all numbers in array => ${subNumbersArray}`);

    const maxNumberInArray = findMaxNumberArray(userArr, arraySize);
    console.log(`Max number in array => ${maxNumberInArray}`);

    const minNumberInArray = findMinNumberArray(userArr, arraySize);
    console.log(`Min number in array => ${minNumberInArray}`);

    const meanValueInArray = findMeanValueArray(userArr, arraySize);
    console.log(`Mean value in array => ${meanValueInArray}`);
}

main();