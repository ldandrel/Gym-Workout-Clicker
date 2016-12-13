var index 				 	          = {};
	index.container 	 	          = document.querySelector('body');
	index.button		 	          = index.container.querySelector('.click_button');
	index.force_display  	          = index.container.querySelector('.force_display span');
	index.force_second_display        = index.container.querySelector('.force_second_display span');
	index.fame_display                = index.container.querySelector('.fame_display span');
	index.fame_second_display         = index.container.querySelector('.fame_second_display span');
	index.click_value_display         = index.container.querySelector('.click_value_display span');
	index.landing        	          = index.container.querySelector('.landing_screen');
	index.landing_button 	          = index.container.querySelector('.play_button');
	index.amelioration_list           = index.container.querySelector('.amelioration-list');
	index.amelioration_button         = [];
	index.amelioration_button_upgrade = [];
	index.options                     = index.container.querySelector('.options');
	index.options_button              = index.options.querySelector('.options-button');
	index.reset 		              = index.options.querySelector('.reset');

var character 		  	   = {};
	character.force    	   = 0;
	character.force_second = 0;
	character.fame   	   = 0;
	character.fame_second  = 0;
	character.click_value  = 1;
	character.page_amelio  = 0;

/*******************

Options

*******************/

//make the option menu appear on click
index.options_button.addEventListener('click', function () {

if (index.options.classList.contains('visible'))
	index.options.classList.remove('visible');
else
	index.options.classList.add('visible');
});

//Reset all properties
index.reset.addEventListener('click', function () {
	
	character.force    	   = 0;
	character.force_second = 0;
	character.fame   	   = 0;
	character.fame_second  = 0;
	character.click_value  = 1;
	amelioration = amelioration_base;
	index.amelioration_list.innerHTML = '';
	display_ameliorations();
});


/******************

Character / score

******************/

//get force
character.force = localStorage.getItem('force');
if (isNaN(character.force))
	character.force = 0;
else
{
	character.force = parseFloat(character.force);
	index.force_display.innerHTML = character.force;
}

//Get force per second
character.force_second = localStorage.getItem('force_second');
if (isNaN(character.force_second))
	character.force_second = 0;
else
{
	character.force_second = parseFloat(character.force_second);
	index.force_second_display.innerHTML = character.force_second;
}

//Get click_value
character.click_value = localStorage.getItem('click_value');
if (isNaN(character.click_value))
	character.click_value = 1;
else
{
	character.click_value = parseInt(character.click_value);
	index.click_value_display.innerHTML = character.click_value;
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
	index.force_second_display.innerHTML = parseInt(character.force_second * 10);
	index.fame_display.innerHTML         = parseInt(character.fame);
	index.fame_second_display.innerHTML  = parseInt(character.fame_second);
	index.click_value_display.innerHTML  = parseInt(character.click_value);
}
change_score_value ();

//Change the value of the ameliorations
function change_amelioration_value (index) {

	var to_change       = document.querySelector('li.index-' + index),
		to_change_value = to_change.querySelector('.value'),
		to_change_level = to_change.querySelector('.level');

	to_change_value.innerHTML = amelioration[character.page_amelio][index].strength;
	to_change_level.innerHTML = amelioration[character.page_amelio][index].level;

	var results_amelioration = amelioration[character.page_amelio][index].results;

	if (results_amelioration == 'click_value')
		character.click_value = character.click_value + (amelioration[character.page_amelio][index].value);
	else if (results_amelioration == 'auto_click')
		character.force_second += amelioration[character.page_amelio][index].value;
}

function change_upgrade_value (index, index2) {

	if (amelioration[character.page_amelio][index2].upgrade[index].results == 'multiplication')
	{
		var results_amelioration = amelioration[character.page_amelio][index2].results;

		if (results_amelioration == 'click_value')
			character.click_value = character.click_value * (amelioration[character.page_amelio][index2].upgrade[index].value);
		else if (results_amelioration == 'auto_click')
			character.force_second = character.force_second * (amelioration[character.page_amelio][index2].upgrade[index].value);

	}
	else if (amelioration[character.page_amelio][index2].upgrade[index].results == 'percent_strenght')
	{
		console.log('percent_strength');
	}
	else if (amelioration[character.page_amelio][index2].upgrade[index].results == 'percent')
	{
		console.log('percent');
	}

	if (amelioration[character.page_amelio][index2].upgrade[index].again == false)
	{
		amelioration[character.page_amelio][index2].upgrade[index].bought = true;

		console.log('.amelioration ul li.index-'+index2+' .upgrades .index-'+index);

		var change = document.querySelector('.amelioration ul li.index-'+index2+' .upgrades .index-'+index);
		change.classList.add('already-bought');
	}
}

