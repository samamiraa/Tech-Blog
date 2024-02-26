const User = require('./User.js');
const Post = require('./Post.js');
const Comments = require('./Comments.js');

User.hasMany(Post, {
    foreignKey: 'userId',
    onDelete: ' CASCADE',
});

User.hasMany(Comments, {
    foreignKey: 'userId',
});

Post.belongsTo(User, {
    foreignKey: 'userId',
});

Comments.belongsTo(Post, {
    foreignKey: 'postId'
});

module.exports = {
    User,
    Post,
    Comments,
};