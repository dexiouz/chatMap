// import React from 'react';
import styled, {css} from 'styled-components/native';
import {withProp, propOr, fullwidth} from '../style_helpers';

export const Flex = styled.View`
  align-items: ${propOr('alignItems', 'flex-start')};
  justify-content: ${propOr('justifyContent', 'flex-start')};

  margin-top: ${propOr('mt', 0)}px;
  margin-left: ${propOr('ml', 0)}px;
  margin-right: ${propOr('mr', 0)}px;
  margin-bottom: ${propOr('mb', 0)}px;

  ${withProp(
    'pt',
    css`
      padding-top: ${propOr('pt', 0)}px;
    `,
  )}

  ${withProp(
    'pb',
    css`
      padding-bottom: ${propOr('pb', 0)}px;
    `,
  )}

  ${withProp(
    'py',
    css`
      padding-vertical: ${propOr('py', 0)}px;
    `,
  )}

  ${withProp(
    'px',
    css`
      padding-right: ${propOr('px', 0)}px;
      padding-left: ${propOr('px', 0)}px;
    `,
  )}

  ${withProp(
    'mx',
    css`
      margin-right: ${propOr('mx', 0)}px;
      margin-left: ${propOr('mx', 0)}px;
    `,
  )}

  ${withProp(
    'my',
    css`
      margin-top: ${propOr('my', 0)}px;
      margin-bottom: ${propOr('my', 0)}px;
    `,
  )}
  
  ${withProp(
    'fullwidth',
    `
      width: 100%;
    `,
  )}
  

  ${fullwidth}

  ${withProp(
    'alignSelf',
    `
      align-self: ${a => a.alignSelf || 'flex-start'};
    `,
  )}

  ${withProp(
    'outline',
    `
      border: solid 1px black;
    `,
  )}

  ${withProp(
    'flex',
    `
      flex: ${a => a.flex || '0 0'};
    `,
  )}
`;

Flex.Row = styled(Flex)`
  flex-direction: row;
`;

export default Flex;
