'use strict'

Template.products.helpers({
    products: function(){
        return Products.find();
    }
})