/* script.js */

// Função para alternar a exibição da barra lateral
function toggleNavBar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

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

// Função para imprimir a OS
function printOS() {
    const printContent = `
        <div style="display: flex; justify-content: space-between; border: 1px dashed black;">
            <div style="width: 48%; padding: 20px;">
                <h2>Ordem de Serviço (Empresa)</h2>
                <p><strong>Identificação:</strong> OS 1021</p>
                <p><strong>Equipamento:</strong> Notebook Acer</p>
                <p><strong>Defeito Informado:</strong> Não carrega sistema operacional</p>
                <p><strong>Condições do Equipamento:</strong> Marcas de uso – Região das dobradiças quebradas</p>
            </div>
            <div style="width: 48%; padding: 20px;">
                <h2>Ordem de Serviço (Cliente)</h2>
                <p><strong>Identificação:</strong> OS 1021</p>
                <p><strong>Equipamento:</strong> Notebook Acer</p>
                <p><strong>Defeito Informado:</strong> Não carrega sistema operacional</p>
                <p><strong>Termos e Condições:</strong> Estou ciente das informações descritas...</p>
            </div>
        </div>
    `;

    const newWindow = window.open("", "_blank");
    newWindow.document.write(printContent);
    newWindow.document.close();
    newWindow.print();
}