// Javascript for Cat Clicker App

var model = {
    app_name: ko.observable("List View APP Title"),
    sorted: ko.observable(0),
    locations: ko.observableArray([
        {
            name: "Grand Lake Theatre",
            venue_id: 6,
            description: null,
            long: 37.811539,
            lat: -122.247356
        },
        {
            name: "Piedmont Theatre",
            venue_id: 5,
            description: "Reclining with enough room for people to get by without you budging.",
            long: 37.827362,
            lat: -122.250927
        },
        {
            name: "The New Parkway Theater",
            venue_id: 4,
            description: "Fun place to go, grab a snack, and enjoy a comfortable movie experience.",
            long: 37.813960,
            lat: -122.267457
        },
        {
            name: "AMC Bay Street 16",
            venue_id: 2,
            description: "Very clean and organized lobby, includes bar separate of candy and popcorn area.",
            long: 37.833407,
            lat: -122.291631
        },
        {
            name: "The Paramount Theatre",
            venue_id: 3,
            description: "Elaborate art deco architecture, good occasional history tour of it.",
            long: 37.809874,
            lat: -122.268523
        },
        {
            name: "The Palace Theatre",
            venue_id: 1,
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

    setup_jq: function () {
        // Toggle menu when clicked
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
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

    sortItems_byNum: function () {
        // Sort by value (numeric)
        // model.locations(model.locations().sort(function(a, b){ return a.venue_id-b.venue_id }));
    },

    sayHello: function () {
        console.log("Hello, World!");
    }
};

controller.init();