import {useNavigation} from '@react-navigation/core';
import React from 'react';
import * as R from 'ramda';
import {SafeAreaView, Animated, StatusBar} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

import Theme from '../styles/Theme';
import Flex from './Layouts/Flex';
import {Avatar} from './Account/Avatar';
import {ArrowTransparent} from './Layouts/Back';

const offsetY = new Animated.Value(0);
const scrollInterpolate = R.curry((inputRange, outputRange) => {
  return offsetY.interpolate({
    outputRange,
    inputRange,
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
  });
});

const ProfileScreen = props => {
  const dimen = useWindowDimensions();
  const HERO_HEIGHT = dimen.height * 0.4;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Theme.colors.whitesmoke}}>
      <StatusBar barStyle="dark-content" />
      <Animated.ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {y: offsetY}},
            },
          ],
          {
            useNativeDriver: true,
          },
        )}>
        <Flex>
          <Flex
            fullwidth
            mb={-Theme.gutter.sm * 2}
            style={{
              height: HERO_HEIGHT,
              backgroundColor: 'dodgerblue',
            }}>
            {/* Navigation Header */}
            <Animated.View
              style={{
                width: '100%',
                opacity: scrollInterpolate([0, HERO_HEIGHT - 80], [1, 0]),
                transform: [{translateY: offsetY}],
                zIndex: 4,
              }}>
              <Flex.Row
                fullwidth
                mt={Theme.gutter.sm}
                px={Theme.gutter.sm * 2}
                justifyContent="space-between"
                style={{
                  position: 'absolute',
                }}>
                <ArrowTransparent
                  name="back"
                  onPress={() => {
                    console.log('prssed');
                    navigation.goBack();
                  }}
                />
                <Flex.Row>
                  <ArrowTransparent name="heart" />
                  <Flex ml={Theme.gutter.sm}>
                    <ArrowTransparent
                      name="more-x"
                      onPress={() => {
                        props.onMenuPress && props.onMenuPress();
                      }}
                    />
                  </Flex>
                </Flex.Row>
              </Flex.Row>
            </Animated.View>

            {/* Image Background */}
            <Flex flex={1} fullwidth />
          </Flex>

          <Flex
            fullwidth
            px={Theme.gutter.md}
            py={Theme.gutter.md}
            alignItems="center"
            style={{
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              backgroundColor: Theme.colors.whitesmoke,
            }}>
            <Avatar.Profile src={props.avatar} />
            <props.HeaderComponent />
          </Flex>
        </Flex>
        <Flex
          //   outline
          px={Theme.gutter.md}
          style={{
            paddingBottom: Theme.gutter.md * 5,
            paddingHorizontal: Theme.gutter.md,
            backgroundColor: Theme.colors.whitesmoke,
          }}>
          {/* Horizontal Rule */}
          <Flex
            mb={Theme.gutter.md}
            style={{
              borderBottomWidth: 1,
              borderColor: Theme.colors.background,
            }}
            fullwidth
          />
          {props.children}
        </Flex>
      </Animated.ScrollView>
      {/* Bottom Bar */}
      <Animated.View
        style={{
          transform: [
            {
              translateY: scrollInterpolate(
                [HERO_HEIGHT / 2, HERO_HEIGHT - 40],
                [80, 0],
              ),
            },
          ],
        }}>
        <Flex.Row
          // outline
          px={Theme.gutter.md}
          py={Theme.gutter.sm * 2}
          alignItems="center"
          alignSelf="stretch"
          justifyContent="space-between"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            elevation: 1,
            shadowRadius: 8,
            shadowOpacity: 0.2,
            shadowColor: 'black',
            shadowOffset: {width: 0, height: -2},
            zIndex: 4,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            backgroundColor: Theme.colors.white,
          }}>
          <props.FooterComponent />
        </Flex.Row>
      </Animated.View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
