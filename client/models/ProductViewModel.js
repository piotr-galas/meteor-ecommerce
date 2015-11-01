ProductViewModel = {
    _id: null,
    name: null,
    price: 0,
    dupa: 24,
    init: function(id, name, price){
        this._id = id;
        this.name = name;
        this.price = price;
        return this;
    },
    create: function(id, name, price){
        return Object.create(ProductViewModel).init(id, name, price);
    },
};
