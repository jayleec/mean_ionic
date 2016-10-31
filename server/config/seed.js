/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

var Product = require('../api/product/product.model');

Product.find({}).removeAsync()
  .then(function(){
    Product.createAsync({
      title: '쿠퍼스타운 후드 뉴욕 양키스 컵스',
      imageUrl: '/assets/uploads/skate.jpg',
      price: 25,
      stock: 250,
      description: 'Build a ..'
    }, {
      title: '시카고 컵스 레드',
      imageUrl: 'assets/uploads/hoodie_andersson.jpg',
      price: 15,
      stock: 100,
      description: 'tshirt '
    },{
      title: '디트로이드 타이거즈 네이비',
      imageUrl: '/assets/uploads/hoodie_d.jpg',
      price: 8,
      stock: 50,
      description: 'Convert hoodie into MEAN code'
    })
    .then(function(){
      console.log('finisied populating products');
    });
  });

Thing.find({}).removeAsync()
  .then(function() {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, CoffeeScript, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).removeAsync()
  .then(function() {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    })
    .then(function() {
      console.log('finished populating users');
    });
  });
