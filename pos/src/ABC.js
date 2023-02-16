class Product {
    constructor(products_id, product_name, image_url, category, product_price) {
      this._products_id = products_id;
      this._product_name = product_name;
      this._image_url = image_url;
      this._category = category;
      this._product_price = product_price;
    }
  
    get products_id() {
      return this._products_id;
    }
  
    set products_id(value) {
      this._products_id = value;
    }
  
    get product_name() {
      return this._product_name;
    }
  
    set product_name(value) {
      this._product_name = value;
    }
  
    get image_url() {
      return this._image_url;
    }
  
    set image_url(value) {
      this._image_url = value;
    }
  
    get category() {
      return this._category;
    }
  
    set category(value) {
      this._category = value;
    }
  
    get product_price() {
      return this._product_price;
    }
  
    set product_price(value) {
      this._product_price = value;
    }
  }