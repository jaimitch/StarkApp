// $(".search-button").click(function () {
//     alert("Button Clicked!");
// })


var displayWikiData = function() {
    var $linksElement = $('#links');
    var searchString = $("#searchString").val();
    var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchString + "&format=json&callback=?";

    // var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&format=json&callback=?";

    $.ajax({
        url: wikiUrl,
        dataType: "jsonp",
        jsonp: "callback",
        success: function(res){
            var linkLists = res[1];
            //do something here; output the results from the wiki data on the screen//
          console.log(linkLists);
            linkLists.forEach(function(item) {
                var url = "https://en.wikipedia.org/wiki/" + item;
               $linksElement.append('<li><a href= "' + url + '">' + item + '</a></li>');

               return url;
            })
        }
    });

    return false;

};

$("#form").submit(displayWikiData);