# Themes

## Introduction

Themes are a way to customize the appearance of Easy Docs. You can create a custom theme to match your company's visual identity or simply to add some personality to your PDF.

Initially, Easy Docs comes with a default theme, but you can create a new theme or modify the default theme to suit your needs or create a completely new theme.

Let's create a new theme called `custom-theme` and customize it.

## Creating a New Theme

Navigate to the folder `templates > lib > theme`.

Create a new file called `custom-theme.ts`.

Easy Docs offers various tokens to customize the theme, import them into your `custom-theme.ts` file:

Example theme:

```ts
import { Borders } from "./tokens/borders";
import { BrandColorsType, GlobalColors } from "./tokens/colors";
import { Opacities } from "./tokens/opacities";
import { Shadows } from "./tokens/shadows";
import { Spacings } from "./tokens/spacings";
import { Typography } from "./tokens/typography";
import { AppThemeType } from "./types";

const brandColors: BrandColorsType = {
  ...GlobalColors,

  primaryDarkest: "#610D1C",
  primaryDark: "#AD1732",
  primaryBase: "#E11E42",
  primaryLight: "#E6637B",
  primaryLightest: "#FADFE4",

  secondaryDarkest: "#160F41",
  secondaryDark: "#1D135B",
  secondaryBase: "#2F208C",
  secondaryLight: "#6357B0",
  secondaryLightest: "#E8E4FF",

  brandSecondaryDarkest: "#243380",
  brandSecondaryDark: "#3952CC",
  brandSecondaryBase: "#4867FF",
  brandSecondaryLight: "#94A6FF",
  brandSecondaryLightest: "#EFF2FE",
};

const CustomTheme: AppThemeType = {
  colors: brandColors,
  borders: Borders,
  opacities: Opacities,
  shadows: Shadows,
  spacings: Spacings,
  typography: Typography,
  companyName: "My Theme",
};

export default CustomTheme;
```

### Theme Configuration

Access the `index.ts` file in the folder `templates > lib > theme > index.ts` and add your theme:

```ts
import CustomTheme from "./custom-theme";

export enum Themes {
  coop = "coop",
  sample = "sample",
  customTheme = "customTheme",
}

const THEMES: Record<Themes, AppThemeType> = {
  coop: ExampleTheme,
  sample: SampleTheme,
  customTheme: CustomTheme,
};
```

## Using the Theme

To use the created theme, we first need to adjust our component by using a hook called `useTheme`, which is responsible for returning the current theme.

```tsx
import { useTheme } from "templates/lib/theme";
```

Now, just use the `useTheme` hook to access the current theme.

```tsx
const theme = useTheme();
```

Now we can use all the theme properties.

Example:

```tsx
return (
  <div>
    <Text title={theme.colors.brandSecondaryDark} color="primaryBase">
      Example:
      {theme.companyName}
    </Text>

    <img src={theme.logo} alt="logo" />
  </div>
);
```

To use the created theme, simply pass the name of the theme in the generation endpoint in the `theme` property.

```json
{
  "theme": "customTheme", // theme name
  "templateName": "FirstComponent",
  "templateProps": {
    "title": "First"
  }
}
```

Feel free to customize the theme according to your needs. Add new properties, remove existing ones, or create a new theme from scratch. Just remember that the theme needs to follow the `AppThemeType` structure.

```ts
export type AppThemeType = {
  borders: BordersType;
  colors: BrandColorsType;
  opacities: OpacitiesType;
  shadows: ShadowsType;
  spacings: SpacingsType;
  typography: TypographyType;
  logo: string;
  companyName: string;
};
```
