import { Router } from 'express';

import { getCurrent} from '../controllers/sessionController.js'

export const router=Router()

router.get('/current', getCurrent)