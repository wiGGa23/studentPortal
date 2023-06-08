function performSearch() {
    var searchTerm = document.getElementById('search-input').value.toLowerCase();
    var elements = document.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      if (element.innerText.toLowerCase().includes(searchTerm)) {
        element.style.backgroundColor = 'yellow';
      }
    }
  }