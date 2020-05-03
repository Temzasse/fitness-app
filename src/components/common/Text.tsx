import styled, { DefaultTheme } from 'styled-components';

type Variant = keyof DefaultTheme['typography'];
type Tags = keyof JSX.IntrinsicElements;

type Props = {
  variant: Variant;
  color?: keyof DefaultTheme['colors'];
  as?: Tags;
};

const variantToTag: { [key in Variant]: Partial<Tags> } = {
  'title-1': 'h1',
  'title-2': 'h2',
  'title-3': 'h3',
  body: 'p',
};

const getAttrs = (p: Props) => ({ as: p.as || variantToTag[p.variant] });

const Text = styled.span.attrs(getAttrs)<Props>`
  margin: 0;
  color: ${(p) => p.theme.colors.black};
  ${(p) => p.theme.typography[p.variant]}
  ${(p) => p.color && `color: ${p.theme.colors[p.color]};`}
`;

export default Text;
