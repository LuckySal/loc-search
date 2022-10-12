// define api url and pass in user search value to display correct results
let url = `https://www.loc.gov/search/?q=${searchEl.value}&fo=json`;

fetch(url)
.then(response => {
    if (response.ok) {
        return response.json();
    }
    else {
        throw new Error(response.statusText);
    }
})
.then(data => {
    console.log(data);
})
.catch(error => {
    alert(error);
})