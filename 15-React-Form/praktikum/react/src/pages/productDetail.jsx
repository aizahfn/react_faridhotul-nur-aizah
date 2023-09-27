import React from "react";
import { useParams } from "react-router-dom";
import CreateProduct from "./createProduct";

function ProductDetail({ users }) {
  // Ambil parameter ID dari URL
  const { id } = useParams();

  // Cari pengguna berdasarkan ID
  const product = product.find((product) => product.id === id);

  if (!product) {
    return <div>Product tidak ditemukan</div>;
  }

  return (
    <div>
      <h2>Detail Product</h2>
      <p>ID: {product.id}</p>
      <p>Nama: {product.name}</p>
      {product.map((product, index) => (
        <tr key={product.id}>
          <td>{product.productName}</td>
          <td>{product.productCategory}</td>
          <td>{product.productFreshness}</td>
          <td>{product.productPrice}</td>
        </tr>
      ))}
    </div>
  );
}

export default ProductDetail;
