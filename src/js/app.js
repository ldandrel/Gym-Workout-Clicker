/*
 * Variables
 */


//Index is the object wich contains the DOM elements
var index 				 	          = {};
	index.container 	 	          = document.querySelector('body');
	index.click_area				  = index.container.querySelector('.click-area');
	index.button		 	          = index.container.querySelector('.click_button');
	index.button_img				  = index.button.querySelector('img');
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
	index.panel_desc            	  = document.querySelector('.mouse-hover-description');
	index.amelioration_panels		  = index.container.querySelectorAll('.panel');
	index.fame_level_display		  = index.container.querySelector('.fame_level span');
	index.xp_bar					  = index.container.querySelector('.progress-xp-bar');
	index.gym_choose				  = index.container.querySelector('.gym-choose');
	index.gym_choose_button 		  = index.container.querySelector('.gym-choose-button');
	index.gym_list			 		  = index.gym_choose.querySelector('.gym-list');
	index.gym_list_all			 	  = index.gym_choose.querySelectorAll('.gym-list li');
	index.sex_choose				  = index.container.querySelectorAll('.choose-character .half-character');

//Character is the object containing the different specs of the player
var character 		  	   = {};
	character.force    	   = 0;
	character.sex          = 'male';
	character.force_second = 0;
	character.fame   	   = 0;
	character.fame_second  = 0;
	character.click_value  = 1;
	character.page_amelio  = 0;
	character.fame_level   = 0;
	character.level_value  = [1000, 10000];

//Notif contains all the notifications
var notif       = {};
	notif.first = index.container.querySelector('.first-click-notif');

//finished prevent the animation to be spammed
var finished = true;

/*
 * Choose the sex of the player
 */

//On click on the 'woman' button, make the player a woman
index.sex_choose[0].addEventListener('click', function () {

	character.sex = 'female';
	localStorage.setItem('sex', character.sex);

	index.container.classList.remove('choose_character');

	index.button_img.src="assets/img/animations/"+ character.sex +"-"+ character.fame_level +"_anim.gif";
});

//On click on the 'man' button, make the player a man
index.sex_choose[1].addEventListener('click', function () {

	character.sex = 'male';
	localStorage.setItem('sex', character.sex);

	index.container.classList.remove('choose_character');

	index.button_img.src="assets/img/animations/"+ character.sex +"-"+ character.fame_level +"_anim.gif";
});

/*
 * Options section
 */


//make the option menu appear on click on the option button
index.options_button.addEventListener('click', function () {

	if (index.options.classList.contains('visible'))
		index.options.classList.remove('visible');
	else
		index.options.classList.add('visible');
});

//Reset all properties on click on the reset button
index.reset.addEventListener('click', function () {
	
	character.force    	   		      = 0;
	character.force_second 		      = 0;
	character.fame   	   		      = 0;
	character.fame_second  		      = 0;
	character.click_value  		      = 1;
	character.fame_level   		      = 0;
	character.level_value  		      = [1000, 10000]; 
	amelioration 		   		      = amelioration_base;
	index.amelioration_list.innerHTML = '';
	display_ameliorations();
});

/*
 *	Get all parameters of the character from the save on the localstorage
 */

//Get force parameter
character.force = localStorage.getItem('force');

if (isNaN(character.force) || !character.force)
	character.force = 0;
else
	character.force = parseFloat(character.force);

index.force_display.innerHTML = character.force;

//Get force per second parameter
character.force_second = localStorage.getItem('force_second');

if (isNaN(character.force_second) || !character.force_second)
	character.force_second = 0;
else
	character.force_second = parseFloat(character.force_second);

index.force_second_display.innerHTML = character.force_second;

//Get the click value parameter
character.click_value = localStorage.getItem('click_value');

if (isNaN(character.click_value) || !character.click_value)
	character.click_value = 1;
else
	character.click_value = parseInt(character.click_value);

index.click_value_display.innerHTML = character.click_value;

//Get the fame level parameter
character.fame_level = localStorage.getItem('fame_level');

