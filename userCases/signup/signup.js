import { response } from '../userModule';

import userRepository from '../../repositories/userRepository';
import getToken from '../../helpers/getToken';

export default signup = async(req, res = response) => {
    try {
        const {
            body
        } = req;
        body.token = getToken(body.email);
        const rs = await userRepository.save(body);
        if (rs < 1) {
            return res.status(400).json({
                ok: false,
                message: 'Signup failed'
            });
        }
        return res.status(201).json({
            ok: true,
            message: 'Signup success'
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: error.message
        });
    }

}