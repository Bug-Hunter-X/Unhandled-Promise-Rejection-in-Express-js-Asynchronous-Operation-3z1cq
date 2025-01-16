const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation without error handling
  someAsyncOperation().then(result => {
    res.send(result);
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that might fail
    setTimeout(() => {
      // Replace this with your actual asynchronous logic
      const randomNum = Math.random();
      if (randomNum < 0.5) {
        resolve({ message: 'Success!' });
      } else {
        reject(new Error('Simulated error'));
      }
    }, 1000);
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});