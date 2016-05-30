// Javascript for Foursquare API

console.log("Hello, World!");

$.ajax({
  type: "GET",
  dataType: "jsonp",
  url: "https://api.foursquare.com/v2/venues/explore?ll=40.7,-74&oauth_token=LSXPTAXGKSW43RBGOSP0DFVR2XAFT0NPP4NPCH33URZ04WYI&v=30160529",
  success: function(data) {
    console.log(data);
  }
});

// https://api.foursquare.com/v2/venues/search
//   ?client_id=INYMRNNMLF2I03NCKBVSPHG4IEGQHPNSD0YX35P2QAFDASTY
//   &client_secret=4CJXV0DSR4KL0ENWGX025BJJQPXRXNBG5HPNRLHIIQRR20FJ
//   &v=20130815
//   &ll=40.7,-74
//   &query=sushi

// Owner
// Poamrong Rith
// Client id
// INYMRNNMLF2I03NCKBVSPHG4IEGQHPNSD0YX35P2QAFDASTY
// Client secret
// 4CJXV0DSR4KL0ENWGX025BJJQPXRXNBG5HPNRLHIIQRR20FJ

// https://foursquare.com/oauth2/access_token?client_id=INYMRNNMLF2I03NCKBVSPHG4IEGQHPNSD0YX35P2QAFDASTY&client_secret=4CJXV0DSR4KL0ENWGX025BJJQPXRXNBG5HPNRLHIIQRR20FJ&grant_type=authorization_code&redirect_uri=http://jpoechill.github.io&code=XDPQW3UFZZF3JYKD4YL1V3E45VLAPIQSNDDOUJQWF4J5YJAA#_=_

// https://foursquare.com/oauth2/authenticate?client_id=INYMRNNMLF2I03NCKBVSPHG4IEGQHPNSD0YX35P2QAFDASTY&response_type=code&redirect_uri=http://jpoechill.github.io&code=XDPQW3UFZZF3JYKD4YL1V3E45VLAPIQSNDDOUJQWF4J5YJAA#_=_

// returns http://jpoechill.github.io/?code=XDPQW3UFZZF3JYKD4YL1V3E45VLAPIQSNDDOUJQWF4J5YJAA#_=_

// {"access_token":"LSXPTAXGKSW43RBGOSP0DFVR2XAFT0NPP4NPCH33URZ04WYI"}

// https://api.foursquare.com/v2/users/self/checkins?oauth_token=LSXPTAXGKSW43RBGOSP0DFVR2XAFT0NPP4NPCH33URZ04WYI&v=YYYYMMDD

// oauth_token=LSXPTAXGKSW43RBGOSP0DFVR2XAFT0NPP4NPCH33URZ04WYI

// ll=44.3,37.2