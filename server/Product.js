Meteor.methods({
    productCreate: function(name, price){
        Products.insert({name: name, price: price});
    },
    productUpdate: function(){
        return 'to implement in future'
    }
});