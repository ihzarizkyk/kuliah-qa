    // URL ke file data.json
    const dataUrl = '../../playgrounds/tc_api/data.json';

    fetch(dataUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Tampilkan data di dalam elemen <pre>
        document.getElementById('json-data').textContent = JSON.stringify(data, null, 2);
      })
      .catch(error => {
        document.getElementById('json-data').textContent = `Error: ${error.message}`;
      });