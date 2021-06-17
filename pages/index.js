import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import axios from "axios";

export default function Home(props) {
  // console.log("posts :", posts);
  return (
    <div className="container">
      <Head>
        <title>Le Reacteur - Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="avatar">
          <Image src="/avataaars.png" alt="Avatar" width={160} height={160} />
        </div>
        <h1>John Doe</h1>

        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet est eos
          nam facere aliquid fugit error, iste quam dolorem, molestiae vel, sit
          qui necessitatibus quod optio corrupti saepe temporibus itaque?
        </div>

        <div className="blog">
          <h2>Blog</h2>

          {/* En dur */}
          <div className="post">
            <Link href="/post/first-post">
              <a className="post-title">Mon premier post (en dur)</a>
            </Link>
            <div className="post-date">Le 17 juin 2021</div>
          </div>

          {/* Avec API */}

          {props.posts.map((post, index) => {
            return (
              <div className="post" key={index}>
                <Link href={`/post/${index}`}>
                  <a>
                    <div className="post-title">
                      <ReactMarkdown
                        remarkPlugins={[gfm]}
                        // children={post.content}
                        allowedElements={["h1"]}
                      >
                        {post.content}
                      </ReactMarkdown>
                    </div>
                  </a>
                </Link>
                <div className="post-date">{post.date}</div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(`http://localhost:3000/api/post`);
  return {
    props: {
      posts: response.data,
    },
  };
}
