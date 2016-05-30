// Javascript for Cat Clicker App

var model = {
    app_name: "Po's Movie Theaters",
    locations: [
        {
            name: "Grand Lake Theatre",
            venue_id: "",
            description: "Ooga booga",
            long: 37.811539,
            lat: -122.247356
        },
        {
            name: "Piedmont Theatre",
            venue_id: "",
            description: "Ooga booga",
            long: 37.827362,
            lat: -122.250927
        },
        {
            name: "The New Parkway Theater",
            venue_id: "",
            description: "Ooga booga",
            long: 37.813960,
            lat: -122.267457
        },
        {
            name: "AMC Bay Street 16",
            venue_id: "",
            description: "Ooga booga",
            long: 37.833407,
            lat: -122.291631
        },
        {
            name: "The Paramount Theatre",
            venue_id: "",
            description: "Ooga booga",
            long: 37.809874,
            lat: -122.268523
        },
        {
            name: "The Palace Theatre",
            venue_id: "",
            description: "Ooga booga",
            long: 37.784373,
            lat: -122.236023
        }
    ]
};

// ** -- OCTOPUS -- ** //

var controller = {
    init: function () {
        this.setup_jq();

    },

    setup_jq: function () {
        /*Menu-toggle*/
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    },

    initMap: function () {
        var map;

        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.809874, lng: -122.268523},
          zoom: 13,
          // mapTypeId: google.maps.MapTypeId.SATELLITE
        });
        // Generate markers
        for (var i = 0; i < model.locations.length; i++) {
            console.log(model.locations[i].name);

            marker = new google.maps.Marker({
                position: new google.maps.LatLng(model.locations[i].long, model.locations[i].lat),
                map: map
            });

            var contentString = $('<div class="marker-info-win">' +
            '<div class="marker-inner-win"><span class="info-content">' +
            '<h4 class="marker-heading">' + model.locations[i].name + '</h4>'+
            model.locations[i].description + '</span>' + '</div></div>');

            //Create an infoWindow
            var infowindow = new google.maps.InfoWindow();

            //set the content of infoWindow
            infowindow.setContent(contentString[0]);

            //add click event listener to marker which will open infoWindow
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, this); // click on marker opens info window
            });
        }
    }
};

// ** -- VIEW -- ** //

var view1 = {
    init: function () {
        this.render();
    },

    render: function () {

    }
};

var view2 = {
    init: function () {
        this.render();
    },

    render: function () {

    }
};

// make it go!

controller.init();

function initMap() {

    var this_venue_id = '123';
    var map;

    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.809874, lng: -122.268523},
      zoom: 13,
      // mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    // Generate markers
    for (var i = 0; i < model.locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(model.locations[i].long, model.locations[i].lat),
            map: map
        });

        // // Ajax call for venue ID
        // $.ajax({
        //   type: "GET",
        //   dataType: "jsonp",
        //   url: "https://api.foursquare.com/v2/venues/explore?ll=" + locations[i].long + "," + locations[i].lat + "&oauth_token=X0ZIFSKLDPONPOQ3EMQLQFZDNYM1IMOAYUMWFDMXHE1ZCIVQ&v=20160529",
        //   success: function(data) {
        //     this_venue_id = data;
        //     console.log(this_venue_id);
        //   }
        // });

        // var aJaxInfo = {};

        // // Ajax call for venue Venue Info
        // $.ajax({
        //   type: "GET",
        //   dataType: "jsonp",
        //   url: "https://api.foursquare.com/v2/venues/" + this_venue_id + "?oauth_token=X0ZIFSKLDPONPOQ3EMQLQFZDNYM1IMOAYUMWFDMXHE1ZCIVQ&v=20160529",
        //   success: function(data) {
        //     // aJaxInfo.name = data.response.groups;
        //     console.log(this_venue_id);
        //     // aJaxInfo.location = data.response.groups.venue.location.formattedAddress;
        //     // aJaxInfo.check_ins = data.response.groups.venue.stats.checkinsCount;
        //     // aJaxInfo.photos = "";
        //     // aJaxInfo.description = "";
        //   }
        // });

        //Content structure of info Window for the Markers
        var contentString = $('<div class="marker-info-win">' +
        '<div class="marker-inner-win"><span class="info-content">' +
        '<h4 class="marker-heading">' + model.locations[i].name + '</h4>'+
        model.locations[i].description + '</span>' + '</div></div>');

        //Create an infoWindow
        var infowindow = new google.maps.InfoWindow();

        //set the content of infoWindow
        infowindow.setContent(contentString[0]);

        //add click event listener to marker which will open infoWindow
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, this); // click on marker opens info window
        });
    }
}

ko.applyBindings(model);