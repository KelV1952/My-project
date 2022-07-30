import { blok } from '../utils';
import { TextBlok, TitleBlok } from './Bloks';

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector);
    this.update = updateCallback;
    this.init();
  }
  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    this.$el.addEventListener('submit', this.add.bind(this));
  }
  get template() {
    return [blok('text'), blok('title')].join('');
  }

  add(event) {
    event.preventDefault();
    //console.log(event.target);

    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;

    let newBlok;

    // if (type === 'text') {
    //   newBlok = new TextBlok(value, { styles });
    // } else {
    //   newBlok = new TitleBlok(value, { styles });
    // }
    newBlok =
      type === 'text'
        ? newBlok = new TextBlok(value, { styles })
        : newBlok = new TitleBlok(value, { styles })

       this.update(newBlok);

    event.target.value.value = '';
    event.target.styles.value = '';
  }
}
