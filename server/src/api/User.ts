
import { getRepository } from "typeorm";
import { User } from "../../User";

// import { Resolver, Mutation, Ctx, Arg, Root, Query } from "type-graphql";
// @Resolver(User)
// export class UserResolver {
// @Query(() => User)
//   async userGet(
//     @Ctx() ctx: any,
//     @Arg('data', () => User) data: any,
//     @Root() root: User
//   ): Promise<User> {
//     const id = 2
//     const repository = await getRepository<User>('User', 'practice') // 'practice' is connection name
//     const user = await repository.findOne(id)
//     console.log('here 4 = ', user) 
//     return user
//   }
// } lets do it 
export const resolvers = {
  Query: {
    userGet: async (_: any ,args: any) => {
      const {id} = args
      console.log('here 2 = ', id)
      const repository = await getRepository<User>('User', 'practice') // 'practice' is connection name
      const user = await repository.findOne(id)
      console.log('here 4 = ', user) 
      return user
    }
  
  },
  Mutation: {
    userAdd: async (_: any, args: any) => {
      const { firstName, lastName, isActive } = args;
      const user = new User();
      user.firstName = firstName; 
      user.lastName = lastName;
      user.isActive = isActive;
    const repository = await getRepository<User>('User', 'practice') // 'practice' is connection name
      console.log('here inside the resolver =====')
      try {
        await repository.save(user)
        return true;
      } catch (error) {
        return false;
      }
    },
  //   userUpdate: async (_: any, args: any) => {
  //     const { id, firstName, lastName, isActive } = args;
  //     const user = new User();
  //     user.firstName = firstName;
  //     user.lastName = lastName;
  //     user.isActive = isActive;
  //   const repository = await getRepository<User>('User', 'practice') // 'practice' is connection name

  //     try {
  //       await repository.update(id, user)
  //       return true;
  //     } catch (error) {
  //       return false;
  //     }
  //   },
  //   userDelete: async (_: any ,args: any) => {
  //     const {id} = args
  //     console.log('here 2 = ', id)
  //     const repository = await getRepository<User>('User', 'practice') // 'practice' is connection name
  //     try {
  //       await repository.delete(id)
  //       return true;
  //     } catch (error) {
  //       return false;
  //     }
  //   }
  }
};