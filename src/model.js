import image from './assets/image.png';
import { TextBlok,ColumnsBlok,ImageBlok,TitleBlok } from './classes/bloks';

const text =
  'Крутые видео и уроки по Javascript тут:<a href ="https://youtube.com/c/VladMinin" target="_blanc" >Влад Минин';
export const model = [
  new TitleBlok( 'Конструктор сайтов на чистом JS', {
    tag: 'h3',
    styles: {
      background: 'linear-gradient(to right,#ff0099,#493240)',
      color: '#fff',
      'text-align': 'center',
      padding: '1.5rem',
    },
  }),

  new ImageBlok(image,{
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: {
      width: '600px',
      height: 'auto',
    },
    alt: 'Это картинка',
  } ),

new ColumnsBlok([
      
          'Приложение на чистом Javascript, без фремворков',
      'Узнаеш как работают принципы SOLID and OOP в JS',
      ` JS-это просто,интересно и увлекательно. Научись создавать
       любые UI своими руками`,
    ],
    {
      styles: {
        background: 'linear-gradient(to bottom,#8e2de2,#4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold',
      },
    }),

  new TextBlok(text,{
  styles: {
    background: 'linear-gradient(to left,#f2994a,#f2c94c)',
    padding: '1rem',
    'font-weight': 'bold',
  },
  
}),
   

];
