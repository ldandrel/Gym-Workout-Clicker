/*****************

Variables

******************/

var index 				 = {};
	index.container 	 = document.querySelector('body');
	index.button		 = index.container.querySelector('.click_button');
	index.force_display  = index.container.querySelector('.force_display');
	index.landing        = index.container.querySelector('.landing_screen')
	index.landing_button = index.container.querySelector('.play_button'); 

	var character 		= {};
	character.force = 0;
	character.fame  = 0; 

/******************

Character / score

******************/

character.force = localStorage.getItem('force');
if (character.force == '')
	character.force = 0;
else
	index.force_display.innerHTML = character.force;

//Change the value of the score
function change_score_value () {

	character.force++;
	index.force_display.innerHTML = character.force;
}
change_score_value ();

//Sync the score every second
setInterval(function () {

	localStorage.setItem('force', character.force);
}, 1000);

/********************

Interface interactions

********************/

index.button.addEventListener('click', change_score_value);

index.landing_button.addEventListener('click', function () {

	index.container.classList.add('hide_landing');
});

