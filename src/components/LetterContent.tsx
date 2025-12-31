import { motion } from "framer-motion";

const paragraphs = [
  {
    type: "greeting",
    text: "Babiii"
  },
  {
    type: "paragraph",
    text: "Não sei nem descrever o quão bom foi esse ano com você, tipo, eu não sei oq eu teria feito sem você kskskksksks, sério mesmo."
  },
  {
    type: "paragraph",
    text: "Eu NUNCA esperaria alguém tão INCRÍVEL e SENSACIONAL como você na minha vida, foi uma coisa muito repentina, e pensar que a menos de 1 ano, estava todo mundo da inbot comendo no Sukiya para comemorar o seu niver, e eu todo tímido sem falar um a com você kskskskksksk, até você me mandar mensagem no whats para falar de trabalho, e ainda falar de java comigo (e eu com essa cara ainda 🤓👆)."
  },
  {
    type: "paragraph",
    text: "E desde então, a gente passou por ótimos momentos juntos, contamos muitas fofocas sobre trabalho, xingamos muitos clientes (principalmente Openflow...), e você simplesmente foi a melhor pessoal do planeta que eu já trabalhei, o seu trabalho é simplesmente sensacional, você é MUITO FODA em tudo que você faz, e NUNCA deixe ninguém te dizer o contrário."
  },
  {
    type: "paragraph",
    text: "Eu AMO a nossa amizade, e fiquei surpreso com o quanto a gente se aproximou em tão pouco tempo, passamos de colegas de trabalho para uma das minhas melhores amizades em questão de alguns meses, e acredite, isso nunca aconteceu comigo. Nós sempre cuidamos um do outro, e isso é uma coisa que eu valorizo MUITO, não somente isso, como cada momento nosso, cada fofoca, cada conversa, cada mensagem, cada música do spotify q vc me manda (inclusive os funks :D), cada rolê em casa, cada sorvete ben and jerry, cada ep. da nossa séria, TUDO, TODOS OS MOMENTOS, eu amei e guardei na minha memória cada um desses momentos, e nada no mundo vai me fazer esquecer deles."
  },
  {
    type: "paragraph",
    text: "E nem falo da nossa viagem, foi um dos melhores momentos do ano, e se não o melhor. E como eu já tinha te falado, foram um dos poucos dias que eu realmente descansei e aproveitei do meu ano, e não teria sido 1% disso sem você :3"
  },
  {
    type: "paragraph",
    text: "Cara, eu só não tenho palavras mesmo para descrever o quanto eu gosto de você, é sério, você é um dos melhores seres humanos que eu já conheci na face da terra, e pode contar comigo para TUDO, seja precisar conversar sobre algo, querer fofocar, precisar de ajuda para ir para algum lugar, quiser jogar, assistir alguma série, jogar papo fora, cara, literal QUALQUER COISA."
  },
  {
    type: "paragraph",
    text: "Infelizmente não vamos mais trabalhar taaao juntos, feliz por sair da rotina da inbot, e a beira do abismo por não trabalhar mais com você ;-;"
  },
  {
    type: "paragraph",
    text: "Mas pode contar comigo ainda para qualquer dúvida que você tiver, se precisar de ajuda com a lógica, se precisar de ajuda com algum comando, pode me chamar se exitar."
  },
  {
    type: "paragraph",
    text: "Enfim, muito obrigado por ser esse ser incrívrl e extraordinário que você é, e te prometo NUNCA deixar de ser o seu amigo :3"
  },
  {
    type: "signature",
    text: "Te amo amiga 💕"
  }
];

const LetterContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.article
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {paragraphs.map((item, index) => {
        if (item.type === "greeting") {
          return (
            <motion.h1
              key={index}
              variants={itemVariants}
              className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-primary mb-8"
            >
              {item.text}
            </motion.h1>
          );
        }

        if (item.type === "signature") {
          return (
            <motion.p
              key={index}
              variants={itemVariants}
              className="font-handwritten text-3xl md:text-4xl text-primary mt-12 pt-8"
            >
              {item.text}
            </motion.p>
          );
        }

        return (
          <motion.p
            key={index}
            variants={itemVariants}
            className="font-serif text-base md:text-lg leading-relaxed md:leading-loose text-foreground"
          >
            {item.text}
          </motion.p>
        );
      })}
    </motion.article>
  );
};

export default LetterContent;
