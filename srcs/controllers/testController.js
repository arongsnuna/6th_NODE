import { successStatus } from '../../config/successStatus.js';
import { getTest } from '../services/testService.js';
import { response } from '../../config/response.js';
import { BaseError } from '../../config/error.js';
import { errStatus } from '../../config/errStatus.js';

export const test = (req, res, next) => {
    res.send(response(successStatus.SUCCESS, getTest()));
};

export const exceptionTest = (req,res,next) => {
    throw new BaseError(errStatus.INTERNAL_SERVER_ERROR);
}
