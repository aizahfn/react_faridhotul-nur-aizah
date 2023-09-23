import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreateProduct() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [language, setLanguage] = useState("en");
  const [productName, setProductName] = useState("");
  const [productNameError, setProductNameError] = useState("");
  const [products, setProducts] = useState([]);
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productNumber, setProductNumber] = useState("");

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 100);
    console.log("Random Number:", random);
    setRandomNumber(random);
  };

  const handleProductChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleProductNameChange = (event) => {
    const value = event.target.value;
    setProductName(value);
    //Validasi value tidak boleh lebih dari 25 karakter
    if (value.length > 25) {
      setProductNameError(alert("Product Name must not exceed 25 characters."));
    } else {
      setProductNameError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!productName) {
      alert("Please enter a valid product name.");
      return;
    }

    //Generate nomor unik
    const uniqueNumber = generateUniqueNumber();

    //Menambahkan produk baru ke dalam state
    setProducts([
      ...products,
      {
        no: uniqueNumber,
        productName: productName,
        productCategory: newProduct.productCategory,
        productFreshness: newProduct.productFreshness,
        productPrice: newProduct.productPrice,
      },
    ]);

    //Reset input fields setelah submit
    setNewProduct({
      productName: "",
      productCategory: "",
      productFreshness: "",
      productPrice: "",
    });
  };

  const [newProduct, setNewProduct] = useState({
    productName: "",
    productCategory: "",
    productFreshness: "",
    productPrice: "",
  });

  const generateUniqueNumber = () => {
    const uniqueNumber = uuidv4();
    return uuid.v4();
  };

  //Alert welcome
  useEffect(() => {
    alert("Welcome");
  }, []);

  const article = {
    title: {
      id: "Buat Akun",

      en: "Create Account",
    },

    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",

      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
    },
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            style={{ fontWeight: "bold", color: "black" }}
            href="#"
          >
            Simple Header
          </a>
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row gap-">
              <li className="nav-item">
                <a
                  className="nav-link btn btn-primary active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-light" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-light" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-light" href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-light" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <button
        className="my-3 bg-primary col-md-3 border-0 rounded-3 text-light col-4"
        onClick={() => setLanguage(language === "en" ? "id" : "en")}
      >
        Change Language
      </button>
      <br />
      <div className="row text-center align-items-center">
        <div className="col-12 text-center">
          <img
            src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
            style={{ width: "71.529px", height: "57px", flexShrink: 0 }}
            alt="landing image"
          />
        </div>
      </div>
      <div className="row text-center align-items-center">
        <div className="col-12 text-center">
          <h1 className="text-center">{article.title[language]}</h1>
          <p className="text-center">{article.description[language]}</p>
        </div>
      </div>
      <div className="row text-center align-items-center width: 656px; height: 936px;">
        <div className="col-12 text-center">
          <h3>Detail Product</h3>
        </div>
      </div>
      <form
        className="col-12 text-align-left"
        style={{ marginLeft: "30%" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="productName">Product Name : </label>
        <br />
        <input
          id="product-name"
          name="productName"
          type="text"
          placeholder="Product Name"
          required
          value={productName}
          onChange={handleProductNameChange}
        />
        {productNameError && (
          <div className="error" style={{ color: "red" }}>
            {productNameError}
          </div>
        )}

        <br />
        <label htmlFor="productCategory">Product Category : </label>
        <br />
        <select
          id="product-category"
          name="productCategory"
          type="option"
          placeholder="Product Category"
          required
          value={newProduct.productCategory}
          onChange={handleProductChange}
        >
          <option value />
          <option value="TV">TV</option>
          <option value="Radio">Radio</option>
          <option value="Speaker">Speaker</option>
        </select>
        <br />
        <br />
        <label htmlFor="image">Image of Product</label>
        <br />
        <div
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autoComplete="off"
            defaultChecked
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio1">
            Choose File
          </label>
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">
            File Choosen
          </label>
        </div>
        <br />
        <br />
        <label
          htmlFor="productFreshness"
          id="product-freshness"
          name="productFreshness"
        >
          Product Freshness :{" "}
        </label>
        <br />
        <input
          type="radio"
          id="brandNew"
          name="productFreshness"
          value="Brand New"
        />
        <label htmlFor="brandNew">Brand New</label>
        <br />
        <input
          type="radio"
          id="Second Hank"
          name="Second Hank"
          defaultValue="Second Hank"
        />
        <label htmlFor="Second Hank">Second Hank</label>
        <br />
        <input
          type="radio"
          id="Refurbished"
          name="Refurbished"
          defaultValue="Refurbished"
        />
        <label htmlFor="Refurbished">Refurbished</label>
        <br />
        <br />
        <label htmlFor="additionalDescription">Additional Description</label>
        <br />
        <textarea
          type="text"
          name="additionalDescription"
          className="form-control"
          id="additional-description"
          required
          rows={5}
          defaultValue={"            "}
        />
        <label htmlFor="productPrice">Product Price : </label>
        <br />
        <input
          id="product-price"
          name="productPrice"
          type="number"
          placeholder="$ 100"
          required
          value={newProduct.productPrice}
          onChange={handleProductChange}
        />
        <div className="error" />
        <br />
        <div
          className="d-grid gap-2"
          style={{
            height: "7vh",
            width: "50%",
            padding: "6px 86px 6px 10px",
          }}
        >
          <div
            className="d-grid gap-2"
            style={{
              height: "7vh",
              width: "50%",
              padding: "6px 86px 6px 10px",
            }}
          >
            <button
              className="btn btn-primary"
              onClick={generateRandomNumber}
              type="button"
            >
              Random Number
            </button>
          </div>

          <button
            className="btn btn-primary"
            onclick="checkForm()"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div>
        <h2>Product List</h2>
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Product Freshness</th>
              <th>Product Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.no}</td>
                <td>{product.productName}</td>
                <td>{product.productCategory}</td>
                <td>{product.productFreshness}</td>
                <td>{product.productPrice}</td>
              </tr>
            ))}
            {newProduct.productName && (
              <tr>
                <td>{generateUniqueNumber()}</td>
                <td>{productName}</td>
                <td>{newProduct.productCategory}</td>
                <td>{newProduct.productFreshness}</td>
                <td>{newProduct.productPrice}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export { CreateProduct };
