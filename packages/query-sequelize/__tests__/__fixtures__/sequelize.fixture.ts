// this is needed to create a query builder in sequelize :(
import { Sequelize, SequelizeOptions } from 'sequelize-typescript'

import { seed } from './seeds'
import { TestEntity } from './test.entity'
import { TestEntityTestRelationEntity } from './test-entity-test-relation.entity'
import { TestRelation } from './test-relation.entity'

export const CONNECTION_OPTIONS: SequelizeOptions = {
  dialect: 'sqlite',
  database: ':memory:',
  logging: false,
  models: [TestEntity, TestEntityTestRelationEntity, TestRelation]
}

export const truncate = async (sequelize: Sequelize): Promise<void> => {
  await sequelize.truncate({ cascade: true, restartIdentity: true })
}
export const refresh = async (sequelize: Sequelize): Promise<void> => {
  await truncate(sequelize)
  return seed(sequelize)
}
