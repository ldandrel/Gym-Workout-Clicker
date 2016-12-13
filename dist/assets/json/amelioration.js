/*****************

Variables

******************/
var amelioration = localStorage.getItem('amelioration');
amelioration = JSON.parse(amelioration);

if (!amelioration)
{
	amelioration.page_1 = 
	[
	{
		'name'        : 'Haltères',
		'description' : '',
		'strength'	  : 15,
		'fame'        : 0,
		'level'       : 0,
		'results'     : 'click_value',
		'icon'        : 'halteres.png',
		'again'       : true,
		'bought'      : false,
		'upgrade'     : [
		{
			'name'        : 'Matières',
			'description' : 'Changez les matériaux de vos haltères : plastique, bois, acier, fonte... Plus vous en achetez plus vous serez fort',
			'carac'       : '*2_halteres',
			'strength'    : '100',
			'icon'        : 'upgrade.png',
			'again'       : true,
			'bought'      : false
		},
		{
			'name'        : 'Poids',
			'description' : 'Changez le poids de vos haltères. Plus en seront lourdes plus vous serez fort !',
			'carac'       : '*4_halteres',
			'strength'    : '500',
			'icon'        : 'upgrade.png',
			'again'       : true,
			'bought'      : false,

		},
		]
	},
	{
		'name'        : 'Équipements',
		'description' : '',
		'strength'	  : 100,
		'fame'        : 0,
		'level'       : 0,
		'results'     : 'click_value',
		'icon'        : 'halteres.png',
		'again'       : true,
		'bought'      : false,
		'upgrade'     : [
		{
			'name'        : 'Ceinture abdominale',
			'description' : 'Achetez une ceinture abdominale pour devenir plus fort !',
			'carac'       : '*2_equipement',
			'strength'    : '1000',
			'icon'        : 'upgrade.png',
			'again'       : false,
			'bought'      : false
		},
		{
			'name'        : 'Bracelet connecté',
			'description' : 'Achetez un brancelet connecté pour être  !',
			'carac'       : '+1%_strenght',
			'strength'    : '1000000000',
			'icon'        : 'upgrade.png',
			'again'       : false,
			'bought'      : false,

		},
		]
	},	
	];
}