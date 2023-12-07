# Micro-Frontend

Repo to play with [micro-frontend architecture](https://micro-frontends.org/)

- Covers 4 permutations to test mixing frontend frameworks

  | Host  | Remote |
  | ----- | ------ |
  | React | React  |
  | React | Vue    |
  | Vue   | React  |
  | Vue   | Vue    |

- Uses [pnpm](https://pnpm.io/) instead of [npm](https://www.npmjs.com/)
- Uses [Vite](https://github.com/originjs/vite-plugin-federation) to support module federation
- Uses [Veaury](https://github.com/devilwjp/veaury) to mix React and Vue
- See [this video](https://www.youtube.com/watch?v=t-nchkL9yIg) for getting started with MFE

## Run

```sh
cd remote-react
pnpm i && pnpm build && pnpm preview
```

```sh
cd remote-vue
pnpm i && pnpm build && pnpm preview
```

```sh
cd host-X
pnpm i && pnpm build && pnpm preview
```
