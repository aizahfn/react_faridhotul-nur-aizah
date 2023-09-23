import React from "react";

export default function CreateProduct() {
  <>
    function checkForm() {"{"}
    const productName = document.getElementById("product-name").value; const
    productCategory = document.getElementById("product-category").value; const
    productFreshness = document.getElementById("product-freshness").value; const
    additionalDescription = document.getElementById( "additional-description"
    ).value; const productPrice =
    document.getElementById("product-price").value; if (productName == "") {"{"}
    alert("Please enter a valid Product Name");
    {"}"}
    if (productName.length &gt; 25) {"{"}
    alert("Product name must not exceed 25 characters.");
    {"}"}
    if (productName.Value == "@" || "#" || "{"{"}
    {"}"}") {"{"}
    alert("Name must not contain symbols");
    {"}"}
    if (productCategory == "") {"{"}
    alert("Please enter a valid Product Category");
    {"}"}
    if (additionalDescription == "") {"{"}
    alert("Please enter a valid Additional Description");
    {"}"}
    if (productPrice == "") {"{"}
    alert("Please enter a valid Product Price");
    {"}"} else {"{"}
    alert("Berhasil submit");
    {"}"}
    {"}"}
  </>;

  // var NewComponent = React.createClass({
  //   render: function () {
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
      {/* nav section end */}
      {/* logo */}
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
      {/* logo */}
      <div className="row text-center align-items-center">
        <div className="col-12 text-center">
          <h1>Create Product</h1>
          <p>
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group
          </p>
          <a>
            has a validation state that can be triggered by attempting to submit
            the form without completing it.
          </a>
        </div>
      </div>
      <div className="row text-center align-items-center width: 656px; height: 936px;">
        <div className="col-12 text-center">
          <h3>Detail Product</h3>
        </div>
      </div>
      <form className="col-12 text-align-left" style={{ marginLeft: "30%" }}>
        <label htmlFor="productName">Product Name : </label>
        <br />
        <input
          id="product-name"
          name="productName"
          type="text"
          placeholder
          required
        />
        <br />
        <label htmlFor="productCategory">Product Category : </label>
        <br />
        <select id="product-category" name="productCategory" required>
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
          id="brand-new"
          name="brandNew"
          defaultValue="Brand New"
        />
        <label htmlFor="Brand New">Brand New</label>
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
          <button
            className="btn btn-primary"
            onclick="checkForm()"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
  // },
  // });
}
export { CreateProduct };
