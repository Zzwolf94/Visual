let urlpersonajes = "https://rickandmortyapi.com/api/character";
let prevurl = "";
let nexturl = "";

function ampliar(id) {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then(async (character) => {
      const detail = document.getElementById("character-detail");
      detail.innerHTML = "";

      const overlayCard = document.createElement("div");
      overlayCard.className = "overlay-card";

      const img = document.createElement("img");
      img.src = character.image;
      img.alt = character.name;

      const h2 = document.createElement("h2");
      h2.textContent = character.name;

      const status = document.createElement("p");
      status.innerHTML = `<strong>Status:</strong> ${character.status}`;

      const species = document.createElement("p");
      species.innerHTML = `<strong>Species:</strong> ${character.species}`;

      const gender = document.createElement("p");
      gender.innerHTML = `<strong>Gender:</strong> ${character.gender}`;

      const origin = document.createElement("p");
      origin.innerHTML = `<strong>Origin:</strong> ${character.origin.name}`;

      const location = document.createElement("p");
      location.innerHTML = `<strong>Location:</strong> ${character.location.name}`;

      // Episodios
      const episodesTitle = document.createElement("h3");
      episodesTitle.textContent = "Episodios donde aparece:";

      const episodesList = document.createElement("ul");
      // Obtener los IDs de los episodios
      const episodeUrls = character.episode;
      // Obtener los datos de los episodios (máximo 20 por petición)
      const episodeIds = episodeUrls.map((url) => url.split("/").pop());
      // Agrupar en bloques de 20 (límite de la API)
      for (let i = 0; i < episodeIds.length; i += 20) {
        const idsChunk = episodeIds.slice(i, i + 20);
        const episodesData = await fetch(
          `https://rickandmortyapi.com/api/episode/${idsChunk.join(",")}`
        ).then((res) => res.json());
        const episodesArray = Array.isArray(episodesData)
          ? episodesData
          : [episodesData];
        episodesArray.forEach((ep) => {
          const li = document.createElement("li");
          li.textContent = `${ep.episode} - ${ep.name}`;
          episodesList.appendChild(li);
        });
      }

      const volver = document.createElement("a");
      volver.href = "index.html";
      volver.textContent = "Volver";

      overlayCard.append(
        img,
        h2,
        status,
        species,
        gender,
        origin,
        location,
        episodesTitle,
        episodesList,
        volver
      );
      detail.appendChild(overlayCard);
    });
}

function cargarpersonajes(paginaurl) {
  fetch(paginaurl)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((character) => {
        console.log(
          `Name: ${character.name}, Status: ${character.status}, Species: ${character.species}`
        );
        const gallery = document.getElementById("gallery");
        const card = document.createElement("div");
        card.className = "card";
        const img = document.createElement("img");
        img.src = character.image;
        img.alt = character.name;
        const name = document.createElement("h2");
        name.textContent = character.name;
        const status = document.createElement("p");
        status.textContent = `Status: ${character.status}`;
        const species = document.createElement("p");
        species.textContent = `Species: ${character.species}`;
        card.append(img, name, status, species);
        card.addEventListener("click", () => {
          gallery.style.opacity = "0";
          next.style.opacity = "0";
          setTimeout(() => {
            gallery.replaceChildren("");
            next.replaceChildren("");
            ampliar(character.id);
            console.log(character);
          }, (timeout = 400));
          // window.open(`character.html?id=${character.id}`, "_blank");
        });
        gallery.appendChild(card);
      });

      nexturl = data.info.next;
      prevurl = data.info.prev;
      console.log(prevurl);
      console.log(nexturl);
      const next = document.getElementById("next");
      const nextbutton = document.createElement("button");
      const prevbutton = document.createElement("button");
      prevbutton.textContent = "prev";
      nextbutton.textContent = "next";
      nextbutton.addEventListener("click", () => {
        gallery.replaceChildren("");
        cargarpersonajes(nexturl);
      });
      prevbutton.addEventListener("click", () => {
        if (prevurl === null) {
          console.log("ya estas en la primera pagina");
        } else {
          gallery.replaceChildren("");
          cargarpersonajes(prevurl);
        }
      });
      next.replaceChildren("");
      next.append(prevbutton, nextbutton);
    })
    .catch((error) => {
      console.error("Error fetching characters:", error);
    });
}

function cargarplanetas(paginaurl) {
  fetch(paginaurl)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((planet) => {
        console.log(
          `Name: ${planet.name}, Type: ${planet.type}, Dimension: ${planet.dimension}`
        );
        const gallery = document.getElementById("gallery");
        const card = document.createElement("div");
        card.className = "card";
        const img = document.createElement("img");
        img.src = "assets/planets/planet.jpg";
        img.alt = planet.name;
        const name = document.createElement("h2");
        name.textContent = planet.name;
        const type = document.createElement("p");
        type.textContent = `Type: ${planet.type}`;
        const dimension = document.createElement("p");
        dimension.textContent = `Dimension: ${planet.dimension}`;
        card.append(img, name, type, dimension);
        // card.addEventListener('click', () => {
        //   window.open(`character.html?id=${character.id}`, '_blank');
        // });
        gallery.appendChild(card);
      });

      nexturl = data.info.next;
      prevurl = data.info.prev;
      console.log(prevurl);
      console.log(nexturl);
      const next = document.getElementById("next");
      const nextbutton = document.createElement("button");
      const prevbutton = document.createElement("button");
      prevbutton.textContent = "prev";
      nextbutton.textContent = "next";
      nextbutton.addEventListener("click", () => {
        gallery.replaceChildren("");
        cargarplanetas(nexturl);
      });
      prevbutton.addEventListener("click", () => {
        if (prevurl === null) {
          console.log("ya estas en la primera pagina");
        } else {
          gallery.replaceChildren("");
          cargarplanetas(prevurl);
        }
      });
      next.replaceChildren("");
      next.append(prevbutton, nextbutton);
    })
    .catch((error) => {
      console.error("Error fetching characters:", error);
    });
}

