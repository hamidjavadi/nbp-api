import { TestBed } from '@angular/core/testing';

import { DateService } from './date.service';

describe('DateService', () => {
  let service: DateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateService);
  });

  it('should be created', () => {
    expect(service).toBeInstanceOf(DateService);
  });

  describe('formatDate method', () => {
    it('should return YYYY-MM-DD foramt', () => {
      const date1 = new Date(2022, 1, 1);
      expect(service.formatDate(date1)).toBe('2022-01-01');

      const date2 = new Date(2022, 11, 20);
      expect(service.formatDate(date2)).toBe('2022-11-20');
    });
  });

  describe('isValidDate method', () => {
    it('should return boolean', () => {

      let date;

      expect(service.isValidDate('')).toBeFalse();
      expect(service.isValidDate(date)).toBeFalse();

      date = new Date();
      expect(service.isValidDate(date)).toBeTrue();
    });

    it('should return false for the future date', () => {

      const todayDate = new Date();
      const tomorrow = new Date();

      tomorrow.setDate(todayDate.getDate() + 1);

      expect(service.isValidDate(tomorrow)).toBeFalse();
      expect(service.isValidDate(todayDate)).toBeTrue();
    });

    it('should return false for the date longer 93 days ago', () => {

      const todayDate = new Date();
      const longer93DaysAgoDate = new Date();

      longer93DaysAgoDate.setDate(todayDate.getDate() - 94);

      expect(service.isValidDate(longer93DaysAgoDate)).toBeFalse();
      expect(service.isValidDate(todayDate)).toBeTrue();
    });
  })
});
