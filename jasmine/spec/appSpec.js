$(function() {
  describe('Page', () => {
    it('has a header', () => {
      const element = document.querySelector('#pageHeader');

      expect(element).not.toBe(null);
    });
    it('has a top navigation menu', () => {
      const element = document.querySelector('#topNav');

      expect(element).not.toBe(null);
    });
    it('has a bottom navigation menu', () => {
      const element = document.querySelector('#bottomNav');

      expect(element).not.toBe(null);
    });
  });

  describe('Main element', () => {
    it('exists', () => {
      const element = document.querySelector('#criterias');

      expect(element).not.toBe(null);
    });
    it('has at least one criteria card', () => {
      const criteriaCard = document.querySelector('.criteria').children.length;
      expect(criteriaCard).toBeGreaterThan(0);
    });
  });

  describe('Section element', () => {
    it('has a header tag', () => {
      const sectionHeader = document.querySelectorAll('.criteria .criteria-header');
      expect(sectionHeader).not.toBe(null);
    })
  });
}());
