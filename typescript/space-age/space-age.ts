export function age(planet: string, seconds: number): number {
  const oneYearEarthSeconds = 31557600;

  const planets: { [key: string]: number } = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };

  if (planets.hasOwnProperty(planet)) {
    const planetYearsInSeconds = seconds / oneYearEarthSeconds / planets[planet];
    const age = Number(planetYearsInSeconds.toFixed(2));
    return age;
  } else {
    return 0;
}
}

