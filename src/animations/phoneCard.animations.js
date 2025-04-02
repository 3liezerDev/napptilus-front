export const overlayVariants = {
    rest: { height: '0%' },
    hover: { height: '100%' },
  };
  
  export const fadeVariant = {
    rest: {
      color: '#000',
      y: 0,
      opacity: 1,
      transition: { duration: 0.1 },
    },
    hover: {
      color: '#fff',
      y: 0,
      opacity: 1,
      transition: { duration: 0.05 },
    },
  };
  
  export const instantFade = {
    rest: {
      color: '#000',
      y: 0,
      opacity: 1,
      transition: { duration: 0.001 },
    },
    hover: {
      color: '#fff',
      y: 0,
      opacity: 1,
      transition: { duration: 0.001 },
    },
  };
  