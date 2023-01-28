function bookTaxi() {
    // Get the values of the form inputs
    var pickupLocation = document.getElementById("pickup-location").value;
    var dropoffLocation = document.getElementById("dropoff-location").value;
    var pickupDate = document.getElementById("pickup-date").value;
    var pickupTime = document.getElementById("pickup-time").value;
  
    // Log the input values to the console
    console.log("Pickup Location: " + pickupLocation);
    console.log("Dropoff Location: " + dropoffLocation);
    console.log("Pickup Date: " + pickupDate);
    console.log("Pickup Time: " + pickupTime);
  }
  
//either choose part A found at the top or part B found at the bottom
  function bookTaxi() {
    var pickupLocation = document.getElementById("pickup-location").value;
    var dropoffLocation = document.getElementById("dropoff-location").value;
    var pickupDate = document.getElementById("pickup-date").value;
    var pickupTime = document.getElementById("pickup-time").value;
  
    alert("Taxi booked!\nPickup location: " + pickupLocation + "\nDropoff location: " + dropoffLocation + "\nPickup date: " + pickupDate + "\nPickup time: " + pickupTime);
  }
  