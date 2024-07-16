const categories = [
  { name: "All", imagesrc: "/img/categories/one.jpg" },
  { name: "Trends", imagesrc: "/img/categories/two.jpg" },
  {
    name: "Packages",
    imagesrc: "/img/categories/three.jpg",
  },
  { name: "Frondend", imagesrc: "/img/categories/four.jpg" },
  { name: "Backend", imagesrc: "/img/categories/five.jpg" },
  {
    name: "Tutorials",
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