function cargarepisodios(paginaurl) {
  fetch(paginaurl)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((episode) => {
        console.log(
          `Name: ${episode.name}, Status: ${episode.air_date}, Species: ${episode.episode}`
        );
        const gallery = document.getElementById("gallery");
        const card = document.createElement("div");
        card.className = "card";
        const img = document.createElement("img");
        img.src = "assets/episode.jpg";
        img.alt = episode.name;
        const name = document.createElement("h2");
        name.textContent = episode.name;
        const date = document.createElement("p");
        date.textContent = `Date: ${episode.air_date}`;
        const episodenum = document.createElement("p");
        episodenum.textContent = `Episode: ${episode.episode}`;
        card.append(img, name, date, episodenum);
        // card.addEventListener('click', () => {
        //   window.open(`character.html?id=${character.id}`, '_blank');
        // });
        gallery.appendChild(card);
      });

      nexturl = data.info.next;
      prevurl = data.info.prev;
      console.log(prevurl);
      console.log(nexturl);
      const next = document.getElementById("next");
      const nextbutton = document.createElement("button");
      const prevbutton = document.createElement("button");
      prevbutton.textContent = "prev";
      nextbutton.textContent = "next";
      nextbutton.addEventListener("click", () => {
        gallery.replaceChildren("");
        cargarepisodios(nexturl);
      });
      prevbutton.addEventListener("click", () => {
        if (prevurl === null) {
          console.log("ya estas en la primera pagina");
        } else {
          gallery.replaceChildren("");
          cargarepisodios(prevurl);
        }
      });
      next.replaceChildren("");
      next.append(prevbutton, nextbutton);
    })
    .catch((error) => {
      console.error("Error fetching characters:", error);
    });
}

function search() {
  const charcheckbox = document.getElementById("personajes-checkbox");
  console.log(charcheckbox);
  const planetcheckbox = document.getElementById("planetas-checkbox");
  console.log(planetcheckbox);
  const episodecheckbox = document.getElementById("episodios-checkbox");
  console.log(episodecheckbox);
  const searchInput = document
    .getElementById("searchinput")
    .value.toLowerCase();
  if (charcheckbox.checked) {
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(
        searchInput
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          data.results.forEach((character) => {
            console.log(character.name);
            const gallery = document.getElementById("gallery");
            const card = document.createElement("div");
            card.className = "card";
            const img = document.createElement("img");
            img.src = character.image;
            img.alt = character.name;
            const name = document.createElement("h2");
            name.textContent = character.name;
            const status = document.createElement("p");
            status.textContent = `Status: ${character.status}`;
            const species = document.createElement("p");
            species.textContent = `Species: ${character.species}`;
            card.append(img, name, status, species);
            card.addEventListener("click", () => {
              gallery.style.opacity = "0";
              next.style.opacity = "0";
              setTimeout(() => {
                gallery.replaceChildren("");
                next.replaceChildren("");
                ampliar(character.id);
                console.log(character);
              }, (timeout = 400));
            });
            gallery.appendChild(card);
          });
        } else {
          console.log("No se encontraron personajes.");
        }
      });
  }
  if (planetcheckbox.checked) {
    fetch(
      `https://rickandmortyapi.com/api/location/?name=${encodeURIComponent(
        searchInput
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          data.results.forEach((planet) => {
            console.log(planet.name);
            const gallery = document.getElementById("gallery");
            const card = document.createElement("div");
            card.className = "card";
            const img = document.createElement("img");
            img.src = "assets/planets/planet.jpg";
            img.alt = planet.name;
            const name = document.createElement("h2");
            name.textContent = planet.name;
            const type = document.createElement("p");
            type.textContent = `Type: ${planet.type}`;
            const dimension = document.createElement("p");
            dimension.textContent = `Dimension: ${planet.dimension}`;
            card.append(img, name, type, dimension);
            gallery.appendChild(card);
          });
        } else {
          console.log("No se encontraron planetas.");
        }
      });
  }
  if (episodecheckbox.checked) {
    fetch(
      `https://rickandmortyapi.com/api/episode/?name=${encodeURIComponent(
        searchInput
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          data.results.forEach((episode) => {
            console.log(episode.name);
            const gallery = document.getElementById("gallery");
            const card = document.createElement("div");
            card.className = "card";
            const img = document.createElement("img");
            img.src = "assets/episode.jpg";
            img.alt = episode.name;
            const name = document.createElement("h2");
            name.textContent = episode.name;
            const date = document.createElement("p");
            date.textContent = `Date: ${episode.air_date}`;
            const episodenum = document.createElement("p");
            episodenum.textContent = `Episode: ${episode.episode}`;
            card.append(img, name, date, episodenum);
            gallery.appendChild(card);
          });
        } else {
          console.log("No se encontraron episodios.");
        }
      });
  }
}
const next = document.getElementById("next");
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
  next.replaceChildren("");
  gallery.replaceChildren("");
  search();
});

const personajesButton = document.getElementById("personajes");
personajesButton.addEventListener("click", () => {
  gallery.replaceChildren("");
  cargarpersonajes("https://rickandmortyapi.com/api/character");
});
const planetsButton = document.getElementById("planetas");
planetsButton.addEventListener("click", () => {
  gallery.replaceChildren("");
  cargarplanetas("https://rickandmortyapi.com/api/location");
});
const episodesButton = document.getElementById("episodios");
episodesButton.addEventListener("click", () => {
  gallery.replaceChildren("");
  cargarepisodios("https://rickandmortyapi.com/api/episode");
});
