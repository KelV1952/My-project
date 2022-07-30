import { row, col, css } from './utils';

function title(blok) {
  const { tag = 'h3', styles } = blok.options;
  return row(col(`<${tag}>${blok.value}</${tag}>`), css(styles));
}
function text(blok) {
  return row(col(`<p>${blok.value}</p>`), css(blok.options.styles));
}

function columns(blok) {
  const html = blok.value.map(col).join('');
  return row(html, css(blok.options.styles));
}

function image(blok) {
  const { imageStyles:is, alt = '', styles } = blok.options;
  return row(`<img src="${blok.value}" alt="${alt}" style="${css(is)}" />`, css(styles)
  );
}

export const templates = {
  title,
  text,
  columns,
  image,
};
