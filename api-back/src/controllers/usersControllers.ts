import {Request, Response} from 'express';
import logger from '../errors/logger';

export const getAllusers =  (req: Request, res: Response) => {
    const userLogger = logger.child({ label: 'UserControllers'});
    userLogger.info('liste de tous les users');
    res.send([{id: 1,name:'John D'}, {id:2,name: 'Jane D'}]);
};

export const getUserById = (req: Request, res: Response) => {
    const {id} = req.params;
    res.json([{id,name: `name_${id}`}]);
};

export const createUser = (req: Request, res: Response) => {
    const {name} = req.body;
    res.status(201).json([{id: Math.floor(Math.random() * 1000), name}]);
};
