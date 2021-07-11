const url1 = "http://api.tvmaze.com/search/shows?q="
const input = $('input');
const result = $("#result");
const paragraphNoResults = $('.noResults');
const cardHolder1 = $(".cardHolder");



const search = (inputValue) => {
    $.ajax({
        url: `${url1}${inputValue}`,
        method: "GET",

    }).done((response) => {
        cardHolder1.html("");
        if (response.length === 0) {
            paragraphNoResults.text("No results match");
        }
        $.each(response, (i, item) => {
            cardHolder1.append(`<div class="card" style="width: 18rem;">
            <img src='${item.show.image.medium}' class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.show.name}</h5>
              <label onclick="gotToShow(${item.show.id})" class='btn btn-primary'>Info</label>
            </div>
          </div>`);
        })
    }).fail(() => {
        alert('Network error')
    })
};

const searchHandler = (event) => {
    cardHolder1.html("");
    if (event.keyCode == 13) {
        let inputValue = input.val();
        input.blur();
        if (!inputValue) {
            alert('Input value required');
        }
        search(inputValue);

    }
}


input.on("keydown", searchHandler)

input.keyup(() => {
    result.html('');
    let inputValue = input.val();
    $.ajax({
        url: `${url1}${inputValue}`,
        method: "GET",

    }).done((response) => {
        cardHolder1.html("");
        $.each(response, (i, item) => {
            if (i <= 10) {
                result.append(`<li onclick='gotToShow(${item.show.id})'>${item.show.name}</li>`);
            }
        })
    })
});


const gotToShow = (id) => {
    console.log("nesto")
    localStorage.setItem("id", id);
    location.assign('./showPage.html');
}