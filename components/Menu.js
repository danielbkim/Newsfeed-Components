// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.
*/

const menuMaker = function(array) {
  // Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  array.forEach(function(li){
    console.log(li); // this is working
  });
  // Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').
  const menu = document.querySelector('.menu-button');
  console.log(menu);

  menu.addEventListener('click', function(event){
    menu.classList.toggle('menu-open');
    console.log(event.target);
  });
};

menuMaker(menuItems);



// Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

// Step 5: Don't forget to return your div.menu.

// Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.


  // Add those items to the <ul>

//   // need to make a menu div first

//   const menu = document.createElement('div');
//   menu.classList.add('menu');
//   // console.log(menu)
//   menu.appendChild('')



//   // array.forEach(function(li) {

//   // });

  

//   const menuButton = document.querySelector('.menu-button');
  
// };

