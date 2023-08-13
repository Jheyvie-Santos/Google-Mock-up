const search_element = document.getElementById('search');
search_element.addEventListener('keydown', function(event){
    if(event.keyCode === 13){
        search();
    }
});

function search(){
    const search_element = document.getElementById('search');
    const search_value = search_element.value;
    google_url = 'https://www.google.com/search?q='
    window.location.href = google_url+ search_value;
}


