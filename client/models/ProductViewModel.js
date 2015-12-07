ProductViewModel  = class ProductViewModel{
    constructor(product){
        this._id = product.id;
        this.name = product.name;
        this.price = product.price;
    }

    save(){
        if(!this.name){
            throw 'product name can\'t be empty';
        }
        
        if(this._id){
            // trigger update from server function
        }else{
            Meteor.call('productCreate', this.name, this.price);
        }
    }
}
