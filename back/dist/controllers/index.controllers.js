"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideo = exports.updateVideo = exports.deleteVideo = exports.postVideo = exports.getVideos = void 0;
const database_1 = require("../database");
const getVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query("select * from videos");
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('server error');
    }
});
exports.getVideos = getVideos;
const postVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, url } = req.body;
        const response = yield database_1.pool.query("INSERT INTO videos (title, url) VALUES ($1, $2)", [title, url]);
        return res.status(200).json({
            message: 'User Added successfully',
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('server error');
    }
});
exports.postVideo = postVideo;
const deleteVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query("delete from videos where id = $1", [id]);
        return res.status(200).json(`video ${id} deleted Successfully`);
        ;
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('server error');
    }
});
exports.deleteVideo = deleteVideo;
const updateVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { title, url } = req.body;
        const response = yield database_1.pool.query("update videos set title = $1 , url = $2 where id = $3", [title, url, id]);
        return res.status(200).json('updated');
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('server error');
    }
});
exports.updateVideo = updateVideo;
const getVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query('select * FROM videos WHERE id = $1', [id]);
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('server error');
    }
});
exports.getVideo = getVideo;
