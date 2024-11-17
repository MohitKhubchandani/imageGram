import User from '../schema/user';

export const findUserByEmail = async (email) => {
    try {
        const users = await User.findOne({email});
        return users;
    } catch (error) {
        console.log(error);
        
    }
}