if (isNaN(character.fame_level) || !character.fame_level)
	character.fame_level = 0;
else
	character.fame_level = parseInt(character.fame_level);

index.fame_level_display.innerHTML = character.fame_level;

//Get fame parameter
character.fame = localStorage.getItem('fame'); 

if (isNaN(character.fame) || !character.fame)
	character.fame = 0;
else
	character.fame = parseInt(character.fame);

index.fame_display.innerHTML = character.fame;

//Get fame per second parameter
character.fame_second = localStorage.getItem('fame_second');

if (isNaN(character.fame_second) || !character.fame_second)
	character.fame_second = 0;
else
	character.fame_second = parseInt(character.fame_second);

index.fame_second_display.innerHTML = character.fame_second;

//Get character sex
character.sex = localStorage.getItem('sex');

if (!character.sex)
	character.sex = 'male';

/*
 * Convert number with sufixes (million, milliard, billion...)
 */

function convert_number( value )
{
	// Possible units
	var units = [
		{
			value   :  Math.pow(10, 6),
			singular: 'million',
			plural  : 'millions'
		},
		{
			value   : Math.pow(10, 9),
			singular: 'milliard',
			plural  : 'milliards'
		},
		{
			value   : Math.pow(10, 12),
			singular: 'billion',
			plural  : 'billions'
		},
		{
			value   : Math.pow(10, 15),
			singular: 'billiard',
			plural  : 'billiards'
		},
		{
			value   : Math.pow(10, 18),
			singular: 'trillion',
			plural  : 'trillions'
		},
		{
			value   : Math.pow(10, 24),
			singular: 'quatrillion',
			plural  : 'quatrillions'
		},
		{
			value   : Math.pow(10, 30),
			singular: 'quintillion',
			plural  : 'quintillions'
		},
		{
			value   : Math.pow(10, 36),
			singular: 'sextillion',
			plural  : 'sextillions'
		},
		{
			value   : Math.pow(10, 42),
			singular: 'septillion',
			plural  : 'Septillions'
		},
	]

	// Specific unit
	var unit = null

	for( var i = 0; i < units.length; i++ )
	{
		var _unit = units[i]

		if( value > _unit.value )
			unit = _unit;
	}

	// Unit found
	if( unit )
	{
		// Rounded value
		var round_value = Math.floor( value / unit.value ),
			rest_value  = Math.floor( value / ( unit.value / 1000 ) - round_value * 1000 )

		var text_value = null;

		if( round_value === 1 )
			text_value = round_value + ',' + rest_value + ' ' + unit.singular;
		else
			text_value = round_value + ',' + rest_value + ' ' + unit.plural;

		return text_value;
	}

	// Unit not found
	else
	{
		return parseInt(value);
	}
}

/*
 * Score managing functions
 */

//Change the value of the score every 0.1s
function change_score_value () {

	//score parameters
	index.force_display.innerHTML        = convert_number(character.force);
	index.force_second_display.innerHTML = convert_number(character.force_second * 10);
	index.fame_display.innerHTML         = convert_number(character.fame);
	index.fame_second_display.innerHTML  = convert_number(character.fame_second * 10);
	index.click_value_display.innerHTML  = convert_number(character.click_value);
	index.fame_level_display.innerHTML   = convert_number(character.fame_level+1);

	//make the fame bar progress
	var ratio 					 = character.fame/character.level_value[character.fame_level];
	index.xp_bar.style.transform = 'translateX(0%) skew(-30deg) scaleX('+ (ratio * 0.75) +')';

	//Level up when the fame bar is full
	if (ratio >= 1)
		level_up();

	//Check if there is a new upgrade to buy
	setTimeout(check_upgrade_available, 1000);
}

//Sync the score every second in the local storage
setInterval(function () {

	var amelioration_string = JSON.stringify(amelioration);

	localStorage.setItem('force', character.force);
	localStorage.setItem('amelioration', amelioration_string);
	localStorage.setItem('force_second', character.force_second);
	localStorage.setItem('fame', character.fame);
	localStorage.setItem('fame_second', character.fame_second);
	localStorage.setItem('fame_level', character.fame_level);
	localStorage.setItem('click_value', character.click_value);
}, 1000);

