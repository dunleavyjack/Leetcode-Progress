/**
 * Convert a temperature in celsius to kelvin and fahrenheit.
 *
 * @param celsius - The temperature in celsius.
 *
 * @returns An array containing the converted temperature.
 */
function convertTemperature(celsius: number): number[] {
    return [celsius + 273.15, celsius * 1.8 + 32];
}
