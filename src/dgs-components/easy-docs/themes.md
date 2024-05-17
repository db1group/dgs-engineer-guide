---
outline: deep
---

# Temas

## Introdução

Os temas são uma maneira de personalizar a aparência do Easy Docs. Você pode criar um tema personalizado para corresponder à identidade visual da sua empresa ou simplesmente para adicionar um pouco de personalidade ao seu PDF.

Inicialmente, o Easy Docs vem com um tema padrão, mas você pode criar um novo tema ou modificar o tema padrão para atender às suas necessidades ou criar um tema completamente novo.

Vamos criar um novo tema chamado `custom-theme` e personalizá-lo.

## Criando um novo tema

Navegue até a pasta `templates > lib > theme`

`Crie um novo arquivo chamado `custom-theme.ts`.

O easy docs oferece diversos token para personalizar o tema, importe eles no seu arquivo `custom-theme.ts`:

Exemplo de tema

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
  companyName: "Meu tema",
};

export default CustomTheme;
```

### Configuração do tema

Acesse o arquivo `index.ts` na pasta `templates > lib > theme > index.ts`
e adicione seu tema;

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

## Utilizando o tema

Para utilizar o tema criado, vamos precisar primeiro ajustar nosso componente, utilizando um
Hook chamado `useTheme` que é responsável por retornar o tema atual.

```tsx
import { useTheme } from "templates/lib/theme";
```

e agora basta utilizar o hook `useTheme` para acessar o tema atual.

```tsx
const theme = useTheme();
```

pronto, agora podemos utilizar todas as propriedades do tema.

Exemplo:

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

Para utilizar o tema criado, basta passar o nome do tema criado no endpoint de geração, na propriedade `theme`.

```json
{
  "theme": "customTheme", // nome do tema
  "templateName": "FirstComponent",
  "templateProps": {
    "title": "First "
  }
}
```

Sinta-se à vontade para personalizar o tema de acordo com suas necessidades, adicione novas propriedades, remova as existentes ou crie um novo tema do zero, só lembre-se que o tema precisa seguir a estrutura de `AppThemeType`

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
