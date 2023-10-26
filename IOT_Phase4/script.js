document.addEventListener("DOMContentLoaded", function () {
  let useRealData = true; // Set to true to fetch real data, or false to simulate data
  
  // Function to fetch real sensor data (water consumption)
  function fetchSensorData() {
    fetch('https://your-real-data-source.com/sensors')
    .then(response => response.json())
    .then(data => {
      updateSensorDisplay(data); // Update the sensor display with real data
    })
    .catch(error => {
      console.error('Error fetching real sensor data: ' + error);
      // If there's an error, fall back to simulating data
      useRealData = false;
      simulateSensorData();
    });
  }
  
  // Function to simulate sensor data (water consumption)
  function simulateSensorData() {
    const sensors = [
      { name: "Sensor 1", location: "Location A", waterConsumption: Math.random() * 100 },
      { name: "Sensor 2", location: "Location B", waterConsumption: Math.random() * 100 },
    ];
    updateSensorDisplay(sensors);
  }
  
  // Function to update the sensor display with data
  function updateSensorDisplay(sensors) {
    const sensorList = document.getElementById("sensor-list");
    // Clear the existing sensor list
    sensorList.innerHTML = '';
    sensors.forEach(sensor => {
      const li = document.createElement("li");
      li.textContent = sensor.name;
      li.addEventListener("click", () => displayWaterConsumption(sensor));
      sensorList.appendChild(li);
    });
  }
  
  // Display water consumption data for a selected sensor
  function displayWaterConsumption(sensor) {
    const waterConsumptionDisplay = document.getElementById("water-consumption");
    waterConsumptionDisplay.innerHTML = `<h3>${sensor.name} - ${sensor.location}</h3><p>Water Consumption: ${sensor.waterConsumption} gallons</p>`;
  }
  
  // Determine whether to use real data or simulate data
  if (useRealData) {
    fetchSensorData(); // Fetch real data
  } else {
    simulateSensorData(); // Simulate data
  }
 });