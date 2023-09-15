const { Pool } = require('pg');

export async function SETParceiro(client, parceiro) {
  await client.connect();

  try {
    const query = `
      INSERT INTO Parceiro (UsuarioID, ParceiroNomeFantasia, ParceiroNomeCompleto, ParceiroResponsavel, ParceiroDataCadastro, ParceiroCNPJ)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING ParceiroID;`;
    
    const values = [
      parceiro.UsuarioID,
      parceiro.ParceiroNomeFantasia,
      parceiro.ParceiroNomeCompleto,
      parceiro.ParceiroResponsavel,
      parceiro.ParceiroDataCadastro,
      parceiro.ParceiroCNPJ
    ];

    const result =  await client.query(query, values);
    console.log(`Parceiro inserido com sucesso. ID: ${result.rows[0].parceiroid}`);
    return result.rows[0].parceiroid;

  } catch (error) {
    console.error('Erro ao inserir parceiro:', error);
    throw error;
  }
}