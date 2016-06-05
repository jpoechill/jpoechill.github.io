// Javascript for Cat Clicker App
var model = {
    id: 1,
    app_name: ko.observable("Po's Movie Theaters"),
    sorted: ko.observable(0),
    query: ko.observable(''),
    markers: [],
    locations: ko.observableArray([
        {
            name: "ABCDEF",
            id: 0,
            venue_id: "",
            marker: null,
            photo: null,
            description: "Beautiful theater with decent movie selection - free popcorn on weekdays!",
            address: null,
            phonenumber: "No phone",
            url: "No homepage",
            twitter: null,
            checkins: null,
            long: 37.811539,
            lat: -122.247356
        },
        {
            name: "BCDEF",
            id: 1,
            venue_id: "",
            marker: null,
            photo: null,
            description: "Reclining with enough room for people to get by without you budging.",
            address: null,
            phonenumber: "No phone",
            url: "No homepage",
            twitter: null,
            checkins: null,
            long: 37.827362,
            lat: -122.250927
        },
        {
            name: "CDEF",
            id: 2,
            venue_id: "",
            marker: null,
            photo: null,
            description: "Fun place to go, grab a snack, and enjoy a comfortable movie experience.",
            address: null,
            phonenumber: "No phone",
            url: "No homepage",
            twitter: null,
            checkins: null,
            long: 37.813960,
            lat: -122.267457
        },
        {
            name: "DEF",
            id: 3,
            venue_id: "",
            marker: null,
            photo: null,
            description: "Very clean and organized lobby, includes bar separate of candy and popcorn area.",
            address: null,
            phonenumber: "No phone",
            url: "No homepage",
            twitter: null,
            checkins: null,
            long: 37.833407,
            lat: -122.291631
        },
        {
            name: "EF",
            id: 4,
            venue_id: "",
            marker: null,
            photo: null,
            description: "Elaborate art deco architecture, good occasional history tour of it.",
            address: null,
            phonenumber: "No phone",
            url: "No homepage",
            twitter: null,
            checkins: null,
            long: 37.809874,
            lat: -122.268523
        },
        {
            name: "F",
            id: 5,
            venue_id: "",
            marker: null,
            photo: null,
            description: "Large venue with a pretty distinct interior styling. Street parking is a bit sketchy though.",
            address: null,
            phonenumber: "No phone",
            url: "No homepage",
            twitter: null,
            checkins: null,
            long: 37.784373,
            lat: -122.236023
        },
        {
            name: "G",
            id: 6,
            venue_id: "",
            marker: null,
            photo: null,
            description: "Theater complex with multiple screens featuring new release films, plush seating & concession stand.",
            address: null,
            phonenumber: "No phone",
            url: "No homepage",
            twitter: null,
            checkins: null,
            long: 37.796034,
            lat: -122.277372
        }
    ])
};

