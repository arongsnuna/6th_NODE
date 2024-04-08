import { StatusCodes } from "http-status-codes";

export const successStatus = {
    // success
    SUCCESS: {status: StatusCodes.OK, "isSuccess": true, "code": 200, "message": "success!"},

    // error
    INTERNAL_SERVER_ERROR: {status: StatusCodes.INTERNAL_SERVER_ERROR, "isSuccess": false, "code": "COMMON000", "message": "서버 에러, 관리자에게 문의 바랍니다." }

}
