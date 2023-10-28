const removeClasses = [
  "text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible",
  "relative pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px] md:pb-6 md:pt-3",
  "h-full flex ml-1 md:w-full md:m-auto md:mb-4 gap-0 md:gap-2 justify-center",
  "flex flex-1 flex-grow items-center gap-1 p-1 text-gray-600 dark:text-gray-200 sm:justify-center sm:p-0",
  "relative pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px] md:pb-6 md:pt-3",
  "relative px-2 py-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px]", // footer
  "relative p-1 rounded-sm h-9 w-9 text-white flex items-center justify-center", // gpt pfp
  "relative flex", // usr pfp
  "relative z-20 flex min-h-[60px] flex-wrap items-center justify-between gap-3 border-b border-black/10 bg-white p-2 text-gray-500 dark:border-gray-900/50 dark:bg-gray-800 dark:text-gray-300" // top header
];

for (const classes of removeClasses) document.querySelectorAll(`div[class='${classes}']`).forEach((div) => div.remove());

const el2 = Array.from(document.querySelectorAll("div.h-6.w-6"));
el2.forEach((div) => {
  if (div.innerText.trim() === "?") div.remove()
});

document.querySelector("button[aria-label='Share chat']")?.remove();

// TODO this part is for radix colors move it to a separate file
const grayDark = {
  grayRadix1: "hsl(0, 0%, 9.5%)",
  grayRadix2: "hsl(0, 0%, 10.5%)",
  grayRadix3: "hsl(0, 0%, 15.8%)",
  grayRadix4: "hsl(0, 0%, 18.9%)",
  grayRadix5: "hsl(0, 0%, 21.7%)",
  grayRadix6: "hsl(0, 0%, 24.7%)",
  grayRadix7: "hsl(0, 0%, 29.1%)",
  grayRadix8: "hsl(0, 0%, 37.5%)",
  grayRadix9: "hsl(0, 0%, 43.0%)",
  grayRadix10: "hsl(0, 0%, 50.7%)",
  grayRadix11: "hsl(0, 0%, 69.5%)",
  grayRadix12: "hsl(0, 0%, 93.5%)",
};
const mauveDark = {
  mauve1: "hsl(300, 5.0%, 9.5%)",
  mauve2: "hsl(300, 7.1%, 11.0%)",
  mauve3: "hsl(290, 6.2%, 16.2%)",
  mauve4: "hsl(285, 5.8%, 19.5%)",
  mauve5: "hsl(280, 5.6%, 22.4%)",
  mauve6: "hsl(276, 5.4%, 25.7%)",
  mauve7: "hsl(269, 5.3%, 30.3%)",
  mauve8: "hsl(258, 5.0%, 39.2%)",
  mauve9: "hsl(250, 5.0%, 45.0%)",
  mauve10: "hsl(252, 4.3%, 52.3%)",
  mauve11: "hsl(250, 6.0%, 70.5%)",
  mauve12: "hsl(240, 7.0%, 93.8%)",
};

const slateDark = {
  slate1: "hsl(240, 5.0%, 9.8%)",
  slate2: "hsl(240, 6.9%, 11.4%)",
  slate3: "hsl(227, 6.7%, 16.4%)",
  slate4: "hsl(222, 6.6%, 19.4%)",
  slate5: "hsl(218, 6.5%, 22.1%)",
  slate6: "hsl(214, 6.4%, 25.1%)",
  slate7: "hsl(209, 6.2%, 29.4%)",
  slate8: "hsl(202, 5.8%, 37.5%)",
  slate9: "hsl(220, 6.0%, 44.0%)",
  slate10: "hsl(218, 5.3%, 51.5%)",
  slate11: "hsl(220, 7.0%, 70.0%)",
  slate12: "hsl(220, 7.0%, 93.5%)",
};

const sageDark = {
  sage1: "hsl(155, 7.0%, 9.2%)",
  sage2: "hsl(150, 7.7%, 10.2%)",
  sage3: "hsl(151, 5.5%, 15.2%)",
  sage4: "hsl(152, 4.7%, 18.3%)",
  sage5: "hsl(153, 4.2%, 21.1%)",
  sage6: "hsl(153, 3.7%, 24.2%)",
  sage7: "hsl(154, 3.3%, 28.7%)",
  sage8: "hsl(156, 2.6%, 37.1%)",
  sage9: "hsl(155, 6.0%, 41.5%)",
  sage10: "hsl(157, 4.6%, 49.2%)",
  sage11: "hsl(155, 5.0%, 68.3%)",
  sage12: "hsl(155, 7.0%, 93.0%)",
};

const oliveDark = {
  olive1: "hsl(110, 5.0%, 9.2%)",
  olive2: "hsl(120, 5.7%, 10.4%)",
  olive3: "hsl(120, 4.3%, 15.4%)",
  olive4: "hsl(120, 3.9%, 18.5%)",
  olive5: "hsl(120, 3.6%, 21.2%)",
  olive6: "hsl(120, 3.3%, 24.3%)",
  olive7: "hsl(120, 3.0%, 28.7%)",
  olive8: "hsl(120, 2.6%, 37.1%)",
  olive9: "hsl(110, 6.0%, 41.5%)",
  olive10: "hsl(106, 4.6%, 49.3%)",
  olive11: "hsl(110, 5.0%, 68.8%)",
  olive12: "hsl(110, 7.0%, 93.0%)",
};

const sandDark = {
  sand1: "hsl(60, 6.0%, 9.0%)",
  sand2: "hsl(60, 1.9%, 10.4%)",
  sand3: "hsl(56, 2.4%, 15.4%)",
  sand4: "hsl(53, 2.7%, 18.4%)",
  sand5: "hsl(51, 2.9%, 21.2%)",
  sand6: "hsl(49, 3.1%, 24.3%)",
  sand7: "hsl(47, 3.3%, 28.7%)",
  sand8: "hsl(43, 3.7%, 37.1%)",
  sand9: "hsl(50, 4.0%, 41.8%)",
  sand10: "hsl(48, 3.5%, 49.5%)",
  sand11: "hsl(50, 5.0%, 68.3%)",
  sand12: "hsl(56, 7.0%, 93.0%)",
};

const grays = [grayDark, mauveDark, slateDark, sageDark, oliveDark, sandDark];
for (const gray of grays) {
  Object.keys(gray).forEach((key) => {
    document.documentElement.style.setProperty(`--${key}`, gray[key]);
  });
}
