import { SETParceiro } from "../SETs/SETParceiro";
import { SETUsuario } from "../SETs/SETUsuario";

export async function POSTCadastroParceiro(client, usuario, parceiro){
    await client.connect();

    try {
        const usuarioID = SETUsuario(client, usuario)

        if (usuarioID) {
            usuarioID.then(result => {
                parceiro.UsuarioID = result
                console.log(parceiro.UsuarioID)
                SETParceiro(client, parceiro)
            })
        }
    } catch (erro) {
        console.log("DEU RUIM: " + erro)
    }
}