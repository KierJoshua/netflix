import jwt from 'jsonwebtoken';

const accountAuth = async (req,res,next) => {
    const {token} = req.cookies;

    if(!token){
        return res.json({success:false, message:"Not authorized please login again."})
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if(tokenDecode.id){
            req.userId = tokenDecode.id;
            next()
        }else{
            return res.json({success:false,message:"Not authrorized please login again"})
        }
    } catch (error) {
        return res.json({success:false,message:error.message})
    }
}

export default accountAuth;