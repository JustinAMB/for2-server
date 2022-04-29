import connection from '../db/connection';
export const save = async(user) => {
    const rs = await connection.query('call insertser', [user.email, user.password, user.username, user.image, user.token]);
    return rs[0][0][0];
}



export const getOne = async(id) => {
    const rs = await connection.query('select * from user where id=?', [id]);
    return rs[0][0];
}