import "./App.css";
import { useIsConnected } from "./hooks/useIsConnected";
import { useFuel } from "./hooks/useFuel";
import { GameAbi__factory } from "./contracts";

const CONTRACT_ID = "0x7433684b5e731d07604c800777539eeb2c568aa103a13ab785c665d975556078"

function App() {
  const [fuel] = useFuel();
  const [isConnected] = useIsConnected();

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

      {isConnected ? (
        <div>
          <button onClick={newPlayer}>Make New Player</button>
          <button onClick={levelUp}>Level Up</button>
        </div>
      ) : (
        <div>
          {fuel ? (
            <button onClick={() => fuel.connect()}>Connect Wallet</button>
          ) : (
            <button>You need to install the Fuel Wallet first.</button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
