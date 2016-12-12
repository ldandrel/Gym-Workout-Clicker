var character 		= {};
	character.force = 0;
	character.fame  = 0; 

	character.force = localStorage.getItem('force');
	if (character.force == '')
		character.force = 0;

	console.log(character.force);

var index 				= {};
	index.container 	= document.querySelector('body');
	index.button		= index.container.querySelector('.click');
	index.force_display = index.container.querySelector('.force_display')

index.button.addEventListener('click', change_score_value)

function change_score_value () {

	character.force++;
	index.force_display.innerHTML = character.force;
}

change_score_value ();

setInterval(function () {

	localStorage.setItem('force', character.force);
	console.log(character.force);
}, 1000);