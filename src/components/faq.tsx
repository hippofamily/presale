import React from "react";
// @ts-ignore
import { AccordionWrapper, AccordionItem } from "custom-react-accordion";
import 'custom-react-accordion/dist/Accordion.css'

const data = [
  {
    title: "What are Hippo Family?",
    description:
      "Hippo Family is a collection of 2000+ algorithmically generated Hippos with hand drawn attributes. You can get your Hippo in the form of an nft on Solana blockchain.",
  },
  {
    title: "When is the mint date?",
    description:
      "Presale will be on 10th of October at 4pm UTC",
  },
  {
    title: "Which Solana wallets can I use to mint?",
    description:
      "You can use Phantom, Sollet or Solflare wallet. We recommend using Phantom wallet.",
  },
  {
    title: "Who are you?",
    description:
      "We are a team of three friends who love art and are passionate about crpyto. That's why we decided to create our own NFT. We are totaly commited to this project and our community to make Hippo Familiy the best nft on Solana blockchain ❤️",
  },
  {
    title: "How much will it cost to mint a Hippo?",
    description:
      "Presale price will be only 1 SOL, so make sure you join our discord to be able to mint at presale.",
  },
  {
    title: "Is there a limit on how many we can get?",
    description:
      "There is no such limit, you can mint as many as you want if you're fast enough :)",
  },
];

const Faq = () => {
  return (
    <div id="faq" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>FAQ</h2>
          <p>
            Have a question about Hippo Family?
          </p>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2 section-title">
            <AccordionWrapper>
              {data.map((item, index) => (
                <AccordionItem
                  key={index}
                  index={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </AccordionWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
