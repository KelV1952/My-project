import {col,css,row} from '../utils';


class Blok {
   constructor(value,options){
      //this.type = type;
      this.value = value;
      this.options = options;
   }
   toHTML() {
      throw new Error('метод toHTML должен быть реализован');
   }
}

export class TitleBlok extends Blok {
   constructor(value,options){
      super(value,options)
   }
   toHTML(){
      const {tag='',styles} = this.options;
      return row(col(`<${tag}> ${this.value}</${tag}>`),css(styles));
   }
}

export class ImageBlok extends Blok {
   constructor(value,options){
      super( value,options);
   }

   toHTML(){
      const {imageStyles:is,alt='',styles} = this.options; 
      return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}" />`, css(styles));
   }
}

export class ColumnsBlok extends Blok {
   constructor(value,options){
      super(value,options)
   }
   toHTML(){
      const html = this.value.map(col).join('');
      return row(html, css(this.options.styles));
   }
}
export class TextBlok extends Blok {
   constructor(value,options){
      super(value,options);
   }
   toHTML(){
       return row(col(`<p>${this.value}</p>`), css(this.options.styles));
   }
}