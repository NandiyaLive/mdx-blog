import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

function Posts({ posts }) {

  return (
    <>
      <Head>
        <title>Neranjana's Blog 📝</title>
      </Head>
      <main className="all-posts container">
        <section className="post-container">
          <div className="go-back">
            <p>
              <Link href={"/"}>Back to Home</Link>
            </p>
          </div>
          <div className="post-container-top">
            <p className="title">All Posts</p>
          </div>
          <ul className="posts">
            {posts.map((post, index) => (
              <li key={index}>
                <p className="date">{post.frontmatter.date}</p> <span>—</span>
                <p className="post-title">
                  <Link href={post.slug}>{post.frontmatter.title}</Link>
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Posts;

export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("src/posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("src/posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
