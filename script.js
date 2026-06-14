document.getElementById("generateBtn").addEventListener("click", () => {
  const layout = document.getElementById("layoutSelect").value;
  const preview = document.getElementById("previewArea");

  if (layout === "simple") {
    preview.innerHTML = `
    <div class="planner-page">
        <div class="planner-header">
            <h1>Daily Planner</h1>
            <div class="date-box">Date: ____________________</div>
        </div>

        <div class="planner-row">
            <div class="planner-column">
                <h2>Top Priorities</h2>
                <ul class="priority-list">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <h2>Tasks</h2>
                <ul class="task-list">
                    ${Array.from({ length: 12 })
                      .map(() => `<li><span class="checkbox"></span></li>`)
                      .join("")}
                </ul>
            </div>

            <div class="planner-column">
                <h2>Schedule</h2>
                <table class="schedule-table">
                    ${Array.from({ length: 12 })
                      .map(
                        (_, i) =>
                          `<tr>
                            <td class="time">${i + 8}:00</td>
                            <td class="slot"></td>
                        </tr>`,
                      )
                      .join("")}
                </table>
            </div>
        </div>

        <h2>Notes</h2>
        <div class="notes-box"></div>
    </div>
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
  const element = document.querySelector(".planner-page");

  const opt = {
    margin: 0,
    filename: "daily-planner.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: {
      scale: 3, // High DPI
      useCORS: true,
      letterRendering: true,
    },
    jsPDF: {
      unit: "in",
      format: "letter",
      orientation: "portrait",
    },
  };

  html2pdf().set(opt).from(element).save();
});
