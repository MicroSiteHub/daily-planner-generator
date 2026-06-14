document.getElementById("generateBtn").addEventListener("click", () => {
  const layout = document.getElementById("layoutSelect").value;
  const preview = document.getElementById("previewArea");

  if (layout === "simple") {
    preview.innerHTML = `
            <h2>Daily Planner</h2>
            <hr>
            <h3>Top Priorities</h3>
            <ul><li></li><li></li><li></li></ul>
            <h3>Tasks</h3>
            <ul><li></li><li></li><li></li><li></li><li></li></ul>
            <h3>Notes</h3>
            <div style="height:200px;border:1px solid #ccc;"></div>
        `;
  }

  if (layout === "schedule") {
    preview.innerHTML = `
    <div class="planner-page">
        <h2>Daily Planner</h2>

        <div class="planner-section">
            <h3>Top Priorities</h3>
            <ul><li></li><li></li><li></li></ul>
        </div>

        <div class="planner-section">
            <h3>Tasks</h3>
            <ul>
                ${Array.from({ length: 10 })
                  .map(() => `<li></li>`)
                  .join("")}
            </ul>
        </div>

        <div class="planner-section">
            <h3>Notes</h3>
            <div class="planner-lines"></div>
        </div>
    </div>
`;
  }

  if (layout === "tasks") {
    preview.innerHTML = `
            <h2>Task List</h2>
            <hr>
            <ul>
                ${Array.from({ length: 12 })
                  .map(() => `<li></li>`)
                  .join("")}
            </ul>
        `;
  }

  document.getElementById("downloadBtn").classList.remove("hidden");
});

document.getElementById("downloadBtn").addEventListener("click", () => {
  const element = document.getElementById("previewArea");

  const options = {
    margin: 0.5,
    filename: "daily-planner.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().from(element).set(options).save();
});
