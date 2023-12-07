import { applyPureVueInReact } from "../../host-vue/node_modules/.pnpm/veaury@2.3.12_react-dom@18.2.0_react@18.2.0/node_modules/veaury/types/veaury";

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
