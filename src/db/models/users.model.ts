export default (
  database: any,
  DataTypes: any,
) => database.define(
  'Users',
  {
    email: {
      type: DataTypes.STRING,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    isDeleted: {
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
    created: {
      type: DataTypes.INTEGER,
    },
    updated: {
      type: DataTypes.INTEGER,
    },
    entity: {
      defaultValue: 'Users',
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'Users',
    timestamps: true,
  },
);
