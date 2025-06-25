let urlpersonajes = "https://rickandmortyapi.com/api/character";
let prevurl = "";
let nexturl = "";
const characterList = [];
const planetList = [];
const episodeList = [];

// Fetch data from the API and populate character and planet lists
// This function fetches the total number of pages for characters, planets, and episodes,
async function fetchData() {
  try {
    let maxcharacters = 0;
    let maxplanets = 0;
    let maxepisodes = 0;
    const charapiinfo = await fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        console.log("Character API Info:", data);
        maxcharacters = data.info.pages;
      });
    const planetapiinfo = fetch("https://rickandmortyapi.com/api/location")
      .then((response) => response.json())
      .then((data) => {
        console.log("Planets API Info:", data);
        maxplanets = data.info.pages;
      });
    const episodesapiinfo = fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => response.json())
      .then((data) => {
        console.log("Episodes API Info:", data);
        maxepisodes = data.info.pages;
      });

    for (let i = 1; i < maxcharacters; i += 1) {
      await fetch(`https://rickandmortyapi.com/api/character?page=${i}`)
        .then((res) => res.json())
        .then((character) => {
          // console.log(character.results[0].name);
          character.results.forEach((char) => {
            const characterData = {
              id: char.id,
              name: char.name,
            };
            characterList.push(characterData);
          });
        });
    }

    for (let i = 1; i < maxplanets; i += 1) {
      await fetch(`https://rickandmortyapi.com/api/location?page=${i}`)
        .then((res) => res.json())
        .then((planets) => {
          // console.log(character.results[0].name);
          planets.results.forEach((pla) => {
            const plaData = {
              id: pla.id,
              name: pla.name,
            };
            planetList.push(plaData);
          });
        });
    }
    for (let i = 1; i < maxepisodes; i += 1) {
      await fetch(`https://rickandmortyapi.com/api/location?page=${i}`)
        .then((res) => res.json())
        .then((episodes) => {
          // console.log(character.results[0].name);
          episodes.results.forEach((epi) => {
            const epiData = {
              id: epi.id,
              name: epi.name,
            };
            episodeList.push(epiData);
          });
        });
    }
    console.log("Character List:", characterList);
    console.log("Planet List:", planetList);
    console.log("Episode List:", episodeList);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function ampliarcharacter(id) {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(async (res) => await res.json())
    .then(async (character) => {
      const detail = document.getElementById("detail");

      // Limpiar el contenido previo
      detail.replaceChildren("");
      detail.style.opacity = "1";

      const overlayCard = document.createElement("div");
      overlayCard.className = "overlay-card";
      overlayCard.id = "overlay-card";

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
      episodesTitle.textContent = "Episodes where it appears:";

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
      volver.textContent = "Return";

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
      const gallery = document.getElementById("gallery");
      gallery.style.minHeight = "0";
      document.getElementById("overlay-card").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    });
}

function ampliarlocation(id) {
  fetch(`https://rickandmortyapi.com/api/location/${id}`)
    .then(async (res) => await res.json())
    .then(async (location) => {
      const detail = document.getElementById("detail");
      // Limpiar el contenido previo
      detail.replaceChildren("");
      detail.style.opacity = "1";

      const overlayCard = document.createElement("div");
      overlayCard.className = "overlay-card";
      overlayCard.id = "overlay-card";

      const img = document.createElement("img");
      img.src = "assets/planets/planet.jpg"; // Placeholder image for locations
      img.alt = location.name;

      const h2 = document.createElement("h2");
      h2.textContent = location.name;

      const type = document.createElement("p");
      type.innerHTML = `<strong>Type:</strong> ${location.type}`;

      const dimension = document.createElement("p");
      dimension.innerHTML = `<strong>Dimension:</strong> ${location.dimension}`;

      // Episodios
      const residentsTitle = document.createElement("h3");
      residentsTitle.textContent = "Location residents:";

      const residentsList = document.createElement("ul");
      // Obtener los IDs de los episodios
      const residentsUrls = location.residents;
      // Obtener los datos de los episodios (máximo 20 por petición)
      const residentsIds = residentsUrls.map((url) => url.split("/").pop());
      // Agrupar en bloques de 20 (límite de la API)
      for (let i = 0; i < residentsIds.length; i += 20) {
        const idsChunk = residentsIds.slice(i, i + 20);
        const residentsData = await fetch(
          `https://rickandmortyapi.com/api/character/${idsChunk.join(",")}`
        ).then((res) => res.json());
        const residentsArray = Array.isArray(residentsData)
          ? residentsData
          : [residentsData];
        residentsArray.forEach((res) => {
          const li = document.createElement("li");
          li.textContent = `${res.name} - ${res.species}`;
          residentsList.appendChild(li);
        });
      }

      const volver = document.createElement("a");
      volver.href = "index.html";
      volver.textContent = "Return";

      overlayCard.append(
        img,
        h2,
        type,
        dimension,
        residentsTitle,
        residentsList,
        volver
      );
      detail.appendChild(overlayCard);
      const gallery = document.getElementById("gallery");
      gallery.style.minHeight = "0";
      document.getElementById("overlay-card").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    });
}

