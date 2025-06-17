import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
      email:{
        type: String,
        required: true,
        unique:true
    },
          password:{
        type: String,
        required: true,
    },
    resetOtp:{
        type:String,
        default:"",
    },
    resetOtpExpireAt:{
        type:Number,
        default:0
    },
})

const accountModel = mongoose.model.account || mongoose.model('account', accountSchema);

export default accountModel;