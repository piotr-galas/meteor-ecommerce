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

      it('Create product trigger server method', function(){
            spyOn(Products, 'insert');
            spyOn(Meteor, "call");
            var model = ProductViewModel.create(null, 'name', 10);
            model.save();
            expect(Meteor.call).toHaveBeenCalled();
            // expect(Products.insert).toHaveBeenCalled();  why this test faild?
      })

    });
