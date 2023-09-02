const removeClasses = [
  "text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible",
  "relative pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px] md:pb-6 md:pt-3",
  "h-full flex ml-1 md:w-full md:m-auto md:mb-4 gap-0 md:gap-2 justify-center",
    "flex flex-1 flex-grow items-center gap-1 p-1 text-gray-600 dark:text-gray-200 sm:justify-center sm:p-0"
];

for (const classes of removeClasses) {
  const el = document.querySelector(`div[class='${classes}']`);
  if (el) {
    el.remove();
  }
}

const el2 = Array.from(document.querySelectorAll("div.h-6.w-6"));
el2.forEach((div) => {
  if (div.innerText.trim() === "?") {
    div.remove();
  }
});

// button with aria-label="Share chat"
document.querySelector("button[aria-label='Share chat']")?.remove();

const el3 = document.querySelector(
  "div[class='flex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs']",
);
el3.style.marginBottom = "5px";
