document.addEventListener("DOMContentLoaded", () => {
  // Temple Data
  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Salt Lake Utah",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 382207,
      imageUrl:
        "https://www.churchofjesuschrist.org/imgs/93a01430a50b0439656100e3c2116421f184a8ad/full/250%2C/0/default.jpg"
    },
    {
      templeName: "Accra Ghana",
      location: "Accra, Ghana",
      dedicated: "2004, January, 11",
      area: 17500,
      imageUrl:
        "https://www.churchofjesuschrist.org/imgs/eb655c9a63d90ea520e0bb3a64ccdfc1d054ecb7/full/250%2C/0/default.jpg"
    },
    {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      area: 41010,
      imageUrl:
        "https://www.churchofjesuschrist.org/imgs/92c33bcbf9cf85483e008d6871f8ced5f6d7b661/full/250%2C/0/default.jpg"
    },
    {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27",
      area: 102000,
      imageUrl:
        "https://www.churchofjesuschrist.org/imgs/2f60566ed51b9c12b35cbc571b85089d4245c9e5/full/1600%2C/0/default.jpg"
    },
    {
      templeName: "Hong Kong China",
      location: "Hong Kong, China",
      dedicated: "1996, July, 26",
      area: 10000,
      imageUrl:
        "https://www.churchofjesuschrist.org/imgs/b600d848a78a2d84e0a0c68b8fdee347af47fe4d/full/250%2C/0/default.jpg"
    },

    {
      templeName: "Kuala Lumpur Malaysia",
      location: "Kuala Lumpur, Malaysia",
      dedicated: "2023, June, 4",
      area: 20000,
      imageUrl:
        "https://www.churchofjesuschrist.org/imgs/7761e87183d3a9d62055ebb8b18035d6f7441789/full/250%2C/0/default.jpg"
    }

  ];

  // DOM references
  const templeCards = document.getElementById("temple-cards");
  const navLinks = document.querySelectorAll("#nav-menu a");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  // Footer
  const yearEl = document.getElementById("currentyear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  const lm = document.getElementById("lastModified");
  if (lm) lm.textContent = new Date(document.lastModified).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric"
  });

  // Hamburger (mobile)
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => navMenu.classList.toggle("active"));
  }

  // Create a figure where the details are ABOVE the image
  function createTempleFigure(temple) {
    const figure = document.createElement("figure");
    figure.className = "grid-item";

    // Figcaption (details) first - so it displays above the image
    const caption = document.createElement("figcaption");

    const title = document.createElement("h3");
    title.textContent = temple.templeName;
    caption.appendChild(title);

    const loc = document.createElement("p");
    loc.innerHTML = `<strong>Location:</strong> ${temple.location}`;
    caption.appendChild(loc);

    const ded = document.createElement("p");
    ded.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
    caption.appendChild(ded);

    const area = document.createElement("p");
    area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;
    caption.appendChild(area);

    // Image appended AFTER caption
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    // append caption then image (caption above image)
    figure.appendChild(caption);
    figure.appendChild(img);

    return figure;
  }

  // Render function
  function displayTemples(list) {
    templeCards.innerHTML = "";
    if (!Array.isArray(list) || list.length === 0) {
      const p = document.createElement("p");
      p.textContent = "No temples found for this filter.";
      templeCards.appendChild(p);
      return;
    }
    list.forEach(t => {
      templeCards.appendChild(createTempleFigure(t));
    });
  }

  // Initial render
  displayTemples(temples);

  // Helper to safely extract year (handles various date string formats)
  function getYear(s) {
    if (!s) return NaN;
    const match = s.match(/\b(17|18|19|20)\d{2}\b/);
    return match ? parseInt(match[0], 10) : NaN;
  }

  // Filtering
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = link.dataset.filter;
      let filtered = temples.slice();

      switch (filter) {
        case "old":
          filtered = temples.filter(t => {
            const y = getYear(t.dedicated);
            return !isNaN(y) && y < 1900;
          });
          break;
        case "new":
          filtered = temples.filter(t => {
            const y = getYear(t.dedicated);
            return !isNaN(y) && y > 2000;
          });
          break;
        case "large":
          filtered = temples.filter(t => Number(t.area) > 90000);
          break;
        case "small":
          filtered = temples.filter(t => Number(t.area) < 10000);
          break;
        case "home":
        default:
          filtered = temples;
      }

      // close mobile nav if open
      if (navMenu && navMenu.classList.contains("active")) navMenu.classList.remove("active");

      displayTemples(filtered);
    });
  });
});
