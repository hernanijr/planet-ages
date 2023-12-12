import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let controller: AppController;
  let service: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    controller = app.get<AppController>(AppController);
    service = app.get<AppService>(AppService);
  });

  describe('calculateAge', () => {
    it('should calculate age for Earth', () => {
      jest
        .spyOn(service, 'calculateAge')
        .mockReturnValue('79.22 Earth-years-old');
      const result = controller.calculateAge(2500000000, 'earth');
      expect(result).toEqual('79.22 Earth-years-old');
    });

    it('should calculate age for Venus', () => {
      jest
        .spyOn(service, 'calculateAge')
        .mockReturnValue('48.74 Venus-years-old');
      const result = controller.calculateAge(2500000000, 'venus');
      expect(result).toEqual('48.74 Venus-years-old');
    });

    it('should handle errors thrown by service', () => {
      jest.spyOn(service, 'calculateAge').mockImplementation(() => {
        throw new Error('Invalid input');
      });
      expect(() => controller.calculateAge(-100, 'earth')).toThrow(
        'Invalid input',
      );
    });
  });
});
