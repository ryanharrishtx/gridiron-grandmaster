const Owner = require('./Owner');
const Team = require('./Team');

Owner.hasMany(Team, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Team.belongsTo(Owner, {
  foreignKey: 'user_id'
});

module.exports = { Owner, Team };


const Team = require('./Team');
const Owner = require('./Owner');
