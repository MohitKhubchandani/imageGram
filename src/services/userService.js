import { createUser, findUserByEmail } from "../repositories/userRepository.js";
import bcrypt from "bcrypt";
import { generateJwtToken } from "../utils/jwt.js";
 
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

export const signInUserService = async (userDetails) => {
    try {
        const user = await findUserByEmail(userDetails.email);

        if (!user) {
            throw{
            status: 404,
            message: "User not found"
        }
    };

    const isPasswordValid = bcrypt.compareSync(userDetails.password, user.password);

    if (!isPasswordValid) {
        throw{
            status: 401,
            message: "Invalid Password"
        }
    };

    const token = generateJwtToken({
        email: user.email,
        id: user.id,
        username: user.username,
        role: user.role || "user",
    })

    return token;

    } catch (error) {
        throw error
    }
};

export const checkIfUserExist = async(email) => {
    try {
        const user = await findUserByEmail(email);
        return user;
    } catch (error) {
        throw error;
    }
}