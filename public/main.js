const form = document.querySelector("form");
const urlInput = document.querySelector(".url-input");
const text = document.querySelector("textarea");
const link = document.querySelector("a");
const code = document.querySelector("code");
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
  const extendedURL = `${window.location.href}${filterText(text.value)}/?id=${id}`;
  link.textContent = extendedURL;
  link.href = extendedURL;
  code.textContent = extendedURL;
})

function filterText(str) {
  return str.replace(/[{}|\\\^\[\]`;\/\?:@&=+$\,.]/g, "").replaceAll(" ", "-");
}
