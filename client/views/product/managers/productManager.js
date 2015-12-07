Template.products.helpers({
    products: function(){
        return Products.find();
    }
});

Template.product.helpers({
    productModel: function(){
        return new ProductViewModel(this);
    }
});

Template.productNew.helpers({
    productModel: function(){
         return new ProductViewModel(this);
    }
});

Template.productNew.events({
    'submit form': function(event){
        event.preventDefault();
        this.name = event.target.productName.value;
        this.price = event.target.productPrice.value;
        this.save(); 
    }
});

