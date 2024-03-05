const User = require('./User.js');
const Post = require('./Post.js');
const Comments = require('./Comments.js');

//establishes foreign key relationships
User.hasMany(Post, {
    foreignKey: 'userId',
    onDelete: ' CASCADE',
});

User.hasMany(Comments, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

Post.hasMany(Comments, {
    foreignKey: 'postId',
    onDelete: 'CASCADE',
});

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

Comments.belongsTo(User, {
    foreignKey: 'userId',
});


Comments.belongsTo(Post, {
    foreignKey: 'postId',
    onDelete: 'CASCADE',
});

module.exports = {
    User,
    Post,
    Comments,
};