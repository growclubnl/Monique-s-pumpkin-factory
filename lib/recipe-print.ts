/**
 * Opens the HTML in a new window and triggers the print dialog so the user can
 * choose “Save as PDF” (or a real printer).
 */
export function openHtmlPrintDialog(html: string): void {
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const w = window.open(url, "_blank", "noopener,noreferrer");
  if (!w) {
    URL.revokeObjectURL(url);
    return;
  }

  const schedulePrint = () => {
    window.setTimeout(() => {
      try {
        w.focus();
        w.print();
      } catch {
        URL.revokeObjectURL(url);
      }
    }, 300);
  };

  w.addEventListener("afterprint", () => {
    URL.revokeObjectURL(url);
    try {
      w.close();
    } catch {
      /* ignore */
    }
  });

  if (w.document.readyState === "complete") {
    schedulePrint();
  } else {
    w.addEventListener("load", schedulePrint, { once: true });
  }
}
