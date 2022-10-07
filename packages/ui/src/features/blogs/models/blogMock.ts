import { Blog } from "./blog";

export const whyICreatedTheWille: Blog = {
  id: "1",
  title: "Why I created the Wille",
  body: `
  I created the new Web Framework at a time when several web frameworks are comfortable to use, such as Next.js, SvelteKit, Remix, and Fresh.
  That's because no one could concisely display Cloudflare D1 data as a web page or register data for form inputs.
  It is happy to display Cloudflare D1 data as a web page with the following code, isn't it?
  `,
  postedAt: new Date(2022, 11, 9).valueOf(),
};
export const loremIpsum: Blog = {
  id: "2",
  title: "Lorem Ipsum",
  body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  postedAt: new Date(2023, 0, 1).valueOf(),
};

export const blogs: Blog[] = [whyICreatedTheWille, loremIpsum];
