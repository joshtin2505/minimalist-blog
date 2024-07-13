const categories = [
  { name: "All", value: "all", imagesrc: "/img/categories/one.jpg" },
  { name: "Trends", value: "trends", imagesrc: "/img/categories/two.jpg" },
  {
    name: "Packages",
    value: "packages",
    imagesrc: "/img/categories/three.jpg",
  },
  { name: "Frondend", value: "frontend", imagesrc: "/img/categories/four.jpg" },
  { name: "Backend", value: "backend", imagesrc: "/img/categories/five.jpg" },
  {
    name: "Tutorials",
    value: "tutorials",
    imagesrc: "/img/categories/six.jpg",
  },
]

const users = [
  {
    name: process.env.ADMIN_NAME,
    lastName: process.env.ADMIN_LASTNAME,
    username: process.env.ADMIN_USERNAME,
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
  },
  {
    name: "Jane",
    lastName: "Doe",
    username: "JaneDoe",
    email: "janeDoe@gmail.com",
    password: "password",
  },
]

module.exports = { categories, users }
