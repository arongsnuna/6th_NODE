import { test, exceptionTest } from '../controllers/testController';
import express from 'express';
import asyncHandler from 'express-async-handler';

export const testRouter = express.Router();

testRouter.get('/test',test);
testRouter.get('/exception/:flag', asyncHandler(exceptionTest));
