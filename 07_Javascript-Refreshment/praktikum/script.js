function checkForm(){
    const productName = document.getElementById("product-name").value;
    const productCategory = document.getElementById("product-category").value;
    const productFreshness = document.getElementById('product-freshness').value;
    const additionalDescription = document.getElementById("additional-description").value;
    const productPrice = document.getElementById("product-price").value;

    if (productName == ""){
      alert("Please enter a valid Product Name");
    }

    if (productName.length > 25){
    alert('Product name must not exceed 25 characters.')
    }
  
    if (productName.Value == "@" || "#" || "{}"){
    alert('Name must not contain symbols')
    }

    if (productCategory == ""){
      alert("Please enter a valid Product Category");
    }

    if (additionalDescription == ""){
      alert("Please enter a valid Additional Description");
    }

    if (productPrice == ""){
      alert("Please enter a valid Product Price");
    }

    else{
      alert("Berhasil submit");
    }
  } 