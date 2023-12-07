import { applyPureVueInReact } from "veaury";

import ButtonReact from "remoteReact/Button";
import ButtonVue from "remoteVue/Button";

const ButtonWrapperVue = applyPureVueInReact(ButtonVue);

function App() {
  return (
    <>
      <ButtonReact />
      <br />
      <ButtonWrapperVue />
    </>
  );
}

export default App;
