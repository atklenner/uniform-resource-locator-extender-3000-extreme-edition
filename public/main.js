const form = document.querySelector("form");
const urlInput = document.querySelector(".url-input");
const text = document.querySelector("textarea");
const link = document.querySelector("a");
const melvilleButton = document.querySelector("#melville");
const loremButton = document.querySelector("#lorem")
const binaryButton = document.querySelector("#binary");
const alphaButton = document.querySelector("#alpha");
const alphanumeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let res = await fetch("/extend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: urlInput.value })
  })

  // get id from server
  let id = await res.json();
  let urlId = `/?id=${id}`;

  let href = window.location.href;

  // limit text to 2000 characters for browser compatibility
  let urlText = truncateText(href, filterText(text.value), urlId);

  const extendedURL = `${href}${urlText}${urlId}`;
  link.textContent = extendedURL;
  link.href = extendedURL;
})

melvilleButton.addEventListener("click", () => {
  text.value = melville;
})

loremButton.addEventListener("click", () => {
  text.value = lorem;
})

binaryButton.addEventListener("click", () => {
  text.value = generateString("01");
})

alphaButton.addEventListener("click", () => {
  text.value = generateString(alphanumeric);
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

function generateString(str) {
  return Array(2000)
           .fill("")
           .map(() => str[Math.floor(Math.random() * str.length)])
           .join("");
}

const melville = `Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.

There now is your insular city of the Manhattoes, belted round by wharves as Indian isles by coral reefs—commerce surrounds it with her surf. Right and left, the streets take you waterward. Its extreme downtown is the battery, where that noble mole is washed by waves, and cooled by breezes, which a few hours previous were out of sight of land. Look at the crowds of water-gazers there.

Circumambulate the city of a dreamy Sabbath afternoon. Go from Corlears Hook to Coenties Slip, and from thence, by Whitehall, northward. What do you see?—Posted like silent sentinels all around the town, stand thousands upon thousands of mortal men fixed in ocean reveries. Some leaning against the spiles; some seated upon the pier-heads; some looking over the bulwarks of ships from China; some high aloft in the rigging, as if striving to get a still better seaward peep. But these are all landsmen; of week days pent up in lath and plaster—tied to counters, nailed to benches, clinched to desks. How then is this? Are the green fields gone? What do they here?

But look! here come more crowds, pacing straight for the water, and seemingly bound for a dive. Strange! Nothing will content them but the extremest limit of the land; loitering under the shady lee of yonder warehouses will not suffice. No. They must get just as nigh the water as they possibly can without falling in. And there they stand—miles of them—leagues. Inlanders all, they come from lanes and alleys, streets and avenues—north, east, south, and west. Yet here they all unite. Tell me, does the magnetic virtue of the needles of the compasses of all those ships attract them thither?`

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam lacinia ante non ultrices. Fusce vestibulum odio eu diam egestas sagittis. Praesent eu nisl risus. Maecenas volutpat dui ac volutpat laoreet. Pellentesque vel mi varius, ornare orci eget, ornare purus. Pellentesque vulputate lobortis eros, at tristique ligula tristique a. Donec a dolor sed tellus tempus luctus eu vitae sapien. Nunc consequat fringilla nunc, quis imperdiet magna fringilla quis.

Integer turpis tellus, lobortis ullamcorper dapibus ut, imperdiet eu elit. Fusce facilisis lorem vel fermentum posuere. Aenean eu metus a sem dignissim eleifend a et dolor. Suspendisse lacus ligula, mattis ut cursus ac, volutpat eu risus. Donec vestibulum metus eu quam interdum feugiat. Integer at purus varius, venenatis neque ut, sollicitudin dui. Aliquam fringilla, eros sit amet posuere posuere, augue ex lacinia odio, eu vestibulum lectus nunc ut dui. Sed leo ex, auctor non faucibus id, molestie nec ipsum. Praesent aliquam feugiat tristique. Nullam ac sem quis turpis euismod efficitur hendrerit at nibh. Suspendisse quis risus sed est pretium rutrum vel et tellus. Proin quis euismod massa, sed vestibulum neque. Integer eget ullamcorper tortor. Maecenas ut libero est. Vestibulum auctor mi eget lorem facilisis, pharetra euismod lectus sollicitudin. Maecenas arcu justo, hendrerit id maximus nec, accumsan nec mi.

In commodo, velit quis mattis commodo, dui massa vehicula nulla, dictum interdum nisl risus sed est. Vivamus sit amet posuere massa. Pellentesque tortor arcu, dictum congue pretium vitae, interdum sed sapien. In nisl diam, egestas sed lorem eu, blandit finibus justo. Aliquam feugiat vestibulum est, id vestibulum velit vehicula nec. Quisque metus nisi, semper eu euismod nec, egestas et nibh. Pellentesque id nisi quis est commodo porttitor ut efficitur nulla.

Suspendisse potenti. Proin tincidunt sit amet lorem vel ullamcorper. Morbi vitae nisl sollicitudin, ultrices risus non, convallis augue. Nam nec lectus posuere, lobortis purus vitae, ullamcorper purus. Fusce quam lectus, sollicitudin id tellus ut, iaculis ornare est. Suspendisse tincidunt nisi tortor, sodales auctor turpis ullamcorper quis. In in sollicitudin nisi, ut aliquet risus. In hac habitasse platea dictumst. Morbi sit amet tincidunt orci. Phasellus quis vehicula enim, sed dignissim dui.

Phasellus vitae augue id est auctor efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum sed urna a tincidunt. Suspendisse dictum consectetur massa ut tincidunt. Vestibulum quis lectus commodo, porta neque tristique, volutpat ipsum. Sed fringilla nunc vitae sapien mollis tincidunt. Maecenas dolor sem, tincidunt vitae leo non, mattis mollis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet malesuada turpis. Nunc nec augue arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam molestie id mauris eget mattis. Sed semper auctor mi eu sollicitudin. Donec posuere, diam id semper imperdiet, lectus eros vulputate magna, at euismod enim risus sollicitudin eros. `
