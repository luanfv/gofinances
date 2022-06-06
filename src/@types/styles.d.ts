import 'styled-components';

interface IStyleGuide {
  colors: {
    primary: string;

    secondary: string;
    secondary_light: string;

    success: string;
    success_light: string;

    attention: string;
    attention_light: string;

    shape: string;
    title: string;
    text: string;
    background: string;
  };
}

declare module 'styled-components/native' {
  export interface DefaultTheme extends IStyleGuide {}
}

export { IStyleGuide };
