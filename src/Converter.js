/** Unit Converter **/
function convertFahrenheitToCelsius(temperature) {
  return ((temperature - 32) / 1.8).toFixed(1);
}

function convertCelsiusToFahrenheit(temperature) {
  return (temperature * 1.8 + 32).toFixed(0);
}

// normal formula from celsius to Fahrenheit conversion is
// celsius = (fahrenheit - 32)/1.8

// (celsius * 1.8) + 32 = fahrenheit
//Pounds to kilos (Weight)

function convertPoundsToKilos(pounds) {
  return pounds * 0.4536;
}

//kilo = pound * 0.4536
//Litre to Gallons (Volume)
//gallons = litres * 0.22
//Miles to Km (distance)
//kms = miles * 1.609
