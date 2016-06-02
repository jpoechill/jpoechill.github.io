// Javascript for Cat Clicker App
var model = {
    app_name: ko.observable("Po's Movie Theaters"),
    sorted: ko.observable(0),
    locations: ko.observableArray([
        {
            name: "Grand Lake Theatre",
            venue_id: "4a3304acf964a520f19a1fe3",
            photo: null,
            description: "Beautiful theater with decent movie selection - free popcorn on weekdays!",
            address: null,
            phonenumber: null,
            url: null,
            twitter: null,
            checkins: null,
            long: 37.811539,
            lat: -122.247356
        },
        {
            name: "Piedmont Theatre",
            venue_id: "49da4162f964a520655e1fe3",
            photo: null,
            description: "Reclining with enough room for people to get by without you budging.",
            address: null,
            phonenumber: null,
            url: null,
            twitter: null,
            checkins: null,
            long: 37.827362,
            lat: -122.250927
        },
        {
            name: "The New Parkway Theater",
            venue_id: "4f2c9d97e4b010c5f4f9ec08",
            photo: null,
            description: "Fun place to go, grab a snack, and enjoy a comfortable movie experience.",
            address: null,
            phonenumber: null,
            url: null,
            twitter: null,
            checkins: null,
            long: 37.813960,
            lat: -122.267457
        },
        {
            name: "AMC Bay Street 16",
            venue_id: "4a333748f964a520199b1fe3",
            photo: null,
            description: "Very clean and organized lobby, includes bar separate of candy and popcorn area.",
            address: null,
            phonenumber: null,
            url: null,
            twitter: null,
            checkins: null,
            long: 37.833407,
            lat: -122.291631
        },
        {
            name: "The Paramount Theatre",
            venue_id: "",
            photo: null,
            description: "Elaborate art deco architecture, good occasional history tour of it.",
            address: null,
            phonenumber: null,
            url: null,
            twitter: null,
            checkins: null,
            long: 37.809874,
            lat: -122.268523
        },
        {
            name: "The Palace Theatre",
            venue_id: "53eaa629498e04e719f8043e",
            photo: null,
            description: "Large venue with a pretty distinct interior styling. Street parking is a bit sketchy though.",
            address: null,
            phonenumber: null,
            url: null,
            twitter: null,
            checkins: null,
            long: 37.784373,
            lat: -122.236023
        }
    ])
};

