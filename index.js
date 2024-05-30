const axios = require('axios');
const fs = require('fs');
const readlineSync = require('readline-sync');

function getNextFileName(baseName) {
    let id = 1;
    let fileName = `${baseName}_${id}.txt`;
    while (fs.existsSync(fileName)) {
        id++;
        fileName = `${baseName}_${id}.txt`;
    }
    return fileName;
}

async function fetchAndSaveData(token, locale, fields, quantity) {
    const url = `https://api.invertexto.com/v1/faker?token=${token}&fields=${fields}&locale=${locale}`;
    const fileName = getNextFileName('gerados');
    let allData = [];

    for (let i = 0; i < quantity; i++) {
        try {
            const response = await axios.get(url);
            allData.push(response.data);
        } catch (error) {
            console.error(`Erro ao fazer a requisição: ${error}`);
        }
    }

    fs.writeFile(fileName, JSON.stringify(allData, null, 2), (err) => {
        if (err) {
            console.error(`Erro ao salvar o arquivo: ${err}`);
        } else {
            console.log(`Dados salvos em ${fileName}`);
        }
    });
}

// Função principal
function main() {
    const token = 'SEUTOKEN';
    const locale = 'pt_BR';
    const fields = 'name,cpf,birth_date,email,phone_number';

    const quantity = readlineSync.questionInt('Quantos dados você deseja gerar? ');

    fetchAndSaveData(token, locale, fields, quantity);
}

main();
