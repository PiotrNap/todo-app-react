export default {
  down(size) {
    const sizes = {
      md: '950px',
      sx: '545px',
    };

    return `@media screen and (max-width: ${sizes[size]})`;
  },
};
