import bcrypt from 'bcrypt';

export default comparePassword = async(password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}