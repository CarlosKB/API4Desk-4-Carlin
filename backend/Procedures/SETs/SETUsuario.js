import prcDebug from "../../debug/PRCDebug";

export async function SETUsuario(client, usuario) {
  try {
    await client.connect(); // Conectar ao banco de dados
    
    const senhaHash = await bcrypt.hash(usuario.UsuarioSenha, 10);

    const query = `
        INSERT INTO Usuario (UsuarioNome, UsuarioSenha, UsuarioEmail, UsuarioTipo, UsuarioDataCadastro)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING UsuarioID;
      `;

    const values = [
      usuario.UsuarioNome,
      senhaHash,
      usuario.UsuarioEmail,
      usuario.UsuarioTipo,
      usuario.UsuarioDataCadastro
    ];
    
    const result = await client.query(query, values);

    console.log('Usuário inserido com sucesso:', result.rows[0]);
    const usuarioID = result.rows[0].usuarioid
    return usuarioID

  } catch (error) {
    console.error('Erro ao inserir usuário:', error);
  } 
  
  // finally {
  //   await client.end(); // Fechar a conexão com o banco de dados
  // }
}