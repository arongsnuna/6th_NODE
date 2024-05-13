import { signinResponseDTO } from "../dtos/memberResponseDTO";
import { addUser, getUser } from "../models/memberDAO";
import { BaseError } from '../../config/error';
import { errStatus } from "../../config/errStatus";

export const join = async (body) => {
    const birth = new Date(body.birthYear, body.birthMonth, body.birthDay);

    const joinUserData = await addUser({
        'email': body.email,
        'name': body.name,
        'gender': body.gender,
        'phone': body.phone,
        'address': body.address,
        'specAddr': body.specAddr,
        'birth': birth
    });

    if(joinUserData == -1){
        throw new BaseError(errStatus.EMAIL_ALREADY_EXIST);
    }else{
        return signinResponseDTO(await getUser(joinUserData));
    }
}

export const login = async (body) =>{
    const loginStatus = await findUser({
        'email': body.email,
        'name': body.name
    })
}
