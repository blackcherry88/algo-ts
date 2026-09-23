type ColorSpec = string | { r: number; g: number; b: number };
type ThemePalette = Record<string, ColorSpec>;

const brandTheme = {
    primary: { r: 0, g: 123, b: 255 },
    secondary: "#6c757d",
    success: { r: 40, g: 167, b: 69 },
    danger: "#dc3545",
} satisfies ThemePalette;

const redValue = brandTheme.primary.r;
const upperSecondary = brandTheme.secondary.toUpperCase();

console.log(`Primary Red Value: ${redValue}`); // Output: Primary Red Value: 0
console.log(`Uppercase Secondary Color: ${upperSecondary}`); // Output: Uppercase Secondary Color: #6C757D