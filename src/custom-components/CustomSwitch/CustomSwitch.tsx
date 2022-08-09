import React from 'react';
import StyledCustomSwitch from './StyledCustomSwitch';

type HexColor = `#${string}`;

type Props = {
  darkThemeTrackBackgroundColor?: HexColor;
  lightThemeTrackBackgroundColor?: HexColor;
  darkThemeSwitchThumbColor?: HexColor;
  lightThemeSwitchThumbColor?: HexColor;
  textColor?: HexColor;
};

const CustomSwitch = ({
  darkThemeTrackBackgroundColor = '#8796A5',
  lightThemeTrackBackgroundColor = '#aab4be',
  darkThemeSwitchThumbColor = '#003892',
  lightThemeSwitchThumbColor = '#001e3c',
  textColor = '#fff',
}: Props) => {
  return (
    <StyledCustomSwitch
      darkThemeTrackBackgroundColor={darkThemeTrackBackgroundColor}
      lightThemeTrackBackgroundColor={lightThemeTrackBackgroundColor}
      darkThemeSwitchThumbColor={darkThemeSwitchThumbColor}
      lightThemeSwitchThumbColor={lightThemeSwitchThumbColor}
      textColor={textColor}
    />
  );
};

export default CustomSwitch;
