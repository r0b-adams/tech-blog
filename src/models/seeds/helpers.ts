import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 8,
    min: 4,
  },
  sentencesPerParagraph: {
    max: 6,
    min: 3,
  },
});

export const userData = [
  {
    username: "spongebob",
    password: "password123",
    email: "spongebob@squarepants.com",
  },
  {
    username: "patrick",
    password: "password123",
    email: "patrick@star.com",
  },
  {
    username: "squidward",
    password: "password123",
    email: "squidward@tentacles.com",
  },
];

export const generatePostData = (user_id: string) => {
  const num_posts = Math.floor(Math.random() * 3 + 1); // 1, 2, or 3
  const posts = [];
  for (let i = 0; i < num_posts; i++) {
    posts.push({
      user_id,
      title: lorem.generateWords(),
      content: lorem.generateParagraphs(2),
    });
  }
  return posts;
};
