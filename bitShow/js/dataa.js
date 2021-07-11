const url = "http://api.tvmaze.com/shows?q="
const input1 = $('input');
const cardHolder = $(".cardHolder");

$(document).ready((inputValue) => {
    $.ajax({
        url: `${url}${inputValue}`,
        method: "GET",

    }).done((response) => {
        response.sort((a, b) => {

            let aa = a.rating.average;
            let bb = b.rating.average;

            if (aa < bb) {
                return 1;
            }
            if (aa > bb) {
                return -1;
            }
            return 0;

        });
        let $topMovies = response.slice(0, 50);
        console.log($topMovies)
        $.each($topMovies, (i, item) => {
            cardHolder.append(`<div class="card" style="width: 18rem;">
            <img src='${item.image.medium}' class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <label onclick="gotToShow(${item.id})" class='btn btn-primary'>Info</label>
            </div>
          </div>`);
        });
    }).fail(() => {
        alert('Network error')
    })
});