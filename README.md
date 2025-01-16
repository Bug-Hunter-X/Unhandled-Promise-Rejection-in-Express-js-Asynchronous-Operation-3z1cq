# Unhandled Promise Rejection in Express.js Asynchronous Route

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous routes.  Improper error handling in asynchronous operations can lead to server crashes or unexpected behavior.

## The Bug

The `bug.js` file contains an Express.js route that performs an asynchronous operation using `Promise`.  However, it lacks proper error handling.  If the asynchronous operation (`someAsyncOperation`) rejects, the error is not caught, leading to an unhandled promise rejection.

## The Solution

The `bugSolution.js` file provides a corrected version with robust error handling. It uses a `.catch()` block to handle potential errors from the asynchronous operation, ensuring graceful degradation and preventing server crashes.