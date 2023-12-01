const Owner = require('./Owner');
const Team = require('./Team');

Owner.hasMany(Team, {
  foreignKey: 'owner_id',
  onDelete: 'CASCADE'
});

Team.belongsTo(Owner, {
  foreignKey: 'owner_id'
});

module.exports = { Owner, Team };


