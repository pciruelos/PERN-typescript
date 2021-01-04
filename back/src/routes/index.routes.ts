import {Router} from 'express';

const router = Router();

import {getVideos, getVideo, deleteVideo, updateVideo, postVideo} from '../controllers/index.controllers';

router.get('/playlist', getVideos);
router.get('/playlist/:id', getVideo);
router.post('/playlist', postVideo);
router.delete('/playlist/:id', deleteVideo);
router.put('/playlist/:id', updateVideo);

export default router;  