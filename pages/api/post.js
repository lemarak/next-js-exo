export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      date: "Le 17 juin 2021",
      content: `# Mon premier Post (avec API)

_le 17 juin 2021_

## Ca parle de blabla

Adolescebat autem obstinatum propositum erga haec et similia multa scrutanda, stimulos admovente regina, quae abrupte mariti fortunas trudebat in exitium praeceps.
Cum eum potius lenitate feminea ad veritatis humanitatisque viam reducere utilia suadendo deberet, ut in Gordianorum actibus factitasse Maximini truculenti illius imperatoris rettulimus coniugem.

- List
- List
- List

[En savoir plus... ](https://commonmark.org/help/)`,
    },
    {
      id: 2,
      date: "Le 18 juin 2021",
      content: `# Nouveau Post
  
  _le 18 juin 2021_
  
  Adolescebat autem obstinatum propositum erga haec et similia multa scrutanda, stimulos admovente regina, quae abrupte mariti fortunas trudebat in exitium praeceps.
  Cum eum potius lenitate feminea ad veritatis humanitatisque viam reducere utilia suadendo deberet, ut in Gordianorum actibus factitasse Maximini truculenti illius imperatoris rettulimus coniugem.
  
  - List
  - List
  - List
  
  [En savoir plus... ](https://commonmark.org/help/)`,
    },
    {
      id: 3,
      date: "Le 19 juin 2021",
      content: `# Et le dernier...
  
  _le 19 juin 2021_
  
  ## Des news
  
  Adolescebat autem obstinatum propositum erga haec et similia multa scrutanda, stimulos admovente regina, quae abrupte mariti fortunas trudebat in exitium praeceps.
  Cum eum potius lenitate feminea ad veritatis humanitatisque viam reducere utilia suadendo deberet, ut in Gordianorum actibus factitasse Maximini truculenti illius imperatoris rettulimus coniugem.
  
  - List
  - List
  - List
  
  [En savoir plus... ](https://commonmark.org/help/)`,
    },
  ]);
}
