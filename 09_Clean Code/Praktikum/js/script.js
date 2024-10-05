// Mengambil daftar produk dari local storage atau menginisialisasi array kosong
const productList = JSON.parse(localStorage.getItem("productList")) || [];
const productForm = document.getElementById("productForm");
const productTableBody = document.getElementById("productTableBody");
const alertPlaceholder = document.getElementById("alertPlaceholder");

// Inisialisasi tabel produk
renderTable();

// Event listener untuk form, Delete, dan Search
productForm.addEventListener("submit", handleFormSubmit);
document
  .getElementById("deleteButton")
  .addEventListener("click", deleteLastProduct);
document
  .getElementById("searchButton")
  .addEventListener("click", searchProduct);

// Fungsi untuk menangani form submit dan menambahkannya ke daftar dan localstorage jika valid
function handleFormSubmit(event) {
  event.preventDefault();
  alertPlaceholder.innerHTML = "";

  const newProduct = getProductValues();

  if (isFormValid(newProduct)) {
    productList.push(newProduct);
    saveToLocalStorage();
    renderTable();
    productForm.reset();
  }
}

// Fungsi untuk menangkap value dari input form
function getProductValues() {
  return {
    name: document.getElementById("productName").value,
    category: document.getElementById("productCategory").value,
    image: document.getElementById("productImage").value
      ? document.getElementById("productImage").files[0].name
      : "default.png",
    freshness:
      document.querySelector('input[name="productFreshness"]:checked')?.value ||
      "",
    description: document.getElementById("additionalDescription").value,
    price: document.getElementById("productPrice").value,
  };
}

// Fungsi untuk memastikan inputan terisi semua, jika tidak ada inputan maka pesan error akan muncul
function isFormValid(product) {
  if (
    !product.name ||
    !product.category ||
    !product.freshness ||
    !product.description ||
    !product.price
  ) {
    showAlert("Semua inputan harus terisi");
    return false;
  }
  return true;
}

// Fungsi untuk membuat alert message
function showAlert(message) {
  const alert = document.createElement("div");
  alert.className = "alert alert-danger";
  alert.role = "alert";
  alert.innerHTML = message;
  alertPlaceholder.appendChild(alert);
}

// Fungsi untuk menghapus produk terakhir
function deleteLastProduct() {
  if (productList.length > 0) {
    productList.pop();
    saveToLocalStorage();
    renderTable();
    alert("Last Product deleted");
  } else {
    alert("No products to delete.");
  }
}

// Fungsi untuk mencari produk berdasarkan nama
function searchProduct() {
  const searchValue = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const foundProduct = productList.find(
    (product) => product.name.toLowerCase() === searchValue
  );

  if (foundProduct) {
    alert(
      `Product Found: ${foundProduct.name}, Category: ${foundProduct.category}, Price: $${foundProduct.price}`
    );
  } else {
    alert("Product not found.");
  }
}

// Fungsi untuk menyimpan daftar produk ke dalam localStorage
function saveToLocalStorage() {
  localStorage.setItem("productList", JSON.stringify(productList));
}

// Menampilkan setiap produk dalam tabel berdasarkan array productList
function renderTable() {
  productTableBody.innerHTML = "";
  productList.forEach((product, index) => {
    const row = `
       <tr>
         <td>${index + 1}</td>
         <td>${product.name}</td>
         <td>${product.category}</td>
         <td>${product.image}</td>
         <td>${product.freshness}</td>
         <td>${product.description}</td>
         <td>$${product.price}</td>
       </tr>`;
    productTableBody.innerHTML += row;
  });
}
