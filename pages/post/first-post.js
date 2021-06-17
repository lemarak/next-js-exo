import Image from "next/image";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const postMd = `# Mon premier Post

_le 17 juin 2021_

## Ca parle de blabla

Adolescebat autem obstinatum propositum erga haec et similia multa scrutanda, stimulos admovente regina, quae abrupte mariti fortunas trudebat in exitium praeceps.
Cum eum potius lenitate feminea ad veritatis humanitatisque viam reducere utilia suadendo deberet, ut in Gordianorum actibus factitasse Maximini truculenti illius imperatoris rettulimus coniugem.

- List
- List
- List

[En savoir plus... ](https://commonmark.org/help/)`;

const post = () => {
  return (
    <main className="main">
      <div className="avatar">
        <Image src="/avataaars.png" alt="Avatar" width={120} height={120} />
      </div>
      <h1>John Doe</h1>
      <div className="full-post">
        <ReactMarkdown remarkPlugins={[gfm]}>{postMd}</ReactMarkdown>
      </div>
    </main>
  );
};

export default post;
