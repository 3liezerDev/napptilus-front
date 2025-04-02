export const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  
  export const cardItem = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.3 },
  };
  