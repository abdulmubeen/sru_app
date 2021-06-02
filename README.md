# React Native Expo based college application
[![made with expo](https://img.shields.io/badge/MADE%20WITH%20EXPO-000.svg?style=for-the-badge&logo=expo&labelColor=4630eb&logoWidth=20)](https://github.com/expo/expo) [![supports iOS and Android](https://img.shields.io/badge/Platforms-Native-4630EB.svg?style=for-the-badge&logo=EXPO&labelColor=000&logoColor=fff)](https://github.com/expo/expo)

[![front end with ui kitten](https://img.shields.io/badge/Front%20End-UI%20Kitten-orange?style=for-the-badge&logo=UIkit)](https://github.com/akveo/react-native-ui-kitten) [![built with Firebase](https://img.shields.io/badge/Built%20With-Firebase-yellow?style=for-the-badge&logo=Firebase)](https://firebase.google.com/)

## Table of Contents

- [Install & Build](#install--build)
- [Features](#features)
- [Linting](#linting)

## Install & Build

Download project: `git clone https://github.com/abdulmubeen/sru_app.git && cd sru_app` 

First, make sure you have Expo CLI installed: `npm install -g expo-cli`

Install: `yarn` or `yarn install`

Run Project Locally: `yarn dev` or `yarn start`

Run Project using Expo: `expo start`

## Features

- Expo SDK 41
- iOS and Android
- React Navigation v5

## Linting

- run: `yarn lint` for a list of linting warnings/error in cli
- prettier and airbnb config
- make sure you have prettier package installed:
  - [prettier for atom](https://atom.io/packages/prettier-atom)
  - [prettier for vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - stylelint integration
  - automatic format on save (toggle format on save)
- be aware of the `.prettierignore` file
