var index 				 	          = {};
	index.container 	 	          = document.querySelector('body');
	index.click_area				  = index.container.querySelector('.click-area');
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
	index.panel_desc            	  = document.querySelector('.mouse-hover-description');
	index.amelioration_panels		  = index.container.querySelectorAll('.panel');
	index.fame_level_display		  = index.container.querySelector('.fame_level span');
	index.xp_bar					  = index.container.querySelector('.progress-xp-bar');
	index.gym_choose				  = index.container.querySelector('.gym-choose');
	index.gym_choose_button 		  = index.container.querySelector('.gym-choose-button');
	index.gym_list			 		  = index.gym_choose.querySelector('.gym-list');
	index.gym_list_all			 	  = index.gym_choose.querySelectorAll('.gym-list li');
	index.sex_choose				  = index.container.querySelectorAll('.choose-character .half-character');

var character 		  	   = {};
	character.force    	   = 0;
	character.sex          = 'male';
	character.force_second = 0;
	character.fame   	   = 0;
	character.fame_second  = 0;
	character.click_value  = 1;
	character.page_amelio  = 0;
	character.fame_level   = 0;
	character.level_value  = [1000, 10000, 100000, 1000000, 10000000]; 

var notif       = {};
	notif.first = index.container.querySelector('.first-click-notif');

/*******************

Options

*******************/

index.sex_choose[0].addEventListener('click', function () {


});

index.sex_choose[1].addEventListener('click', function () {


});


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
	character.fame_level   = 0;
	character.level_value  = [1000, 10000, 100000]; 
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

//Get fame_level
character.fame_level = localStorage.getItem('fame_level');
if (isNaN(character.fame_level))
	character.fame_level = 0;
else
{
	character.fame_level = parseInt(character.fame_level);
	index.fame_level_display.innerHTML = character.fame_level;
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

//Convert number (million, milliard, billion...)
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

//Change the value of the score
function change_score_value () {

	index.force_display.innerHTML        = convert_number(character.force);
	index.force_second_display.innerHTML = convert_number(character.force_second * 10);
	index.fame_display.innerHTML         = convert_number(character.fame);
	index.fame_second_display.innerHTML  = convert_number(character.fame_second * 10);
	index.click_value_display.innerHTML  = convert_number(character.click_value);
	index.fame_level_display.innerHTML   = convert_number(character.fame_level);

	var ratio = character.fame/character.level_value[character.fame_level];
	index.xp_bar.style.transform = 'translateX(0%) skew(-30deg) scaleX('+ (ratio * 0.75) +')';

	if (ratio >= 1)
		character.fame_level++;

	setTimeout(check_upgrade_available, 1000);
}
change_score_value ();

function check_upgrade_available () {

	if (character.page_amelio < 2)
	{
		for (var i = 0; i < amelioration[character.page_amelio].length; i++)
		{
			if (amelioration[character.page_amelio][i].upgrade[0].strength < character.force)
			{
				var upgrade = document.querySelector('li.index-'+ i +' .upgrades .index-0');
				upgrade.style.background = 'url(assets/img/badges/argent.svg)';
			} else
			{
				var upgrade = document.querySelector('li.index-'+ i +' .upgrades .index-0');
				upgrade.style.background = 'url(assets/img/badges/argent_lock.svg)';
			}

			if (amelioration[character.page_amelio][i].upgrade[1].strength < character.force)
			{
				var upgrade = document.querySelector('li.index-'+ i +' .upgrades .index-1');
				upgrade.style.background = 'url(assets/img/badges/or.svg)';
			} else
			{
				var upgrade = document.querySelector('li.index-'+ i +' .upgrades .index-1');
				upgrade.style.background = 'url(assets/img/badges/or_lock.svg)';
			}
		}
	}
}

//Change the amelioration panels
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
		
}