function ampliarepisodes(id) {
  fetch(`https://rickandmortyapi.com/api/episode/${id}`)
    .then(async (res) => await res.json())
    .then(async (episode) => {
      const detail = document.getElementById("detail");
      // Limpiar el contenido previo
      detail.replaceChildren("");
      detail.style.opacity = "1";

      const overlayCard = document.createElement("div");
      overlayCard.className = "overlay-card";
      overlayCard.id = "overlay-card";

      const img = document.createElement("img");
      img.src = "assets/episode.jpg"; // Placeholder image for locations
      img.alt = episode.name;

      const h2 = document.createElement("h2");
      h2.textContent = episode.name;

      const air_date = document.createElement("p");
      air_date.innerHTML = `<strong>Date:</strong> ${episode.air_date}`;

      const ep = document.createElement("p");
      ep.innerHTML = `<strong>Episode:</strong> ${episode.episode}`;

      // Characters
      const charactersTitle = document.createElement("h3");
      charactersTitle.textContent = "Characters who appears:";

      const charactersList = document.createElement("ul");
      // Obtener los IDs de los episodios
      const charactersUrls = episode.characters;
      // Obtener los datos de los episodios (máximo 20 por petición)
      const charactersIds = charactersUrls.map((url) => url.split("/").pop());
      // Agrupar en bloques de 20 (límite de la API)
      for (let i = 0; i < charactersIds.length; i += 20) {
        const idsChunk = charactersIds.slice(i, i + 20);
        const charactersData = await fetch(
          `https://rickandmortyapi.com/api/character/${idsChunk.join(",")}`
        ).then((res) => res.json());
        const charactersArray = Array.isArray(charactersData)
          ? charactersData
          : [charactersData];
        charactersArray.forEach((res) => {
          const li = document.createElement("li");
          li.textContent = `${res.name} - ${res.species}`;
          charactersList.appendChild(li);
        });
      }

      const volver = document.createElement("a");
      volver.href = "index.html";
      volver.textContent = "Return";

      overlayCard.append(
        img,
        h2,
        air_date,
        ep,
        charactersTitle,
        charactersList,
        volver
      );
      detail.appendChild(overlayCard);
      const gallery = document.getElementById("gallery");
      gallery.style.minHeight = "0";
      // Scroll into view after the overlay card is added
      document.getElementById("overlay-card").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
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
        gallery.style.minHeight = "150vh"; // Ensure the gallery has a minimum height for better layout
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
            ampliarcharacter(character.id);
          }, (timeout = 200));
          setTimeout(() => {
            gallery.replaceChildren("");
            next.replaceChildren("");
            console.log(character);
          }, (timeout = 400));
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
        if (nexturl === null) {
          console.log("ya estas en la ultima pagina");
        } else {
          console.log("cargando siguiente pagina");
          gallery.style.opacity = "0";
          setTimeout(() => {
            gallery.replaceChildren("");
            cargarpersonajes(nexturl);
          }, (timeout = 200));
          setTimeout(() => {
            gallery.style.opacity = "1";
          }, (timeout = 400));
        }
      });
      prevbutton.addEventListener("click", () => {
        if (prevurl === null) {
          console.log("ya estas en la primera pagina");
        } else {
          gallery.style.opacity = "0";
          setTimeout(() => {
            gallery.replaceChildren("");
            cargarpersonajes(prevurl);
          }, (timeout = 200));
          setTimeout(() => {
            gallery.style.opacity = "1";
          }, (timeout = 400));
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
        gallery.style.minHeight = "150vh"; // Ensure the gallery has a minimum height for better layout
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
        card.addEventListener("click", () => {
          gallery.style.opacity = "0";
          next.style.opacity = "0";
          setTimeout(() => {
            ampliarlocation(planet.id);
          }, (timeout = 200));
          setTimeout(() => {
            gallery.replaceChildren("");
            next.replaceChildren("");
            console.log(planet);
          }, (timeout = 400));
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
        if (nexturl === null) {
          console.log("ya estas en la ultima pagina");
        } else {
          gallery.style.opacity = "0";
          setTimeout(() => {
            gallery.replaceChildren("");
            cargarplanetas(nexturl);
          }, (timeout = 200));
          setTimeout(() => {
            gallery.style.opacity = "1";
          }, (timeout = 400));
        }
      });
      prevbutton.addEventListener("click", () => {
        if (prevurl === null) {
          console.log("ya estas en la primera pagina");
        } else {
          gallery.style.opacity = "0";
          setTimeout(() => {
            gallery.replaceChildren("");
            cargarplanetas(prevurl);
          }, (timeout = 200));
          setTimeout(() => {
            gallery.style.opacity = "1";
          }, (timeout = 400));
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
        gallery.style.minHeight = "150vh"; // Ensure the gallery has a minimum height for better layout
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
        card.addEventListener("click", () => {
          gallery.style.opacity = "0";
          next.style.opacity = "0";
          setTimeout(() => {
            ampliarepisodes(episode.id);
          }, (timeout = 200));
          setTimeout(() => {
            gallery.replaceChildren("");
            next.replaceChildren("");
            console.log(episode);
          }, (timeout = 400));
        });
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
        if (nexturl === null) {
          console.log("ya estas en la ultima pagina");
        } else {
          gallery.style.opacity = "0";
          setTimeout(() => {
            gallery.replaceChildren("");
            cargarepisodios(nexturl);
          }, (timeout = 200));
          setTimeout(() => {
            gallery.style.opacity = "1";
          }, (timeout = 400));
        }
      });
      prevbutton.addEventListener("click", () => {
        if (prevurl === null) {
          console.log("ya estas en la primera pagina");
        } else {
          gallery.style.opacity = "0";
          setTimeout(() => {
            gallery.replaceChildren("");
            cargarepisodios(prevurl);
          }, (timeout = 200));
          setTimeout(() => {
            gallery.style.opacity = "1";
          }, (timeout = 400));
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
    const results = characterList.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log(results);
    results.forEach((character) => {
      console.log(character.name);
      fetch(`https://rickandmortyapi.com/api/character/${character.id}`)
        .then((res) => res.json())
        .then((character) => {
          const gallery = document.getElementById("gallery");
          gallery.style.minHeight = "150vh"; // Ensure the gallery has a minimum height for better layout
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
              ampliarcharacter(character.id);
            }, (timeout = 200));
            setTimeout(() => {
              gallery.replaceChildren("");
              next.replaceChildren("");
              console.log(character);
            }, (timeout = 400));
          });
          gallery.appendChild(card);
        });
    });
  }
  if (planetcheckbox.checked) {
    const results = planetList.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log(results);
    results.forEach((planet) => {
      console.log(planet.name);
      fetch(`https://rickandmortyapi.com/api/location/${planet.id}`)
        .then((res) => res.json())
        .then((planet) => {
          const gallery = document.getElementById("gallery");
          gallery.style.minHeight = "150vh"; // Ensure the gallery has a minimum height for better layout
          const card = document.createElement("div");
          card.className = "card";
          const img = document.createElement("img");
          img.src = "assets/planets/planet.jpg"; // Placeholder image for locations
          img.alt = planet.name;
          const name = document.createElement("h2");
          name.textContent = planet.name;
          const type = document.createElement("p");
          type.textContent = `Type: ${planet.type}`;
          const dimension = document.createElement("p");
          dimension.textContent = `Dimension: ${planet.dimension}`;
          card.append(img, name, type, dimension);
          card.addEventListener("click", () => {
            gallery.style.opacity = "0";
            next.style.opacity = "0";
            setTimeout(() => {
              ampliarlocation(planet.id);
            }, (timeout = 200));
            setTimeout(() => {
              gallery.replaceChildren("");
              next.replaceChildren("");
              console.log(planet);
            }, (timeout = 400));
          });
          gallery.appendChild(card);
        });
    });
  }
  if (episodecheckbox.checked) {
     const results = episodeList.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log(results);
    results.forEach((episode) => {
      console.log(episode.name);
      fetch(`https://rickandmortyapi.com/api/episode/${episode.id}`)
        .then((res) => res.json())
        .then((episode) => {
          const gallery = document.getElementById("gallery");
          gallery.style.minHeight = "150vh"; // Ensure the gallery has a minimum height for better layout
          const card = document.createElement("div");
          card.className = "card";
          const img = document.createElement("img");
          img.src = "assets/episode.jpg"; // Placeholder image for locations
          img.alt = episode.name;
          const name = document.createElement("h2");
          name.textContent = episode.name;
          const date = document.createElement("p");
          date.textContent = `Date: ${episode.air_date}`;
          const episodenum = document.createElement("p");
          episodenum.textContent = `Episode: ${episode.episode}`;
          card.append(img, name, date, episodenum);
          card.addEventListener("click", () => {
            gallery.style.opacity = "0";
            next.style.opacity = "0";
            setTimeout(() => {
              ampliarepisodes(episode.id);
            }, (timeout = 200));
            setTimeout(() => {
              gallery.replaceChildren("");
              next.replaceChildren("");
              console.log(episode);
            }, (timeout = 400));
          });
          gallery.appendChild(card);
        });
    });
  }
}


const next = document.getElementById("next");
const gallery = document.getElementById("gallery");
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
  gallery.style.opacity = "0";
  next.style.opacity = "0";
  detail.style.opacity = "0";
  setTimeout(() => {
  detail.replaceChildren("");
  next.replaceChildren("");
  gallery.replaceChildren("");
  search();
  }, (timeout = 200));
  setTimeout(() => {
  gallery.style.opacity = "1";
  next.style.opacity = "1";
  detail.style.opacity = "1";
  }, (timeout = 400));
  
});
const detail = document.getElementById("detail");
const personajesButton = document.getElementById("personajes");
personajesButton.addEventListener("click", () => {
  gallery.style.opacity = "0";
  next.style.opacity = "0";
  detail.style.opacity = "0";
  setTimeout(() => {
    gallery.replaceChildren("");
    cargarpersonajes("https://rickandmortyapi.com/api/character");
  }, (timeout = 200));
  setTimeout(() => {
    detail.replaceChildren("");
    gallery.style.opacity = "1";
    next.style.opacity = "1";
  }, (timeout = 400));
});
const planetsButton = document.getElementById("planetas");
planetsButton.addEventListener("click", () => {
  gallery.style.opacity = "0";
  next.style.opacity = "0";
  detail.style.opacity = "0";
  setTimeout(() => {
    gallery.replaceChildren("");

    cargarplanetas("https://rickandmortyapi.com/api/location");
  }, (timeout = 200));
  setTimeout(() => {
    detail.replaceChildren("");
    gallery.style.opacity = "1";
    next.style.opacity = "1";
  }, (timeout = 400));
});

const episodesButton = document.getElementById("episodios");
episodesButton.addEventListener("click", () => {
  gallery.style.opacity = "0";
  next.style.opacity = "0";
  detail.style.opacity = "0";
  setTimeout(() => {
    gallery.replaceChildren("");
    cargarepisodios("https://rickandmortyapi.com/api/episode");
  }, (timeout = 200));
  setTimeout(() => {
    detail.replaceChildren("");
    gallery.style.opacity = "1";
    next.style.opacity = "1";
  }, (timeout = 400));
});

// Initial data fetch
fetchData();
