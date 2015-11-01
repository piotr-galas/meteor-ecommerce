ProductViewModel = {
    _id: null,
    name: null,
    price: 0,
    init: function(id, name, price){
        this._id = id;
        this.name = name;
        this.price = price;
        return this;
    },
    create: function(id, name, price){
        return Object.create(ProductViewModel).init(id, name, price);
    },
    save: function(){
        if(!this.name){
            throw 'product name cant be empty';
        }
        
        if(this._id){
            // trigger update from server function
        }else{
            // trigger create from server function
        }
    }
};
