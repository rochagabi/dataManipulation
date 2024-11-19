let dadosAtuais

var inputNome = document.getElementById('nome')



inputNome.addEventListener( // Função executada ao dispirar o evento
    "input", // Parâmetro 1 => evento a ser monitorado
    () => {
        processarDados(dadosAtuais, inputNome.value)
    }
) // Fechamento da funcao

function indexImport(event) {
    if (event) event.preventDefault(); // Impede o recarregamento da página
    // Processa o arquivo Excel
    processarArquivoExcel().then(() => {
        console.log('Processamento concluído');
    }).catch((error) => {
        console.error('Erro ao processar o arquivo Excel:', error);
        alert('Erro ao processar o arquivo Excel: ' + error.message);
    });
}

function processarArquivoExcel() {
    return new Promise((resolve, reject) => {
        const fileInput = document.getElementById('excelFile');
        const file = fileInput.files[0];

        if (!file) {
            console.warn('Nenhum arquivo selecionado');
            alert('Por favor, selecione um arquivo Excel!');
            reject(new Error('Nenhum arquivo selecionado'));
            return;
        }

        console.log('Arquivo selecionado:', file.name);

        const allowedExtensions = /(\.xlsx|\.xls)$/i;
        if (!allowedExtensions.exec(file.name)) {
            console.warn('Formato de arquivo inválido');
            alert('Por favor, selecione um arquivo Excel válido (.xlsx ou .xls).');
            fileInput.value = '';
            reject(new Error('Formato de arquivo inválido'));
            return;
        }

        const reader = new FileReader();

        reader.onload = function (e) {
            console.log('Arquivo lido com sucesso');
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

            // console.log('Dados processados do Excel:', jsonData);
            dadosAtuais = jsonData;
            processarDados(jsonData);
            resolve();
        };

        reader.onerror = function (error) {
            console.error('Erro ao ler o arquivo:', error);
            reject(new Error('Erro ao ler o arquivo: ' + error));
        };

        reader.readAsArrayBuffer(file);
    });
}




// OBJETIVO: ao digitar uma letra no input, deverá ser exibido no console os nomes
//           dos dados atuais que respeitarem o filtro
// Criar input na tela
// Criar evento ouvinte do input
// Dentro da arrow function desse evento chamar a funcao processar dados 

function processarDados(dadosExcel, valorInput) {

    dadosExcel.forEach((dado, index) => {
        if (index > 0) { // Pula cabecalho
            nome = dado[0];
            if (dado[0].includes(valorInput)) {
                console.log(nome.toUpperCase())
            }
        }
    });
}