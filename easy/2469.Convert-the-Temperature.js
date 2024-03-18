var convertTemperature = function(celsius) {
    const kelvinTemperature = celsius + 273.15;
    const fahrenheitTemperature = celsius * 1.80 + 32.00;
    return convertResult = [kelvinTemperature, fahrenheitTemperature];
};
const x = 36.50
console.log(convertTemperature(x))