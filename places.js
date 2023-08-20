window.onload = () => {
    alert("finished loading!")
    setTimeout(function()
        { document.getElementById('splash').style.display= "none"; 
        // modal2.style.display = "block";
    },2000)
    
    document.getElementById("alert").style.backgroundColor="#F4DB05";
    document.getElementById("alert").style.display="block";
    document.getElementById("alert").innerHTML="Make sure your GPS is turned on!";
    setTimeout(function()
    { 
        document.getElementById("alert").innerHTML="";
        document.getElementById("alert").style.display="none";
        document.getElementById("onbModal").style.display = "block";

    },3000);
    
    let method = 'dynamic';

    // if you want to statically add places, de-comment following line
    method = 'static';

    if (method === 'static') {
        // setTimeout is a temporary fix
        setTimeout(() => {
            let places = staticLoadPlaces();
            renderPlaces(places);
        }, 1000);
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

function distance(lat1, lon1, lat2, lon2, unit) {
        var radlat1 = Math.PI * lat1/180
        var radlat2 = Math.PI * lat2/180
        var radlon1 = Math.PI * lon1/180
        var radlon2 = Math.PI * lon2/180
        var theta = lon1-lon2
        var radtheta = Math.PI * theta/180
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist)
        dist = dist * 180/Math.PI
        dist = dist * 60 * 1.1515
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        return Math.round(dist*100000)/100
        // return Math.round(dist*100)/100
}

function staticLoadPlaces() {
    return [
        // {
        //     name: "Library Block",
        //     location: {
        //         lat: 28.543991,  // add here latitude if using static data
        //         lng: 77.272383, // add here longitude if using static data
        //     },
        //     src: './Banners/1x/Library.png',
        //     obj: 'library.obj',
        //     mtl: 'library.mtl'

        // },
        // {
        //     name: "Research & Development Block",
        //     location: {
        //         lat: 28.544113,  // add here latitude if using static data
        //         lng: 77.271691, // add here longitude if using static data
        //     },
        //     src: './Banners/1x/R&D.png',
        //     obj: 'RnD.obj',
        //     mtl: 'RnD.mtl'

        // },
        // {
        //     name: "Academic Block",
        //     location: {
        //         lat: 28.544591,  // add here latitude if using static data
        //         lng: 77.272213, // add here longitude if using static data
        //     },
        //     src: './Banners/1x/OldAcad.png',
        //     obj: 'oldacad.obj',
        //     mtl: 'oldacad.mtl'

        // },
        // {
        //     name: "Students Center Block",
        //     location: {
        //         lat: 28.546038, // add here latitude if using static data
        //         lng: 77.273007, // add here longitude if using static data
        //     },
        //     src: './Banners/1x/StudentCentre.png',
        //     obj: 'studentcenter.obj',
        //     mtl: 'studentcenter.mtl'

        // },
        // {
        //     name: "Lecture Hall Complex",
        //     location: {
        //         lat: 28.545361,  // add here latitude if using static data
        //         lng: 77.272877, // add here longitude if using static data
        //     },
        //     src: './Banners/1x/LectureHC.png',
        //     obj: 'lhc.obj',
        //     mtl: 'lhc.mtl'

        // },
        // {
        //     name: "Old Boys Hostel",
        //     location: {
        //         lat: 28.547387,  // add here latitude if using static data
        //         lng: 77.273946, // add here longitude if using static data
        //     },
        //     src: './Banners/1x/oldBoysHostel.png',
        //     obj: 'oldboyshostel.obj',
        //     mtl: 'oldboyshostel.mtl'

        // },
        // {
        //     name: "New Boys Hostel H1",
        //     location: {
        //         lat: 28.547902,  // add here latitude if using static data
        //         lng: 77.274062, // add here longitude if using static data
        //     },
        //     src: './Banners/1x/NewBoysHostel.png',
        //     obj: 'newhostelh1.obj',
        //     mtl: 'newhostelh1.mtl'

        // },
        // {
        //     name: "New Boys Hostel H2",
        //     location: {
        //         lat: 28.547902,  // add here latitude if using static data
        //         lng: 77.274062, // add here longitude if using static data
        //     },
        //     src: './Banners/1x/NewBoysHostel.png',
        //     obj: 'newhostelh2.obj',
        //     mtl: 'newhostelh2.mtl'

        // },
        // {
        //     name: "Girls Hostel",
        //     location: {
        //         lat: 28.546988,  // add here latitude if using static data
        //         lng: 77.273763, // add here longitude if using static data
        //     },
        //     src: './Banners/1x/GirlsHostel.png',
        //     obj: 'girlshostel.obj',
        //     mtl: 'girlshostel.mtl'
        // },
        // {
        //     name: "Sports Complex",
        //     location: {
        //         lat: 28.547073,   // add here latitude if using static data
        //         lng: 77.272436 // add here longitude if using static data
        //     },
        //     src: './Banners/1x/SportsBlock.png',
        //     obj: 'sportscomplex.obj',
        //     mtl: 'sportscomplex.mtl'
        // }
        {
            name: "DTU Entrance",
            location: { 
                lat: 28.74535,   // add here latitude if using static data
                lng: 77.1164123 // add here longitude if using static data
            },
            src: './Banners/1x/SportsBlock.png',
            obj: 'sportscomplex.obj',
            mtl: 'sportscomplex.mtl'
        },
        {
            name: "Civil",
            location: { 
                lat: 28.749096589837436,   // add here latitude if using static data
                lng: 77.11796210970621 // add here longitude if using static data
            },
            src: './Banners/1x/SportsBlock.png',
            obj: 'sportscomplex.obj',
            mtl: 'sportscomplex.mtl'
        },
        {
            name: "Library",
            location: {
                lat: 28.750792711898587,   // add here latitude if using static data
                lng: 77.11659479806312 // add here longitude if using static data
            },
            src: './Banners/1x/Library.png',
            obj: 'library.obj',
            mtl: 'library.mtl'        }
    
    ];
};


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

// --------------------------------------------------------- about a place modal box
var abtPlaceModal = document.getElementById("abtPlaceModal");
var abtBtn = document.getElementById("helpBtn");
var abtSpan = document.getElementsByClassName("abtClose")[0];
var abtCloseButton = document.getElementsByClassName("abtClose")[1];
// When the user clicks the button, open the modal 
// for that check out event listenter added below 

// When the user clicks on <span> (x), close the modal
abtSpan.onclick = function() {
  abtPlaceModal.style.display = "none";
}

abtCloseButton.onclick = function() {
  abtPlaceModal.style.display = "none";
  document.getElementById("modal2").style.display="none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == abtPlaceModal) {
    abtPlaceModal.style.display = "none";
  }
}

