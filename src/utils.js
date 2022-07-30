export function row(content, styles = '') {
  return `<div class="row" style="${styles}">${content}</div>`;
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`;
}

export function css(styles = {}) {
  if(typeof styles ==='string') return styles;
  // const keys = Object.keys(styles);
  //   const array = keys.map(key=>{
  //     return `
  //       ${key}:${styles[key]}
  //     `
  //   })
  //   return array.join(';')

  //return Object.keys(styles).map(key=> ` ${key}:${styles[key]}`).join(';')

  const toString = key => `${key}:${styles[key]}`;
  return Object.keys(styles).map(toString).join(';');
}
export function blok(type) {
  return `
  <form name="${type}">
     <h5>${type}</h5>
     <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value"
     </div>
     <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles"
     </div>
     <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
  </form>
  <hr/>
  `
}

