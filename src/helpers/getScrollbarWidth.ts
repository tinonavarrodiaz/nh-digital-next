export const getScrollBarWidth = () => {
  console.log(
    window.innerWidth - document.documentElement.getBoundingClientRect().width
  );
  return (
    window.innerWidth - document.documentElement.getBoundingClientRect().width
  );
};
