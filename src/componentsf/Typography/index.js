import {Platform} from 'react-native';
import styled, {css} from 'styled-components/native';
import {colors, responsive, withProp} from '../style_helpers';

const displayFont = Platform.OS === 'ios' ? 'System' : 'System';

const boldFont = css`
  ${e =>
    e.bold &&
    css`
      ${Platform.OS === 'ios'
        ? 'font-weight: bold '
        : 'font-family: Rubik-Regular'};
    `}

  ${e =>
    e.bolder &&
    css`
      ${Platform.OS === 'ios'
        ? 'font-weight: 800 '
        : 'font-family: Rubik-Bold'};
    `}
`;

export const H1 = styled.Text`
  font-family: ${displayFont};
  letter-spacing: -2px;
  font-size: 35px;
  ${boldFont}
`;

export const H2 = styled.Text`
  font-family: ${displayFont};
  font-size: 28px;
  ${boldFont}
`;

export const H3 = styled.Text`
  font-family: ${displayFont};
  font-size: ${responsive([22, 24, 26])}px;
  ${boldFont}
`;

export const H4 = styled.Text`
  font-family: ${displayFont};
  font-size: ${responsive([18, 20])}px;
  ${boldFont}
`;

export const Paragraph = styled.Text`
  color: ${colors('text')};
  font-family: ${displayFont};
  font-size: ${responsive([16])}px;
  line-height: 26px;
  ${boldFont}

  ${withProp(
    'small',
    css`
      font-size: 14px;
      line-height: 14px;
    `,
  )}
`;

export const Lead = styled(Paragraph)`
  color: ${colors('text')};
  font-weight: bold;
`;

export const SmallText = styled(Paragraph)`
  font-size: 12px;
  letter-spacing: 2px;
`;

export const ButtonText = styled(Paragraph).attrs({
  allowFontScaling: false,
})`
  font-size: ${responsive([16])}px;
  line-height: 16px;

  ${withProp(
    'small',
    css`
      font-size: 16px;
      line-height: 16px;
      font-weight: normal;
    `,
  )}
`;
