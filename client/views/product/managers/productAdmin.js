Template.productAdmin.helpers({
    productModel: function(){
        return ProductViewModel.create();
    }
});

Template.productAdmin.events({
    'submit form': function(event){
        event.preventDefault();
        this.name = 'samp';
        this.price = 23;
        this.save(); 
    }
});
