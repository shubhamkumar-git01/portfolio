let applications = JSON.parse(localStorage.getItem("applications")) || [];

const form = document.getElementById("appForm");
const list = document.getElementById("appList");

form.addEventListener("submit", e => {
  e.preventDefault();

  const app = {
    company: company.value,
    role: role.value,
    stage: stage.value,
    result: result.value,
    date: date.value
  };

  applications.push(app);
  saveData();
  render();
  form.reset();
});

function render() {
  list.innerHTML = "";

  applications.forEach((app, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${app.company}</td>
      <td>${app.role}</td>
      <td>${app.stage}</td>
      <td>${app.result}</td>
      <td>${app.date}</td>
      <td><button class="delete-btn" onclick="deleteApp(${index})">Delete</button></td>
    `;

    list.appendChild(row);
  });

  updateSummary();
}

function deleteApp(index) {
  applications.splice(index, 1);
  saveData();
  render();
}

function updateSummary() {
  total.innerText = applications.length;
  interviews.innerText = applications.filter(a => a.stage === "Interview").length;
  offers.innerText = applications.filter(a => a.stage === "Offer").length;
  rejections.innerText = applications.filter(
    a => a.stage === "Rejected" || a.result === "Rejected"
  ).length;
}

function saveData() {
  localStorage.setItem("applications", JSON.stringify(applications));
}

render();