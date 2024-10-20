document.getElementById('osForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const codigoProduto = document.getElementById('codigoProduto').value;

    // Validações básicas dos campos
    if (!nome || !endereco || !telefone || !codigoProduto) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Processa o arquivo Excel
    processarArquivoExcel().then(() => {
        // Após processar o arquivo, exibir a OS gerada
        exibirResultadoOS({ nome, endereco, telefone, codigo_produto: codigoProduto });
    }).catch((error) => {
        console.error('Erro ao processar o arquivo Excel:', error);
        alert('Erro ao processar o arquivo Excel: ' + error.message);
    });
});

function exibirResultadoOS(os) {
    const osResult = document.getElementById('osResult');
    osResult.style.display = 'block';
    osResult.innerHTML = `
        <h2>Ordem de Serviço criada</h2>
        <p><strong>Cliente:</strong> ${os.nome}</p>
        <p><strong>Endereço:</strong> ${os.endereco}</p>
        <p><strong>Telefone:</strong> ${os.telefone}</p>
        <p><strong>Código do Produto:</strong> ${os.codigo_produto}</p>
    `;
}

function processarArquivoExcel() {
    return new Promise((resolve, reject) => {
        const fileInput = document.getElementById('excelFile');
        const file = fileInput.files[0];

        if (!file) {
            alert('Por favor, selecione um arquivo Excel!');
            reject(new Error('Nenhum arquivo selecionado'));
            return;
        }

        const allowedExtensions = /(\.xlsx|\.xls)$/i;
        if (!allowedExtensions.exec(file.name)) {
            alert('Por favor, selecione um arquivo Excel válido (.xlsx ou .xls).');
            fileInput.value = '';
            reject(new Error('Formato de arquivo inválido'));
            return;
        }
        const reader = new FileReader();

        reader.onload = function(e) {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            // Assumindo que o arquivo Excel tenha dados na primeira planilha
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

            processarDados(jsonData);
            resolve();
        };

        reader.onerror = function(error) {
            reject(new Error('Erro ao ler o arquivo: ' + error));
        };

        reader.readAsArrayBuffer(file);
    });
    
}


function indexImport() {
    //enviar para indexImport
}





/*function processarDados(data) { 
    
    

}*/