// Change and apply the changes of an upgrade when bought
function change_upgrade_value (index1, index2) {

	if (amelioration[character.page_amelio][index2].upgrade[index1].results == 'multiplication')
	{
		var results_amelioration = amelioration[character.page_amelio][index2].results;

		if (results_amelioration == 'click_value')
			character.click_value = character.click_value * (amelioration[character.page_amelio][index2].upgrade[index1].value);
		else if (results_amelioration == 'auto_click')
			character.force_second = character.force_second * (amelioration[character.page_amelio][index2].upgrade[index1].value);

	}
	else if (amelioration[character.page_amelio][index2].upgrade[index1].results == 'percent_strenght')
	{
		console.log('percent_strength');
	}
	else if (amelioration[character.page_amelio][index2].upgrade[index1].results == 'percent')
	{
		console.log('percent');
	}

	if (amelioration[character.page_amelio][index2].upgrade[index1].again == false)
	{
		amelioration[character.page_amelio][index2].upgrade[index1].bought = true;

		console.log('.amelioration ul li.index-'+index2+' .upgrades .index-'+index1);

		var change = document.querySelector('.amelioration ul li.index-'+index2+' .upgrades .index-'+index1);
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
	localStorage.setItem('fame_level', character.fame_level);
	localStorage.setItem('click_value', character.click_value);
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
check_notif ();

/********************

Interface interactions

********************/

//Choose your level
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
change_gym();

index.click_area.style.backgroundSize = '100% auto';

//On the landing section make text appear
setTimeout(function () {
	index.landing.classList.add('beginning');
}, 300);


//on click on the click zone increment score
index.button.addEventListener('click', function() {
		character.force = parseFloat(character.force);
		character.force = parseFloat(character.force) + parseFloat(character.click_value);
		change_score_value();


	    var audio = new Audio('assets/audio/clic.mp3');
		audio.play();

		var image = index.button.querySelector('img');
	    image.src="assets/img/animations/woman-2_anim.gif";
});

//Make the description panel appear and fill on hover
function panel_appear () {

	for (var i = 0; i < amelioration[character.page_amelio].length; i++)
	{
		var button = index.container.querySelector('.amelioration .buy-button.index-'+ i);

		button.addEventListener('mouseover', function () {

		var button_coord = this.getBoundingClientRect();

		index.panel_desc.style.transform = 'translateX(-400px) translateY('+ button_coord.top +'px)';
			
			index.panel_desc.style.opacity = 1;
			index.panel_desc.style.zIndex = 10;

			var index1 		= this.getAttribute('data-index'),
				description = amelioration[character.page_amelio][index1].description,
				name        = amelioration[character.page_amelio][index1].name,
				value       = amelioration[character.page_amelio][index1].value,
				cout        = amelioration[character.page_amelio][index1].strength,
				results     = amelioration[character.page_amelio][index1].results;

			index.panel_desc.innerHTML = '<p>Description : ' + description +'</p><p> Chaque <strong>' + name +'</strong> vous donne <strong>+' + value + '</strong> dans votre <strong>' + results + '</strong><p>Cout : '+ cout +'<p>';
		});

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
						results     = amelioration[character.page_amelio][index1].upgrade[index2].results;

					index.panel_desc.innerHTML = '<p>Description : ' + description +'</p><p> Chaque <strong>' + name +'</strong> vous donne <strong>+' + value + '</strong> dans votre <strong>' + results + '</strong><p>Cout : '+ cout +'<p>';
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
	}
}

//Hide the landing page on click on the play button
index.landing_button.addEventListener('click', function () {

	index.container.classList.add('hide_landing');
	index.container.classList.add('choose_character');
});

if (character.force != 0)
	index.container.classList.add('hide_landing');

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
			url      = amelioration[character.page_amelio][i].icon,
			level    = amelioration[character.page_amelio][i].level;

		if (character.page_amelio < 2)
			index.amelioration_list.innerHTML += '<li data-index="' + i + '" class="index-' + i + ' ' + unlock + '"><div class="locked">Locked</div><img src="assets/img/amelioration/'+ url +'" alt="amelioration icon" class="illustration index-' + i + '"><p class="name index-' + i + '">' + name + '</p><button class="buy-button index-' + i + '" data-index="' + i + '"><span class="value">' + strength + '</span></button><span class="level">' + level + '</span><div class="upgrades"><div class="upgrade index-0 ' + bought + '" data-index="0" data-former="'+ i +'"></div><div class="upgrade index-1 ' + bought2 + '" data-index="1" data-former="'+ i +'"></div></li>';
		else
			index.amelioration_list.innerHTML += '<li data-index="' + i + '" class="index-' + i + ' ' + unlock + '"><div class="locked">Locked</div><img src="assets/img/amelioration/'+ url +'" alt="amelioration icon" class="illustration index-' + i + '"><p class="name index-' + i + '">' + name + '</p><button class="buy-button index-' + i + '" data-index="' + i + '"><span class="value">' + strength + '</span></button><span class="level">' + level + '</span></div></li>';
	}
	add_event_buy ();
	panel_appear();
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
				amelioration[character.page_amelio][index].strength = parseInt(Math.pow(price, 1.15));
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
}