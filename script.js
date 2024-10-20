//your JS code here. If required.
 function getNumbers() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([1, 2, 3, 4]); // Resolves after 3 seconds
        }, 3000);
      });
    }

    // Function to update the output div with the provided array
    function updateOutput(numbers) {
      const output = document.querySelector("#output");
      output.innerText = numbers.join(", ");
    }

    // Start the promise chain
    getNumbers()
      .then((numbers) => {
        // First Promise: Filter out odd numbers and update output after 1 second
        return new Promise((resolve) => {
          setTimeout(() => {
            const evenNumbers = numbers.filter((n) => n % 2 === 0);
            updateOutput(evenNumbers); // Output: 2, 4 after 1 second
            resolve(evenNumbers);
          }, 1000);
        });
      })
      .then((evenNumbers) => {
        // Second Promise: Multiply even numbers by 2 and update output after another 2 seconds
        return new Promise((resolve) => {
          setTimeout(() => {
            const multipliedNumbers = evenNumbers.map((n) => n * 2);
            updateOutput(multipliedNumbers); // Output: 4, 8 after 2 more seconds
            resolve(multipliedNumbers);
          }, 2000);
        });
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });

