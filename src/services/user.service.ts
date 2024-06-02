import { CreateUserDTO } from "../controllers/user.controller";
import { User } from "../models/user.model";

interface UserServices {
  create(order: CreateUserDTO): Promise<User>;
  userLogin(name: string): Promise<any>
}

class UserService implements UserServices {
  async create(user: CreateUserDTO): Promise<User> {
    try {
        const newUser = await User.create({
          names: user.names,
          password: user.password
        });
        
        return newUser
      } catch (err) {
        throw new Error("Failed to create User!");
      }
  }

  async userLogin(name: string): Promise<any> {
    const userExist = await User.findOne({
      where: { names: name }
    });

    return userExist;
  }

//   async retrieveById(where): Promise<User> {
//     try {
//         const user = await User.findOne({
//             where
//         })

//         return user
//     } catch (err) {console.log(err)
//         throw new Error("Failed to retrieve Orders!");
//     }
//    }
}

export default UserService;