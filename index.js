// const express = require('express')   // common JS

import express from 'express'; // ES6
import dotenv from 'dotenv';
import { testRouter } from './srcs/routes/testRoute';
import { response } from './config/response.js';
import { swaggerUi, specs } from './swagger/swagger';

dotenv.config
const app = express();
const port = 3000

// // myLogger가 하나의 미들웨어
// const myLogger = (req, res, next) => {
//     console.log("LOGGED");
//     next();
//     // next()를 해줘야지 다음 미들웨어로 감
// }


app.use('/',testRouter);

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);


app.use((err, req, res, next) => {
    // 템플릿 엔진 변수 설정
    res.locals.message = err.message;
    // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.data.status).send(response(err.data));
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
