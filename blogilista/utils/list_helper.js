const _ = require('lodash');

const dummy = (blogs) => {
    return 1;
}

const totalLikes = (blogs) => {
    if (blogs.length == 0) return 0;

    return blogs.reduce((sum, cur) => sum + cur.likes, 0);
}

const favoriteBlog = (blogs) => {
    return _(blogs).map((blog) => ({ 
        title: blog.title,
        author: blog.author,
        likes: blog.likes
    })).maxBy('likes')
}

const mostBlogs = (blogs) => {
    return _(blogs).countBy('author').map((num, auth) => ({
        author: auth,
        blogs: num 
    })).maxBy('blogs')
}

const mostLikes = (blogs) => {
    return _(blogs).groupBy('author').map((blog, auth) => ({
        author: auth,
        likes: _.sumBy(blog, 'likes')
    })).maxBy('likes')
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}