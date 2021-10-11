import { FavoriteItem } from './../models/favorite-item.model';
import { Favorite } from './../models/favorite.model';



export class FavoriteUtil {
  
  public static get(): Favorite {

    // Recupera os dados do LocalStorage
    const data = localStorage.getItem('favorites');

    // Caso não haja dados, retorna um novo carrinho
    if (!data)
      return new Favorite();

    // Caso haja dados, retorna o carrinho
    return JSON.parse(data);
  }

  public static add(_id: string, name: string,email: string, type: string, quanti: number, image: string, price: number,) {
    // Obtém o carrinho
    let cart = this.get();

    // Gera o novo item
    const item = new FavoriteItem (_id, name, email, type, quanti, image, price,);

    // Adiciona ao carrinho
    cart.items.push(item);

    // Salva no localStorage
    localStorage.setItem('favorites', JSON.stringify(cart));
  }
  public static update(favorite: Favorite) {
    // Salva no localStorage
    localStorage.setItem('favorites', JSON.stringify(favorite));
  }

  public static clear() {
    localStorage.removeItem('favorites');
  }

}