// ** -- OCTOPUS -- ** //
var controller = {
    init: function () {
        this.setup_jq();
        // this.sayHello();

        // model = ko.observableArray()
        ko.applyBindings(model);
    },

    setup_jq: function () {
        /*Menu-toggle*/
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    },

    update_Locations_info: function(index, new_attr) {
        // Clone/duplicate objects
        var local = jQuery.extend(true, {}, model.locations()[index]);
        var partial_object = jQuery.extend(true, {}, new_attr);

        // Set up keys to be replaced
        var keys = [];
        for (i in partial_object) {
            keys.push(i);
        }

        // Sort through standing object, and replace var per matching key
        for (i in local) {
            for (var t = 0; t <= keys.length; t++){
                // If match found
                if (i == keys[t]) {
                    // Replace key with var
                    local[i] = partial_object[keys[t]];
                }
            }
        }

        console.log("I made it!");
        // Make change

        model.locations.replace(model.locations()[index], local);
        // model.app_name("Ooga Booga");
    },

    sortItems_byname: function (){
        // Sort by name (alphabetical)
        objects_sorted = model.locations().sort(
            function(a, b){
            var nameA = a.name.toLowerCase();
            var nameB = b.name.toLowerCase();

            console.log("Sorting: " + model.sorted());

            if (nameA < nameB) {//sort string ascending
                // model.sorted(1);
                return -1;
            }
            if (nameA > nameB) {
                return 1;
                return 0; //default return value (no sorting)
            }
        });

        // Check if sorted, and reverse if so
        if (model.sorted() == 0) {
            console.log(model.sorted());
            model.sorted(1);
            model.locations(objects_sorted);
        } else if (model.sorted() == 1) {
            console.log(model.sorted());
            model.sorted(0);
            model.locations(objects_sorted.reverse());
        }
    },

    sayHello: function (){
        console.log("Hello, World!");
    },

    generateMarkers: function (n, map){
        contentString = $('<div><div><span><h4>' +
        model.locations()[n].name + '</h4><img src="' +
        model.locations()[n].photo + '" width=\"100\"" height=\"0\""></h4><br /><strong>Description:</strong> ' +
        model.locations()[n].description + '</span><br /><p><strong>Address:</strong> ' +
        model.locations()[n].address + "<br /><strong>Phone Number:</strong> " +
        model.locations()[n].phonenumber + "<br /><strong>Homepage:</strong> " +
        model.locations()[n].url + "<br /><strong>Checkins:</strong> " +
        // model.locations()[n].twitter + "<br />Checkins: " +
        model.locations()[n].checkins +
        "</p></div></div>");

        //Create an infoWindow
        infoWindow = new google.maps.InfoWindow({content: contentString[0]});

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(model.locations()[n].long, model.locations()[n].lat),
            map: map,
            info: contentString[0]
        });
        //set the content of infoWindow
        infoWindow.setContent( marker.info );

        //add click event listener to marker which will open infoWindow
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent(this.info);
            infoWindow.open(map, this);
        });
    },

    secondAjaxcall: function (i, v_id) {
            // Ajax call for venue Venue Info
        var self = this;

        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.809874, lng: -122.268523},
          zoom: 13,
        });

        (function(key){
            $.ajax({
              type: "GET",
              dataType: "jsonp",
              url: "https://api.foursquare.com/v2/venues/" + v_id + "?oauth_token=X0ZIFSKLDPONPOQ3EMQLQFZDNYM1IMOAYUMWFDMXHE1ZCIVQ&v=20160529",
              success: function(data) {
                // console.log("I made it!");

                // console.log(data.response.venue.name);
                // console.log(data.response.venue.contact.formattedPhone);
                // console.log(data.response.venue.location.formattedAddress[0] + " " + data.response.venue.location.formattedAddress[1]);
                // console.log(data.response.venue.stats.checkinsCount);
                // console.log(data.response.venue.url);
                // console.log("@" + data.response.venue.contact.twitter);


                var ven_name = data.response.venue.name;
                var ven_phone = data.response.venue.contact.formattedPhone;
                var ven_address = data.response.venue.location.formattedAddress[0] + " " + data.response.venue.location.formattedAddress[1];
                var ven_url = data.response.venue.url;
                var ven_twitter = "@" + data.response.venue.contact.twitter;
                var ven_checkins = data.response.venue.stats.checkinsCount;

                // console.log(data.response.venue.photos.groups[0].items[0].prefix);
                var photo_url = data.response.venue.photos.groups[0].items[0].prefix + "240x240" + data.response.venue.photos.groups[0].items[0].suffix;

                var repl_object = {
                    name: ven_name,
                    photo: photo_url,
                    address: ven_address,
                    phonenumber: ven_phone,
                    url: data.response.venue.url,
                    twitter: ven_twitter,
                    checkins: ven_checkins,
                };

                console.log(repl_object);
                // console.log(key);
                self.update_Locations_info(key, repl_object);
                // controller.sayHello();

                self.generateMarkers(key, map);
              }
            });
        })(i);
    },

    initMap: function () {
        var map;
        var infowindow = [];
        var self = this;

        // Generate markers
        for (var i = 0; i < model.locations().length; i++) {
            var this_venue_id;

            // Ajax call for venue ID
            (function(key){
                $.ajax({
                    type: "GET",
                    dataType: "jsonp",
                    // data: model.locations[i],
                    url: "https://api.foursquare.com/v2/venues/search?ll=" + model.locations()[key].long + "," + model.locations()[key].lat + "&oauth_token=X0ZIFSKLDPONPOQ3EMQLQFZDNYM1IMOAYUMWFDMXHE1ZCIVQ&v=20160529",
                    success: function(data) {
                        this_venue_id = data.response.venues[0].id;
                        // model.locations()[key].venue_id = this_venue_id;
                        // console.log(this_venue_id);
                        // console.log(model.locations[key].name);
                        // console.log("Name: " model.locations()[key].name + ", Long: " + model.locations()[key].long + ", " + ", Lat: " + model.locations()[key].lat);

                        // console.log("Venue Name: " + data.response.venues[0].name);
                        // console.log("Longitude: " +  model.locations()[key].long + " Latitude: " + model.locations()[key].lat);
                        // console.log("ID: " + this_venue_id);

                        self.update_Locations_info(key, {venue_id: this_venue_id});

                        // console.log(model.locations()[key].venue_id);

                        self.secondAjaxcall(key, this_venue_id);

                    }
                });
            })(i);
        }
    }
};


// ** -- VIEW -- ** //

// var view1 = {
//     init: function () {
//         this.render();
//     },

//     render: function () {

//     }
// };

// make it go!

controller.init();