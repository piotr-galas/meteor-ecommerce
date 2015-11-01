Template.products.helpers({
    products: function(){
        return Products.find();
    }
});

Template.products.events({
    "click #create": function(){
        console.log('ff');
    }  
});