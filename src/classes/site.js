export class Site {
   constructor(selector){
      this.$el = document.querySelector(selector)
   }
   render(model) {
      this.$el.innerHTML='';
      model.forEach(blok => {
         this.$el.insertAdjacentHTML('beforeend', blok.toHTML());
       
      })
   }

}