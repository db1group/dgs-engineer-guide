---
outline: deep
---
# Temas

## Introducción

Los temas son una forma de personalizar la apariencia de Easy Docs. Puedes crear un tema personalizado para que coincida con la identidad visual de tu empresa o simplemente para agregar un poco de personalidad a tu PDF.

Inicialmente, Easy Docs viene con un tema predeterminado, pero puedes crear un nuevo tema o modificar el tema predeterminado para satisfacer tus necesidades o crear un tema completamente nuevo.

Vamos a crear un nuevo tema llamado `custom-theme` y personalizarlo.

## Creando un nuevo tema

Navega hasta la carpeta `templates > lib > theme`

Crea un nuevo archivo llamado `custom-theme.ts`.

Easy Docs ofrece varios tokens para personalizar el tema, impórtalos en tu archivo `custom-theme.ts`:

Ejemplo de tema:

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
  companyName: "Mi tema",
};

export default CustomTheme;
```

### Configuración del tema

Accede al archivo `index.ts` en la carpeta `templates > lib > theme > index.ts`
y añade tu tema:

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

## Utilizando el tema

Para utilizar el tema creado, primero necesitaremos ajustar nuestro componente, utilizando un Hook llamado `useTheme` que es responsable de devolver el tema actual.

```tsx
import { useTheme } from "templates/lib/theme";
```

Y ahora solo necesitas usar el hook `useTheme` para acceder al tema actual.

```tsx
const theme = useTheme();
```

Listo, ahora podemos utilizar todas las propiedades del tema.

Ejemplo:

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

Para utilizar el tema creado, solo pasa el nombre del tema creado en el endpoint de generación, en la propiedad `theme`.

```json
{
  "theme": "customTheme", // nombre del tema
  "templateName": "FirstComponent",
  "templateProps": {
    "title": "First "
  }
}
```

Siéntete libre de personalizar el tema de acuerdo con tus necesidades, añade nuevas propiedades, elimina las existentes o crea un nuevo tema desde cero, solo recuerda que el tema necesita seguir la estructura de `AppThemeType`.

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