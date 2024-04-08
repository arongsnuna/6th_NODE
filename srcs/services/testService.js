import { testResponseDTO } from "../dtos/testResponseDTO";
import { successStatus } from '../../config/successStatus.js';


export const getTest = () => {
    return testResponseDTO("test Success");
}

export const checkFlag = (flag) => {
    if(flag == 1){
        throw new BaseError(successStatus.INTERNAL_SERVER_ERROR);
    }
    else{
        return flagResponseDTO(flag);
    }
}
