// Função para alternar a exibição da barra lateral
function toggleNavBar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

document.getElementById('sidebar').addEventListener('click', () => {
    toggleNavBar();
});
// Função para exibir a seção correspondente ao clique na sidebar
function showSection(sectionId) {
    const sections = document.querySelectorAll("main section");
    sections.forEach(section => section.classList.remove("active"));

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add("active");
    }

    // Fechar a sidebar ao selecionar uma seção
    document.getElementById("sidebar").classList.remove("open");
}

function printOS() {
    const printContent = `
        <div style="padding: 10px; font-family: Arial, sans-serif; width: 100vw; box-sizing: border-box;">
            <div style="display: flex; justify-content: space-between; padding: 5px; box-sizing: border-box;">
                <!-- Lado Empresa -->
                <div style="width: 49%; padding: 5px; box-sizing: border-box;">
                    <h2 style="text-align: center; margin: 5px 0;">Ordem de Serviço (Empresa)</h2>
                    <hr style="margin: 5px 0;">
                    <div style="display: flex; flex-wrap: wrap;">
                        <div style="flex: 1; min-width: 140px; margin-bottom: 5px;">
                            <p><strong>Id Cliente:</strong> OS 1021</p>
                            <p><strong>Nome do(a) Cliente:</strong> Maria Silva</p>
                        </div>
                        <div style="flex: 1; min-width: 140px; margin-bottom: 5px;">
                            <p><strong>Endereço do(a) Cliente:</strong> Rua das Flores, 123</p>
                            <p><strong>Contato do(a) Cliente:</strong> (11) 98765-4321</p>
                        </div>
                        <div style="flex: 1; min-width: 140px; margin-bottom: 5px;">
                            <p><strong>Número da OS:</strong> OS 1021</p>
                            <p><strong>Data:</strong> 2024-11-27</p>
                        </div>
                        <div style="flex: 1; min-width: 140px; margin-bottom: 5px;">
                            <p><strong>Status:</strong> Aberto</p>
                            <p><strong>Equipamento:</strong> Notebook Acer</p>
                        </div>
                    </div>
                    <div style="margin-top: 5px;">
                        <p><strong>Defeito Informado:</strong></p>
                        <p style="border: 1px solid #ccc; padding: 5px; margin: 0;">Não carrega sistema operacional</p>
                    </div>
                    <div style="margin-top: 5px;">
                        <p><strong>Condições do Equipamento:</strong></p>
                        <p style="border: 1px solid #ccc; padding: 5px; margin: 0;">Marcas de uso – Região das dobradiças quebradas</p>
                    </div>
                    <hr style="margin: 5px 0;">
                    <p style="text-align: center; margin: 5px 0;">Assinatura do cliente</p><br><hr style="width:60%">
                    <p style="text-align: center; margin: 5px 0;">© Infospeed Informática</p>
                </div>
                <!-- Linha Pontilhada -->
                <div style="border-left: 1px dashed black; margin: 0 5px;"></div>












                <!-- Lado Cliente -->
                <div style="width: 49%; padding: 5px; box-sizing: border-box;">
                    <h2 style="text-align: center; margin: 5px 0;">Ordem de Serviço (Cliente)</h2>
                    <hr style="margin: 5px 0;">
                    <div style="display: flex; flex-wrap: wrap;">
                        <div style="flex: 1; min-width: 140px; margin-bottom: 5px;">
                            <p><strong>Id Cliente:</strong> OS 1021</p>
                            <p><strong>Nome do(a) Cliente:</strong> Maria Silva</p>
                        </div>
                        <div style="flex: 1; min-width: 140px; margin-bottom: 5px;">
                            <p><strong>Endereço do(a) Cliente:</strong> Rua das Flores, 123</p>
                            <p><strong>Contato do(a) Cliente:</strong> (11) 98765-4321</p>
                        </div>
                        <div style="flex: 1; min-width: 140px; margin-bottom: 5px;">
                            <p><strong>Número da OS:</strong> OS 1021</p>
                            <p><strong>Data:</strong> 2024-11-27</p>
                        </div>
                        <div style="flex: 1; min-width: 140px; margin-bottom: 5px;">
                            <p><strong>Status:</strong> Aberto</p>
                            <p><strong>Equipamento:</strong> Notebook Acer</p>
                        </div>
                    </div>
                    <div style="margin-top: 5px;">
                        <p><strong>Defeito Informado:</strong></p>
                        <p style="border: 1px solid #ccc; padding: 5px; margin: 0;">Não carrega sistema operacional</p>
                    </div>
                    <div style="margin-top: 5px;">
                        <p><strong>Condições do Equipamento:</strong></p>
                        <p style="border: 1px solid #ccc; padding: 5px; margin: 0;">Marcas de uso – Região das dobradiças quebradas</p>
                    </div>
                    <div style="margin-top: 20px;">
                        <p><strong>Termos e Condições:</strong></p>
                        <p style="border: 1px solid #ccc; padding: 10px; line-height: 1.5;">
                        - Estou ciente e concordo com as informações descritas no campo "Condições do equipamento".<br>
                        - Estou ciente de que componentes como tela, bateria, fonte de alimentação, memória RAM, teclado, touchpad, autofalante, conectores, cabo flat e placa wireless, assim como o sistema operacional, só podem ser testados após a aprovação do primeiro orçamento, podendo assim sofrer alterações do valor na conclusão do serviço.<br>
                        - Estou ciente que após informado a conclusão do serviço, é necessário a retirada do equipamento dentro do prazo de 45 dias.<br>
                        - Passado o período de 45 dias, não havendo retorno por parte do cliente, o equipamento poderá ser descartado para reciclagem
                        </p>
                    </div>
                    <p style="text-align: center; margin: 5px 0;">Assinatura do cliente</p><br><hr style="width:60%">
                    <p style="text-align: center">© Infospeed Informática</p>
                </div>
            </div>
        </div>
    `;

    const newWindow = window.open("", "_blank");
    newWindow.document.write(printContent);
    newWindow.document.close();
    newWindow.print();
}



