document.getElementById("seriesForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Get the input series from the form and split it into an array
    const seriesInput = document.getElementById("seriesInput").value;
    const numbers = seriesInput.split(",").map((num) => parseFloat(num.trim()));
  
    if (!validateInput(numbers)) {
      alert("Invalid input. Please provide a valid series of numbers.");
      return;
    }
  
    // Calculate and display the results
    const maxResult = Math.max(...numbers);
    const minResult = Math.min(...numbers);
    const sumResult = numbers.reduce((acc, num) => acc + num, 0);
    const averageResult = sumResult / numbers.length;
    const reverseOrderResult = numbers.slice().reverse().join(", ");
  
    document.getElementById("maxResult").innerText = `Max: ${maxResult}`;
    document.getElementById("minResult").innerText = `Min: ${minResult}`;
    document.getElementById("sumResult").innerText = `Sum: ${sumResult}`;
    document.getElementById("averageResult").innerText = `Average: ${averageResult.toFixed(2)}`;
    document.getElementById("reverseOrderResult").innerText = `Reverse Order: ${reverseOrderResult}`;
  });
  
  function validateInput(numbers) {
    // Check if the array contains at least one valid number
    return numbers.some((num) => !isNaN(num));
  }
  