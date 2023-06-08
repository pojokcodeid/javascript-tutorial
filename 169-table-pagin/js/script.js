let current_page = 1;
let record_per_page = 3;
let l = document.getElementById("listingTable").rows.length;

function prevPage() {
  if (current_page > 1) {
    current_page--;
    changePage(current_page);
  }
}

function nextPage() {
  if (current_page < numPages()) {
    current_page++;
    changePage(current_page);
  }
}

function changePage(page) {
  let btn_next = document.getElementById("btn_next");
  let btn_prev = document.getElementById("btn_prev");
  let listing_table = document.getElementById("listingTable");
  let page_span = document.getElementById("page");

  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  [...listing_table.getElementsByTagName("tr")].forEach((tr) => {
    tr.style.display = "none";
  });
  listing_table.rows[0].style.display = "";

  for (
    let i = (page - 1) * record_per_page + 1;
    i < page * record_per_page + 1;
    i++
  ) {
    if (listing_table.rows[i]) {
      listing_table.rows[i].style.display = "";
    } else {
      continue;
    }
  }

  page_span.innerHTML = page + "/" + numPages();

  if (page == 1) {
    btn_prev.style.color = "#f2f2f2";
    btn_prev.style.cursor = "not-allowed";
    btn_prev.disabled = true;
  } else {
    btn_prev.style.color = "";
    btn_prev.style.cursor = "pointer";
    btn_prev.disabled = false;
    btn_prev.style.visibility = "visible";
  }

  if (page == numPages()) {
    btn_next.style.color = "#f2f2f2";
    btn_next.style.cursor = "not-allowed";
    btn_next.disabled = true;
  } else {
    btn_next.style.color = "";
    btn_next.style.cursor = "pointer";
    btn_next.disabled = false;
    btn_next.style.visibility = "visible";
  }
}

function numPages() {
  return Math.ceil((l - 1) / record_per_page);
}

window.onload = function () {
  changePage(current_page);
};
