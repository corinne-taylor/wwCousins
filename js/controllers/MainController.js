/*global angular */
var app = angular.module("myApp", []);

/* controller */
app.controller('MainController',
['$scope', function($scope) {
  $scope.title = 'Our Menu';
  $scope.promo = 'Don’t forget Kids Eat Free Mondays and Tuesdays after 4:00!';
  $scope.products = [ 
  { 
   item: '1/3lb Hamburger', 
    price: 5.5, 
    combo: 8.5,
     }, 
  { 
    name: '1/2lb Hamburger', 
    price: 6.4,
    combo: 9.4, 
     } ,
    { 
    name: 'Grilled Chicken Sandwich', 
    price: 6, 
    combo: 9,
     }, 
  { 
    name: 'Chicken Salad Sandwich', 
    price: 5.5,
    combo: 8.5,
  },
 { 
    name: 'Chicken Tenders', 
    price: 5.8, 
   combo: 8.8,
  },
 { 
    name: 'Whitefish Sandwich', 
    price: 5.9, 
    combo: 8.9,
  },
{ 
    name: 'Grilled Tuna Sandwich', 
    price: 6,
    combo: 9,
  } ,
{ 
    name: 'Salmon Filet Sandwich', 
    price: 7.45,
    combo: 10.45,
  } ,
{ 
    name: 'Grilled Pork Chop Sandwich', 
    price: 6.25,
  combo: 9.25, 
  },
{ 
    name: 'Ribeye Sandwich', 
    price: 8.40,
    combo: 11.4, 
  },
{ 
    name: 'Traditional BLT Sandwich', 
    price: 4.6,
    combo: 7.6, 
  },
{ 
    name: 'Jumbo Hot Dog', 
    price: 4.6,
    combo: 7.6, 
  }   
];
    }]);