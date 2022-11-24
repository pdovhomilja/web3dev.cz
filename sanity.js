import { createCurrentUserHook, createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
};

//SetUp the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

//https://www.sanity.io/docs/image-url
export const urlFor = (source) => imageUrlBuilder(config).image(source);
