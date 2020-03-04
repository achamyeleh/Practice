import { Ctx, Query, Resolver } from "type-graphql";
import { getRepository } from "typeorm";
import { User } from "../../User";

@Resolver(User)
export class UserResolver {
@Query(() => User)
  async userGet(@Ctx() ctx: any): Promise<User> {
    const id = 2
    const repository = await getRepository<User>('User', 'practice') // 'practice' is connection name
    const user = await repository.findOne(id)
    console.log('here 4 = ', user) 
    return user
  } // test
} 