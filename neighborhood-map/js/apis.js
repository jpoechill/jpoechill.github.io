// Javascript for Cat Clicker App

var clientid = '38e8ba69bfb04b029a7266db0192244f', // learn how to obtain it below
    userid = 1362124742, // User ID - get it in source HTML of your Instagram profile, use special services or look the next example :)
    num_photos = 4; // how much photos do you want to get

$.ajax({
    url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {client_id: clientid, count: num_photos},
    success: function(data){
        console.log(data);
        for( x in data.data ){
            $('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
            // data.data[x].images.thumbnail.url - URL of image 150х150
            // data.data[x].images.standard_resolution.url - URL of image 612х612
            // data.data[x].link - Instagram post URL
        }
    },
    error: function(data){
        console.log(data); // send the error notifications to console
    }
});