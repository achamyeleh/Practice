import { buildTypeDefsAndResolvers } from 'type-graphql';
import { UserResolver } from './country';

const resolvers = [UserResolver]
export const resol = async () => {
  let schema
  try{
 schema =  await buildTypeDefsAndResolvers({
  resolvers
})
}catch(error){
  console.log('error: ', error)
}
console.log('schemmmmaaa ==========', schema)
return {typeDefs: schema.typeDefs, resolvers: schema.resolvers}
}