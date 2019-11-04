window.onload = () => {
    setTimeout(function(){ document.getElementById('splash').style.display= "none";},2000)
    let method = 'dynamic';

    // if you want to statically add places, de-comment following line
    method = 'static';

    if (method === 'static') {
        // setTimeout is a temporary fix
        setTimeout(() => {
            let places = staticLoadPlaces();
            renderPlaces(places);
        }, 3000);
    }

    if (method !== 'static') {

        // first get current user location
        return navigator.geolocation.getCurrentPosition(function (position) {

            // than use it to load from remote APIs some places nearby
            dynamicLoadPlaces(position.coords)
                .then((places) => {
                    renderPlaces(places);
                })
        },
            (err) => console.error('Error in retrieving position', err),
            {
                enableHighAccuracy: true,
                maximumAge: 0,
                timeout: 27000,
            }
        );
    }
};

function staticLoadPlaces() {
    return [
//         {
//             name: "OAT",
//             location: {
//                 lat: 28.5441564, // add here latitude if using static data
//                 lng: 77.2722511, // add here longitude if using static data
//             },
//             src: 'map-marker.png'
//         },
//         {
//             name: 'Another place name',
//             location: {
//                 lat: 28.544474,
//                 lng: 77.271769,
//             }
//         },
        {
            name: "Library Building",
            location: {
                lat: 28.543991,  // add here latitude if using static data
                lng: 77.272383, // add here longitude if using static data
            },
            src: './Banners/1x/Library.png'

        },
        {
            name: "New Academic Building",
            location: {
                lat: 28.544113,  // add here latitude if using static data
                lng: 77.271691, // add here longitude if using static data
            },
            src: './Banners/1x/R&D.png'

        },
        {
            name: "Old Academic Building",
            location: {
                lat: 28.544591,  // add here latitude if using static data
                lng: 77.272213, // add here longitude if using static data
            },
            src: './Banners/1x/OldAcad.png'

        },
        {
            name: "Students Center",
            location: {
                lat: 28.546038, // add here latitude if using static data
                lng: 77.273007, // add here longitude if using static data
            },
            src: './Banners/1x/StudentCentre.png'

        },
        {
            name: "Lecture Hall Complex",
            location: {
                lat: 28.545361,  // add here latitude if using static data
                lng: 77.272877, // add here longitude if using static data
            },
            src: './Banners/1x/LectureHC.png'

        },
        {
            name: "Old Boys Hostel",
            location: {
                lat: 28.547387,  // add here latitude if using static data
                lng: 77.273946, // add here longitude if using static data
            },
            src: './Banners/1x/oldBoysHostel.png'

        },
        {
            name: "New Boys Hostel",
            location: {
                lat: 28.547902,  // add here latitude if using static data
                lng: 77.274062, // add here longitude if using static data
            },
            src: './Banners/1x/NewBoysHostel.png'

        },
        {
            name: "Girls Hostel",
            location: {
                lat: 28.546988,  // add here latitude if using static data
                lng: 77.273763, // add here longitude if using static data
            },
            src: './Banners/1x/GirlsHostel.png'
        },
        {
            name: "Sports Complex",
            location: {
                lat: 28.547073,   // add here latitude if using static data
                lng: 77.272436 // add here longitude if using static data
            },
            src: './Banners/1x/SportsBlock.png'
        }

// Old Boys Hostel  28.547387, 77.273946
// New Boys Hostel  28.547902, 77.274062
// Girls Hostel 28.546988, 77.273763
    ];
}

// getting places from REST APIs
// function dynamicLoadPlaces(position) {
//     let params = {
//         radius: 300,    // search places not farther than this value (in meters)
//         clientId: 'HZIJGI4COHQ4AI45QXKCDFJWFJ1SFHYDFCCWKPIJDWHLVQVZ',
//         clientSecret: '',
//         version: '20300101',    // foursquare versioning, required but unuseful for this demo
//     };

//     // CORS Proxy to avoid CORS problems
//     let corsProxy = 'https://cors-anywhere.herokuapp.com/';

//     // Foursquare API
//     let endpoint = `${corsProxy}https://api.foursquare.com/v2/venues/search?intent=checkin
//         &ll=${position.latitude},${position.longitude}
//         &radius=${params.radius}
//         &client_id=${params.clientId}
//         &client_secret=${params.clientSecret}
//         &limit=15
//         &v=${params.version}`;
//     return fetch(endpoint)
//         .then((res) => {
//             return res.json()
//                 .then((resp) => {
//                     return resp.response.venues;
//                 })
//         })
//         .catch((err) => {
//             console.error('Error with places API', err);
//         })
// };

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');
    var path='./Banners/1x'
    var markers=['./Banners/1x/Library.png', './Banners/1x/Library.png']

    places.forEach((place) => {
        const latitude = place.location.lat;
        const longitude = place.location.lng;

        // add place icon
        const icon = document.createElement('a-image');
        icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
        icon.setAttribute('name', place.name);
        icon.setAttribute('src', place.src);

        // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
        icon.setAttribute('scale', '20, 20');

        icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));

        // const clickListener = function (ev) {
        //     ev.stopPropagation();
        //     ev.preventDefault();

        //     const name = ev.target.getAttribute('name');

        //     const el = ev.detail.intersection && ev.detail.intersection.object.el;

        //     if (el && el === ev.target) {
        //         const label = document.createElement('span');
        //         const container = document.createElement('div');
        //         container.setAttribute('id', 'place-label');
        //         label.innerText = name;
        //         container.appendChild(label);
        //         document.body.appendChild(container);

        //         setTimeout(() => {
        //             container.parentElement.removeChild(container);
        //         }, 150000);
        //     }
        // };

        icon.addEventListener('click', function(){
            alert("you clicked me");
        });

        scene.appendChild(icon);
    });
}

