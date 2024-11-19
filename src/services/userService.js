import { createUser } from "../repositories/userRepository.js";

export const signUpUserService = async (user) => {
    try{const newUser = createUser(user);
    return newUser
}catch(error){
    if (error.name === "MongoServerError" && error.code === 11000) {
        throw {
            status: 400, 
            message: "user with same email or username already exist"
        }      
    }
    throw error
    }
} 