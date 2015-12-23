// Let's register Template7 helper so we can pass json string in links
Template7.registerHelper('json_stringify', function (context) {
    return JSON.stringify(context);
});
// Initialize your app
var myApp = new Framework7({					   
    animateNavBackIcon: true,
    // Enable templates auto precompilation
    precompileTemplates: true,
    // Enabled pages rendering using Template7
    template7Pages: true,
    // Specify Template7 data for pages
    template7Data: {
        // Will be applied for page with "projects.html" url
        /*'url:produk.html': {
            firstname: 'John',
            lastname: 'Doe',
            age: 32,
            position: 'CEO',
            company: 'Google',
            interests: ['swimming', 'music', 'JavaScript', 'iMac', 'iOS apps', 'sport'],
            projects: [
                {
                    title: 'Google',
                    description: 'Nice search engine'
                },
                {
                    title: 'YouTube',
                    description: 'Online video service'
                },
                {
                    title: 'Android',
                    description: 'Mobile operating system'
                }
            ]
        },*/		
		'url:pengantar.html': {
            pengantar: [
                {
                    nm_dpn: 'Zikran',
                    nm_blkng: 'B. Yakala',
					id: 'ID00001',
                    gambar: 'img/zikran.jpg'
                },
                {
                    nm_dpn: 'Laode',
                    nm_blkng: 'Alfian',
					id: 'ID00002',
                    gambar: 'img/iwan.jpg'
                },
                {
                    nm_dpn: 'Fajar',
                    nm_blkng: 'A. Nugraha',
					id: 'ID00003',
                    gambar: 'img/Fajar.jpg'
                }
            ]
        },
        // Will be applied for page with data-page="contacts"
        /*'page:contacts': {
            tel: '+1 (222) 333-44-55',
            email: 'john@doe.com',
            country: 'USA',
            city: 'San Francisco',
            zip: '12345',
            street: 'Awesome st'
        },*/
		
		//Detail Produk
		produk: [	
			{
				jenis: 'Sayuran Organik',
				nm_produk: 'Tomat',
				nm_gmbr:'img/tomat.jpg'
			},
			{
				jenis: 'Daging',
				nm_produk: 'Daging Ayam',
				nm_gmbr:'img/daging.jpg'
			},
		],
		
        // Pesan
        pesan: [
            {
                waktu: '22-12-2015 15:07:19',
                power: 152,
                speed: 280,
                weight: 1400,
                color: 'black',
                year: 2012,
                description: ''
            },
            {
                waktu: '22-12-2015 15:12:12',
                power: 152,
                speed: 260,
                weight: 1600,
                color: 'white',
                year: 2013,
                description: ''
            },
            {
                waktu: '22-12-2015 15:18:06',
                power: 480,
                speed: 320,
                weight: 1200,
                color: 'red',
                year: 2014,
                description: ''
            },
        ],

        // Just plain data object that we can pass for other pages using data-contextName attribute
        cars: [
            {
                vendor: 'Volkswagen',
                model: 'Passat',
                power: 152,
                speed: 280,
                weight: 1400,
                color: 'black',
                year: 2012,
                description: ''
            },
            {
                vendor: 'Skoda',
                model: 'Superb',
                power: 152,
                speed: 260,
                weight: 1600,
                color: 'white',
                year: 2013,
                description: ''
            },
            {
                vendor: 'Ford',
                model: 'Mustang',
                power: 480,
                speed: 320,
                weight: 1200,
                color: 'red',
                year: 2014,
                description: ''
            },
        ],

        // Another plain data object, used in "about" link in data-contextName object 
        about: {
            name: 'John Doe',
            age: 32,
            position: 'CEO',
            company: 'Google',
            interests: ['swimming', 'music', 'JavaScript', 'iMac', 'iOS apps', 'sport']		
        }
    } 
});

// Export selectors engine
var $$ = Dom7; 
$$('.alert-text').on('click', function () {
    myApp.alert('Here goes alert text');
}); 
$$('.alert-text-title').on('click', function (produk) {
    myApp.alert('Merupakan bla bla bla', 'Sayuran Organik');
}); 
$$('.alert-text-title-callback').on('click', function () {
    myApp.alert('Here goes alert text', 'Custom Title!', function () {
        myApp.alert('Button clicked!')
    });
}); 
$$('.alert-text-callback').on('click', function () {
    myApp.alert('Here goes alert text', function () {
        myApp.alert('Button clicked!')
    });
});
$$('.create-popup').on('click', function () {
  var popupHTML = '<div class="popup">'+
                    '<div class="content-block">'+
                      '<p>Popup created dynamically.</p>'+
                      '<p><a href="#" class="close-popup">Close me</a></p>'+
                    '</div>'+
                  '</div>'
  myApp.popup(popupHTML);
});

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
});
