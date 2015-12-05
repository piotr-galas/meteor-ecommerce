ProductViewModel  = class ProductViewModel{
    constructor(id, name, price){
        this._id = id;
        this.name = name;
        this.price = price;
        return this;
    }

    create(id, name, price){
        return Object.create(ProductViewModel).init(id, name, price);
    }

    save(){
        if(!this.name){
            throw 'product name cant be empty';
        }
        
        if(this._id){
            // trigger update from server function
        }else{
            Meteor.call('productCreate', this.name, this.price);
        }
    }
}