// ** -- OCTOPUS -- ** //
var controller = {
    init: function () {
        this.setup_jq();
        // this.sayHello();

        ko.applyBindings(model);
    },

    sayHello: function (){
        console.log("Hello, World" + "!");
        console.log(this.id);

        for (var i = 0; i < model.locations().length; i ++){
            if (i !== this.id){
                model.locations()[i].marker.setVisible(false);
            } else {
                model.locations()[i].marker.setVisible(true);
            }
        }

        google.maps.event.trigger(model.locations()[this.id].marker, 'click');
    },

    // search: function(value) {
    //     this = model.locations();

    //     // remove all the current beers, which removes them from the view
    //     this.locations.removeAll();

    //     for(var x in locations) {
    //       if(locations[x].name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
    //         viewModel.locations.push(locations[x]);
    //       }
    //     }
    // },

    fireAll: function (){

        for (var i = 0; i < model.locations().length; i ++) {
            google.maps.event.trigger(model.locations()[i].marker, 'click');
        }
    },

    search: function(value) {
        // remove all the current beers, which removes them from the view
        viewModel.beers.removeAll();

        for(var x in beers) {
          if(beers[x].name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
            viewModel.beers.push(beers[x]);
          }
        }
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

        // Make change
        model.locations.replace(model.locations()[index], local);
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

        // Check if already sorted, and reverse if so
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

    createContent_String: function (a, b, c, d, e, f, g){
        photo_with_image = "<img src=" + a +  ' width=\"26\" height=\"26\"> ';

        return contentString = $('<div><div><span><p class= "big"><h4 style="margin-top: 10px; margin-bottom: 0px;">' +
        b + "<br />" +
        photo_with_image +
        '<br /></h4><strong></p>Description:</strong> ' +
        c + '</span><br /><p><strong>Address:</strong> ' +
        d + "<br /><strong>Phone Number:</strong> " +
        e + "<br /><strong>Homepage:</strong> <a href='#'>" +
        f + "</a><br /><strong>Checkins:</strong> " +
        g + "</p></div></div>");

    },

    generateMarkers: function (n, map){
        var model_locs = model.locations()[n];

        contentString = controller.createContent_String(
            model_locs.photo, model_locs.name, model_locs.description,
            model_locs.address, model_locs.phonenumber, model_locs.url, model_locs.checkins
        );

        //Create an infoWindow
        infoWindow = new google.maps.InfoWindow({content: contentString[0]});

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(model.locations()[n].long, model.locations()[n].lat),
            animation: google.maps.Animation.DROP,
            map: map,
            info: contentString[0]
        });

        marker.addListener('click', toggleBounce);

        // set the content of infoWindow
        infoWindow.setContent(marker.info);

        function toggleBounce() {
            marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function () {
                marker.setAnimation(null);}, 700);
        }

        // add click event listener to marker which will open infoWindow
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent(this.info);
            infoWindow.open(map, this);
        });

        controller.update_Locations_info(n, {marker: marker});

        // model.markers.push(marker);
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
              error: function () {
                alert("There was an error receiving the API.");
              },
              success: function(data) {
                var ven_name = data.response.venue.name;
                var ven_phone = data.response.venue.contact.formattedPhone;
                var ven_address = data.response.venue.location.formattedAddress[0] + " " + data.response.venue.location.formattedAddress[1];
                var ven_url = data.response.venue.url;
                var ven_twitter = "@" + data.response.venue.contact.twitter;
                var ven_checkins = data.response.venue.stats.checkinsCount;

                var photo_url = []
                photo_url[0] = data.response.venue.photos.groups[0].items[0].prefix + "240x240" + data.response.venue.photos.groups[0].items[0].suffix;

                var new_photos = []
                new_photos.push(data.response.venue.photos.groups[0].items[0].prefix + "240x240" + data.response.venue.photos.groups[0].items[0].suffix);
                // new_photos.push(data.response.venue.photos.groups[0].items[1].prefix + "240x240" + data.response.venue.photos.groups[0].items[1].suffix);
                // new_photos.push(data.response.venue.photos.groups[0].items[2].prefix + "240x240" + data.response.venue.photos.groups[0].items[2].suffix);
                // new_photos.push(data.response.venue.photos.groups[0].items[3].prefix + "240x240" + data.response.venue.photos.groups[0].items[3].suffix);
                // new_photos.push(data.response.venue.photos.groups[0].items[4].prefix + "240x240" + data.response.venue.photos.groups[0].items[4].suffix);
                // new_photos.push(data.response.venue.photos.groups[0].items[5].prefix + "240x240" + data.response.venue.photos.groups[0].items[5].suffix);

                console.log("The new photos are this many: " + new_photos.length);

                // console.log(photo_url[1]);
                // photo_url[2] = data.response.venue.photos.groups[0].items[2].prefix + "240x240" + data.response.venue.photos.groups[0].items[2].suffix;
                // photo_url[3] = data.response.venue.photos.groups[0].items[3].prefix + "240x240" + data.response.venue.photos.groups[0].items[3].suffix;

                // Create object template
                var repl_object = {
                    name: ven_name,
                    photo: photo_url,
                    address: ven_address,
                    phonenumber: ven_phone,
                    url: data.response.venue.url,
                    twitter: ven_twitter,
                    checkins: ven_checkins,
                };

                // // console.log(key);
                self.update_Locations_info(key, repl_object);
                // controller.sayHello();

                // Create Markers
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
                    error: function () {
                        alert("There was an error receiving the API.");
                    },
                    success: function(data) {
                        // console.log(data);
                        this_venue_id = data.response.venues[0].id;

                        // Update item venue id
                        self.update_Locations_info(key, {venue_id: this_venue_id});

                        // Call API request for each venue details
                        self.secondAjaxcall(key, this_venue_id);
                    }
                });
            })(i);
        }
    }
};

// make it go!
controller.init();