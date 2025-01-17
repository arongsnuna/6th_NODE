import express from 'express';
import asyncHandler from 'express-async-handler';
import { signin, login } from '../controllers/memberController';
export const memberRouter = express.Router();

memberRouter.post('/signin',asyncHandler(signin));
// asyncHandler 사용 -> 비동기, async&await 사용할때
memberRouter.post('/login', asyncHandler(login));
