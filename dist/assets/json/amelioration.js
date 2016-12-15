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
		    'description' : 'L\'instrument de base pour devenir un vrai champion de la musculation',
			'strength'	  : 50,
			'fame'        : 0,
			'value'		  : 0.1,
			'level'       : 0,
			'results'     : 'auto_click',
			'icon'        : 'halteres.svg',
			'again'       : true,
			'bought'      : false,
			'upgrade'     :
			[
				{
					'name'        : 'Matières',
					'description' : 'Changez les matériaux de vos haltères : plastique, bois, acier, fonte... Plus vous en achetez plus vous serez fort',
					'results'     : 'multiplication_mouse',
					'value'		  : 2, 	
					'strength'    : '250',
					'icon'        : 'upgrade.svg',
					'again'       : false,
					'bought'      : false
				},
				{
					'name'        : 'Poids',
					'description' : 'Changez le poids de vos haltères. Plus en seront lourdes plus vous serez fort !',
					'results'     : 'multiplication_mouse',
					'value'		  : 2,
					'strength'    : '1000',
					'icon'        : 'upgrade.svg',
					'again'       : false,
					'bought'      : false,
				},
			]
		},
		{
			'name'        : 'Équipements',
			'description' : 'Il est peut etre temps d\'améliorer ton matos',
			'description' : '',
			'strength'	  : 500,
			'fame'        : 0,
			'value'		  : 1,
			'level'       : 0,
			'results'     : 'auto_click',
			'icon'        : 'equipements.svg',
			'again'       : true,
			'bought'      : false,
			'upgrade'     :
			[
				{
					'name'        : 'Ceinture abdominale',
					'description' : 'Achetez une ceinture abdominale pour devenir plus fort !',
					'results'     : 'multiplication',
					'value'		  : 2,
					'strength'    : '5000',
					'icon'        : 'upgrade.svg',
					'again'       : false,
					'bought'      : false
				},
				{
					'name'        : 'Bracelet connecté',
					'description' : 'Achetez un brancelet connecté pour être plus organisé dans vos séances !',
					'results'     : 'percent_strenght',
					'value'		  : 1,
					'strength'    : '20000',
					'icon'        : 'upgrade.svg',
					'again'       : false,
					'bought'      : false,
				},
			]
		},
		{
			'name'        : 'Coach',
			'description' : 'Emploie un coach pour t\'aider à te motiver et devenir plus fort',
			'strength'	  : 1200,
			'fame'        : 1000,
			'value'		  : 10,
			'level'       : 0,
			'results'     : 'auto_click',
			'icon'        : 'coach.svg',
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
					'icon'        : 'upgrade.svg',
					'again'       : true,
					'bought'      : false
				},
				{
					'name'        : 'Planning sommeil',
					'description' : 'Votre coach vous organisera un bon planning de sommeil pour être au meilleur de sa force !',
					'results'     : 'multiplication',
					'value'		  : 2, 
					'strength'    : '1000000000',
					'icon'        : 'upgrade.svg',
					'again'       : false,
					'bought'      : false,

				},
			]
		},
		{
			'name'        : 'Nutritionniste',
			'description' : 'Suis un nutritionniste pour adopter le bon régime alimentaire',
			'strength'	  : 11000,
			'fame'        : 1000,
			'value'		  : 100,
			'level'       : 0,
			'results'     : 'auto_click',
			'icon'        : 'nutritionniste.svg',
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
					'icon'        : 'upgrade.svg',
					'again'       : true,
					'bought'      : false
				},
				{
					'name'        : 'Protéine',
					'description' : 'La protéine va vous aidez à augmenter votre force !',
					'results'     : 'multiplication',
					'value'		  : 2,
					'strength'    : '1000000000',
					'icon'        : 'upgrade.svg',
					'again'       : false,
					'bought'      : false,
				},
			]
		},
		{
			'name'        : 'Kiné',
			'description' : 'Vois un kiné pour réparer et repartir pour être plus fort',
			'strength'	  : 2000,
			'fame'        : 1000,
			'value'		  : 1,
			'level'       : 0,
			'results'     : 'click_value',
			'icon'        : 'kine.svg',
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
					'icon'        : 'upgrade.svg',
					'again'       : true,
					'bought'      : false
				},
				{
					'name'        : 'Huile',
					'description' : 'Profitez d\'une huile de qualité pour vos massages !',
					'results'     : 'multiplication',
					'value'		  : 2, 
					'strength'    : '1000000000',
					'icon'        : 'upgrade.svg',
					'again'       : false,
					'bought'      : false,
				}
			]
		},
		{
			'name'        : 'Dopage',
			'description' : 'Dopez-vous pour être plus fort, mais attention au conséquence !',
			'strength'	  : 2000,
			'fame'        : 1000,
			'value'		  : 1,
			'level'       : 0,
			'results'     : 'click_value',
			'icon'        : 'dopage.svg',
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
					'icon'        : 'upgrade.svg',
					'again'       : true,
					'bought'      : false
				},
				{
					'name'        : 'ультра задира наркотиков',
					'description' : 'Made in Russia. Attendez-vous à des surprises !',
					'results'     : 'multiplication',
					'value'		  : 2, 
					'strength'    : '1000000000',
					'icon'        : 'upgrade.svg',
					'again'       : false,
					'bought'      : false,
				},
			]
		},
		{
			'name'        : 'Modification génétique',
			'description' : 'Ayez recours à la dernière technologie de modification génétique',
			'strength'	  : 2000,
			'fame'        : 1000,
			'value'		  : 1,
			'level'       : 0,
			'results'     : 'click_value',
			'icon'        : 'modification.svg',
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
					'icon'        : 'upgrade.svg',
					'again'       : true,
					'bought'      : false
				},
				{
					'name'        : 'Clonage',
					'description' : 'Kage Bunshin no Jutsu pour 2 fois de plaisir',
					'results'     : 'multiplication',
					'value'		  : 2, 
					'strength'    : '1000000000',
					'icon'        : 'upgrade.svg',
					'again'       : false,
					'bought'      : false,

				},
			]
		},
	],
	[
		{
			'name'        : 'Réseau social',
			'description' : 'Inscrivez-vous sur les réseaux sociaux pour vous faire connaitre',
			'strength'	  : 15,
			'fame'        : 0,
			'value'		  : 0.1,
			'level'       : 0,
			'results'     : 'auto_fame',
			'icon'        : 'reseau.svg',
			'again'       : true,
			'bought'      : false,
			'upgrade'     :
			[
				{
					'name'        : 'Tweeter',
					'description' : 'C\'est bien connu, tweeter rend célébre !',
					'results'     : 'add_fame',
					'value'		  : 10000, 	
					'strength'    : '10000',
					'icon'        : 'upgrade.svg',
					'again'       : true,
					'bought'      : false
				},
				{
					'name'        : 'Community Manager',
					'description' : 'Engagez un Community Manager pour s\'occuper de votre popularité',
					'results'     : 'multiplication',
					'value'		  : 2,
					'strength'    : '30000',
					'icon'        : 'upgrade.svg',
					'again'       : false,
					'bought'      : false,

				},
			]
		},
		{
			'name'        : 'Stars',
			'description' : 'Rencontrer des stars pour devenir comme eux',
			'strength'	  : 100,
			'fame'        : 1000,
			'value'		  : 0.1,
			'level'       : 0,
			'results'     : 'auto_fame',
			'icon'        : 'star.svg',
			'again'       : true,
			'bought'      : false,
			'upgrade'     :
			[
				{
					'name'        : 'Sortir avec une star',
					'description' : 'Pamela Anderson, Johny Deep, Kate Moss... ils seront tous à vos pieds et vous ferons gagner de la popularité',
					'results'     : 'multiplication',
					'value'		  : 2,
					'strength'    : '1000',
					'icon'        : 'upgrade.svg',
					'again'       : true,
					'bought'      : false
				},
				{
					'name'        : 'Parler avec des stars',
					'description' : 'Devenez ami avec des stars pour être plus populaire!',
					'results'     : 'percent_fame',
					'value'		  : 1,
					'strength'    : '1000000000',
					'icon'        : 'upgrade.svg',
					'again'       : false,
					'bought'      : false,

				},
			]
		},
		{
			'name'        : 'Esthétique',
			'description' : 'Recourir à la chirurgie esthétique permet d\'être plus beau et donc plus célébre',
			'strength'	  : 500,
			'fame'        : 1000,
			'value'		  : 1,
			'level'       : 0,
			'results'     : 'auto_fame',
			'icon'        : 'esthetique.svg',
			'again'       : true,
			'bought'      : false,
			'upgrade'     :
			[
				{
					'name'        : 'Chirurgie',
					'description' : 'Une chirurgies esthétique fait toujours parler de soi !',
					'results'     : 'percent',
					'value'		  : 1,
					'strength'    : '11000',
					'icon'        : 'upgrade.svg',
					'again'       : false,
					'bought'      : false
				},
				{
					'name'        : 'UV',
					'description' : 'Faites des UV pour être plus beau et plus célébre',
					'results'     : 'multiplication',
					'value'		  : 2, 
					'strength'    : '1000000000',
					'icon'        : 'upgrade.svg',
					'again'       : true,
					'bought'      : false,

				},
			]
		},
		{
			'name'        : 'Devenez célébre',
			'description' : 'Certains chose vous ferons devenir célébre',
			'strength'	  : 10000,
			'fame'        : 10000,
			'value'		  : 1,
			'level'       : 0,
			'results'     : 'auto_fame',
			'icon'        : 'celebre.svg',
			'again'       : true,
			'bought'      : false,
			'upgrade'     :
			[
				{
					'name'        : 'Carrière politique',
					'description' : 'Faites comme Trump, devenez président vous en serez célébre',
					'results'     : 'multiplication',
					'value'		  : 2,
					'strength'    : '11000',
					'icon'        : 'upgrade.svg',
					'again'       : false,
					'bought'      : false
				},
				{
					'name'        : 'Télératité',
					'description' : 'Faites comme Nabilla, devenez himbo vous en serez célébre',
					'results'     : 'multiplication',
					'value'		  : 2,
					'strength'    : '1000000000',
					'icon'        : 'upgrade.svg',
					'again'       : false,
					'bought'      : false,
				},
			]
		},
		{
			'name'        : 'Concours',
			'description' : 'Participez à des concours ou des conventions',
			'strength'	  : 10000,
			'fame'        : 10000,
			'value'		  : 1,
			'level'       : 0,
			'results'     : 'auto_fame',
			'icon'        : 'concours.svg',
			'again'       : true,
			'bought'      : false,
			'upgrade'     :
			[
				{
					'name'        : 'Convention',
					'description' : 'Participez à des conventions pour être plus connu',
					'results'     : 'percent',
					'value'		  : 1,
					'strength'    : '11000',
					'icon'        : 'upgrade.svg',
					'again'       : true,
					'bought'      : false
				},
				{
					'name'        : 'Compétition',
					'description' : 'Les compétitions vous ferons connaitre et vous rendrons célébre',
					'results'     : 'multiplication',
					'value'		  : 2, 
					'strength'    : '1000000000',
					'icon'        : 'upgrade.svg',
					'again'       : false,
					'bought'      : false,
				}
			]
		},
		{
			'name'        : 'Médias',
			'description' : 'Les médias accroîtront vos followers',
			'strength'	  : 10000,
			'fame'        : 10000,
			'value'		  : 1,
			'level'       : 0,
			'results'     : 'auto_fame',
			'icon'        : 'media.svg',
			'again'       : true,
			'bought'      : false,
			'upgrade'     :
			[
				{
					'name'        : 'Scandale & Buzz',
					'description' : 'Créer des scandales et faites buzzer votre popularité !',
					'results'     : 'percent',
					'value'		  : 1,
					'strength'    : '11000',
					'icon'        : 'upgrade.svg',
					'again'       : true,
					'bought'      : false
				},
				{
					'name'        : 'VLOG',
					'description' : 'Vos VLOG nuls vous rapporterons de la popularité !',
					'results'     : 'multiplication',
					'value'		  : 2, 
					'strength'    : '1000000000',
					'icon'        : 'upgrade.svg',
					'again'       : false,
					'bought'      : false,
				},
			]
		},
		{
			'name'        : 'Poser nu',
			'description' : 'C\'est bien, les gens qui posent nu deviennent célébre',
			'strength'	  : 10000,
			'fame'        : 10000,
			'value'		  : 1,
			'level'       : 0,
			'results'     : 'auto_fame',
			'icon'        : 'modification.svg',
			'again'       : true,
			'bought'      : false,
			'upgrade'     :
			[
				{
					'name'        : 'Épilation',
					'description' : 'Pour poser nu mieux vaut être épiler !',
					'results'     : 'percent',
					'value'		  : 1,
					'strength'    : '11000',
					'icon'        : 'upgrade.svg',
					'again'       : true,
					'bought'      : false
				},
				{
					'name'        : '5cm...',
					'description' : 'Contrairement à ce qu\'on dit la taille est importante',
					'results'     : 'multiplication',
					'value'		  : 2, 
					'strength'    : '1000000000',
					'icon'        : 'upgrade.svg',
					'again'       : false,
					'bought'      : false,

				},
			]
		},
	],
	[
		{
			'name'        : 'Combat de boxe',
			'description' : 'Combattre les plus grands boxeurs accroît votre célébrité et votre force ',
			'strength'	  : 15,
			'fame'        : 10000,
			'value'		  : 1,
			'level'       : 0,
			'results'     : 'percent',
			'icon'        : 'boxe.svg',
			'again'       : true,
			'bought'      : false
		},
		{
			'name'        : 'Youtube',
			'description' : 'Soyez un Tibo Inshape en puissance pour accroître votre célébrité et votre force!',
			'strength'	  : 100,
			'fame'        : 10000,
			'value'		  : 0.1,
			'level'       : 0,
			'results'     : 'auto_fame',
			'icon'        : 'youtube.svg',
			'again'       : true,
			'bought'      : false
		},
		{
			'name'        : 'Tape une stars',
			'description' : 'Tape une stars te rends célébre et accroît ta force',
			'strength'	  : 2000,
			'fame'        : 10000,
			'value'		  : 1,
			'level'       : 0,
			'results'     : 'click_value',
			'icon'        : 'world.svg',
			'again'       : true,
			'bought'      : false,
		},
		{
			'name'        : 'Espace',
			'description' : 'Allez vous entrainer dans l\'espace pour être plus fort et plus populaire',
			'strength'	  : 500,
			'fame'        : 10000,
			'value'		  : 1,
			'level'       : 0,
			'results'     : 'auto_click',
			'icon'        : 'space.svg',
			'again'       : true,
			'bought'      : false
		},
		{
			'name'        : 'Hulk !',
			'description' : 'Devenez Hulk',
			'strength'	  : 1100,
			'fame'        : 10000,
			'value'		  : 0.5,
			'level'       : 0,
			'results'     : 'auto_click',
			'icon'        : 'hulk.svg',
			'again'       : true,
			'bought'      : false,			
		},
		{
			'name'        : 'Super Héros',
			'description' : 'Devenez un super héros et intégrer les avengers !',
			'strength'	  : 10000,
			'fame'        : 0,
			'value'		  : 1,
			'level'       : 0,
			'results'     : 'click_value',
			'icon'        : 'heros.svg',
			'again'       : true,
			'bought'      : false,
		},
		{
			'name'        : 'Sauver le monde',
			'description' : 'Sauvez le monde avec les Avengers',
			'strength'	  : 2000,
			'fame'        : 10000,
			'value'		  : 1,
			'level'       : 0,
			'results'     : 'click_value',
			'icon'        : 'world.svg',
			'again'       : true,
			'bought'      : false,
		},
	]
];

if (!amelioration)
{
	amelioration = {};
	amelioration = amelioration_base;
}