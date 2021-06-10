import React from 'react';
import {Paragraph} from '../Typography';
import BackArrow from './BackArrow';
import Close from './Close';
import Heart, {HeartFill} from './Heart';
import Map from './Map';
import GPS from './GPS';
import PinMap from './PinMap';
import More from './More';
import MoreX from './MoreX';
import Star from './Star';
import BackgroundCheck from './BackgroundCheck';

const IconNameMap = Object.freeze({
  back: BackArrow,
  heart: Heart,
  'heart-filled': HeartFill,
  'map-pin': PinMap,
  map: Map,
  gps: GPS,
  more: More,
  star: Star,
  'more-x': MoreX,
  background: BackgroundCheck,
  x: Close,
});

export default function RefIcon(props) {
  const Icon = IconNameMap[props.name];

  return !Icon ? (
    <Paragraph>'?'</Paragraph>
  ) : (
    <Icon size={props.size} color={props.color} />
  );
}
