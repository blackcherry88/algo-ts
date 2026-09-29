// Derive ThemeName and verify the theme map has exactly valid values

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const themes = {
  light: {
    background: '#ffffff',
    foreground: '#000000',
  },
  dark: {
    background: '#000000',
    foreground: '#ffffff',
  },
} satisfies Record<string, { background: string; foreground: string }>;

// this willl generate light | dark
type ThemeName = keyof typeof themes;

// // it seems we will be way better of to define Theme type directly

// type Theme = {
//     background: string;
//     foreground: string;
// };

// this will generate { background: string; foreground: string }
type Theme = (typeof themes)[ThemeName];

function getThem(name: ThemeName): Theme {
  return themes[name];
}

const lightTheme = getThem('light');
console.log(lightTheme.background); // Output: #ffffff

const darkTheme = getThem('dark');
console.log(darkTheme.foreground); // Output: #ffffff

export {};
