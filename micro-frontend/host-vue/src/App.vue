<script setup>
import { applyPureReactInVue } from "veaury";

import ButtonReact from "remoteReact/Button";
import ButtonVue from "remoteVue/Button";

const ButtonWrapperReact = applyPureReactInVue(ButtonReact);
</script>

<template>
  <ButtonWrapperReact />
  <br />
  <ButtonVue />
</template>
