const datatesti = [
  {
    name: "Monkey D Luffy",
    comment: "Mantap pisan jasanya!",
    rating: 5,
    image: "./assets/images/luffy.jpg",
  },
  {
    name: "Roronoa Zoro",
    comment: "Pelayanannya ramah!",
    rating: 5,
    image: "./assets/images/zoro.jpg",
  },
  {
    name: "Vinsmoke Sanji",
    comment: "Rekomended banget!",
    rating: 4,
    image: "./assets/images/sanji.jpg",
  },
  {
    name: "Nico Robin",
    comment: "Yah Lumayan",
    rating: 3,
    image: "./assets/images/robin.jpg",
  },
  {
    name: "God Usop",
    comment: "Tidak sesuai permintaan",
    rating: 2,
    image: "./assets/images/usop.jpg",
  },
];

function showTestimonial() {
  let testiForHtml = "";

  datatesti.forEach((item) => {
    testiForHtml += `
      <div class="testimonial">
          <img src=${item.image} class="profile-testimonial" />
          <p class="quote">"${item.comment}"</p>
          <p class="author">- ${item.name}</p>
          <p class="rating-pt">${item.rating} <img src="./assets/images/star.png" width="15px"></p>
      </div>`;
  });

  document.getElementById("testimonials").innerHTML = testiForHtml;
}
showTestimonial();

// filtering function
function filterTesti(rating) {
  let testiForHtml = "";

  const dataFilter = datatesti.filter((data) => data.rating === rating);

  if (dataFilter.length === 0) {
    testiForHtml = `<h3>Data not found!</h3>`;
  } else {
    dataFilter.forEach((item) => {
      testiForHtml += `
          <div class="testimonial">
              <img src=${item.image} class="profile-testimonial" />
              <p class="quote">"${item.comment}"</p>
              <p class="author">- ${item.name}</p>
              <p class="rating-pt">${item.rating} <img src="./assets/images/star.png" width="15px"></p>
          </div>`;
    });
  }
  document.getElementById("testimonials").innerHTML = testiForHtml;
}
