export default (
  database: any,
  DataTypes: any,
) => database.define(
  'Passwords',
  {
    userId: {
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        key: 'id',
        model: 'Users',
      },
      type: DataTypes.INTEGER,
    },
    hash: {
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
      defaultValue: 'Passwords',
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'Passwords',
    timestamps: true,
  },
);
