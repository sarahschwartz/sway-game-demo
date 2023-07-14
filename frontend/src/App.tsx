import "./App.css";
import { useFuel } from "./hooks/useFuel";
import { useIsConnected } from "./hooks/useIsConnected";
import { GameAbi__factory } from "./types"
import { Wallet } from "fuels";

function App() {
  const [fuel, notDetected] = useFuel();
  const [isConnected] = useIsConnected();

  const CONTRACT_ID = "0xe0767304c2b083731066c883df00b6253d35365fe298f0b43ae1ea5a34eaa794"

  const wallet = Wallet.fromAddress("fuel136wd63w4j8ke5yghwupdsq2efg3zk5zw8svflk84um7e0n52f3rqqecj9l");
  console.log("address", wallet.address.toB256())


  async function newPlayer() {
    const account = await fuel.currentAccount();
    const wallet = await fuel.getWallet(account);
    const contract = GameAbi__factory.connect(CONTRACT_ID, wallet);
    let resp = await contract.functions
    .new_player()
    .txParams({ variableOutputs: 1})
    .call();
    console.log("RESPONSE:", resp.value)
  }

  async function levelUp() {
    const account = await fuel.currentAccount();
    const wallet = await fuel.getWallet(account);
    const contract = GameAbi__factory.connect(CONTRACT_ID, wallet);
    let amount = 100_000_000;
    let resp = await contract.functions
    .level_up()
    .callParams({
      forward: [amount, CONTRACT_ID],
    })
    .call();
    console.log("RESPONSE:", resp.value.toNumber())
  }

  return (
    <div className="App">
       <header>
        <h1>Sway Game</h1>
      </header>

      {fuel && (
        <div>
          {isConnected ? (
            <div>
              <button onClick={newPlayer}>New Player</button>
              <button onClick={levelUp}>Level Up</button>
            </div>
          ) : (
            <button onClick={() => fuel.connect()}>Connect Wallet</button>
          )}
        </div>
      )}

      {notDetected && <div>fuel NOT detected.</div>}
    </div>
  );
}

export default App;
