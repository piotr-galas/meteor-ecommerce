'use strict'
if (Products.find().count() === 0) {

  Products.insert({
    name: 'misek',
    price: 23,
  });

  Products.insert({
    name: 'lala',
    price: 13
  });

  Products.insert({
    name: 'piwo',
    price: 1
  });

}
