document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:5000/getAll")
    .then((response) => response.json())
    .then((data) => console.log(data));
  loadTBody([]);
});

// Load Table Body
function loadTBody(data) {
  const tbody = document.querySelector(".tbody");
  let tblHtml = "";
  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" class="text-center">No Data Found</td></tr>`;
  }
}
