import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

const auth = (req, res, next) => {

    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({ message: ' Acesso negado' })
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET)

        req.userId = decoded.id



    } catch (err) {
        console.log(err)
        return res.status(401).json({ message: 'Token inválido ' })
    }

    next() // o comando que permite que o twt continue até o db
}

export default auth