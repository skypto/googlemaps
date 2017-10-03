// create initMap to initialize....put all your code in it
function initMap() {


    function getCurrentLocation(){
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
                // console.log(position);
                //printPosition(position);


                var latLng = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                reverseGeocode(latLng, printPosition);
                // printPosition(position);
            });
        }
    }
    
    function reverseGeocode(latLng, display){
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({"location": latLng}, function(results, status){
            if (status === "OK"){
                display(results);
            }else {
                alert("Error");
                console.log(status);
            }
        })
    }
    // window.onload = function() {
    //     getCurrentLocation();
    // }
    
    
    // print the result of the longitude and latitude from the getCurrentLocation to an h2
    function printPosition(position){
        var location = document.getElementById("location");
        var h2 = document.createElement("h2");
        var innerText = position[0].formatted_address;
        h2.innerText = innerText;
        location.appendChild(h2);
        console.log(position)
        // var innerText = "Latitude: " + 
        // position.coords.latitude + 
        // " longitude: " +
        // position.coords.longitude;
        // h2.innerText = innerText;
        // location.appendChild(h2);
    }
    
    
    document.getElementById("locationButton").onclick = function(){
        getCurrentLocation();
    };

}