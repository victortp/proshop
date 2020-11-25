import { Router } from 'express';
const router = Router();
import { authUser } from '../controllers/userController.js';

router.route('/login').post(authUser);

export default router;
