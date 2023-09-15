import { Pool } from "pg";
import prcDebug from "../../debug/PRCDebug";

export async function SETEstabelecimento(client, estabelecimento) {
    await client.connect()

    try {
        const SQL = "INSERT INTO Estabelecimento (UsuarioID, EstabelecimentoNomeFantasia, EstabelecimentoNomeCompleto, EstabelecimentoResponsavel, EstabelecimentoDataCadastro, EstabelecimentoCNPJ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING EstabelecimentoID"

        const values = [
            estabelecimento.UsuarioID,
            estabelecimento.EstabelecimentoNomeFantasia,
            estabelecimento.EstabelecimentoNomeCompleto,
            estabelecimento.EstabelecimentoResponsavel,
            estabelecimento.EstabelecimentoDataCadastro,
            estabelecimento.EstabelecimentoCNPJ
        ];

        const result = await client.query(SQL, values);
        console.log(`Estabelecimento inserido com sucesso. ID: ${result.rows[0]}`);
        prcDebug("EstabelecimentoID - ", result.rows[0])
        return result.rows[0];
        
    } catch (error) {
        console.error('Erro ao inserir estabelecimento:', error);
        throw error;
    }
}