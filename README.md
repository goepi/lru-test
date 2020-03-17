# lru-test

`yarn install`
`yarn lerna bootstrap`

though actually we won't be using the symlinks in this example

### build `component-library`
`yarn build"

At this point you should see the error: `Unexpected token (Note that you need plugins to import files...)` because rollup in the `component-library` is not transpiling files outside of `component-library`.
