// src/styles/theme.ts
export const theme = {
  colors: {
    primary: '#00D1B2',
    primaryHover: '#05BD9E',
    text: '#111',
    textMedium: '#555',
    textLight: '#666',
    textMuted: '#999',
    bg: '#fff',
    bgLight: '#fafafa',
    bgGray: '#f8f9fa',
    bgDark: '#111',
    border: '#eaeaea',
    borderLight: '#efefef',
    danger: '#ff6b6b',
    info: '#f0f7ff',
    dangerBg: '#fff5f5',
  },
  fonts: {
    heading: "'Plus Jakarta Sans', 'Pretendard', sans-serif",
    body: "'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
};

export type Theme = typeof theme;