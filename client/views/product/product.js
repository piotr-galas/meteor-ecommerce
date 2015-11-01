Template.product.helpers({
    productModel: function(){
        return ProductViewModel.create(this._id, this.name, this.price);
    }
});