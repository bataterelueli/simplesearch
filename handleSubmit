window.onload = function() {
    document.getElementById('searchField').focus();
};

function handleSubmit(event) {
    var searchInput = document.getElementById('searchField').value;
    var urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/;
    if (urlPattern.test(searchInput)) {
        if (!searchInput.startsWith('http://') && !searchInput.startsWith('https://')) {
            searchInput = 'https://' + searchInput;
        }
        window.location.href = searchInput;
        event.preventDefault();
        return false;
    }
    return true;
}
