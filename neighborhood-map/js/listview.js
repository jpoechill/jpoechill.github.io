// Javascript for Cat Clicker App

var model = {
    app_name: ko.observable("App Title"),
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

        ko.applyBindings(model);
    },

    setup_jq: function () {
        // Toggle menu when clicked
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    },

    sayHello: function () {
        console.log("Hello, World!");
    },

    query: ko.observable(''),

      search: function(value) {
        // remove all the current beers, which removes them from the view
        viewModel.locations.removeAll();

        for(var x in locations) {
          if(locations[x].name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
            viewModel.locations.push(locations[x]);
          }
        }
    }
};

// ** -- viewModel // Model locations -- ** //

var locations = [
  {name:"Grand Lake Theater"},
  {name:"The Paramound"},
  {name:"AMC Baystreet 16"},
];

// ** -- viewModel -- ** //

var viewModel = {
      locations: ko.observableArray(locations),

      query: ko.observable(''),

      search: function(value) {
        // remove all the current beers, which removes them from the view
        viewModel.locations.removeAll();

        for(var x in locations) {
          if(locations[x].name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
            viewModel.locations.push(locations[x]);
          }
        }
      }
};

viewModel.query.subscribe(viewModel.search);
// ko.applyBindings(viewModel);

controller.init();