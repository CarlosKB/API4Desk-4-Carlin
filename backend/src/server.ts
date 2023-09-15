import { Pool } from "pg";
import express from "express"
import cors from "cors"
import { SETUsuario } from "../Procedures/SETs/SETUsuario";
import { LoginUsuario } from "../Procedures/Functions/LoginUsuario";

const client = new Pool({
    user: "postgres",
    host: "localhost",
    database: "API - 4Desk",    //trocar para o nome do seu banco local
    password: "123",      //trocar para a senha do seu banco local
    port: 5432
})

// const cloud = new Pool({ //conexão com o banco do servidor
//     connectionString: "postgres://foucqfeg:V-vXAAIje_4WXTk40Zs73_UCSc9gjInB@silly.db.elephantsql.com/foucqfeg", 
//     ssl: {
//         rejectUnauthorized: false
//     }
// })

const app = express()
app.use(cors())
app.use(express.json())


app.post("/cadastro", async (req, res) => {
    const { usuario } = req.body

    const usuarioID = await SETUsuario(client, usuario)

    if (usuarioID) {
        res.send({msg: "Deu bom.", id: usuarioID})
    } else {
        res.send({msg: "Deu mt ruim"})
    }

})

app.post("/login",async(req, res)=>{

    // const { usuario }   = req.body
    const { email }     = req.body
    const { password }  = req.body

    const messages = ''
    const isSucesso = false
    const usuarioReturn = {
        UsuarioNome: "",
        UsuarioSenha: "",
        UsuarioEmail: "",
        UsuarioTipo: "",
        UsuarioDataCadastro: ""
    }
    const usuario = {
        UsuarioNome: "",
        UsuarioSenha: password,
        UsuarioEmail: email,
        UsuarioTipo: "",
        UsuarioDataCadastro: ""
    }

    const resultadoLogin = await LoginUsuario(client, usuario);

    // console.log(resultadoLogin.messages)
    // console.log(resultadoLogin.isSucesso)
    // console.log(resultadoLogin.usuarioReturn)
    
    if (resultadoLogin.isSucesso){
        res.send({msg: resultadoLogin.messages, usuario:resultadoLogin.usuarioReturn, isSucesso:resultadoLogin.isSucesso})
    }else{
        res.send({msg:resultadoLogin.messages, usuario:resultadoLogin.usuarioReturn, isSucesso:resultadoLogin.isSucesso})
    }


})


app.listen(3001, () => {
    console.log("Servidor rodando!")
})