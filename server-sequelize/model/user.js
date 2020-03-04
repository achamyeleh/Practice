// import Version from 'sequelize-version'

export default (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    secondName: DataTypes.STRING       
  })

  // Users.associate = (models) => {
  //   Users.hasMany(models.MicroUsers)
  // }

  // const UserVersion = new Version(Users)

  return Users
}
 