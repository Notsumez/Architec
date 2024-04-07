const { MongoClient, ServerApiVersion } = require('mongodb');
const url = "mongodb+srv://notsumez:gVQZLHUTgoRmu5yo@architecdb.37m9cfd.mongodb.net/?retryWrites=true&w=majority&appName=architecdb"

// Crie um MongoClient com um objeto MongoClientOptions para definir a versão estável da API
const client = new MongoClient(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
  async function run() {
    try {
        await client.connect(); // Conecta o cliente ao servidor (opcional a partir da v4.7)
        const database = client.db('architecdb'); 

        // Cria Coleção
        const collection = database.collection('teste');

        // Insere um documento na coleção
        const insertResult = await collection.insertOne({ nome: 'Exemplo', idade: 30 });
        console.log('Documento inserido com sucesso:', insertResult.insertedId);

        // Consulta todos os documentos na coleção
        const documents = await collection.find({}).toArray();
        console.log('Documentos na coleção:', documents);
    } finally {
        // Garante que o cliente fechará quando você terminar/errar
        await client.close();
    }
  }
  run().catch(console.dir);
