import "./App.css";
import { SmallCard } from "./components/SmallCard";
import { MainCard } from "./components/MainCard";

function App() {
  return (
    <>
      <div className="dashContainer">
        <MainCard
          name="Jeremy"
          surname="Robson"
          pic="image-jeremy.png"
        ></MainCard>
        <div className="metricsGrid">
          <SmallCard
            type="Work"
            time="32"
            weekly="36"
            header="icon-work.svg"
            backgroundC="hsl(15, 100%, 70%)"
          ></SmallCard>
          <SmallCard
            type="Play"
            time="10"
            weekly="8"
            header="icon-play.svg"
            backgroundC="hsl(195, 74%, 62%)"
          ></SmallCard>
          <SmallCard
            type="Study"
            time="4"
            weekly="7"
            header="icon-study.svg"
            backgroundC="hsl(348, 100%, 68%)"
          ></SmallCard>
          <SmallCard
            type="Exercise"
            time="4"
            weekly="5"
            header="icon-exercise.svg"
            backgroundC="hsl(145, 58%, 55%)"
          ></SmallCard>
          <SmallCard
            type="Social"
            time="5"
            weekly="10"
            header="icon-social.svg"
            backgroundC="hsl(264, 64%, 52%)"
          ></SmallCard>
          <SmallCard
            type="Self Care"
            time="2"
            weekly="2"
            header="icon-self-care.svg"
            backgroundC="hsl(43, 84%, 65%)"
          ></SmallCard>
          

        </div>
      </div>
    </>
  );
}

export default App;
