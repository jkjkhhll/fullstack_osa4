const listHelper = require('../utils/list_helper')

const testBlogs = [
    {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
        __v: 0
    },
    {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
        __v: 0
    },
    {
        _id: "5a422b3a1b54a676234d17f9",
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 12,
        __v: 0
    },
    {
        _id: "5a422b891b54a676234d17fa",
        title: "First class tests",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
        likes: 10,
        __v: 0
    },
    {
        _id: "5a422ba71b54a676234d17fb",
        title: "TDD harms architecture",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
        likes: 0,
        __v: 0
    },
    {
        _id: "5a422bc61b54a676234d17fc",
        title: "Type wars",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
        likes: 2,
        __v: 0
    }
]

test('dummy returns one', () => {
    const result = listHelper.dummy(testBlogs)
    expect(result).toBe(1)
})

describe('total likes', () => {
    test('for empty list', () => {
        const emptyList = []
        expect(listHelper.totalLikes(emptyList)).toBe(0);
    })
    test('for only one blog', () => {
        const oneBlog = [testBlogs[0]];
        expect(listHelper.totalLikes(oneBlog)).toBe(oneBlog[0].likes);
    })
    test('for multiple blogs', () => {
        expect(listHelper.totalLikes(testBlogs)).toBe(36);
    })
})

describe('most likes', () => {
    test('for empty list', () => {
        const emptyList = []
        expect(listHelper.favoriteBlog(emptyList)).toBe(undefined);
    })
    test('for only one blog', () => {
        const oneBlog = [testBlogs[0]];
        expect(listHelper.favoriteBlog(oneBlog).title).toBe(oneBlog[0].title);
    })
    test('for multiple blogs', () => {
        expect(listHelper.favoriteBlog(testBlogs).title).toBe('Canonical string reduction');
    })
})

describe('most blogs', () => {
    test('for empty list', () => {
        const emptyList = []
        expect(listHelper.mostBlogs(emptyList)).toBe(undefined);
    })
    test('for only one blog', () => {
        const oneBlog = [testBlogs[0]];
        expect(listHelper.mostBlogs(oneBlog).author).toBe(oneBlog[0].author);
    })
    test('for multiple blogs', () => {
        expect(listHelper.mostBlogs(testBlogs).author).toBe('Robert C. Martin');
    })
})

describe('mostLikes', () => {
    test('for empty list', () => {
        const emptyList = []
        expect(listHelper.mostLikes(emptyList)).toBe(undefined);
    })
    test('for only one blog', () => {
        const oneBlog = [testBlogs[0]];
        expect(listHelper.mostLikes(oneBlog).author).toBe(oneBlog[0].author);
    })
    test('for multiple blogs', () => {
        expect(listHelper.mostLikes(testBlogs).author).toBe('Edsger W. Dijkstra');
    })
})