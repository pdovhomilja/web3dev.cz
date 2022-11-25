import Head from "next/head";
import Link from "next/link";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  //console.log(posts);
  //console.log(typeof posts);

  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Web3dev - blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="
          veškeré know-how o vývoji Web3 na jednom místě. Rady a tipy pro začátečníky ale i pokročilé. Vše popasané tak jak jsme sami studovali. Veškeré dosupené know-how na jednom místě."
        />
      </Head>
      <Header />
      <Banner />
      {/* Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 lg:p-6">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="border rounded-lg group cursor-pointer overflow-hidden">
              <img
                className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src={urlFor(post.mainImage).url()}
                alt=""
              />
              <div className="flex justify-between p-5 bg-white">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
                    {post.description} by {post.author.name}
                  </p>
                </div>
                <img
                  className="h-12 w-12 rounded-full"
                  src={urlFor(post.author.image).url()!}
                  alt=""
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    author -> {
    name,
    image
  },
  description,
  mainImage,
  slug
    
  }`;

  //Fetch data from Sanity
  const posts = await sanityClient.fetch(query);

  //Get props
  return {
    props: {
      posts,
    },
  };
};
