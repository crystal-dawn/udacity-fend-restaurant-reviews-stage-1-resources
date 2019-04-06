
$(function() {

    //test resources map has been created
    describe('Resources', function() {
      it('to exist', function() {
        expect(Object.keys(resources)).toBeDefined();
      })

      //test each resources has the correct information filled out
      let values = ['url', 'criteria', 'type', 'sharer'];
      for (let value of values) {
        it(`${value}s are defined and are not empty`, function() {
          resources.forEach((resource) => {
            const test = resource[value];

            expect(test).toBeDefined();
            expect(test.length).not.toBe(0);
          });
        });
      }
    });
}());
