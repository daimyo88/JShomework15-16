$(function(){

  $('button').on('click', function(e) {
    e.preventDefault();

    var searchQuery = $("input").val();
    var URL = "https://pixabay.com/api/?key=3548591-78eba01a0681de5f0029bee84&q=" + searchQuery + "&per_page=40";
    var searchCont = $(".main-container");

     $.getJSON(URL, function(data){
        if (parseInt(data.totalHits) > 0) {
          searchCont.html("");

          $.each(data.hits, function(i, hit){
            $("<a href=" + hit.pageURL + " target=\"_blanc\"></a>")
              .appendTo(searchCont)
              .append("<img src=" + hit.previewURL + ">");
          });
        }
        else searchCont.html("Извините, по вашему запросу ничего не найдено:(");
    });
  });
});
