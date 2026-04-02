const restaurant=[];
const images=["first","second","third","fourth","fifth","sixth","seventh","eight","nineth","tenth"]
const rest_name=[
  "Spice Garden",
  "Royal Biryani House",
  "Tandoori Flames",
  "Urban Tadka",
  "The Hungry Fork",
  "Foodie's Hub",
  "Golden Curry",
  "Flavors of India",
  "The Curry Leaf",
  "Street Spice",
  "Masala Magic",
  "The Sizzling Plate",
  "Desi Delight",
  "Taste of Punjab",
  "The Food Junction",
  "Curry Kingdom",
  "Fusion Feast",
  "The Spice Route",
  "Savory Bites",
  "The Royal Dine"
];
const foodTypes=[
  "Pizza",
  "Burger",
  "Pasta",
  "Biryani",
  "Sandwich",
  "Noodles",
  "Salad",
  "Soup",
  "Tacos",
  "Sushi"
];
const delhiLocation=[
  "Connaught Place",
  "Chandni Chowk",
  "Karol Bagh",
  "Saket",
  "Dwarka",
  "Rohini",
  "Lajpat Nagar",
  "Hauz Khas",
  "Janakpuri",
  "Rajouri Garden"
];




for(let i=0;i<100;i++){
    const obj={};
    obj["image"]=images[Math.floor(Math.random()*10)];
    obj["name"]=rest_name[Math.floor(Math.random()*20)];
obj['rating']=Math.floor(Math.random()*5+1);
  obj["price for two"]=Math.floor(Math.random()*2401+100)

   obj["Location"]=delhiLocation[Math.floor(Math.random()*10)];
 obj["distance"]=(Math.random()*10+1).toFixed(1);
 obj["offers"]=[Math.floor(Math.random()*30)];
 obj["alcohol"]=Math.random()>0.7;
obj["Restaurant_open_time"]=Math.floor(Math.random()*24);
obj["Restaurant_close_time"]=(obj["Restaurant_open_time"]+12)%24;
restaurant.push(obj);












}
console.log(restaurant);
function getrestaurants(restaurants){
    const root = document.getElementById('root');

    restaurants.forEach(restaurant => {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement("img");
      image.src = `images/${restaurant.image}.jpeg`;

        const card_content = document.createElement('div');
        card_content.classList.add('card_content');

        const card_header = document.createElement('div');
        card_header.classList.add('card-header');

        const h3 = document.createElement('h3');
        h3.textContent = restaurant.name;

        const rate = document.createElement('span');
        rate.textContent = restaurant.rating;
        rate.classList.add('rating');

        card_header.appendChild(h3);
        card_header.appendChild(rate);

        const card_footer = document.createElement('div');
        card_footer.classList.add('card-footer');

        const price = document.createElement('span');
        price.textContent = restaurant["price for two"];

        card_footer.appendChild(price);

        const card_location = document.createElement('div');
        card_location.classList.add('card-location');

        const location = document.createElement('span');
        location.textContent = restaurant["Location"];

        const distance = document.createElement('span');
        distance.textContent = restaurant["distance"];

        card_location.appendChild(location);
        card_location.appendChild(distance);

        card_content.appendChild(card_header);
        card_content.appendChild(card_footer);
        card_content.appendChild(card_location);

        card.appendChild(image);
        card.appendChild(card_content);

        root.appendChild(card);
    });
}

getrestaurants(restaurant);
document.getElementById("Alcohol").addEventListener('click', () => {
  const result = restaurant.filter(obj => obj.alcohol);

  document.getElementById('root').innerHTML = "";

  getrestaurants(result);
});


// ✅ separate event
document.getElementById("Rating").addEventListener('click', () => {
  const result = restaurant.filter(obj => obj.rating >= 4.5);

  document.getElementById('root').innerHTML = "";

  getrestaurants(result);
});
document.getElementById('Filters').addEventListener('click',()=>{
  document.getElementById("filterPopup").classList.remove("hidden");
  
})