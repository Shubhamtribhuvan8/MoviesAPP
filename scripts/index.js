const images = document.querySelectorAll("img");

let i = 0;

setInterval(function () {

  if (i == 0) {
    images[i].className = "fade-in-image";
  } else if (i == images.length) {
    images[i - 1].className = "fade-out-image";
    images[0].className = "fade-in-image";
    i = 0;
  } else {
    images[i - 1].className = "fade-out-image";
    images[i].className = "fade-in-image";
  }
  i++;
}, 2000);


var Movie = [
  {
    image_url:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "SpiderMan",
    releasedate: "Release date:17 December 2021",
    imdbrating:7.5,
  },
  {
    image_url:
      "https://w0.peakpx.com/wallpaper/625/268/HD-wallpaper-x-men-days-of-future-past-banner-x-men-movies-banner.jpg",
    name: "X Men Days Of Future Past",
    releasedate: "Release date:14 July 2000",
    imdbrating: 6.2,
  },
  {
    image_url:
      "https://wallpapercave.com/wp/wp5212077.jpg",
    name: "Avatar The Way of Water",
    releasedate: "Release date:18 December 2009",
    imdbrating: 8.5,
  },
  {
    image_url:
      "https://hips.hearstapps.com/digitalspyuk.cdnds.net/12/11/movies_avengers_final_character_banner.jpg?resize=768:*",
    name: "The Avengers",
    releasedate: "Release date:May 4, 2012",
    imdbrating: 8.2,
  },
  {
    image_url:
      "https://wallpapercave.com/wp/wp5549018.jpg",
    name: "Avatar",
    releasedate: "Release date:18 December 2009",
    imdbrating: 8.5,
  },

  {
    image_url:
      " https://pbs.twimg.com/media/CCPvHmCVIAANjN3.jpg:large",
    name: "MadMax Furry Road",
    releasedate: "Release date:15 May 2015",
    imdbrating: 6.7,
  },
  {
    image_url:
      "https://igimages.gumlet.io/english/gallery/movies/venom/main1.jpg?w=576&dpr=1.0",
    name: "The Martian",
    releasedate: "Release date:September 11, 2015",
    imdbrating: 8.9,
  },

  {
    image_url:
      "https://www.filmibeat.com/ph-big/2016/11/2-0-first-look-poster-inspired-from-hollywood-movies_147970474760.jpg",
    name: "Robot 2.0",
    releasedate: "Release date:29 November 2018.",
    imdbrating: 5.5,
  },
  {
    image_url:
      "https://c4.wallpaperflare.com/wallpaper/510/916/903/movies-hollywood-movies-wallpaper-preview.jpg",
    name: "Thor: Love and Thunder",
    // name1:
    releasedate: "Release date:6 July 2022",
    imdbrating: 5.8,
  },

];


DisplayMovies(Movie);

function DisplayMovies(Movie){
Movie.map(function (elem) {
  var div = document.createElement("div");
  div.setAttribute("class", "card");

  var img = document.createElement("img");
  img.setAttribute("src", elem.image_url);

  var name = document.createElement("p");
  name.textContent = elem.name;
  name.setAttribute("class", "name");

  var releasedate = document.createElement("h6");
  releasedate.textContent = elem.releasedate;
  releasedate.setAttribute("class", "releasedate");

  var imdbrating = document.createElement("h5");
  imdbrating.textContent = elem.imdbrating;
  imdbrating.setAttribute("class", "imdbrating");

  var cartbtn = document.createElement("button");
  cartbtn.textContent = "IMDb RATING*";
  cartbtn.setAttribute("class", "cartbtn");

  div.append(img, name, releasedate, imdbrating, cartbtn);
  document.getElementById("movies").append(div);
});
}



            function handlenamesort() {
              document.getElementById("movies").innerHTML = "";
              let fill = document.getElementById("sortnames").value;
              console.log(fill);
              if (fill == "sort-lh") {
                var sortPlth = Movie.sort(function (a, b) {
                  return a.imdbrating - b.imdbrating;
                })
                DisplayMovies(sortPlth)
              } else if (fill == "sort-hl") {
                var sortP = Movie.sort(function (a, b) {
                  return b.imdbrating - a.imdbrating;
                });
                DisplayMovies(sortP)
              }
              else if (fill == "Newmovie"){
                console.log(fill);
                var x = Movie.sort(function (a, b) {
                  if (a.name > b.name) {
                    console.log("1");
                    return 1;

                  }
                  if (a.name < b.name) {
                    console.log("0");
                    return -1;
                  }
                  return 0;
                });
                DisplayMovies(x)
              } 
              else {
                window.location.reload();
              }
            }