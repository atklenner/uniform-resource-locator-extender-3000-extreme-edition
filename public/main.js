const form = document.querySelector("form");
const urlInput = document.querySelector(".url-input");
const text = document.querySelector("textarea");
const link = document.querySelector("a");
let id;
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!id) {
    let res = await fetch("/extend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: urlInput.value })
    })
    id = await res.json();
  }
  let href = window.location.href;
  let urlId = `/?id=${id}`;
  let urlText = truncateText(href, filterText(text.value), urlId);
  const extendedURL = `${href}${urlText}${urlId}`;
  link.textContent = extendedURL;
  link.href = extendedURL;
})

function filterText(str) {
  // removes any reserved chars for URLs, replaces spaces with hyphens
  return str.replace(/[{}|\\\^\[\]`;\/\?:@&=+$\,.]/g, "").replace(/[ \n]/g, "-");
}

function truncateText(href, text, id) {
  // 2000 is a good limit for URL length, it's long and should always work
  const limit = 2000 - href.length - id.length;
  return text.slice(0, limit);
}