//level up
function level_up() {

	character.fame_level++;
	index.button_img.src="assets/img/animations/"+ character.sex +"-"+ character.fame_level +"_anim.gif";

	check_size_character();

	setTimeout(function () {
		display_ameliorations();
	}, 400);
}

//Increase the fame and strength stats per second
setInterval(function () {

	character.fame = parseFloat(character.fame) + character.fame_second;
	character.force = parseFloat(character.force) + character.force_second;
	change_score_value();
}, 100);

//on click on the click zone increment score
index.button.addEventListener('click', function() {
	character.force = parseFloat(character.force);
	character.force = parseFloat(character.force) + parseFloat(character.click_value);
	change_score_value();

	var	level = character.fame_level;

	if (level > 2)
		level = 2;

	if (finished == true)
	{
		finished = false;

		var audio = new Audio('assets/audio/clic.mp3');
		audio.play();

    	index.button_img.src="assets/img/animations/"+ character.sex +"-"+ level +"_anim.gif";
		setTimeout(function () {
			finished = true;
		}, 500);
	}
});

/*
 * Character UI functions
 */ 

//Adapt the size of the characters
function check_size_character () {
	
	//Adapt the character size to the click area (woman lvl 0)
	if (character.fame_level == 0 && character.sex == 'female')
	{
		index.button_img.style.height = '400px';
		index.button_img.style.width = 'auto';
		index.button_img.style.marginTop = '10px';
		index.button_img.style.marginLeft = '0px';
	}

	//Adapt the character size to the click area (woman lvl 1)
	if (character.fame_level == 1 && character.sex == 'female')
	{
		index.button_img.style.height = '360px';
		index.button_img.style.width = 'auto';
		index.button_img.style.marginTop = '0px';
		index.button_img.style.marginLeft = '10px';
	}

	//Adapt the character size to the click area (woman lvl 2)
	if (character.fame_level == 2 && character.sex == 'female')
	{
		index.button_img.style.height = '360px';
		index.button_img.style.width = 'auto';
		index.button_img.style.marginTop = '40px';
		index.button_img.style.marginLeft = '40px';
	}

	//Adapt the character size to the click area (man lvl 0)
	if (character.fame_level == 0 && character.sex == 'male')
	{
		index.button_img.style.height = '380px';
		index.button_img.style.width = 'auto';
		index.button_img.style.marginTop = '40px';
		index.button_img.style.marginLeft = '70px';
	}

	//Adapt the character size to the click area (man lvl 1)
	if (character.fame_level == 1 && character.sex == 'male')
	{
		index.button_img.style.height = '360px';
		index.button_img.style.width = 'auto';
		index.button_img.style.marginTop = '40px';
		index.button_img.style.marginLeft = '40px';
	}

	//Adapt the character size to the click area (man lvl 2)
	if (character.fame_level == 2 && character.sex == 'male')
	{
		index.button_img.style.height = '420px';
		index.button_img.style.width = 'auto';
		index.button_img.style.marginTop = '0px';
		index.button_img.style.marginLeft = '40px';
	}
}

/*
 * Amelioration managing functions
 */

//Change the amelioration panels on click on a section (force, fame, both)
for (var i = 0; i < index.amelioration_panels.length; i++)
{
	index.amelioration_panels[i].addEventListener('click', function (){
		
		var number = this.getAttribute('data-index');

		character.page_amelio = number;
		index.amelioration_list.innerHTML = '';
		display_ameliorations();
		change_color_panel();
	});
}

//Change the color of the current selected panel in the ameliorations
function change_color_panel () {

	for (var i = 0; i < index.amelioration_panels.length; i++)
	{
		if (character.page_amelio != i)
		{
			index.amelioration_panels[i].style.background = '#fff';
			index.amelioration_panels[i].style.color = '#05D1D7';
		}
		else
		{
			index.amelioration_panels[i].style.background = '#05D1D7';
			index.amelioration_panels[i].style.color = '#fff';
		}
	}
}

