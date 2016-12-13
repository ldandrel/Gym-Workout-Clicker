var index 				 	   = {};
	index.container 	 	   = document.querySelector('body');
	index.button		 	   = index.container.querySelector('.click_button');
	index.force_display  	   = index.container.querySelector('.force_display');
	index.force_second_display = index.container.querySelector('.force_second_display');
	index.fame_display         = index.container.querySelector('.fame_display');
	index.fame_second_display  = index.container.querySelector('.fame_second_display');
	index.landing        	   = index.container.querySelector('.landing_screen');
	index.landing_button 	   = index.container.querySelector('.play_button');
	index.amelioration_list    = index.container.querySelector('.amelioration-list');
	index.amelioration_button  = [];

var character 		  	   = {};
	character.force    	   = 0;
	character.force_second = 0;
	character.fame   	   = 0;
	character.fame_second  = 0;
	character.click_value  = amelioration[0].level;


/******************

Character / score

******************/

//get force
character.force = localStorage.getItem('force');
if (isNaN(character.force))
	character.force = 0;
else
{
	character.force = parseInt(character.force);
	index.force_display.innerHTML = character.force;
}

//Get force per second
character.force_second = localStorage.getItem('force_second');
if (isNaN(character.force_second))
	character.force_second = 0;
else
{
	character.force_second = parseInt(character.force_second);
	index.force_second_display.innerHTML = character.force_second;
}

//Get fame
character.fame = localStorage.getItem('fame');
if (isNaN(character.fame))
	character.fame = 0;
else
{
	character.fame = parseInt(character.fame);
	index.fame_display.innerHTML = character.fame;
}

//Get fame per second
character.fame_second = localStorage.getItem('fame_second');
if (isNaN(character.fame_second))
{
	character.fame_second = 0;
	change_score_value();
}
else
{
	character.fame_second = parseInt(character.fame_second);
	index.fame_second_display.innerHTML = character.fame_second;
}

//Change the value of the score
function change_score_value () {

	index.force_display.innerHTML        = parseInt(character.force);
	index.force_second_display.innerHTML = parseInt(character.force_second);
	index.fame_display.innerHTML         = parseInt(character.fame);
	index.fame_second_display.innerHTML  = parseInt(character.fame_second);
}
change_score_value ();

//Change the value of the ameliorations
function change_amelioration_value (index) {
	
	var to_change = document.querySelector('li.index-' + index),
		to_change_value = to_change.querySelector('.value'),
		to_change_level = to_change.querySelector('.level');

	to_change_value.innerHTML = amelioration[index].value;
	to_change_level.innerHTML = amelioration[index].level;

	if (index == 0)
		character.click_value = parseInt(amelioration[0].level);
	else if (index == 1)
		console.log(amelioration[1].level)
		character.fame_second = parseInt(amelioration[1].level);
}

//Sync the score every second
setInterval(function () {

	var amelioration_string = JSON.stringify(amelioration);

	localStorage.setItem('force', character.force);
	localStorage.setItem('amelioration', amelioration_string);
	localStorage.setItem('force_second', character.force_second);
	localStorage.setItem('fame', character.fame);
	localStorage.setItem('fame_second', character.fame_second);
}, 1000);

//Increase the fame and strength per minute
setInterval(function () {

	character.fame = parseInt(character.fame + character.fame_second);
	change_score_value();
}, 100)

/********************

Interface interactions

********************/

//on click on the click zoneincrement score
index.button.addEventListener('click', function() {
		character.force = parseInt(character.force);
		character.force = parseInt(character.force + character.click_value + 1);
		change_score_value();
});

//Hide the landing page on click on the play button
index.landing_button.addEventListener('click', function () {

	index.container.classList.add('hide_landing');
});

//Display ameliorations
function display_ameliorations () {
	for (var i = 0; i < amelioration.length; i++)
	{
		index.amelioration_list.innerHTML += '<li data-index="' + i + '" class="index-' + i + '"><img src="assets/img/amelio.jpg" alt="amelioration icon" class="illustration index-' + i + '"><p class="name index-' + i + '">' + amelioration[i].name + '</p><button class="buy-button index-' + i + '" data-index="' + i + '"><p>Buy</p><img src="assets/img/strength.png" alt="Strength Icon"><span class="value">' + amelioration[i].value + '</span></button><span class="level">' + amelioration[i].level + '</span></li>';
	}
	add_event_buy ();
}

display_ameliorations ();

//retrieve ameliorations to buy
function add_event_buy () {
	for (var i = 0; i < amelioration.length; i++)
	{
		index.amelioration_button[i] = index.container.querySelector('.buy-button.index-' + i);

		index.amelioration_button[i].addEventListener('click', function () {
			var index    = this.getAttribute('data-index'),
				price    = amelioration[index].value;

			if (character.fame <  amelioration[index].fame)
				alert ('you are not famous enough');
			else if (character.force <  amelioration[index].value)
				alert('You have not enought strength to purchase that');
			else
			{
				character.force = character.force - amelioration[index].value;
				amelioration[index].level++;
				amelioration[index].value = amelioration[index].value + (amelioration[index].level)*2;
				change_amelioration_value(index);
				change_score_value();
			}
		});
	}
}