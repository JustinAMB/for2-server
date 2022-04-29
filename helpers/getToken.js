import jwt from 'jsonwebtoken';
export default getToken = (id) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '24h'
    });
    return token;
}