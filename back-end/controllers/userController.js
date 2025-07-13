import User from "../models/User.js"
import bcrypt from "bcrypt"


const login = async (req, res)=> {
    const {email, password} = req.body

        /* Buscando um usuário pelo email */
        try{
            const userDoc = await User.findOne({ email })
            if(!userDoc){
               return res.json("Usuario não encontrado")
            }

            const passwordMatch =  bcrypt.compareSync(password, userDoc.password)
            if(!passwordMatch){
               return res.json("Senha incorretos")
            }

            if(passwordMatch){
                const {name, _id} = userDoc
                res.json({name, _id, email})
            }else{
                res.json("Email ou senha incorretos")
            }
            
        }catch(error){
            console.log(error)
            res.status(500).json(error)
        }
}

const register = async (req, res)=> {
    /* Buscando os dados do usuário do corpo da requisição */
        const { name, email, password} = req.body
        /* Encriptando a senha do usuário */
        const bcryptSalt = bcrypt.genSaltSync()
        const hashedPassword = bcrypt.hashSync(password, bcryptSalt)
     
        try {
            const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        })
    
         res.json(newUser)
        }catch(error) {
            res.status(404).json(error)
        }
}

export { login, register }