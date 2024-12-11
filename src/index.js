document.getElementById("compare").addEventListener("click", () => {
    const file1 = document.getElementById("file1").files[0];
    const file2 = document.getElementById("file2").files[0];

    if (!file1 || !file2) {
      alert("Por favor, selecciona dos archivos.");
      return;
    }

    Promise.all([readExcel(file1), readExcel(file2)])
      .then(([data1, data2]) => {
        const isDifferent = checkIfDifferent(data1, data2);

        const resultado= document.getElementById("result").innerText = isDifferent
          ? "Los archivos son diferentes."
          : "Los archivos son iguales.";
      })
      .catch((error) => {
        console.error("Error al leer los archivos:", error);
        document.getElementById("result").innerText =
          "Hubo un error al procesar los archivos.";
      });
  });

  function readExcel(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0]; // Leer la primera hoja
        const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        resolve(sheetData);
      };
      reader.onerror = (error) => reject(error);
      reader.readAsArrayBuffer(file);
    });
  }

  function checkIfDifferent(data1, data2) {
    // Compara las longitudes
    if (data1.length !== data2.length) return true;

    // Compara celda por celda
    for (let i = 0; i < data1.length; i++) {
      const row1 = data1[i];
      const row2 = data2[i];

      for (const key in { ...row1, ...row2 }) {
        if (row1[key] !== row2[key]) return true;
      }
    }

    return false; // Si no hay diferencias, retorna falso
  }

  