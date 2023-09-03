function tampilData(){

  //Mengambil nilai dari input form
  var productName = document.getElementById('product-name').value;
  var productCategory = document.getElementById('product-category').value;
  var image = document.getElementById('image').value;
  var productFreshness = document.getElementById('product-freshness').value;
  var additionalDescription = document.getElementById('additional-description').value;
  var productPrice =  document.getElementById('product-price').value;

  //Mendapatkan referensi ke tabel
  var table = document.getElementById('tabelData');

  //Membuat baris baru dalam tabel
  var newRow = table.insertRow(table.rows.length);

  //Membuat sel-sel dalam baris
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);

  //Memasukkan data dari form ke sel-sel baru
  cell1.innerHTML = productName;
  cell2.innerHTML = productCategory;
  cell3.innerHTML = image;
  cell4.innerHTML = productFreshness;
  cell5.innerHTML = additionalDescription;
  cell6.innerHTML = productPrice;

  //Mengosongkan input form setelah data dimasukkan
  document.getElementById('product-name').value = '';
  document.getElementById('product-category').value = '';
  document.getElementById('image').value = '';
  document.getElementById('product-freshness').value = '';
  document.getElementById('additional-description').value = '';
  document.getElementById('product-price').value = '';

  //Validasi Form
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