// -------------------------------------------- printing geoloction
// var options = {
//   enableHighAccuracy: true,
//   maximumAge: 20000
// };

// function success(pos) {
//   var crd = pos.coords;

//   alert("kcdjaoj")
//   console.log('Your current position is:');
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// }

// function handle_error(err) {
//   if (err.code == 1) {
//     // user said no!
//   }
// }
// --------------------------------------------
function renderPlaces(places) {
    let scene = document.querySelector('a-scene');
    let options = document.querySelector('#options');

    places.forEach((place) => {
        const latitude = place.location.lat;
        const longitude = place.location.lng;

        // var current=navigator.geolocation.getCurrentPosition(success, handle_error, options);
        // console.log(current);
        // var current_lat=current.coords.latitude
        // var current_lon=current.coords.longitude

        // add place icon
        // const icon = document.createElement('a-image');
        const icon = document.createElement('a-entity');
        // icon.setAttribute('rotation',"0 0 0");
        var ap="obj: url(./3d/".concat(place.obj).concat("); mtl: url(./3d/").concat(place.mtl).concat(")");
        // alert(ap);
        icon.setAttribute('obj-model',ap);
        icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
        icon.setAttribute('name', place.name);
        // icon.setAttribute('src', place.src);

        // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
        icon.setAttribute('scale', '5, 5');
        // icon.setAttribute('scale', '5, 5');

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
            alert("you clicked" + place.name);
            document.getElementById("placeName").innerHTML=place.name;
            var inst = setInterval(navigator.geolocation.getCurrentPosition(showPosition), 5000); //update lat long every 5 sec
            function showPosition(position){
                document.getElementById("latLong").innerHTML = "Latitude: " + position.coords.latitude +"<br>Longitude: " + position.coords.longitude;
                document.getElementById("dist").innerHTML = "Distance: " + distance(position.coords.latitude, position.coords.longitude, place.location.lat, place.location.lng) + "m away from you." ;
                document.getElementById("dist2").innerHTML = place.name + " is " + distance(position.coords.latitude, position.coords.longitude, place.location.lat, place.location.lng) + "m away from you." ; 
                // alert("Latitude: " + position.coords.latitude +"<br>Longitude: " + position.coords.longitude)
            };
            abtPlaceModal.style.display = "block";
        });

        scene.appendChild(icon);

        const option = document.createElement('div');
        option.setAttribute('id', 'option')
        option.innerHTML= place.name;

        option.addEventListener('click', function(){
            alert("you clicked" + place.name);
            document.getElementById("placeName").innerHTML=place.name;
            var inst = setInterval(navigator.geolocation.getCurrentPosition(showPosition), 5000); //update lat long every 5 sec
            function showPosition(position){

                document.getElementById("latLong").innerHTML = "Latitude: " + position.coords.latitude +"<br>Longitude: " + position.coords.longitude;
                document.getElementById("dist").innerHTML = "Distance: " + distance(position.coords.latitude, position.coords.longitude, place.location.lat, place.location.lng) + "m away from you." ;
                document.getElementById("dist2").innerHTML = place.name + " is " + distance(position.coords.latitude, position.coords.longitude, place.location.lat, place.location.lng) + "m away from you." ; 
                // alert("Latitude: " + position.coords.latitude +"<br>Longitude: " + position.coords.longitude)
            };
            abtPlaceModal.style.display = "block";
            
        });

        options.appendChild(option);

        
    });
}
function display_c(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
var x = new Date()
document.getElementById('ct').innerHTML = x;
display_c();
 }

// document.getElementById("alert").style.display="none";
// document.getElementById("alert").innerHTML="Distance might not be accurate.";
// setTimeout(function()
// { 
//     document.getElementById("alert").innerHTML="";
//     document.getElementById("alert").style.display="none";
// },2000);

function turnOffDist2Div()
{
        document.getElementById("dist2").innerHTML="";
        document.getElementById('exploreAlert').innerHTML="Explore your way!"; 
        setTimeout(function()
        { 
            document.getElementById('exploreAlert').innerHTML="";
            // modal2.style.display = "block";
        },2000)

}

function changeToFilled(ele){

    // document.getElementById(ele.innerHTML).className="material-icons-outlined"

}
// function alertMsg(msg,color){
//     document.getElementById("alert").style.color="yellow";
//     document.getElementById("alert").style.display="none";
//     document.getElementById("alert").innerHTML="Hey";
//     setTimeout(function()
//     { 
//         document.getElementById("alert").innerHTML="";
//         document.getElementById("alert").style.display="none";
//     },2000);
// }
