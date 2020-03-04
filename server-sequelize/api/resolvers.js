const DEFAULT_PAGINATION = {
  limit: 20,
  offset: 0
};

export default {
  Query: {
    users: (
      async (
        parent,
        { pagination, filters, sort, ...rest },
        { Users, Sequelize: { Op }, req }
      ) => {
        const options = { ...DEFAULT_PAGINATION, ...pagination };

        const whereObj = {};
        const sortArr = [];

        if (filters) {
          if (filters.name) {
            whereObj.name = {
              [Op.iLike]: `%${filters.name}%`
            };
          }

          if (filters.description) {
            whereObj.description = {
              [Op.like]: `%${filters.description}%`
            };
          }

          if (filters.id) {
            whereObj.id = {
              [Op.eq]: filters.id
            };
          }
        }

        if (sort) {
          if (sort.id) {
            sortArr.push(["id", sort.id]);
          }

          if (sort.name) {
            sortArr.push(["name", sort.name]);
          }

          if (sort.description) {
            sortArr.push(["description", sort.description]);
          }
        }

        const result = await Users.findAndCountAll({
          where: whereObj,
          limit: options.limit,
          offset: options.offset * options.limit,
          order: sortArr
        });

        return {
          data: result.rows,
          limit: options.limit,
          offset: options.offset * options.limit,
          total: result.count
        };
      }
    ),

    user: ( async (parent, { id }, { Users }) => {
      const user = await Users.findByPk(id);
      return user;
    })
  },

  Mutation: {
    createUser: (
      async (parent, { data }, { Users }) => {
        const user = await Users.create({
          name: data.name,
          description: data.description
        });

        return user;
      }
    ),

    updateUser: (
      async (parent, { id, data }, { Users }) => {
        const [res, user] = await Users.update(
          {
            name: data.name,
            description: data.description
          },
          {
            where: {
              id: id
            },
            returning: true
          }
        );
        return user[0];
      }
    ),

    deleteUser: (
      async (parent, { id }, { Users }) => {
        try {
          const deletedUsers = await Users.destroy({ where: { id } });
          return !!deletedUsers;
        } catch (error) {
          console.error("Error on deleting User", error);
          return false;
        }
      }
    )
  },
  User: {
    microBrands: async user => {
      return ;
    }
  }
};
