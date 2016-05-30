// Javascript for Cat Clicker App

var model = {
    app_name1: "Po's Movie Theaters",
    // app_name: ko.observable("Po's Movie Theaters"),
    // my_observable_arr: ko.observableArray([{name: "Hello,"}]),
    app_name2: ko.observableArray([
        {
            firstname: "Joseph",
            lastname: "Smith"
        },
        {
            firstname: "Po",
            lastname: "Lojo"
        }
    ]),
    locations: ko.observableArray([
        {
            name: "Grand Lake Theatre",
            venue_id: "",
            description: "Beautiful theater with decent movie selection - free popcorn on weekdays!",
            long: 37.811539,
            lat: -122.247356
        },
        {
            name: "Piedmont Theatre",
            venue_id: "",
            description: "Reclining with enough room for people to get by without you budging.",
            long: 37.827362,
            lat: -122.250927
        },
        {
            name: "The New Parkway Theater",
            venue_id: "",
            description: "Fun place to go, grab a snack, and enjoy a comfortable movie experience.",
            long: 37.813960,
            lat: -122.267457
        },
        {
            name: "AMC Bay Street 16",
            venue_id: "",
            description: "Very clean and organized lobby, includes bar separate of candy and popcorn area.",
            long: 37.833407,
            lat: -122.291631
        },
        {
            name: "The Paramount Theatre",
            venue_id: "",
            description: "Elaborate art deco architecture, good occasional history tour of it.",
            long: 37.809874,
            lat: -122.268523
        },
        {
            name: "The Palace Theatre",
            venue_id: "",
            description: "Large venue with a pretty distinct interior styling. Street parking is a bit sketchy though.",
            long: 37.784373,
            lat: -122.236023
        }
    ])
};

// ** -- OCTOPUS -- ** //

var controller = {
    init: function () {
        this.setup_jq();

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

    update_locations_info: function(loc_index, item_inobject) {
        // For appname_2
        // app_name2: ko.observableArray([
        //     {
        //         firstname: "Joseph",
        //         lastname: "Smith"
        //     },
        //     {
        //         firstname: "Po",
        //         lastname: "Lojo"
        //     }
        // ])
        var index = loc_index;
        var temp_objectcopy = model.app_name2()[index];
        var to_bereplaced = item_inobject;

        var key_to_be_replaced = Object.keys(to_bereplaced)[0] // Firstname (in this object)

        console.log("Hello, World!");
        console.log(temp_objectcopy);
        // console.log(to_bereplaced); // {firstname: "Bird"}
        // console.log(to_bereplaced[Object.keys(to_bereplaced)[0]]);

        // console.log(Object.keys(to_bereplaced)[0]);
        // console.log(to_bereplaced.firstname);
        // console.log(key_to_be_replaced);
        // console.log(to_bereplaced[key_to_be_replaced]);

        for (i in temp_objectcopy) {
            if (i == key_to_be_replaced) { //
                // console.log("Match found for " + i);
                // console.log(temp_objectcopy[i]);
                // console.log("Changing...");
                temp_objectcopy[i] = to_bereplaced[key_to_be_replaced];
                // console.log("Change complete");
                break;
            }
        }
        console.log("Completed change");
        console.log(temp_objectcopy);

        // console.log("Completed for loop");

        // console.log(temp_objectcopy);
        // // for (i in temp_objectcopy) {
        // //     console.log (i)
        // //     console.log (temp_objectcopy[i])
        // // }

        // console.log("Changing again...");
        // model.app_name2.replace(model.app_name2()[index], temp_objectcopy);

        // console.log(model.app_name2()[index]);

        // console.log("Success");
        // console.log(to_bereplaced);

        // console.log(model.app_name2()[index].firstname);
        // console.log(model.app_name2()[index].lastname);

        // // console.log("Changing...");
        // // model.app_name2()[index].firstname = "Bird";
        // // model.app_name2()[index].lastname = "Word";

        // // console.log(model.app_name2()[index].firstname);
        // // console.log(model.app_name2()[index].lastname);

        // console.log(model.app_name2()[index].firstname);
    },

    initMap: function () {
        var map;
        var infowindow = [];

        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.809874, lng: -122.268523},
          zoom: 13,
          // mapTypeId: google.maps.MapTypeId.SATELLITE
        });

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

        // Generate markers
        for (var i = 0; i < model.locations().length; i++) {
            //Set up content string

            var this_venue_id;
            // var myData = i;
            // console.log(model.locations[i].name);

            // Ajax call for venue ID
            (function(key){
                $.ajax({
                    type: "GET",
                    dataType: "jsonp",
                    // data: model.locations[i],
                    url: "https://api.foursquare.com/v2/venues/explore?ll=" + model.locations()[i].long + "," + model.locations()[i].lat + "&oauth_token=X0ZIFSKLDPONPOQ3EMQLQFZDNYM1IMOAYUMWFDMXHE1ZCIVQ&v=20160529",
                    success: function(data) {
                        this_venue_id = data.response.groups[0].items[0].venue.id;
                        model.locations()[key].venue_id = this_venue_id;
                        // console.log(this_venue_id);
                        // console.log(model.locations[key].name);
                    }
                });
            })(i);

            // Return variable to view
            // model.locations[i].venue_id = this_venue_id;

            contentString = $('<div><div><span>' +
            '<h4>' + model.locations()[i].name + '</h4>'+
            model.locations()[i].description + '</span><br /><p>' +
            model.locations()[i].venue_id +
            '</p></div></div>');

            //Create an infoWindow
            infoWindow = new google.maps.InfoWindow({content: contentString[0]});

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(model.locations()[i].long, model.locations()[i].lat),
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
        }

        // console.log("Ooga booga");my_observable_arr
        // console.log(model.my_observable_arr()[0].name);
        // console.log(model.my_observable_arr()[1].name);

        // console.log("Changing...");

        // model.my_observable_arr()[0].name = "World!";
        // model.my_observable_arr()[1].name = "Hello, ";

        // console.log(model.my_observable_arr()[0].name);
        // console.log(model.my_observable_arr()[1].name);

        // console.log("Changing again...");

        this.update_locations_info(0, {firstname: "Bird"});

        // model.app_name("Bird");


        // model.my_observable_arr()[0].name = "World!";
        // model.my_observable_arr()[1].name = "Hello, ";

        // model.app_name1('New observable');
        // console.log(model.app_name1());
        // model.app_name = "Ooga booga";
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

// var view2 = {
//     init: function () {
//         this.render();
//     },

//     render: function () {

//     }
// };

// make it go!

controller.init();