import express from 'express';
import {
  getAllCrewMember,
  addNewCrewMember,
} from '../controllers/members.js';

const router = express.Router();

router
  .route('/')
  .get(getAllCrewMember)
  .post(addNewCrewMember);

export default router;