//Change the value of the ameliorations
function change_amelioration_value (index1) {

	var to_change       = document.querySelector('li.index-' + index1),
		to_change_value = to_change.querySelector('.value'),
		to_change_level = to_change.querySelector('.level');

	to_change_value.innerHTML = amelioration[character.page_amelio][index1].strength;
	to_change_level.innerHTML = amelioration[character.page_amelio][index1].level;

	var results_amelioration = amelioration[character.page_amelio][index1].results;

	if (results_amelioration == 'click_value')
		character.click_value = character.click_value + (amelioration[character.page_amelio][index1].value);
	else if (results_amelioration == 'auto_click')
			character.force_second += amelioration[character.page_amelio][index1].value;
	else if (results_amelioration == 'auto_fame')
			character.fame_second += amelioration[character.page_amelio][index1].value;
	else if (results_amelioration == 'auto_both')
	{
		character.fame_second += amelioration[character.page_amelio][index1].value;
		character.force_second += amelioration[character.page_amelio][index1].value;
	}
	else if (results_amelioration == 'percent_both')
	{
		for (var i = 0; i < amelioration[character.page_amelio].length; i++ )
		{
			amelioration[character.page_amelio][i].value = ((100 + amelioration[character.page_amelio][index1].value)*amelioration[character.page_amelio][i].value)/100;
		}
		character.force_second = (character.force_second*(100 + amelioration[character.page_amelio][index1].value))/100;
		character.fame_second = (character.fame_second*(100 + amelioration[character.page_amelio][index1].value))/100;
	}
		
}

//Display ameliorations
function display_ameliorations () {
	for (var i = 0; i < amelioration[character.page_amelio].length; i++)
	{
		var unlock = 'unlocked';
		if (amelioration[character.page_amelio][i].fame > character.fame)
			unlock = '';

		if (character.page_amelio < 2)
		{
			var bought = 'already-bought';
				if (amelioration[character.page_amelio][i].upgrade[0].bought == false)
				bought = '';

			var bought2 = 'already-bought';
			if (amelioration[character.page_amelio][i].upgrade[1].bought == false)
				bought2 = '';

			var upgrade1 = amelioration[character.page_amelio][i].upgrade[0].name,
				upgrade2 = amelioration[character.page_amelio][i].upgrade[1].name;
		}

		var name     = amelioration[character.page_amelio][i].name,
			strength = amelioration[character.page_amelio][i].strength,
			strength = convert_number(strength);
			url      = amelioration[character.page_amelio][i].icon,
			level    = amelioration[character.page_amelio][i].level;

		if (character.page_amelio < 2)
			index.amelioration_list.innerHTML += '<li data-index="' + i + '" class="index-' + i + ' ' + unlock + '"><div class="locked index-'+ i +'" data-index="'+ i +'">Locked</div><img src="assets/img/amelioration/'+ url +'" alt="amelioration icon" class="illustration index-' + i + '"><p class="name index-' + i + '">' + name + '</p><button class="buy-button index-' + i + '" data-index="' + i + '"><span class="value">' + strength + '</span></button><span class="level">' + level + '</span><div class="upgrades"><div class="upgrade index-0 ' + bought + '" data-index="0" data-former="'+ i +'"><img src="assets/img/checked.svg"></div><div class="upgrade index-1 ' + bought2 + '" data-index="1" data-former="'+ i +'"><img src="assets/img/checked.svg"></div></li>';
		else
			index.amelioration_list.innerHTML += '<li data-index="' + i + '" class="index-' + i + ' ' + unlock + '"><div class="locked index-'+ i +'" data-index="'+ i +'">Locked</div><img src="assets/img/amelioration/'+ url +'" alt="amelioration icon" class="illustration index-' + i + '"><p class="name index-' + i + '">' + name + '</p><button class="buy-button index-' + i + '" data-index="' + i + '"><span class="value">' + strength + '</span></button><span class="level">' + level + '</span></div></li>';
	}
	add_event_buy ();
	panel_appear();
}

