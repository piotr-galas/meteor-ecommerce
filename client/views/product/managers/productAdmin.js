Template.productAdmin.helpers({
    productModel: function(){
        return ProductViewModel.create();
    }
});

Template.productAdmin.events({
    'submit form': function(event){
        event.preventDefault();
        this.name = event.target.productName.value;
        this.price = event.target.productPrice.value;
        this.save(); 
    }
});
