import {getAllusers, getUserById,createUser} from '../controllers/usersControllers'
import { Router } from 'express'

const router = Router();

router.get('/',getAllusers);
router.get('/:id',getUserById);
router.post('/',createUser);

export default router;
