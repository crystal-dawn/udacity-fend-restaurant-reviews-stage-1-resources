/* TODO: Write a new test suite named 'Initial Entries' */

$(function() {
  describe('Page', function() {
    it('has a main element', () => {
      const element = document.querySelector('.criterias');

      expect(element).not.toBe(null);
    });
  });

  describe('Criteria card', function() {
    it('has a section element', () => {
      const element = document.querySelector('.criteria');

      expect(element).not.toBe(null);
    })
  })
}());
