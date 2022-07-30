import { model } from './model';
import {Site} from './classes/site';
import './styles/main.css';
import { Sidebar } from './classes/sidebar';

const site = new Site('#site');

site.render(model);

const updateCallback = newBlok => {
   model.push(newBlok);
   site.render(model);
}
new Sidebar('#panel',updateCallback)
  



