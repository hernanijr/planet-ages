import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private planets = [
    { name: 'Mercury', orbitalPeriod: 0.2408467 },
    { name: 'Venus', orbitalPeriod: 0.61519726 },
    { name: 'Earth', orbitalPeriod: 1.0 },
    { name: 'Mars', orbitalPeriod: 1.8808158 },
    { name: 'Jupiter', orbitalPeriod: 11.862615 },
    { name: 'Saturn', orbitalPeriod: 29.447498 },
    { name: 'Uranus', orbitalPeriod: 84.016846 },
    { name: 'Neptune', orbitalPeriod: 164.79132 },
  ];

  calculateAge(seconds: number, type: string): string {
    if (
      seconds <= 0 ||
      !this.planets.some(
        (planet) => planet.name.toLowerCase() === type.toLowerCase(),
      )
    ) {
      throw new Error('Invalid input');
    }

    const earthYears = seconds / 60 / 60 / 24 / 365.25;
    const planet = this.planets.find(
      (p) => p.name.toLowerCase() === type.toLowerCase(),
    );

    const planetYears = earthYears * planet.orbitalPeriod;

    return `${planetYears.toFixed(2)} ${planet.name}-years-old`;
  }
}
