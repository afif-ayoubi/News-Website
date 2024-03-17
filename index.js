const getAllNews = () => {
    $.ajax({
      url: "http://localhost/news%20website/backend/get_news.php",
      method: "GET",
      dataType: "json",
      success: function(response) {
        const newsDataArr = response.news;
        displayNews(newsDataArr);
      },
      error: function(xhr, status, error) {
        console.error(error);
      }
    });
  };
  
  const displayNews = (newsDataArr) => {
    $("#newsdetails").empty();
  
    newsDataArr.forEach(news => {
      var date = news.publication_date.split("-");
      var col = $("<div>").addClass("col-sm-12 col-md-4 col-lg-3 p-2 card");
      var card = $("<div>").addClass("p-2");
      var cardBody = $("<div>");
      var newsHeading = $("<h5>").addClass("card-title").html(news.title);
      var dateHeading = $("<h6>").addClass("text-primary").html(date[0] + "-" + date[1] + "-" + date[2]);
      var description = $("<p>").addClass("text-muted").html(news.description);
      var link = $("<a>").addClass("btn btn-dark").attr({ href: "#", target: "_blank" }).html("Read more");
  
      cardBody.append(newsHeading, dateHeading, description, link);
      card.append(cardBody);
      col.append(card);
      $("#newsdetails").append(col);
    });
  };
  
  getAllNews();
  