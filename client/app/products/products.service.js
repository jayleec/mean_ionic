'use strict';

// angular.module('meanshopApp')
//   .factory('Product', function ($resource) {
//     var last_id = 5;
//     var example_products = [
//       {_id: 1, title: 'Product 1', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor sit amet'},
//       {_id: 2, title: 'Product 2', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor sit amet'},
//       {_id: 3, title: 'Product 3', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor sit amet'},
//       {_id: 4, title: 'Product 4', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor sit amet'},
//       {_id: 5, title: 'Product 5', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor sit amet'}
//     ];
//
//     return {
//       query: function(){
//         return example_products;
//       },
//
//
//     get: function(product){
//       var result = {};
//       angular.forEach(example_products, function(product){
//         if(product._id == params.id)
//           return this.product = product;
//       }, result);
//       return result.product;
//     },
//
//     delete: function(params){
//       angular.forEach(example_products, function(product, index){
//         if(product._id == params._id){
//           console.log(product, index);
//           example_products.splice(index, 1);
//           return;
//         }
//       });
//     },
//
//     create: function(product){
//       product.id = ++last_id;
//       example_products.push(product);
//     },
//
//     update: function(product){
//       var item = this.get(product);
//       if(!item) return false;
//
//       item.title = product.title;
//       item.price = product.price;
//       item.quantity = product.quantity;
//       item.description = product.description;
//       return true
//     },
//
//     // return $resource('/api/products/:id', null, {
//     //   'update': {method: 'PUT'}
//     // })
//     };
//   });

angular.module('meanshopApp')
  .factory('Product', function ($resource) {
    return $resource('/api/products/:id/:controller', null, {
      'update': { method: 'PUT'},
      'catalog':{ method: 'GET', isArray: true,
        params: {
          controller: 'catalog'
        }
      },
      'search': { method: 'GET', isArray: true,
        params: {
          controller: 'search'
        }
      }
    });
  });
