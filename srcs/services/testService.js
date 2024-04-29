import { testResponseDTO } from "../dtos/testResponseDTO";
import { errStatus } from '../../config/successStatus.js';
import { BaseError } from "../../config/error.js";


export const getTest = () => {
    return testResponseDTO("test Success");
}

export const checkFlag = (flag) => {
    if(flag == 1){
        throw new BaseError(errStatus.INTERNAL_SERVER_ERROR);
    }
    else{
        return flagResponseDTO(flag);
    }
}
