import { test, exceptionTest } from '../controllers/testController';
import express from 'express';
import asyncHandler from 'express-async-handler';

export const testRouter = express.Router();
testRouter.get('/', function(req, res){
    res.send('Hello World')
})
testRouter.get('/test',test);
testRouter.get('/exception/:flag', asyncHandler(exceptionTest));
