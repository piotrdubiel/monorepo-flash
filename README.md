# Agenda

## What

- ~~big companies repos~~
- OSS projects
  - babel
  - react
  - meteor
  - ember

## Why

- modularize.
- single lint, build, test and release process.
- easy to coordinate changes across modules.
- easier to setup a development environment.
- Tests across modules are ran together which finds bugs that touch multiple modules easier.

## How

- lerna
- yarn _workspaces_

- react-xp
- react-primitives
- react-native-web

```
├── forks
│   ├── electron-redux
│   │   └── package.json
│   ├── react-calendar
│   │   └── package.json
│   ├── react-native-dates
│   │   └── package.json
│   ├── react-native-ble-plx
│   │   └── package.json
│   └── (...)
├── core
│   └── package.json
├── platforms
│   ├── mobile
│   │   └── package.json
│   └── desktop
│       └── package.json
├── .editorconfig
├── .eslintrc
├── .gitlab-ci.yml
├── .npmrc
├── README.md
├── package.json
└── lerna.json
```

```
├── components
│   ├── react
│   └── react-native
├── platforms
│   ├── desktop
│   ├── mobile
│   └── web
├── libraries
│   ├── api
│   ├── graphql
│   └── redux
├── lerna.json
└── package.json
```

```
├── components
│   ├── react
│   └── react-native
├── libraries
│   ├── api
│   ├── graphql
│   └── redux
├── platforms
│   ├── desktop
│   ├── mobile
│   └── web
├── server
│   ├── graphql
│   └── rest
├── schema
├── package.json
└── lerna.json
```