import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

type Props = {};

function AboutUs({}: Props) {
  return (
    <main className="max-w-7xl mx-auto">
      <Header />
      <Banner />
      <div className="justify-center items-center px-20 py-10 border">
        <h1 className="text-2xl font-bold">Kdo jsme</h1>
        <p className="text-justify">
          parta nadšenců, kteří věří, že Web3 změní internet tak jak ho dnes
          známe. Vidíme v této transformaci ohromnou příležitost a tak chceme,
          aby se i Česká Republika stala silnou entitou v tomto segmentu. Naším
          cílem je pomoct co největšímu množství lidí rychle a efektivně začít
          vyvíjet aplikace pro Web3
        </p>
        <h1 className="text-2xl font-bold pt-10">Proč to děláme</h1>
        <p className="text-justify">
          Web3 je neskutečně rychle se rozvíjející odvětví. Téměř každý den
          narazíme na nějaký zajímavý projekt, ať už se jedná o nové SDK,
          kompletně nový BlockChain nebo jen zajímavý protokol (třeba .lens).
          Naším cílem je připravit základní roadmapu pro každého, kdo bude chtít
          začít, aby snadno hledal zdroje a rychle se posouval.
        </p>
      </div>
      <Footer />
    </main>
  );
}

export default AboutUs;
