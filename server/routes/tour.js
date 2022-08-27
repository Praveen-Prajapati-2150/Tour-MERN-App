import express from 'express'
import auth from '../middleware/auth.js'

const router = express.Router()

import {
  createTour,
  getTours,
  getTour,
  getToursByUser,
  deleteTour,
  updateTour,
  getTourBySearch, getTourByTag
} from '../controllers/tour.js'

router.get("/search", getTourBySearch)
router.get("/tag/:tag", getTourByTag)
router.get("/", getTours)
router.get("/:id", getTour)

router.post("/", auth, createTour);
router.delete("/:id", auth, deleteTour)
router.patch("/:id", auth, updateTour)
router.get("/userTours/:id", auth, getToursByUser)

export default router;