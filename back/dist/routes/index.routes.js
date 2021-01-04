"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const index_controllers_1 = require("../controllers/index.controllers");
router.get('/playlist', index_controllers_1.getVideos);
router.get('/playlist/:id', index_controllers_1.getVideo);
router.post('/playlist', index_controllers_1.postVideo);
router.delete('/playlist/:id', index_controllers_1.deleteVideo);
router.put('/playlist/:id', index_controllers_1.updateVideo);
exports.default = router;
