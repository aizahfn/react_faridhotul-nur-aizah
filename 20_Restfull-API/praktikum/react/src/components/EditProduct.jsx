import React, { useState } from "react";
import axios from "axios";

const EditProduct = ({ product, onUpdate, onCancel }) => {
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const updateProduct = () => {
    axios
      .put(
        `https://652628ba67cfb1e59ce7f1b6.mockapi.io/api/v1/products/${product.id}`,
        editedProduct
      )
      .then((response) => {
        console.log("Product updated successfully:", response.data);
        alert("Product updated successfully!");
        onUpdate(response.data);
      })
      .catch((error) => {
        console.log("Error updating product:", error);
        // Tampilkan pesan error jika diperlukan
      });
  };

  return (
    <div className="edit-product-modal">
      <h3>Edit Product</h3>
      <form>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="productName"
            value={editedProduct.productName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Product Category</label>
          <input
            type="text"
            name="productCategory"
            value={editedProduct.productCategory}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Product Freshness</label>
          <input
            type="text"
            name="productFreshness"
            value={editedProduct.productFreshness}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Product Price</label>
          <input
            type="number"
            name="productPrice"
            value={editedProduct.productPrice}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Additional Description</label>
          <textarea
            name="additionalDescription"
            value={editedProduct.additionalDescription}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={updateProduct}>
          Update
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
