import { Request, Response, NextFunction } from "express";
import {errorMap } from "../errors/costumErrors";
import logger from "../errors/logger";

export const errorHandler = (err: Error,req:Request, res: Response, next:NextFunction): void => {
    const status = errorMap[errorMap.name] || errorMap.default;

    res.status(status).json([{
        type: errorMap.name,
        message: err.message
    }]);

    if(status === 500){
        logger.error('Erreur interne au serveur');
    }
}