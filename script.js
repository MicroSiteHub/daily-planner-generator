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
            <h2>Daily Schedule</h2>
            <hr>
            <table style="width:100%;border-collapse:collapse;">
                ${Array.from({ length: 12 })
                  .map(
                    (_, i) =>
                      `<tr><td style="border:1px solid #ccc;padding:8px;">${i + 8}:00</td><td style="border:1px solid #ccc;"></td></tr>`,
                  )
                  .join("")}
            </table>
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
