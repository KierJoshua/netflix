import express from 'express';
import { getUserData, login, logout, register, resetPassword, sendResetOtp, verifyResetOtp } from '../controllers/accountController.js';
import accountAuth from '../middleware/accountAuth.js';

const accountRouter = express.Router();

accountRouter.post('/register', register);
accountRouter.post('/login', login);
accountRouter.post('/logout', logout);
accountRouter.post('/reset-password-otp', sendResetOtp);
accountRouter.post('/verify-otp', verifyResetOtp);
accountRouter.post('/reset-password', resetPassword);
accountRouter.get('/data',accountAuth, getUserData)

export default accountRouter;