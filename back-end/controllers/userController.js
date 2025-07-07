import User from "../models/User.js"
import bcrypt from "bcrypt"


const login = async (req, res)=> {
    /* Buscando todos os usuários no banco de dados */
        try{
            const userDoc = await User.find()
            res.json(userDoc)
        }catch(error){
            res.status(404).json(error)
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