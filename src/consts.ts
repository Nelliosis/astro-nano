import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Junel",
  EMAIL: "connect@junel.dev",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Homepage for my blog and portfolio. Hi.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "The place where I write about stuff I find interesting.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done or am currently doing.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects.",
};

export const SOCIALS: Socials = [

  {
    NAME: "github",
    HREF: "https://github.com/nelliosis"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/jcapawing",
  }
];