//Sync the score every second
setInterval(function () {

	var amelioration_string = JSON.stringify(amelioration);

	localStorage.setItem('force', character.force);
	localStorage.setItem('amelioration', amelioration_string);
	localStorage.setItem('force_second', character.force_second);
	localStorage.setItem('fame', character.fame);
	localStorage.setItem('fame_second', character.fame_second);
	localStorage.setItem('click_value', character.click_value);
}, 1000);

//Increase the fame and strength per second
setInterval(function () {

	character.fame = parseInt(character.fame) + character.fame_second;
	character.force = parseFloat(character.force) + character.force_second;
	change_score_value();
}, 100)

/********************

Interface interactions

********************/

//on click on the click zone increment score
index.button.addEventListener('click', function() {
		character.force = parseFloat(character.force);
		character.force = parseFloat(character.force) + parseFloat(character.click_value);
		change_score_value();

		if (index.button.classList.contains('img-1'))
		{
			index.button.classList.add('img-2');
			index.button.classList.remove('img-1');
		}
		else
		{
			index.button.classList.add('img-1');
			index.button.classList.remove('img-2');
		}
});

//Hide the landing page on click on the play button
index.landing_button.addEventListener('click', function () {

	index.container.classList.add('hide_landing');
});


//Display ameliorations
function display_ameliorations () {
	for (var i = 0; i < amelioration[character.page_amelio].length; i++)
	{
		var unlock = 'unlocked';
		if (amelioration[character.page_amelio][i].fame > character.fame)
			unlock = '';

		var bought = 'already-bought';
		if (amelioration[character.page_amelio][i].upgrade[0].bought == false)
			bought = '';

		var bought2 = 'already-bought';
		if (amelioration[character.page_amelio][i].upgrade[1].bought == false)
			bought2 = '';

		index.amelioration_list.innerHTML += '<li data-index="' + i + '" class="index-' + i + ' ' + unlock + '"><div class="locked">Locked</div><img src="assets/img/amelio.jpg" alt="amelioration icon" class="illustration index-' + i + '"><p class="name index-' + i + '">' + amelioration[character.page_amelio][i].name + '</p><button class="buy-button index-' + i + '" data-index="' + i + '"><p>Buy</p><img src="assets/img/strength.png" alt="Strength Icon"><span class="value">' + amelioration[character.page_amelio][i].strength + '</span></button><span class="level">' + amelioration[character.page_amelio][i].level + '</span><div class="upgrades"><div class="upgrade index-0 ' + bought + '" data-index="0" data-former="'+ i +'"><div class="bought">Bought</div>' + amelioration[character.page_amelio][i].upgrade[0].name + '</div><div class="upgrade index-1 ' + bought2 + '" data-index="1" data-former="'+ i +'"><div class="bought">Bought</div>' + amelioration[character.page_amelio][i].upgrade[1].name + '</div></div></li>';
	}
	add_event_buy ();
}

display_ameliorations ();

//retrieve ameliorations and upgrades to buy
function add_event_buy () {
	for (var i = 0; i < amelioration[character.page_amelio].length; i++)
	{
		index.amelioration_button[i] = index.container.querySelector('.buy-button.index-' + i);

		index.amelioration_button[i].addEventListener('click', function () {
			var index = this.getAttribute('data-index'),
				price = amelioration[character.page_amelio][index].strength;

			if (character.fame <  amelioration[character.page_amelio][index].fame)
				alert ('you are not famous enough');
			else if (character.force <  price)
				alert('You have not enought strength to purchase that');
			else
			{
				character.force = character.force - price;
				amelioration[character.page_amelio][index].level++;
				amelioration[character.page_amelio][index].strength = parseInt(price * 1.1 + (amelioration[character.page_amelio][index].level)*1.5);
				change_amelioration_value(index);
				change_score_value();
			}
		});

		index.amelioration_button_upgrade[i] = [];

		for (var j = 0; j < 2; j++)
		{
			index.amelioration_button_upgrade[i][j] = index.container.querySelector('.amelioration-list li.index-' + i  + ' .upgrade.index-' + j);
			
			index.amelioration_button_upgrade[i][j].addEventListener('click', function() {

				var index_upgrade   = this.getAttribute('data-index'),
					index_upgrade_2 = this.getAttribute('data-former'),
					price_upgrade   = amelioration[character.page_amelio][index_upgrade_2].upgrade[index_upgrade].strength;

				if (amelioration[character.page_amelio][index_upgrade_2].upgrade[index_upgrade].bought == true)
					alert('You have already bought that item');
				else
				{

					if (character.force <  price_upgrade)
						alert('You have not enought strength to purchase that');
					else
					{
						character.force = character.force - price_upgrade;
						amelioration[character.page_amelio][index_upgrade_2].upgrade[index_upgrade].strength = price_upgrade*2;
						change_upgrade_value(index_upgrade, index_upgrade_2);
						change_score_value();
					}
				}


			});
		}
	}
}