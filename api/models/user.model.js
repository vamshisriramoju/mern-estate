import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACUCAMAAAC6AgsRAAAAMFBMVEXk5ueutLenrrHg4+Tn6eqrsbTq7O22u77FycvJzc/Z3N28wcPQ09Xc3+DAxcext7olASdPAAADuUlEQVR4nO2b3bKrIAxGBRL5Fd//bQ/a7u5u21oIGpw5rJt2erXmkwBCOgydTqfT6XQ6nU6n0+l0OlxAQq2kr61ltsA4OBu9XvHGunFsrfQLDCp4RIHiTvqK3qmLpDi6OMuH28MRtVFXCHHy4kXuJ8Y4NM4QlH2N7tnQNjWEad6xWw19y2Fo5b7dOg5DK0GIX8K7G9o2gspn6SVB00IQdKaeELJBgpkPt9UjBlOglxJkLhJwRXqJiVVQleqhVox6EAv1liHItxhDKI0vIfkCHMvtEp5rBJLiSzgmPzWT9NDz6FHj4xqBBQvbJsDIUsLq+6bqAzOHHlhifAmOVQ40WY9lo0Ws3hWGRQ4CXU8gg1/F8BOSYYou2Ze+5Hf+PlV5uh7HDKjo5ZvQ5/tVlG+aoc/3qxh+idPH31Tlh/+9X93zZfCr0ROi1+/V57/cU6t3MKwfhQcvG79wtt7l9y/g6Hpi5niDoxcwega/kb7BYjmmhEB+vxSO5QiGXCAzix55huE65KVWMLLYpQBpFYKWy8+RKmSemPyGkXKCxXmLNBHiQ8bLasIizHuNWXxGiYbRbrmYLvRjOZp8Fiw8xuK8PboLFkwyyHW18CyYXyPIsy/YCmbfMzTRyxZsk94qOH2fZlj2zB8FldmvEpTnv7HtG7qdDh0UTbtzboIQ9PsMEX24QicgDM4j4lZOeNe6O+wHGFWIWki5WCJKOesYhis01z2AQU0uWBOjscEpdYUH+xcAGO/ApeySFgyTcyFYa4yx1obgnFp/bmw2KKWc9XMadLcC+f1In9qEqVk3L4zDFIyf5U7/ZCoV9NE6xZ1kiiTEeYltd/X4mWlmHxgXOYApRNxrO30jKbXlmQ5hdH7Oye1FUWh79pyYCsIg/fgK5bld2ym6T73OuYaoz1qTAZZltsrupjiHMwbi6GJZSXxGHp8hDOaI7B7oY9sp09vukXZLpZjjCgWq7ow+Gepw0GRTcyC+h4xHRAhFjc5F4AGjEBS1my6L2kM3cAcXxobKzveqZqssqk59yZ2cJYL0tt6zCncjGImCHOmtgrQEy/8CQBakjEGg3CFQBSlVfOq8txUsPiIcT1s13lPox1O6TxTWSF2XEIGyzpPz9gSfKdGbmJ+uKJtkKlrEK8jebHEtHH/JD7DF6FvIPaNpMPoWcgOs6lCrItOvlV7eFTvfvuWFrJ1gu8eb9/eQqj8AVJJzjT1xL72/ZF0mtht+eU0e3DurZ3RGgbQrD5HVXu5lQzLyUy35rtfpdDqdS/AP6iYw8EVy+jIAAAAASUVORK5CYII="
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
