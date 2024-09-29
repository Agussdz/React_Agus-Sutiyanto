async function fetchData() {
  console.log("Fetching data...");

  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data nya bisa muncul kuuuy");
    }, 2000); // Mengembalikan data setelah 2 detik
  });

  console.log(data);
}

fetchData(); // Ouput Fetching Data... (Setelah 2 detik) , Data nya bisa muncul kuuy
