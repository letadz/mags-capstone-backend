const express = require("express");

const {
  register,
  activateAccount,
  login,
  sendVerification,
  findUser,
  sendResetPasswordCode,
  validateResetCode,
  changePassword,
  addCar,
  getAllCars,
  getProfile,
  createBook,
  getAllBooking,
  updateDetails,
  listImages,
  updateProfilePicture,
  uploadImages,
  deleteHistory,
} = require("../controllers/userController");
const { authUser } = require("../middleware/auth");
const imageUpload = require("../middleware/imageUpload");

const router = express.Router();

router.post("/register", register);
router.post("/activate", authUser, activateAccount);
router.post("/login", login);
router.post("/sendVerification", authUser, sendVerification);
router.post("/findUser", findUser);
router.post("/sendResetPasswordCode", sendResetPasswordCode);
router.post("/validateResetCode", validateResetCode);
router.post("/changePassword", changePassword);
router.post("/addCar", authUser, addCar);
router.get("/getAllCars", authUser, getAllCars);
router.get("/getProfile/:username", authUser, getProfile);
router.post("/createBook", authUser, createBook);
router.get("/getAllBooking", authUser, getAllBooking);
router.put("/updateDetails", authUser, updateDetails);
router.post("/listImages", authUser, listImages);
router.put("/updateProfilePicture", authUser, updateProfilePicture);
router.delete("/deleteHistory/:id", authUser, deleteHistory);

router.post("/uploadImages", authUser, imageUpload, uploadImages);
module.exports = router;
