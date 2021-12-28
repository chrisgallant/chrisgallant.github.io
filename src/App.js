import "./App.scss";
import bicycle from "./art/video/bicycle.webm";
import catchingTheButteryfly from "./art/video/catching-the-butteryfly.webm";
import coalPowered from "./art/video/coal-powered.webm";
import coveMolding from "./art/video/cove-molding.webm";
import doodle from "./art/video/doodle.webm";
import doodle2 from "./art/video/doodle2.webm";
import eggDrop from "./art/video/egg-drop.webm";
import expansionContract from "./art/video/expansion-contract.webm";
import invasion from "./art/video/invasion.webm";
import ldsIn60s from "./art/video/lds-in-60s.webm";
import littleHouse from "./art/video/little-house.webm";
import masterGardener from "./art/video/master-gardener.webm";
import pizzaForest from "./art/video/pizza-forest.webm";
import skull from "./art/video/skull.webm";
import snoozing from "./art/video/snoozing.webm";

function App() {
  return (
    <div className={"content"}>
      <h1>
        chrisgallant.com - <em>very fine art</em>
      </h1>
      {vid(bicycle)}
      {vid(catchingTheButteryfly)}
      {vid(doodle)}
      {vid(coalPowered)}
      {vid(coveMolding)}
      {vid(doodle2)}
      {vid(eggDrop)}
      {vid(expansionContract)}
      {vid(invasion)}
      {vid(ldsIn60s)}
      {vid(littleHouse)}
      {vid(masterGardener)}
      {vid(pizzaForest)}
      {vid(skull)}
      {vid(snoozing)}
    </div>
  );
}

const vid = (art) => (
  <video loop autoPlay muted>
    <source src={art} type="video/webm" />
    Your browser does not support the video tag.
  </video>
);

export default App;
