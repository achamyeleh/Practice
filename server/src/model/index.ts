import { mergeTypes } from "merge-graphql-schemas"
import { typeDefs2 } from './country'
import { typeDefs1 } from './User'

export const typeDefs = mergeTypes([typeDefs1, typeDefs2])
