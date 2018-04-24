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
  });
});
