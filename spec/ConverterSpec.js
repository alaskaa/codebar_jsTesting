describe('Cooking Ingredients Converter', function() {
  describe('Temperatures', function() {
    it('Fahrenheit to Celsius', function() {
      let result = convertFahrenheitToCelsius(100);

      expect(result).toEqual('37.8');
    });

    it('Celsius to Fahrenheit', function() {
      let result = convertCelsiusToFahrenheit(37.8);

      expect(result).toEqual('100');
    });
  });

  describe('Weights', function() {
    it('Pounds to Kilos', function() {
      let result = convertPoundsToKilos(100);

      expect(result).toEqual(45.36);
    });

    it('Kilos to Pounds', function() {
      let result = convertKilosToPounds(45.36);

      expect(result).toEqual(100);
    });
  });

  describe('Volumes', function() {
    it('Litres to Gallons', function() {
      let result = convertLitresToGallons(100);

      expect(result).toEqual(22);
    });

    it('Gallons to Litres', function() {
      let result = convertGallonsToLitres(22);

      expect(result).toEqual(100);
    });
  });

  describe('Distances', function() {
    it('Miles to Kilometres', function() {
      let result = convertMilesToKms(100);

      expect(result).toEqual(160.9);
    });

    it('Kilmetres to Miles', function() {
      let result = convertKmsToMiles(160.9);

      expect(result).toEqual(100);
    });
  });
});
