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
      it('has a main element', () => {
        const element = document.querySelector('#criterias');

        expect(element).not.toBe(null);
      });
    });

    describe('Main element', () => {

    });
}());
