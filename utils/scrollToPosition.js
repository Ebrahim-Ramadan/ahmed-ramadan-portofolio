export const scrollToPosition = (position) => {
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  };