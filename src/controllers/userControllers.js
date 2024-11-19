import { query } from "express";
import { signUpUserService } from "../services/userService.js";

export async function getProfile(req, res){
    res.status(501).json({
        success: false,
        message: "Not implemented"
    });
};

export async function signup(req, res) {
    try {
        
        const user = await signUpUserService(req.body);
        res.status(201).json({
            success: true,
            message: "user created successfully",
            data: user
        });
    } catch (error) {
        console.log(error);

        if (error.status) {
            return res.status(error.status).json({
                success: false,
                message: error.message
            })

        }

        res.status(500).json({
            success: false,
            message: "internal server error"
        });
        
    }
}