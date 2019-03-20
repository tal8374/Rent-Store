export class Product {
  _id: string;
  title: string;
  price: number;
  category: string;
  image: string;

  constructor(init?: Partial<Product>) {
    if(init) {
      this._id = init._id;
      this.title = init.title;
      this.price = init.price;
      this.category = init.category;
      this.image = init.image;
    }
  }

}
