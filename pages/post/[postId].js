import axios from "axios";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const post = ({ post }) => {
  console.log(post);
  return (
    <main className="main">
      <div className="avatar">
        <Image src="/avataaars.png" alt="Avatar" width={120} height={120} />
      </div>
      <h1>John Doe</h1>
      <div className="full-post">
        <ReactMarkdown remarkPlugins={[gfm]}>{post}</ReactMarkdown>
      </div>
    </main>
  );
};

export default post;

export async function getServerSideProps({ query }) {
  const postId = query.postId;
  const response = await axios.get(`http://localhost:3000/api/post`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("JE PASSE ICI");
  return {
    props: {
      postId,
      post: response.data[postId].content,
    },
  };
}
