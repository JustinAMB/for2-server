import jwt from 'jsonwebtoken';
export default getToken = (email) => {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: '24h'
    });
    return token;
}