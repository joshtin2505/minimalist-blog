const categories = [
  { name: "All", value: "all", imageSrc: "/img/categories/one.jpg" },
  { name: "Trends", value: "trends", imageSrc: "/img/categories/two.jpg" },
  {
    name: "Packages",
    value: "packages",
    imageSrc: "/img/categories/three.jpg",
  },
  { name: "Frondend", value: "frontend", imageSrc: "/img/categories/four.jpg" },
  { name: "Backend", value: "backend", imageSrc: "/img/categories/five.jpg" },
  {
    name: "Tutorials",
    value: "tutorials",
    imageSrc: "/img/categories/six.jpg",
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
