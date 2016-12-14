/*****************

Variables

******************/
var amelioration = localStorage.getItem('amelioration');
amelioration = JSON.parse(amelioration);

var amelioration_base = 
[
	[
		{
			'name'        : 'Haltères',
			'description' : '',
			'strength'	  : 15,
			'fame'        : 0,
			'value'		  : 1,
			'level'       : 0,
			'results'     : 'click_value',
			'icon'        : 'halteres.png',
			'again'       : true,
			'bought'      : false,
			'description' : "L'instrument de base de la musculation",
			'upgrade'     :
			[
				{
					'name'        : 'Matières',
					'description' : 'Changez les matériaux de vos haltères : plastique, bois, acier, fonte... Plus vous en achetez plus vous serez fort',
					'results'     : 'multiplication',
					'value'		  : 2, 	
					'strength'    : '100',
					'icon'        : 'upgrade.png',
					'again'       : true,
					'bought'      : false
				},
				{
					'name'        : 'Poids',
					'description' : 'Changez le poids de vos haltères. Plus en seront lourdes plus vous serez fort !',
					'results'     : 'multiplication',
					'value'		  : 4,
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
			'value'		  : 0.1,
			'level'       : 0,
			'results'     : 'auto_click',
			'icon'        : 'equipements.png',
			'again'       : true,
			'bought'      : false,
			'description' : "Il est peut etre temps d'améliorer ton matos",
			'upgrade'     :
			[
				{
					'name'        : 'Ceinture abdominale',
					'description' : 'Achetez une ceinture abdominale pour devenir plus fort !',
					'results'     : 'multiplication',
					'value'		  : 2,
					'strength'    : '1000',
					'icon'        : 'upgrade.png',
					'again'       : false,
					'bought'      : false
				},
				{
					'name'        : 'Bracelet connecté',
					'description' : 'Achetez un brancelet connecté pour être  !',
					'results'     : 'percent_strenght',
					'value'		  : 1,
					'strength'    : '1000000000',
					'icon'        : 'upgrade.png',
					'again'       : false,
					'bought'      : false,
				},
			]
		},
		{
			'name'        : 'Nutritionniste',
			'description' : '',
			'strength'	  : 1100,
			'fame'        : 0,
			'value'		  : 0.5,
			'level'       : 0,
			'results'     : 'auto_click',
			'icon'        : 'nutritionniste.png',
			'again'       : true,
			'bought'      : false,
			'upgrade'     :
			[
				{
					'name'        : 'Barre d\'énergie',
					'description' : 'Prenez une barre d\'énergie pour refaire le plein de force !',
					'results'     : 'percent',
					'value'		  : 1,
					'strength'    : '11000',
					'icon'        : 'upgrade.png',
					'again'       : true,
					'bought'      : false
				},
				{
					'name'        : 'Protéine',
					'description' : 'La protéine va vous aidez à augmenter votre force !',
					'results'     : 'multiplication',
					'value'		  : 2,
					'strength'    : '1000000000',
					'icon'        : 'upgrade.png',
					'again'       : false,
					'bought'      : false,
				},
			]
		},
		{
			'name'        : 'Coach',
			'description' : '',
			'strength'	  : 500,
			'fame'        : 0,
			'value'		  : 1,
			'level'       : 0,
			'results'     : 'auto_click',
			'icon'        : 'coach.png',
			'again'       : true,
			'bought'      : false,
			'upgrade'     :
			[
				{
					'name'        : 'Motivation',
					'description' : 'Le coach est votre meilleur allié pour boster votre motivation !',
					'results'     : 'percent',
					'value'		  : 1,
					'strength'    : '11000',
					'icon'        : 'upgrade.png',
					'again'       : true,
					'bought'      : false
				},
				{
					'name'        : 'Planning sommeil',
					'description' : 'Votre coach vous organisera un bon planning de sommeil pour être au meilleur de sa force !',
					'results'     : 'multiplication',
					'value'		  : 2, 
					'strength'    : '1000000000',
					'icon'        : 'upgrade.png',
					'again'       : false,
					'bought'      : false,

				},
			]
		},
		{
			'name'        : 'Kiné',
			'description' : '',
			'strength'	  : 2000,
			'fame'        : 0,
			'value'		  : 1,
			'level'       : 0,
			'results'     : 'click_value',
			'icon'        : 'kine.png',
			'again'       : true,
			'bought'      : false,
			'upgrade'     :
			[
				{
					'name'        : 'Massage',
					'description' : 'Prenez du bon temps avec votre kiné préféré !',
					'results'     : 'percent',
					'value'		  : 1,
					'strength'    : '11000',
					'icon'        : 'upgrade.png',
					'again'       : true,
					'bought'      : false
				},
				{
					'name'        : 'Huile',
					'description' : 'Profitez d\'une huile de qualité pour vos massages !',
					'results'     : 'multiplication',
					'value'		  : 2, 
					'strength'    : '1000000000',
					'icon'        : 'upgrade.png',
					'again'       : false,
					'bought'      : false,
				}
			]
		},
		{
			'name'        : 'Dopage',
			'description' : '',
			'strength'	  : 2000,
			'fame'        : 0,
			'value'		  : 1,
			'level'       : 0,
			'results'     : 'click_value',
			'icon'        : 'dopage.png',
			'again'       : true,
			'bought'      : false,
			'upgrade'     :
			[
				{
					'name'        : 'Stéroïde',
					'description' : 'Des stéroïdes pour décupler votre force !',
					'results'     : 'percent',
					'value'		  : 1,
					'strength'    : '11000',
					'icon'        : 'upgrade.png',
					'again'       : true,
					'bought'      : false
				},
				{
					'name'        : 'ультра задира наркотиков',
					'description' : 'Made in Russia. Attendez-vous à des surprises !',
					'results'     : 'multiplication',
					'value'		  : 2, 
					'strength'    : '1000000000',
					'icon'        : 'upgrade.png',
					'again'       : false,
					'bought'      : false,
				},
			]
		},
		{
			'name'        : 'Modification génétique',
			'description' : '',
			'strength'	  : 2000,
			'fame'        : 0,
			'value'		  : 1,
			'level'       : 0,
			'results'     : 'click_value',
			'icon'        : 'modification.png',
			'again'       : true,
			'bought'      : false,
			'upgrade'     :
			[
				{
					'name'        : 'Boost ADN',
					'description' : 'Modifier votre ADN pour booster votre force !',
					'results'     : 'percent',
					'value'		  : 1,
					'strength'    : '11000',
					'icon'        : 'upgrade.png',
					'again'       : true,
					'bought'      : false
				},
				{
					'name'        : 'Clonage',
					'description' : 'Kage Bunshin no Jutsu pour 2 fois de plaisir',
					'results'     : 'multiplication',
					'value'		  : 2, 
					'strength'    : '1000000000',
					'icon'        : 'upgrade.png',
					'again'       : false,
					'bought'      : false,

				},
			]
		},
	]
];

if (!amelioration)
{
	amelioration = {};
	amelioration = amelioration_base;
}