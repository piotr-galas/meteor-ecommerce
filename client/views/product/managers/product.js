Template.product.helpers({
    productModel: function(){
        return new ProductViewModel(this._id, this.name, this.price);
    }
});

