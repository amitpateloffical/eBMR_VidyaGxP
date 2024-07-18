import express from "express";
import { InserteBMRRecord, getAllEBMRData, getEBMRRecordsByFormId, updateEBMRRecord } from "../controller/eBMRRecordController.js";

const router = express.Router();

router.post("/add-eBMR",InserteBMRRecord)
router.get('/get-eBMR',getAllEBMRData)
router.get('/eBMR/:form_id',getEBMRRecordsByFormId)
router.put('/edit-eBMR/:form_id',updateEBMRRecord)
export default router;