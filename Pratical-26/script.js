document.getElementById('downloadPdf').addEventListener('click', function() {
      const invoiceElement = document.getElementById('invoice');
      const options = {
        margin: 1,
        filename: 'invoice.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      htmlpdf().from(invoiceElement).set(options).save();
    });