import React, { useState } from 'react';
import './App.css';

function App() {
  const [output, setOutput] = useState('');

  const updateOutput = (content) => setOutput(content);

  const printNumbers = () => updateOutput([...Array(10).keys()].map(i => i + 1).join(' '));

  const printOddNumbers = () => updateOutput([...Array(50).keys()].map(i => 2 * i + 1).join(' '));

  const printMultiplicationTable = (number = 7) => {
    const result = [...Array(10).keys()]
      .map(i => `${number} x ${i + 1} = ${number * (i + 1)}`)
      .join('\n');
    updateOutput(result);
  };

  const printAllMultiplicationTables = () => {
    const result = [...Array(10).keys()]
      .map(i => `Multiplication table for ${i + 1}:\n${[...Array(10).keys()]
        .map(j => `${i + 1} x ${j + 1} = ${(i + 1) * (j + 1)}`)
        .join('\n')}\n`)
      .join('\n');
    updateOutput(result);
  };

  const calculateSum = () => updateOutput(`Sum of numbers from 1 to 10 is ${[...Array(10).keys()].reduce((acc, i) => acc + (i + 1), 0)}`);

  const calculateFactorial = (num = 10) => {
    const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));
    updateOutput(`${num}! is ${factorial(num)}`);
  };

  const sumEvenNumbers = () => {
    const sum = [...Array(9).keys()].reduce((acc, i) => acc + (12 + i * 2), 0);
    updateOutput(`Sum of even numbers between 10 and 30 is ${sum}`);
  };

  const celsiusToFahrenheit = (celsius) => ((celsius * 9) / 5) + 32;
  const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

  const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
  const averageArray = (arr) => sumArray(arr) / arr.length;
  const filterPositiveNumbers = (arr) => arr.filter(num => num > 0);
  const findMax = (arr) => Math.max(...arr);

  const printFibonacci = (n = 10) => {
    const fib = [0, 1];
    while (fib.length < n) fib.push(fib.at(-1) + fib.at(-2));
    return fib;
  };

  const fibonacci = (n) => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));

  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  };

  const handleIsPrime = () => updateOutput(`Is 11 prime? ${isPrime(11)}`);

  const sumOfDigits = (num) => num.toString().split('').reduce((acc, curr) => acc + Number(curr), 0);

  const printPrimes = (count = 100) => {
    const primes = [];
    let num = 2;
    while (primes.length < count) {
      if (isPrime(num)) primes.push(num);
      num++;
    }
    return primes;
  };

  const rotateLeft = (arr) => [...arr.slice(1), arr[0]];
  const rotateRight = (arr) => [arr[arr.length - 1], ...arr.slice(0, -1)];
  const reverseArray = (arr) => [...arr].reverse();

  const reverseString = (str) => str.split('').reverse().join('');

  const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
  const symmetricDifference = (arr1, arr2) => [
    ...arr1.filter(x => !arr2.includes(x)),
    ...arr2.filter(x => !arr1.includes(x))
  ];

  const difference = (arr1, arr2) => arr1.filter(x => !arr2.includes(x));

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>Edit <code>src/App.js</code> and save to reload.</p> */}
        <div>
          <button onClick={printNumbers}>Print Numbers 1 to 10</button>
          <button onClick={printOddNumbers}>Print Odd Numbers &lt; 100</button>
          <button onClick={() => printMultiplicationTable(7)}>Print Multiplication Table of 7</button>
          <button onClick={printAllMultiplicationTables}>Print All Multiplication Tables (1 to 10)</button>
          <button onClick={calculateSum}>Calculate Sum of Numbers 1 to 10</button>
          <button onClick={() => calculateFactorial(10)}>Calculate 10!</button>
          <button onClick={sumEvenNumbers}>Sum of Even Numbers (10-30)</button>
          <button onClick={() => updateOutput(celsiusToFahrenheit(25))}>Convert 25°C to Fahrenheit</button>
          <button onClick={() => updateOutput(fahrenheitToCelsius(77))}>Convert 77°F to Celsius</button>
          <button onClick={() => updateOutput(sumArray([1, 2, 3, 4]))}>Sum of Array [1, 2, 3, 4]</button>
          <button onClick={() => updateOutput(averageArray([1, 2, 3, 4]))}>Average of Array [1, 2, 3, 4]</button>
          <button onClick={() => updateOutput(filterPositiveNumbers([-1, 2, -3, 4]))}>Filter Positive Numbers [-1, 2, -3, 4]</button>
          <button onClick={() => updateOutput(findMax([1, 2, 3, 4]))}>Find Max in Array [1, 2, 3, 4]</button>
          <button onClick={() => updateOutput(printFibonacci(10).join(', '))}>First 10 Fibonacci Numbers</button>
          <button onClick={() => updateOutput(fibonacci(10))}>10th Fibonacci Number</button>
          <button onClick={handleIsPrime}>Is Number Prime (11)</button>
          <button onClick={() => updateOutput(sumOfDigits(1234))}>Sum of Digits (1234)</button>
          <button onClick={() => updateOutput(printPrimes(100).join(', '))}>First 100 Prime Numbers</button>
          <button onClick={() => updateOutput(rotateLeft([1, 2, 3, 4]).join(', '))}>Rotate Array Left [1, 2, 3, 4]</button>
          <button onClick={() => updateOutput(rotateRight([1, 2, 3, 4]).join(', '))}>Rotate Array Right [1, 2, 3, 4]</button>
          <button onClick={() => updateOutput(reverseArray([1, 2, 3, 4]).join(', '))}>Reverse Array [1, 2, 3, 4]</button>
          <button onClick={() => updateOutput(reverseString('hello'))}>Reverse String 'hello'</button>
          <button onClick={() => updateOutput(mergeArrays([1, 2], [3, 4]).join(', '))}>Merge Arrays [1, 2] and [3, 4]</button>
          <button onClick={() => updateOutput(symmetricDifference([1, 2, 3], [3, 4, 5]).join(', '))}>Symmetric Difference [1, 2, 3] and [3, 4, 5]</button>
          <button onClick={() => updateOutput(difference([1, 2, 3], [2, 3, 4]).join(', '))}>Difference [1, 2, 3] and [2, 3, 4]</button>
        </div>
        <pre>{output}</pre>
      </header>
    </div>
  );
}

export default App;
