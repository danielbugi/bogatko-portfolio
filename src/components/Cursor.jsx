// import { useEffect, useState } from 'react';

import AnimatedCursor from 'react-animated-cursor';
import { useThemeContext } from '../context/ThemeContext';

const Cursor = () => {
  const { isDarkTheme } = useThemeContext();

  const cursorColor = isDarkTheme ? '255,255,255' : '0,0,0';

  const backgroundGradient = isDarkTheme
    ? 'radial-gradient(circle, rgba(151, 168, 255, 0.2) 0%, rgba(252, 70, 107, 0) 50%)'
    : 'radial-gradient(circle, rgba(255, 255, 255, 0.202) 0%, rgba(252, 70, 107, 0) 50%)';

  return (
    <AnimatedCursor
      color={cursorColor}
      innerSize={20}
      outerSize={750}
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={1}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
      ]}
      outerStyle={{
        zIndex: '997',
        background: backgroundGradient,
      }}
    />
  );
};

export default Cursor;
