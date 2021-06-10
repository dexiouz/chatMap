import {_responsive, platform} from '../components/style_helpers';

const SPACING = 8;

export default {
  colors: {
    primary: '#F74300',
    accent: '#fda',
    background: '#F0F0F0',
    notification: '#f50057',
    text: '#272755',
    white: '#FFFFFF',
    whitesmoke: '#FAFAFA',
    _1: 'rgba(37,116,255, 0.3)',
    _2: '#9393AA',
    _3: '#E0E0E0',
    _4: '#FE9870',
    _5: '#95BBDF',
    _6: '#FF6571', // red
    _7: '#9393AA',
    _8: '#00D65B', // green last-modified
    _9: '#B3F2BF',
    _10: '#0EAD69',
    _11: '#53D0EC',
    _12: '#2574FF', // blue
    pattern1: '#364B6F',
    shadow: 'rgba(0,0,0,.16)',
    coloredShadow: 'rgba(3, 255, 220, 0.16)',
  },
  card: {
    bg: '#24A2C9', //'#FCF5F5',
    headerBg: 'rgba(0, 0, 0, 0.12)',
  },
  responsive: _responsive,
  platform,
  gutter: {
    sm: 8,
    md: 24,
    lg: 48,
    statusBar: _responsive([24, 56]),
    padded: _responsive([16, 32]),
    SPACING,
  },
};
