/*****************

Variables

******************/
var amelioration = localStorage.getItem('amelioration');
amelioration = JSON.parse(amelioration);

if (!amelioration)
{
	amelioration =
	[
	{
		'name'    : 'Poids',
		'value'   : 50,
		'fame'    : 0,
		'level'   : 0,
		'upgrade' : [
		{
			'name'   : 'alter',
			'carac'  : 'force1',
			'icon'   : 'image-2.png',
			'again'  : false,
			'bought' : false
		},
		'name'    : 'Poids',
		'value'   : 50,
		'fame'    : 0,
		'level'   : 0,
		'upgrade' : [
		{
			'name'   : 'alter',
			'carac'  : 'force1',
			'icon'   : 'image-2.png',
			'again'  : false,
			'bought' : false
		},
		];
	},
	{
		'name'  : 'Get on social Medias',
		'value' : 100,
		'fame'  : 0,
		'level' : 0
	},
	{
		'name'  : 'Ceinture d\'abdos',
		'value' : 1000,
		'fame'  : 50,
		'level' : 0
	},
	{
		'name'  : 'Epilations',
		'value' : 1000,
		'fame'  : 50,
		'level' : 0
	},
	{
		'name'  : 'Conventions',
		'value' : 2000,
		'fame'  : 500,
		'level' : 0
	},
	];
}