// Referências aos elementos
const searchContainer = document.getElementById("search-container");
const buscaOSSelect = document.getElementById("buscaOS");
const searchIdInput = document.getElementById("search-id");
const searchNameInput = document.createElement("input");
const searchDateInput = document.createElement("input");

// Configurações para os novos inputs
searchNameInput.type = "text";
searchNameInput.id = "search-name";
searchNameInput.placeholder = "Digite o Nome do Cliente";

searchDateInput.type = "date";
searchDateInput.id = "search-date";

// Evento de mudança no select
buscaOSSelect.addEventListener("change", () => {
    const selectedValue = buscaOSSelect.value;

    // Remove todos os inputs antes de adicionar o novo
    searchIdInput.style.display = "none";
    if (searchContainer.contains(searchNameInput)) {
        searchContainer.removeChild(searchNameInput);
    }
    if (searchContainer.contains(searchDateInput)) {
        searchContainer.removeChild(searchDateInput);
    }

    // Adiciona o input correspondente
    if (selectedValue === "buscaOS_ID") {
        searchIdInput.style.display = "block";
    } else if (selectedValue === "buscaOS_Nome") {
        searchContainer.insertBefore(searchNameInput, searchContainer.lastElementChild);
    } else if (selectedValue === "buscaOS_Data") {
        searchContainer.insertBefore(searchDateInput, searchContainer.lastElementChild);
    }
});

// Função para buscar OS
async function buscar_os() {
    try {
        const response = await fetch('http://77.37.41.159:4039/api/crud/read', {
            method: 'POST', // Alterado para POST, pois o body precisa ser enviado
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicmVkcGFzcyIsImlhdCI6MTczMjA2MTQyNywiZXhwIjoxNzMyMDY1MDI3fQ.3GRJJyy5cU6Q4ByoQJPyqWzcKaqZ2km7zKWZvfjq0Oo",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "tableName": "ordens_servico"
            })
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Dados retornados:", data);
        // Aqui você pode manipular os dados da API (exibir no DOM, armazenar, etc.)
    } catch (error) {
        console.error("Erro ao buscar ordens de serviço:", error);
    }
}

document.getElementById("1").addEventListener('click', async () => {
    await buscar_os();
});