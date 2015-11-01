Meteor.publish('products', function() {
    return Tutorials.find();
});
