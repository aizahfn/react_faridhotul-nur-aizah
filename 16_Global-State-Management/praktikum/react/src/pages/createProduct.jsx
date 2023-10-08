import { useState } from "react";
import "../styles/createProduct.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "../assets/bootstrap-logo.svg.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProductDetail from "./productDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct, editProduct } from "../utils/redux/actions";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [productNameError, setProductNameError] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPriceError, setProductPriceError] = useState("");
  const [uniqueId, setUniqueId] = useState(2);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productCategoryError, setProductCategoryError] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productImageFile, setProductImageFile] = useState(null);

  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [language, setLanguage] = useState("en");
  const [isEditing, setEditMode] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});

  const navigateToDetails = (productId, newProduct) => {
    navigate(`/details/${productId}`, { state: { product: newProduct } });
  };

  const enableEditProductMode = (product) => {
    setEditMode(true);
    setEditedProduct(product);
    setProductName(product.productName);
    setSelectedCategory(product.productCategory);
    setProductPrice(product.productPrice);
    setProductDescription(product.productDescription);
    setProductImage(product.productImage);
  };

  const saveEditedProduct = () => {
    dispatch(
      editProduct({
        ...editedProduct,
        productName,
        productCategory: selectedCategory,
        productPrice,
        productDescription,
        productImage,
      })
    );
    setEditMode(false);
  };

  const cancelEdit = () => {
    setEditMode(false);
  };

  const deleteProductFromStore = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const addProductToStore = () => {
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
      dispatch(addProduct(newProduct));
      setUniqueId(uniqueId + 1);
      setProductName("");
      setSelectedCategory("");
      setSelectedFreshness("");
      setProductPrice("");
      setadditionalDescription("");
      setProductImageFile(null);
    }
  };

  const handleImageUpload = (file) => {
    if (file) {
      try {
        const imageUrl = URL.createObjectURL(file);
        setProductImage(imageUrl);
        setProductImageFile(file);
      } catch (error) {
        console.error("Failed to create object URL:", error);
      }
    }
  };

  // Validasi product name
  const handleProductNameChange = (e) => {
    const newName = e.target.value;
    setProductName(newName);
    const nameRegex = /^[A-Za-z0-9\s]+$/;

    if (newName.length === 0) {
      setProductNameError("Please enter a valid product name.");
    } else if (newName.length < 10) {
      setProductNameError("Product Name must be at least 10 characters.");
    } else if (newName.length > 25) {
      setProductNameError("Product Name must not exceed 25 characters.");
    } else if (!newName.match(nameRegex)) {
      setProductNameError(
        "Product Name can only contain letters, numbers, and spaces."
      );
    } else {
      setProductNameError("");
    }
  };

  // Validasi product category
  const handleProductCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);

    if (!newCategory) {
      setProductCategoryError("Please select a product category.");
    } else {
      setProductCategoryError("");
    }
  };

  const [productFreshness, setProductFreshness] = useState("");
  const [freshnessError, setFreshnessError] = useState("");
  const freshnessRegex = /^(Brand New|Second Hand|Refurbished)$/;

  // Validasi product freshness
  const handleProductFreshnessChange = (e) => {
    const newFreshness = e.target.value;
    setProductFreshness(newFreshness);

    if (!freshnessRegex.test(newFreshness)) {
      setFreshnessError("Please select a valid product freshness option.");
    } else {
      setFreshnessError("");
    }
  };

  // Validasi product price
  const handleProductPriceChange = (e) => {
    const newPrice = e.target.value;
    setProductPrice(newPrice);

    const priceRegex = /^\d+(\.\d{1,2})?$/;
    if (!priceRegex.test(newPrice) || parseFloat(newPrice) <= 0) {
      setProductPriceError(
        "Product Price must be a positive number with up to 2 decimal places."
      );
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

  const [randomNumber, setRandomNumber] = useState(0);
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
            <Form.Group className="col-md-6 mb-3" controlId="productCategory">
              <Form.Label>{article.category[language]}</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={selectedCategory}
                onChange={handleProductCategoryChange}
              >
                <option value=""></option>
                <option value="Television">Television</option>
                <option value="Radio">Radio</option>
                <option value="Speaker">Speaker</option>
              </Form.Select>
              {productCategoryError && (
                <div className="text-danger">{productCategoryError}</div>
              )}
            </Form.Group>
            <Form.Group
              className="imageProduct col-md-6 mb-3"
              controlId="imageProduct"
            >
              <Form.Label>{article.image[language]}</Form.Label>
              <Form.Control
                type="file"
                size="sm"
                onChange={(e) => handleImageUpload(e.target.files[0])}
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
                  checked={productFreshness === "Brand New"}
                  onChange={handleProductFreshnessChange}
                />
                <Form.Check
                  type="radio"
                  id="secondHand"
                  label="Second Hand"
                  name="freshness"
                  value="Second Hand"
                  checked={productFreshness === "Second Hand"}
                  onChange={handleProductFreshnessChange}
                />
                <Form.Check
                  type="radio"
                  id="refurbished"
                  label="Refurbished"
                  name="freshness"
                  value="Refurbished"
                  checked={productFreshness === "Refurbished"}
                  onChange={handleProductFreshnessChange}
                />
              </div>
              {freshnessError && (
                <div className="text-danger">{freshnessError}</div>
              )}
            </Form.Group>
            <Form.Group
              className="col-md-6 mb-3"
              controlId="descriptionProduct"
            >
              <Form.Label>{article.deskripsi[language]}</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="col-md-6 mb-3" controlId="productPrice">
              <Form.Label>{article.harga[language]}</Form.Label>
              <Form.Control
                type="number"
                placeholder="$ 100"
                value={productPrice}
                onChange={handleProductPriceChange}
              />
              {productPriceError && (
                <div className="text-danger">{productPriceError}</div>
              )}
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
              value={isEditing ? "Save" : "Submit"}
              onClick={isEditing ? saveEditedProduct : addProductToStore}
              disabled={
                (isEditing && productNameError !== "") ||
                (!isEditing && productNameError !== "")
              }
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
              <td>
                {isEditing && editedProduct.id === product.id ? (
                  <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                ) : (
                  product.productName
                )}
              </td>
              <td>
                {isEditing && editedProduct.id === product.id ? (
                  <select
                    value={selectedCategory}
                    onChange={handleProductCategoryChange}
                  >
                    <option value=""></option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="furniture">Furniture</option>
                  </select>
                ) : (
                  product.productCategory
                )}
              </td>
              <td>
                {isEditing && editedProduct.id === product.id ? (
                  <select
                    value={selectedCategory}
                    onChange={handleProductCategoryChange}
                  >
                    <option value=""></option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="furniture">Furniture</option>
                  </select>
                ) : (
                  product.productCategory
                )}
              </td>
              <td>
                {isEditing && editedProduct.id === product.id ? (
                  <div>
                    <input
                      type="radio"
                      id="BrandNew"
                      name="freshness"
                      value="Brand New"
                      checked={productFreshness === "Brand New"}
                      onChange={handleProductFreshnessChange}
                    />
                    <label htmlFor="BrandNew">Brand New</label>
                    <input
                      type="radio"
                      id="SecondHand"
                      name="freshness"
                      value="Second Hand"
                      checked={productFreshness === "Second Hand"}
                      onChange={handleProductFreshnessChange}
                    />
                    <label htmlFor="SecondHand">Second Hand</label>
                    <input
                      type="radio"
                      id="Refurbished"
                      name="freshness"
                      value="Refurbished"
                      checked={productFreshness === "Refurbished"}
                      onChange={handleProductFreshnessChange}
                    />
                    <label htmlFor="Refurbished">Refurbished</label>
                  </div>
                ) : (
                  product.productFreshness
                )}
              </td>
              <td>
                {isEditing && editedProduct.id === product.id ? (
                  <input
                    type="number"
                    value={productPrice}
                    onChange={handleProductPriceChange}
                  />
                ) : (
                  product.productPrice
                )}
              </td>
              <td>
                {isEditing && editedProduct.id === product.id ? (
                  <textarea
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                  />
                ) : (
                  product.productDescription
                )}
              </td>
              <td>
                {isEditing && editedProduct.id === product.id ? (
                  <input
                    type="file"
                    onChange={(e) => handleImageUpload(e.target.files[0])}
                  />
                ) : (
                  product.productImage && (
                    <img
                      src={URL.createObjectURL(product.productImage)}
                      alt="Product"
                      width="50"
                    />
                  )
                )}
              </td>
              <td>
                {isEditing && editedProduct.id === product.id ? (
                  <div>
                    <button
                      className="btn btn-primary mx-3"
                      onClick={saveEditedProduct}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-success mx-3"
                      onClick={cancelEdit}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      className="btn btn-primary mx-3"
                      onClick={() => navigateToDetails(product.id, product)}
                    >
                      Detail
                    </button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => enableEditProductMode(product)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger mx-3"
                      onClick={() => deleteProductFromStore(product.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreateProduct;