//retrieve ameliorations and upgrades to buy
function add_event_buy () {
	for (var i = 0; i < amelioration[character.page_amelio].length; i++)
	{
		index.amelioration_button[i] = index.container.querySelector('.buy-button.index-' + i);

		index.amelioration_button[i].addEventListener('click', function () {
			var index = this.getAttribute('data-index'),
				price = amelioration[character.page_amelio][index].strength;

			if (character.fame <  amelioration[character.page_amelio][index].fame)
				console.log ('you are not famous enough');
			else if (character.force <  price)
				console.log('You have not enought strength to purchase that');
			else
			{
				character.force = character.force - price;
				amelioration[character.page_amelio][index].level++;
				amelioration[character.page_amelio][index].strength = parseInt(price*1.15);
				change_amelioration_value(index);
				change_score_value();
			}
		});

		if (character.page_amelio < 2)
		{
			index.amelioration_button_upgrade[i] = [];

			for (var j = 0; j < 2; j++)
			{
				index.amelioration_button_upgrade[i][j] = index.container.querySelector('.amelioration-list li.index-' + i  + ' .upgrade.index-' + j);
				
				index.amelioration_button_upgrade[i][j].addEventListener('click', function() {

					var index_upgrade   = this.getAttribute('data-index'),
						index_upgrade_2 = this.getAttribute('data-former'),
						price_upgrade   = amelioration[character.page_amelio][index_upgrade_2].upgrade[index_upgrade].strength;

					if (amelioration[character.page_amelio][index_upgrade_2].upgrade[index_upgrade].bought == true)
						console.log('You have already bought that item');
					else
					{

						if (character.force <  price_upgrade)
							console.log('You have not enought strength to purchase that');
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
}

/*
 * Upgrades managing functions
 */ 

//Check if there is a new_upgrade to buy every second
function check_upgrade_available () {

	if (character.page_amelio < 2)
	{
		for (var i = 0; i < amelioration[character.page_amelio].length; i++)
		{
			var upgrade = document.querySelector('li.index-'+ i +' .upgrades .index-0');
			if (amelioration[character.page_amelio][i].upgrade[0].strength < character.force)
			{
				upgrade.style.background = 'url(assets/img/badges/argent.svg)';
			}
			else if(!upgrade.classList.contains('already-bought'))
			{
				upgrade.style.background = 'url(assets/img/badges/argent_lock.svg)';
			}
			var upgrade = document.querySelector('li.index-'+ i +' .upgrades .index-1');
			if (amelioration[character.page_amelio][i].upgrade[1].strength < character.force)
			{
				upgrade.style.background = 'url(assets/img/badges/or.svg)';
			}
			else if(!upgrade.classList.contains('already-bought'))
			{
				upgrade.style.background = 'url(assets/img/badges/or_lock.svg)';
			}
		}
	}
}

//Change and apply the changes of an upgrade when bought
function change_upgrade_value (index1, index2) {

	//multiplication mouse upgrades (double effect of the amelioration + click value)
	if (amelioration[character.page_amelio][index2].upgrade[index1].results == 'multiplication_mouse')
	{
		character.click_value = character.click_value * (amelioration[character.page_amelio][index2].upgrade[index1].value);

		var actual_bonus = amelioration[character.page_amelio][index2].value * amelioration[character.page_amelio][index2].level;
		var next_bonus   = actual_bonus * amelioration[character.page_amelio][index2].upgrade[index1].value;

		amelioration[character.page_amelio][index2].value = amelioration[character.page_amelio][index2].value * amelioration[character.page_amelio][index2].upgrade[index1].value;

		character.force_second = character.force_second - actual_bonus + next_bonus;
	}
	//multiplication strength (double effect)
	else if (amelioration[character.page_amelio][index2].upgrade[index1].results == 'multiplication')
	{
		var actual_bonus = amelioration[character.page_amelio][index2].value * amelioration[character.page_amelio][index2].level;
		var next_bonus   = actual_bonus * amelioration[character.page_amelio][index2].upgrade[index1].value;

		amelioration[character.page_amelio][index2].value = amelioration[character.page_amelio][index2].value * amelioration[character.page_amelio][index2].upgrade[index1].value;

		character.force_second = character.force_second - actual_bonus + next_bonus;
	}
	// Percent of strength gained
	else if (amelioration[character.page_amelio][index2].upgrade[index1].results == 'percent_strength')
	{
		for (var i = 0; i < amelioration[character.page_amelio].length; i++ )
		{
			amelioration[character.page_amelio][i].value = ((100 + amelioration[character.page_amelio][index2].upgrade[index1].value)*amelioration[character.page_amelio][i].value)/100;
		}
		character.force_second = (character.force_second*(100 + amelioration[character.page_amelio][index2].upgrade[index1].value))/100;
	}
	// Percent of fame gained
	else if (amelioration[character.page_amelio][index2].upgrade[index1].results == 'percent_fame')
	{
		for (var i = 0; i < amelioration[character.page_amelio].length; i++ )
		{
			amelioration[character.page_amelio][i].value = ((100 + amelioration[character.page_amelio][index2].upgrade[index1].value)*amelioration[character.page_amelio][i].value)/100;
		}
		character.fame_second = (character.fame_second*(100 + amelioration[character.page_amelio][index2].upgrade[index1].value))/100;
	}
	// add fame
	else if (amelioration[character.page_amelio][index2].upgrade[index1].results == 'add_fame')
	{
		character.fame = character.fame + amelioration[character.page_amelio][index2].upgrade[index1].value;
	}
	//multiplication fame (double effect)
	else if (amelioration[character.page_amelio][index2].upgrade[index1].results == 'multiplication_fame')
	{
		var actual_bonus = amelioration[character.page_amelio][index2].value * amelioration[character.page_amelio][index2].level;
		var next_bonus   = actual_bonus * amelioration[character.page_amelio][index2].upgrade[index1].value;

		amelioration[character.page_amelio][index2].value = amelioration[character.page_amelio][index2].value * amelioration[character.page_amelio][index2].upgrade[index1].value;

		character.fame_second = character.fame_second - actual_bonus + next_bonus;
	}
	if (amelioration[character.page_amelio][index2].upgrade[index1].again == false)
	{
		amelioration[character.page_amelio][index2].upgrade[index1].bought = true;

		var change = document.querySelector('.amelioration ul li.index-'+index2+' .upgrades .index-'+index1);
		change.classList.add('already-bought');
	}
}

/*
 * Notifications
 */

//Sync the score every second
setInterval(function () {

	var amelioration_string = JSON.stringify(amelioration);

	localStorage.setItem('force', character.force);
	localStorage.setItem('amelioration', amelioration_string);
	localStorage.setItem('force_second', character.force_second);
	localStorage.setItem('fame', character.fame);
	localStorage.setItem('fame_second', character.fame_second);
	localStorage.setItem('fame_level', character.fame_level);
	localStorage.setItem('click_value', character.click_value);
	document.title = convert_number(character.force) + ' Gym-Workout-Clicker';
}, 1000);

//Increase the fame and strength per second
setInterval(function () {

	character.fame = parseFloat(character.fame) + character.fame_second;
	character.force = parseFloat(character.force) + character.force_second;
	change_score_value();
}, 100)

/*******************

Notifications

********************/

//check and display if there is any notification to display
function check_notif () {

	requestAnimationFrame(check_notif);

	if (character.force != 0)
		notif.first.style.display = 'none';
}

/*
 * Interface interactions
 */

//Choose your gym level
index.gym_choose_button.addEventListener('click', function () {
	
	if (index.gym_choose.classList.contains('open'))
	{
		index.gym_choose.classList.add('close');
		index.gym_choose.classList.remove('open');
	}
	else if (index.gym_choose.classList.contains('close'))
	{
		index.gym_choose.classList.add('open');
		index.gym_choose.classList.remove('close');
	}
});

//Change the gym background
function change_gym () {

	for (var i = 0; i < index.gym_list_all.length; i++)
	{
		index.gym_list_all[i].addEventListener('click', function () {
			var data_index = this.getAttribute('data-index');
			index.click_area.style.background = 'url(assets/img/decor_'+ data_index +'.jpg)';
			index.click_area.style.backgroundSize = '100% auto';
			index.click_area.style.backgroundPosition = 'center';
		});
	}
}

//On the landing section make text appear
setTimeout(function () {
	index.landing.classList.add('beginning');
}, 300);

//Make the description panel appear and fill on hover
function panel_appear () {

	//Desciption on ameliorations
	for (var i = 0; i < amelioration[character.page_amelio].length; i++)
	{
		//for the ameliorations
		var button = index.container.querySelector('.amelioration .buy-button.index-'+ i);

		button.addEventListener('mouseover', function () {

			var button_coord = this.getBoundingClientRect(),
			    index1 		 = this.getAttribute('data-index'),
				description  = amelioration[character.page_amelio][index1].description,
				name         = amelioration[character.page_amelio][index1].name,
				value        = amelioration[character.page_amelio][index1].value,
				cout         = amelioration[character.page_amelio][index1].strength,
				results      = amelioration[character.page_amelio][index1].results,
				text         = '';

			var results_amelioration = amelioration[character.page_amelio][index1].results;

			if (results_amelioration == 'click_value')
				text = 'La valeur d\'un de vos click augmentera de ' + amelioration[character.page_amelio][index1].value;
			else if (results_amelioration == 'auto_click')
				text = 'Vous gagnerez ' + (amelioration[character.page_amelio][index1].value*10)  + ' points de force par seconde';
			else if (results_amelioration == 'auto_fame')
				text = 'Vous gagnerez ' + (amelioration[character.page_amelio][index1].value*10) + ' abonnés par seconde';
			else if (results_amelioration == 'auto_both')
				text = 'Vous gagnerez ' + (amelioration[character.page_amelio][index1].value*10) + ' abonnés et de points de force par seconde';
			else if (results_amelioration == 'percent_both')
				text = 'Vous gagnerez ' + amelioration[character.page_amelio][index1].value + '% d\'abonnés par seconde';

			index.panel_desc.innerHTML = '<p>Description : ' + description +'</p><p>'+ text +'</p><p>Cout : '+ cout +'</p>';

			index.panel_desc.style.transform = 'translateX(-400px) translateY('+ button_coord.top +'px)';
			index.panel_desc.style.opacity = 1;
			index.panel_desc.style.zIndex = 10;
		});

		//for the locked ameliorations
		var lock = index.container.querySelector('.amelioration .locked.index-'+i);

		lock.addEventListener('mouseover', function () {

			var button_coord = this.getBoundingClientRect(),
			    index1       = this.getAttribute('data-index'),
				fame_need    = amelioration[character.page_amelio][index1].fame;

			index.panel_desc.innerHTML = '<p>Pour débloquer cette amélioration il vous faut ' + fame_need + ' abonnés</p>';

			index.panel_desc.style.transform = 'translateX(-400px) translateY('+ button_coord.top +'px)';
			index.panel_desc.style.opacity = 1;
			index.panel_desc.style.zIndex = 10;
		});

		//description on upgrades
		if (character.page_amelio < 2)
		{
			for (var j = 0; j < 2; j++)
			{
	    		var up_button = index.container.querySelector('.amelioration li.index-'+ i +' .upgrades .upgrade.index-'+j);

	    		up_button.addEventListener('mouseover', function () {

	    		var button_coord = this.getBoundingClientRect();

		        index.panel_desc.style.transform = 'translateX(-400px) translateY('+ button_coord.top +'px)';

	    			index.panel_desc.style.opacity = 1;
	    			index.panel_desc.style.zIndex = 10;

	    			var index2 		= this.getAttribute('data-index'),
	    				index1 		= this.getAttribute('data-former'),
						description = amelioration[character.page_amelio][index1].upgrade[index2].description,
						name        = amelioration[character.page_amelio][index1].upgrade[index2].name,
						value       = amelioration[character.page_amelio][index1].upgrade[index2].value,
						cout        = amelioration[character.page_amelio][index1].upgrade[index2].strength,
						results     = amelioration[character.page_amelio][index1].upgrade[index2].results,
						text        = '';

					if (amelioration[character.page_amelio][index1].upgrade[index2].results == 'multiplication_fame')
					{
						text = 'Les abonnés gagnés grâce aux '+ amelioration[character.page_amelio][index1].name +' seront multipliés par ' + amelioration[character.page_amelio][index1].upgrade[index2].value;
					}
					else if (amelioration[character.page_amelio][index1].upgrade[index2].results == 'add_fame')
					{
						text = 'Votre nombre d\'abonnés augmentera de ' + amelioration[character.page_amelio][index1].upgrade[index2].value;
					}
					else if (amelioration[character.page_amelio][index1].upgrade[index2].results == 'percent_fame')
					{
						text = 'Tous vos abonnées augmenteront de ' + amelioration[character.page_amelio][index1].upgrade[index2].value + ' %';
					}
					else if (amelioration[character.page_amelio][index1].upgrade[index2].results == 'percent_strength')
					{
						text = 'Tous vos points de force augmenteront de ' + amelioration[character.page_amelio][index1].upgrade[index2].value + ' %';
					}
					else if (amelioration[character.page_amelio][index1].upgrade[index2].results == 'multiplication')
					{
						text = 'La force gagnée grâce aux '+ amelioration[character.page_amelio][index1].name +' sera multipliée par ' + amelioration[character.page_amelio][index1].upgrade[index2].value;
					}
					else if (amelioration[character.page_amelio][index1].upgrade[index2].results == 'multiplication_mouse')
					{
						text = ' La valeur d\'un de vos clicks augmentera de '+amelioration[character.page_amelio][index1].upgrade[index2].value+' ainsi que le nombre d\'abonnés gagné grace aux '+ amelioration[character.page_amelio][index1].name +' sera multiplié par ' + amelioration[character.page_amelio][index1].upgrade[index2].value;
					}

					index.panel_desc.innerHTML = '<p>Description : ' + description +'</p><p>'+text+'<p>Cout : '+ cout +'<p>';
	    		});

	    		up_button.addEventListener('mouseout', function () {
			
					index.panel_desc.style.opacity = 0;
					index.panel_desc.style.zIndex  = -10;
				});
			}
		}

		button.addEventListener('mouseout', function () {
			
			index.panel_desc.style.opacity = 0;
			index.panel_desc.style.zIndex  = -10;
		});

		lock.addEventListener('mouseout', function () {
			
			index.panel_desc.style.opacity = 0;
			index.panel_desc.style.zIndex  = -10;
		});
	}
}

//Hide the landing page on click on the play button
index.landing_button.addEventListener('click', function () {

	index.container.classList.add('hide_landing');
	index.container.classList.add('choose_character');
});

//Make the landing disapear if the player has already played
if (character.force != 0)
	index.container.classList.add('hide_landing');
/*
 * Starting functions
 */

//functions to launch on connexion of the player
display_ameliorations();
change_score_value();
check_size_character();
check_notif();
change_gym();
index.button_img.src="assets/img/animations/"+ character.sex +"-"+ character.fame_level +"_anim.gif";
index.click_area.style.backgroundSize = '100% auto';

/*
 * Responsiv
 */

//make the burger menu display the ameliorations
index.burger    = index.container.querySelector('.hamburger');
index.left_part = index.container.querySelector('.left-part');

index.burger.addEventListener('click', function () {

 	if (this.classList.contains('is-active'))
 	{
 		this.classList.remove('is-active');
 		index.left_part.classList.remove('burger');
 	}
 	else
 	{
 		this.classList.add('is-active');
 		index.left_part.classList.add('burger');
 	}
});