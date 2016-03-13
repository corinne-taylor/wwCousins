//This is where the jquery/javascript for the menu page will go!

app.controller('MainController',
['$scope', function($scope) {
	$scope.title = 'Our Menu';
  	$scope.promo = 'Don’t forget Kids Eat Free Mondays and Tuesdays after 4:00!';
	$scope.products = [ 
  { 
   item: '1/3lb Hamburger', 
    price: 5.5, 
    combo: ,
     }, 
  { 
    name: '1/2lb Hamburger', 
    price: 6.4,
    combo: , 
     } ,
    { 
    name: 'Grilled Chicken Sandwich', 
    price: 6, 
    combo: ,
     }, 
  { 
    name: 'Chicken Salad Sandwich', 
    price: 5.5,
    combo: ,
  },
 { 
    name: 'Chicken Tenders', 
    price: 5.8, 
   combo: ,
  },
 { 
    name: 'Whitefish Sandwich', 
    price: 5.9, 
    combo: ,
  },
{ 
    name: 'Grilled Tuna Sandwich', 
    price: 6,
    combo: ,
  } ,
{ 
    name: 'Salmon Filet Sandwich', 
    price: 7.45,
    combo: ,
  } ,
{ 
    name: 'Grilled Pork Chop Sandwich', 
    price: 6.25,
	combo:, 
  },
{ 
    name: 'Ribeye Sandwich', 
    price: 8.40,
    combo:, 
  },
{ 
    name: 'Traditional BLT Sandwich', 
    price: 4.6,
    combo: , 
  },
{ 
    name: 'Jumbo Hot Dog', 
    price: 4.6,
    combo: , 
  }   
]
    };