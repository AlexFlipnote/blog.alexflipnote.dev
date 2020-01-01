document.addEventListener('DOMContentLoaded', function() {
  // Give each header a topic
  var headings = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]");

  for (var i = 0; i < headings.length; i++) {
    headings[i].innerHTML =
      '<a style="color: #fff;" href="#' + headings[i].id + '">' +
        headings[i].innerText +
      '</a>';
  }

  // Give an estimated time on when you're done reading
  var article = document.getElementsByClassName("paper")[0];
  Countable.count(article, function (counter) {
    var wpm = 200;
    var estimatedRaw = counter.words / wpm;
    var minutes = Math.round(estimatedRaw);

    var effectiveTime = (minutes < 1) ? "a couple of secs" : minutes + " min read";
    document.getElementById("reading-time").innerHTML += effectiveTime;
  });
}, false);
