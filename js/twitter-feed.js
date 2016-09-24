// Code for custom twitter feed styles on homepage
jQuery('.twitter-block').on('DOMSubtreeModified propertychange',"#twitter-widget-0", function() {
  jQuery(".twitter-timeline").contents().find(".timeline-Tweet-media").css("display", "none");
  jQuery(".twitter-timeline").contents().find(".timeline-Tweet-text").css("font-size", "13px");
  jQuery(".twitter-timeline").contents().find(".timeline-Tweet-text").css("margin-bottom", "0px");
  jQuery(".twitter-timeline").contents().find(".timeline-Tweet").css("padding", "0px");
  jQuery(".twitter-timeline").contents().find(".timeline-Tweet").css("padding-bottom", "2px");
  // Uncomment below for retweet credit
  // jQuery(".twitter-timeline").contents().find(".timeline-Tweet-retweetCredit").css("display", "none");
  jQuery(".twitter-timeline").contents().find(".TweetAuthor-name").css("font-size", "12px");
  jQuery(".twitter-timeline").contents().find(".timeline-Tweet-retweetCredit").css("margin-bottom", "0px");
  jQuery(".twitter-timeline").contents().find(".timeline-TweetList-tweet").css("margin-bottom", "4px");
  jQuery(".twitter-timeline").contents().find(".Icon").css("display", "none");
  jQuery(".twitter-timeline").contents().find(".timeline-Tweet-actions").css("display", "none");
  jQuery(".twitter-timeline").contents().find(".timeline-Tweet-metadata").css("display", "none");
  jQuery(".twitter-block").css("height", "100%");
  jQuery(".timeline-Tweet-text").css("font-size", "100px");
  jQuery(".timeline-TweetList").css("display", "none");

});