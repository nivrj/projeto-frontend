function searchVideo() {
    const searchQuery = document.getElementById('searchInput').value;
    if (searchQuery) {
      alert('Buscando vídeos por: ' + searchQuery);
    } else {
      alert('Por favor, insira algo para buscar.');
    }
  }
  