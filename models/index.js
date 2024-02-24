const User = require('./User.js');
const Post = require('./Post.js');

User.hasMany(Post, {
    foreignKey: 'userId',
    onDelete: ' CASCADE',
});

Post.belongsTo(User, {
    foreignKey: 'userId',
});

module.exports = {
    User,
    Post,
};