// // middlewares/verifyToken.js
// import { Request, Response,NextFunction } from 'express';
// import jwt, { JwtPayload } from 'jsonwebtoken';
// import config from '../config/jwt-config';

// interface DecodedToken extends JwtPayload {
//   id: string;
// }


// function verifyToken(req:Request, res:Response, next: NextFunction) {
//   const token = req.headers.authorization;
//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }
//   jwt.verify(token, config.secretKey, (error:Error, decoded:DecodedToken) => {
//     if (error) {
//       return res.status(403).json({ message: 'Failed to authenticate token' });
//     }
//     req.userId = decoded.id;
//     next();
//   });
// }

// export {verifyToken};


import { Request, Response, NextFunction } from 'express';
import jvwt, { verify } from 'jsonwebtoken';
import config from '../config/jwt-config';




const jwt = {
    secret: config.secretKey,
}

export default function verifyToken(request: Request, response: Response, next: NextFunction) : Response|void{


    try {

        const auth = request.headers.authorization;

        if(!auth){
            throw new Error('JWT is missing');
        }
        //Aqui pegamos apenas a variável token, e não utilizamos a primeira variável
        const [, token] = auth.split(' ');

        const tokenDecoded = verify(token, jwt.secret);

        if(tokenDecoded){
            
            return next();

        }else{
            throw new Error('JWT invalid');
        }
    } catch (error) {
          return response.status(403).json({ message: 'Failed to authenticate token' });
    }
}


