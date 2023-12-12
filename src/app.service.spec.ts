import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  describe('calculateAge', () => {
    it('should calculate age for Earth', () => {
      const result = service.calculateAge(2500000000, 'earth');
      expect(result).toEqual('79.22 Earth-years-old');
    });

    it('should calculate age for Venus', () => {
      const result = service.calculateAge(2500000000, 'venus');
      expect(result).toEqual('48.74 Venus-years-old');
    });

    it('should calculate age for Mercury', () => {
      const result = service.calculateAge(2500000000, 'mercury');
      expect(result).toEqual('19.08 Mercury-years-old');
    });

    it('should calculate age for Mars', () => {
      const result = service.calculateAge(2500000000, 'mars');
      expect(result).toEqual('149.00 Mars-years-old');
    });

    it('should calculate age for Jupiter', () => {
      const result = service.calculateAge(2500000000, 'jupiter');
      expect(result).toEqual('939.76 Jupiter-years-old');
    });

    it('should calculate age for Saturn', () => {
      const result = service.calculateAge(2500000000, 'saturn');
      expect(result).toEqual('2332.84 Saturn-years-old');
    });

    it('should calculate age for Uranus', () => {
      const result = service.calculateAge(2500000000, 'uranus');
      expect(result).toEqual('6655.83 Uranus-years-old');
    });

    it('should calculate age for Neptune', () => {
      const result = service.calculateAge(2500000000, 'neptune');
      expect(result).toEqual('13054.80 Neptune-years-old');
    });

    it('should throw an error for invalid seconds', () => {
      expect(() => service.calculateAge(-100, 'earth')).toThrow(
        'Invalid input',
      );
    });

    it('should throw an error for invalid planet type', () => {
      expect(() => service.calculateAge(2500000000, 'invalid')).toThrow(
        'Invalid input',
      );
    });

    it('should handle very large seconds value', () => {
      const result = service.calculateAge(Number.MAX_SAFE_INTEGER, 'mars');
      expect(result).toMatch(/\d+\.\d+ Mars-years-old/);
    });

    it('should throw an error for very small seconds value', () => {
      expect(() =>
        service.calculateAge(Number.MIN_SAFE_INTEGER, 'venus'),
      ).toThrow('Invalid input');
    });

    it('should throw an error for seconds value of zero', () => {
      expect(() => service.calculateAge(0, 'earth')).toThrow('Invalid input');
    });

    it('should handle seconds value greater than zero', () => {
      const result = service.calculateAge(1, 'earth');
      expect(result).toEqual('0.00 Earth-years-old');
    });
  });
});
