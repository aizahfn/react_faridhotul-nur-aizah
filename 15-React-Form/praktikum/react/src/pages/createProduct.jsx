import { useState } from "react";
import "../styles/createProduct.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "../assets/bootstrap-logo.svg.png";
import { Link } from "react-router-dom";
import ProductDetail from "./productDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [productNameError, setProductNameError] = useState("");
  const [products, setProducts] = useState([]);
  const [uniqueId, setUniqueId] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFreshness, setSelectedFreshness] = useState("");
  const [additionalDescription, setadditionalDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const [productPriceError, setProductPriceError] = useState("");

  const addProduct = () => {
    if (productNameError === "") {
      const newProduct = {
        id: uniqueId,
        productName,
        productCategory: selectedCategory,
        productFreshness: selectedFreshness,
        productPrice,
        additionalDescription,
        productImage,
      };
      setProducts([...products, newProduct]);
      setUniqueId(uniqueId + 1);
      setProductName("");
      setSelectedCategory("");
      setSelectedFreshness("");
      setProductPrice("");
      setadditionalDescription("");
      setProductImage("");
    }
  };

  const showDeleteConfirmation = (item) => {
    setItemToDelete(item);
    setShowDeleteModal(true);
  };
  const confirmDeleteItem = () => {
    const updatedProducts = products.filter(
      (product) => product.id !== itemToDelete.id
    );
    setProducts(updatedProducts);
    setShowDeleteModal(false);
  };

  // Validasi product name
  const handleProductNameChange = (e) => {
    const newName = e.target.value;
    setProductName(newName);

    const regex = /^[A-Za-z\s]{1,25}$/;
    if (!regex.test(newName)) {
      setProductNameError("Product Name is not valid.");
    } else {
      setProductNameError("");
    }
  };

  // Validasi product category
  const validateProductCategory = (category) => {
    const validCategories = ["Television", "Radio", "Speaker"];
    return validCategories.includes(category);
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);

    if (!validateProductCategory(newCategory)) {
      setSelectedCategoryError("Invalid category selected.");
    } else {
      setSelectedCategoryError("");
    }
  };

  // Validasi product freshness
  const validateProductFreshness = (freshness) => {
    const validFreshnessOptions = ["Brand New", "Second Hand", "Refurbished"];
    return validFreshnessOptions.includes(freshness);
  };

  const handleFreshnessChange = (e) => {
    const newFreshness = e.target.value;
    setSelectedFreshness(newFreshness);

    if (!validateProductFreshness(newFreshness)) {
      setSelectedFreshnessError("Invalid freshness selected.");
    } else {
      setSelectedFreshnessError("");
    }
  };

  // Validasi product price
  const handleProductPriceChange = (e) => {
    const newPrice = e.target.value;
    setProductPrice(newPrice);

    if (!/^\d+(\.\d{0,2})?$/.test(newPrice)) {
      setProductPriceError("Invalid price format.");
    } else {
      setProductPriceError("");
    }
  };

  const article = {
    title: {
      id: "Buat Akun",
      en: "Create Account",
    },
    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
    },
    produkname: {
      id: "Nama Produk :",
      en: "Product Name :",
    },
    category: {
      id: "Kategori Produk :",
      en: "Product Category :",
    },
    image: {
      id: "Gambar Produk :",
      en: "Image of Product :",
    },
    kesegaran: {
      id: "Kesegaran Produk :",
      en: "Product Freshness :",
    },
    deskripsi: {
      id: "Deskripsi Tambahan :",
      en: "Additional Description :",
    },
    harga: {
      id: "Harga Produk :",
      en: "Product Price :",
    },
  };
  const [language, setLanguage] = useState("en");
  const [randomNumber, setRandomNumber] = useState(0);
  const [productPrice, setProductPrice] = useState("");

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRandomNumber);
    console.log("angka random: ", newRandomNumber);
    setProductPrice(newRandomNumber);
  };
  return (
    <div>
      <div className="container align-self-center my-3">
        <button
          className="my-auto bg-primary border-0 rounded-3 text-light mx-auto d-block col-lg-3"
          onClick={() => setLanguage(language === "en" ? "id" : "en")}
        >
          Ubah Bahasa / Change Language
        </button>
      </div>
      <div className="container align-self-center my-3">
        <img
          src={logo}
          className="img-fluid rounded mx-auto d-block"
          alt="logo"
        />
        <h1 className="text-center">{article.title[language]}</h1>
        <p className="text-center">{article.description[language]}</p>
        <h3 className="text-center">Detail Product</h3>
      </div>
      <div className="container my-5">
        <Form className="row justify-content-center">
          <div className="col-lg-6 ">
            <Form.Group className="col-md-6 mb-3" controlId="nameProduct">
              <Form.Label>{article.produkname[language]}</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={productName}
                onChange={handleProductNameChange}
              />
              {productNameError && (
                <div className="text-danger">{productNameError}</div>
              )}
            </Form.Group>
            <Form.Group className="col-md-6 mb-3" controlId="categoryProduct">
              <Form.Label>{article.category[language]}</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value=""></option>
                <option value="Television">Television</option>
                <option value="Radio">Radio</option>
                <option value="Speaker">Speaker</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="col-md-6 mb-3" controlId="imageProduct">
              <Form.Label>{article.image[language]}</Form.Label>
              <Form.Control
                type="file"
                size="sm"
                onChange={(e) => setProductImage(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group className="col-md-6 mb-3" controlId="stockProduct">
              <Form.Label>{article.kesegaran[language]}</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  id="brandNew"
                  label="Brand New"
                  name="freshness"
                  value="Brand New"
                  checked={selectedFreshness === "Brand New"}
                  onChange={(e) => setSelectedFreshness(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  id="secondHand"
                  label="Second Hand"
                  name="freshness"
                  value="Second Hand"
                  checked={selectedFreshness === "Second Hand"}
                  onChange={(e) => setSelectedFreshness(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  id="refurbished"
                  label="Refurbished"
                  name="freshness"
                  value="Refurbished"
                  checked={selectedFreshness === "Refurbished"}
                  onChange={(e) => setSelectedFreshness(e.target.value)}
                />
              </div>
            </Form.Group>
            <Form.Group
              className="col-md-6 mb-3"
              controlId="descriptionProduct"
            >
              <Form.Label>{article.deskripsi[language]}</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={additionalDescription}
                onChange={(e) => setadditionalDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="col-md-6 mb-3" controlId="priceProduct">
              <Form.Label>{article.harga[language]}</Form.Label>
              <Form.Control
                type="number"
                placeholder="$ 100"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
              <Button
                className="d-grid gap-2 col-md-4 col-4"
                onClick={generateRandomNumber}
              >
                Random Number
              </Button>
            </Form.Group>
            <Button
              className="d-grid gap-2 col-md-4 col-4"
              as="input"
              type="button"
              value="Submit"
              onClick={addProduct}
              disabled={productNameError !== ""}
            />
          </div>
        </Form>
      </div>
      <h2>List Product</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Category</th>
            <th scope="col">Product Freshness</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Description</th>
            <th scope="col">Product Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <Link to={`/product/${product.id}`}>{product.id}</Link>
              {/* <td>{index + 1}</td> */}
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.productFreshness}</td>
              <td>{product.productPrice}</td>
              <td>{product.additionalDescription}</td> {}
              <td>
                {product.productImage && (
                  <img
                    src={URL.createObjectURL(product.productImage)}
                    alt="Product"
                    width="50"
                  />
                )}{" "}
                {}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => showDeleteConfirmation(product)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {}
      {showDeleteModal && (
        <div className="container my-3">
          <div className="delete-modal row justify-content-center">
            <p>Apakah anda yakin ingin menghapus?</p>
            <div className="container my-3 row justify-content-center gap-4">
              <button
                className="btn btn-danger d-grid gap-2 col-md-3 col-4"
                onClick={confirmDeleteItem}
              >
                Delete
              </button>
              <button
                className="btn btn-secondary d-grid gap-2 col-md-3 col-4"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateProduct;
