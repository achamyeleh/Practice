import { Arg, Ctx, ID, Query, Resolver } from "type-graphql";
import { getRepository } from "typeorm";
import { User } from "./User";

@Resolver(() => User)
export class UserResolver<User> {
  @Query(() => User)
  async user(@Ctx() ctx: any, @Arg('id', () => ID) id: number): Promise<User | undefined> {
    const repository = getRepository<User>('User')
    const user = await repository.findOne(id)
    return user
  }
}
