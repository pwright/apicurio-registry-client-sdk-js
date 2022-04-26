# Release Guide

Here are the steps you need to take in order to create a new release of the `apicurio-registry-client` on [npm](https://www.npmjs.com/package/apicurio-registry-client).

## Bump version in `package.json`

1. `git checkout -b release-1.0.0`.
2. Set the value of `version` in [package.json](./package.json) to "1.0.0".
3. `git add package.json && git commit -m "chore: release 1.0.0"`.
4. Create a pull request and merge it to `main`.

## Create release

1. `git tag 1.0.0`.
2. `git push <remote> 1.0.0`.
3. The [Publish package to npmjs](https://github.com/Apicurio/apicurio-registry-client-sdk-js/actions/workflows/npm-publish.yml) workflow will start to publish the package to npm.
4. Once completed, the new package version should be available on [npm](https://www.npmjs.com/package/apicurio-registry-client).
