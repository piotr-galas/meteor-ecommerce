'use strict'
    describe('ProductViewModel', function() {

      it('Created model should have id, name and price', function() {
            var model = ProductViewModel.create(1, 'nazwa', 10);
            expect(model._id).toEqual(1);
            expect(model.name).toEqual('nazwa');
            expect(model.price).toEqual(10);
      });

      it('Create product without name throw error', function(){
            var model = ProductViewModel.create(1, '', 10);
            expect(model.save).toThrow();
      });

    });
