import { join, login } from '../services/memberService';
import { successStatus } from '../../config/successStatus';
import { response } from '../../config/response.js';

export const signin = async (req, res, next) =>{
    //값 잘 들어 왔는지
    console.log(req.body)
    res.send(response(successStatus.JOIN_SUCCESS, await join(req.body)))
}

// export const login = async (req, res, next) =>{
//     console.log(req.body)
//     res.send(response(successStatus.JOIN_SUCCESS, await login(req.body)))
// }
