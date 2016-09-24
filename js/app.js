// JS doc for Last.fm Last Played APP
// API Key for Last.fm: f75fa33bf6e6d5376902a6748a4ace69
// Test link: https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jpoechill&api_key=f75fa33bf6e6d5376902a6748a4ace69&format=json
function fetchLastPlayed () {
    var user = "jpoechill";
    var API_Key = "f75fa33bf6e6d5376902a6748a4ace69";
    var hash = {};

    $.ajax({
        cache: true,
        url: 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + user + '&api_key=' + API_Key + '&format=json',
        error: function(data) {
            console.log("There was an error retreiving the JSON.");
        },
        success: function(data) {
            console.log("Fetch successful.");

            hash = data;
            console.log(hash);

            var artist_00 = hash.recenttracks.track[0].artist['#text'];
            var trackname_00 = hash.recenttracks.track[0].name;
            var imgsrc_00 = hash.recenttracks.track[0].image[1]['#text'];

            // console.log(hash.recenttracks.track[0]['@attr']);
            var nowPlaying;
            if (typeof hash.recenttracks.track[0]['@attr'] !== 'undefined') {
                nowPlaying = true;
            } else {
                nowPlaying = false
            };

            var nowPlayingText_00 = "Some time ago...";
            var nowPlayingText_01 = "Some time ago...";
            var nowPlayingText_02 = "Some time ago...";
            // var timeSinceLastPlayed_00 = hash.recenttracks.track[0].date['#text'];
            console.log(nowPlaying);

            if (nowPlaying) {
                nowPlayingText_00 = "Now playing...";
            };

            console.log(nowPlayingText_00);

            // // Date now
            // var today = new Date();
            // var dd = today.getDate();
            // var mm = today.getMonth()+1;
            // var yyyy = today.getFullYear();
            // var hh = today.getHours();
            // var mi = today.getMinutes();
            // var myTime;

            // // This day
            // if (dd<10) {
            //   dd='0'+dd
            // }

            // // This minute
            // if(mm<10) {
            //   mm='0'+mm
            // }

            // // This year
            // today = mm+'/'+dd+'/'+yyyy;

            // // Set min
            // if (mi < 10) {
            //   mi = "0" + mi;
            // }

            // // Format entire date
            // myClock = dd + " " + mm + " " + yyyy + " " + hh + ":" + mi;
            // myTime = hh + ":" + mi;

            // console.log("Current time now is: " + myTime);

            // var thisTime = timeSinceLastPlayed_00;
            // var thisTimeArr = thisTime.split(",");

            // // console.log(thisTimeArr[0]);
            // var hoursDiff;
            // var minsDiff;
            // var totalMinsDiff;

            // thisTimeArr[1] = thisTimeArr[1].substring(1);
            // thisTimeArr[1] = thisTimeArr[1].split(":");
            // thisTimeArr[1][0] -= 3;

            // hoursDiff = hh - thisTimeArr[1][0];
            // totalMinsDiff = 60 * hoursDiff;

            // var thisMinsDiff = mi - thisTimeArr[1][1];
            // if (thisMinsDiff < 0 ) {
            //     console.log("Less than 0.");
            //     totalMinsDiff -= thisTimeArr[1][1];
            //     console.log(totalMinsDiff);
            //     console.log(mi);
            //     totalMinsDiff += mi;
            // }



            // console.log(totalMinsDiff);
            // // console.log("The time last played is: " + thisTimeArr[1][0] + ":" + thisTimeArr[1][1]);
            // console.log("The last time played is: " + totalMinsDiff + " mins ago");



            // console.log(myClock);

            // Date – timeSinceLastPlayed
            // var timeSinceLastPlayedArr = timeSinceLastPlayed.split(",");
            // console.log

            // Date difference

            var artist_01 = hash.recenttracks.track[1].artist['#text'];
            var trackname_01 = hash.recenttracks.track[1].name;
            var imgsrc_01 = hash.recenttracks.track[1].image[1]['#text'];

            var artist_02 = hash.recenttracks.track[2].artist['#text'];
            var trackname_02 = hash.recenttracks.track[2].name;
            var imgsrc_02 = hash.recenttracks.track[2].image[1]['#text'];

            if (imgsrc_00 == "") {
                imgsrc_00 = "img/spotify_icn.png";
                console.log("Ooga-boogas");
            }

            if (imgsrc_01 == "") {
                imgsrc_01 = "img/spotify_icn.png";
                console.log("Ooga-boogas");
            }

            if (imgsrc_02 == "") {
                imgsrc_02 = "img/spotify_icn.png";
                console.log("Ooga-boogas");
            }

            document.getElementById("img_00").src = imgsrc_00;
            document.getElementById("img_01").src = imgsrc_01;
            document.getElementById("img_02").src = imgsrc_02;

            console.log(document.getElementById("img_00").src);
            console.log(document.getElementById("img_01").src);
            console.log(document.getElementById("img_02").src);

            document.getElementById("spotifyLastPlayed_00").innerHTML = trackname_00 + " - " + artist_00;
            document.getElementById("spotifyLastPlayedAgo_00").innerHTML = nowPlayingText_00;
            document.getElementById("spotifyLastPlayed_01").innerHTML = trackname_01 + " - " + artist_01;
            document.getElementById("spotifyLastPlayedAgo_01").innerHTML = nowPlayingText_01;
            document.getElementById("spotifyLastPlayed_02").innerHTML = trackname_02 + " - " + artist_02;
            document.getElementById("spotifyLastPlayedAgo_02").innerHTML = nowPlayingText_02;

            // console.log(hash.recenttracks.track[0].artist['#text']);
            // console.log(hash.recenttracks.track[0].name);
            // console.log(data.recenttracks.track[1]);
            // console.log(data.recenttracks.track[2]);
        },
    });
}


// function init() {
//     fetchIp();
// }

function sayHello() {
    console.log("Hello, World!");
}

// document.getElementById("spotifyLastPlayed").innerHTML = "Ooga-boogas";

// console.log("Hello, World!");


$(document).ready(function(){
    // sayHello();

    fetchLastPlayed();

    // document.getElementById("spotifyLastPlayed").innerHTML = "Ooga-boogas";

});