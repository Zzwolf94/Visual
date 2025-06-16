const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (id) {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(async character => {
      const detail = document.getElementById('character-detail');
      detail.innerHTML = "";

      const overlayCard = document.createElement('div');
      overlayCard.className = 'overlay-card';

      const img = document.createElement('img');
      img.src = character.image;
      img.alt = character.name;

      const h2 = document.createElement('h2');
      h2.textContent = character.name;

      const status = document.createElement('p');
      status.innerHTML = `<strong>Status:</strong> ${character.status}`;

      const species = document.createElement('p');
      species.innerHTML = `<strong>Species:</strong> ${character.species}`;

      const gender = document.createElement('p');
      gender.innerHTML = `<strong>Gender:</strong> ${character.gender}`;

      const origin = document.createElement('p');
      origin.innerHTML = `<strong>Origin:</strong> ${character.origin.name}`;

      const location = document.createElement('p');
      location.innerHTML = `<strong>Location:</strong> ${character.location.name}`;

      // Episodios
      const episodesTitle = document.createElement('h3');
      episodesTitle.textContent = "Episodios donde aparece:";

      const episodesList = document.createElement('ul');
      // Obtener los IDs de los episodios
      const episodeUrls = character.episode;
      // Obtener los datos de los episodios (máximo 20 por petición)
      const episodeIds = episodeUrls.map(url => url.split('/').pop());
      // Agrupar en bloques de 20 (límite de la API)
      for (let i = 0; i < episodeIds.length; i += 20) {
        const idsChunk = episodeIds.slice(i, i + 20);
        const episodesData = await fetch(`https://rickandmortyapi.com/api/episode/${idsChunk.join(',')}`)
          .then(res => res.json());
        const episodesArray = Array.isArray(episodesData) ? episodesData : [episodesData];
        episodesArray.forEach(ep => {
          const li = document.createElement('li');
          li.textContent = `${ep.episode} - ${ep.name}`;
          episodesList.appendChild(li);
        });
      }

      const volver = document.createElement('a');
      volver.href = "index.html";
      volver.textContent = "Volver";

      overlayCard.append(
        img, h2, status, species, gender, origin, location,
        episodesTitle, episodesList, volver
      );
      detail.appendChild(overlayCard);
    });
}