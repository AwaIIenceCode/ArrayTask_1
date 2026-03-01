const prompt = require("prompt-sync")();

// function for generating numbers in an array
function createArray(userArr) 
{
    for(let i = 0; i < userArr.length; i++)
        {
            Math.floor(Math.random() * 100) + 1;
        } 
}

// function for writing numbers in console
function writingArray(userArr)
{
    console.log(userArr.join(", "));
}

// function for finding the sum in an array 
function findSumNumbersArray(userArr)
{
    let sumNumbersArray = 0;

    for(let i = 0; i < userArr.length; i++)
    {
        sumNumbersArray += userArr[i];
    }

    return sumNumbersArray;
}

// function for finding the subctraction in an array
function findSubtractionNumbersArray(userArr)
{
    let subNumbersArray = userArr[0];

    for (let i = 1; i < userArr.length; i++) 
    {
        subNumbersArray -= userArr[i];
    }

    return subNumbersArray;
}

// function for finding the max number in an array
function findMaxNumberArray(userArr)
{
    let maxNumberInArray = userArr[0];
    
    for(let i = 0; i < userArr.length; i++)
    {
        if(userArr[i] > maxNumberInArray)
            {
                maxNumberInArray = userArr[i];
            } 
    }

    return maxNumberInArray;
}

// function for finding the min number in an array
function findMinNumberArray(userArr)
{
    let minNumberInArray = userArr[0];
    
    for(let i = 0; i < userArr.length; i++)
    {
        if(userArr[i] < minNumberInArray)
            {
                minNumberInArray = userArr[i];
            } 
    }

    return minNumberInArray;
}

// function for finding mean value in array
function findMeanValueArray(userArr)
{
    let meanValueInArray = 0;
    const sumNumbersArray = findSumNumbersArray(userArr);

    meanValueInArray = sumNumbersArray / userArr.length;
    
    return meanValueInArray;
}

function main() 
{
    const arraySize = 10;
    const userArr = new Array(arraySize);

    createArray(userArr);
    writingArray(userArr);

    const sumNumbersArray = findSumNumbersArray(userArr);
    console.log(`Sum all numbers in array => ${sumNumbersArray}`);

    const subNumbersArray = findSubtractionNumbersArray(userArr);
    console.log(`Sub all numbers in array => ${subNumbersArray}`);

    const maxNumberInArray = findMaxNumberArray(userArr);
    console.log(`Max number in array => ${maxNumberInArray}`);

    const minNumberInArray = findMinNumberArray(userArr);
    console.log(`Min number in array => ${minNumberInArray}`);

    const meanValueInArray = findMeanValueArray(userArr);
    console.log(`Mean value in array => ${meanValueInArray}`);
}

main();