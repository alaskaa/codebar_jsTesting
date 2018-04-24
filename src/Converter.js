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

function convertKilosToPounds(kilos) {
  return kilos / 0.4536;
}

function convertLitresToGallons(litres) {
  return litres * 0.22;
}

function convertGallonsToLitres(gallons) {
  return gallons / 0.22;
}

function convertMilesToKms(miles) {
  return miles * 1.609;
}

function convertKmsToMiles(kms) {
  return kms / 1.609;
}

//kilo = pound * 0.4536
//Litre to Gallons (Volume)
//gallons = litres * 0.22
//Miles to Km (distance)
//kms = miles * 1.609
