const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
breakfastMenu.splice( 0, 4, 'Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15');
console.log(breakfastMenu);
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
mainCourseMenu.splice( 0, 4, 'Steak- $42', 'Pasta -$30.99', 'Burger -$33.99', 'Salmon -$45');

const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
dessertMenu.splice( 0, 4, 'Cake- $5.50', 'Ice Cream -$10.99', 'Pudding -$15.99', 'Fruit Salad -$23.50');

breakfastMenuItemHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
