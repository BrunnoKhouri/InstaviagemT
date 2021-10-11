import { CartItem } from "../models/cart-item.model";
import { Cart } from "../models/cart.model";

export class CartUtil {
  
  public static get(): Cart {

    // Recupera os dados do LocalStorage
    const data = localStorage.getItem('shopcart');

    // Caso não haja dados, retorna um novo carrinho
    if (!data)
      return new Cart();

    // Caso haja dados, retorna o carrinho
    return JSON.parse(data);
  }

  public static add(_id: string, name: string,quanti: number, image: string, price: number,) {
    // Obtém o carrinho
    let cart = this.get();

    // Gera o novo item
    const item = new CartItem(_id, name, quanti, image, price,);

    // Adiciona ao carrinho
    cart.items.push(item);

    // Salva no localStorage
    localStorage.setItem('shopcart', JSON.stringify(cart));
  }
  public static update(cart: Cart) {
    // Salva no localStorage
    localStorage.setItem('shopcart', JSON.stringify(cart));
  }

  public static clear() {
    localStorage.removeItem('shopcart');
  }

}