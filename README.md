# Simple Transaction App

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
- [UI](#ui)
- [Structure Folder](#structure-folder)
- [Explanation](#explanation)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

This project create a simple transaction app using React native

Libraries that I used in this project is

- axios
- react navigation
- redux
- redux saga
- redux persist

## UI

![Login](https://i.ibb.co/ckPBjtr/Screenshot-from-2022-03-13-18-03-02.png)
![Register](https://i.ibb.co/qpn6jrk/Screenshot-from-2022-03-13-18-03-38.png)
![Dashboard](https://i.ibb.co/yWHh4Pr/Screenshot-from-2022-03-13-18-04-32.png)
![Transfer](https://i.ibb.co/jZTNDfb/Screenshot-from-2022-03-13-18-04-45.png)
![Transfer22](https://i.ibb.co/ZczYbS0/Screenshot-from-2022-03-13-18-06-29.png)

## Structure Folder

- src
  - [common](#common)
    - [api](#api)
    - [colors](#colors)
    - [styles](#styles)
    - [utils](#utils)
  - [component](#component)
    - [dashboard](#dashboard)
    - [transaction](#transaction)
  - [navigation](#navigation)
  - [redux](#redux)
    - [reducer](#reducer)
    - [saga](#saga)
  - [screen](#screen)
    - [auth](#auth)
    - [dashboard](#dashboard)
    - [tranaction](#tranaction)

<!-- GETTING STARTED -->

## Explanation

### common

#### api

use for setup consume API. I setup axios and define endpoints here

#### _colors_

for define colors inside the App

#### _styles_

for define global style

#### _utils_

for define global utilities. I create

- `errorMessageHandler()`
- `grouper()` for grouping transactions base on date
- `normalize()` for make dinamic size base on screen device
- `actionBuilder()` for help me create object for `dispatch()` easier

### component

I used this folder to collect my reusable components
I also create nested folder to manage my spesific components

#### _dashboard_

for dashboard component

#### _transaction_

for transaction component

### navigation

for settup my navigator

### redux

for settup redux, redux persist, and redux saga middleware

#### _reducer_

for reducer file

#### _saga_

for saga file

### screen

#### _auth_

- login
- register

#### _dashboard_

- dashboard

#### _transaction_

- transfer

<!-- CONTACT -->

## Contact

Yayat Hidayat

- github [@ythyayat](https://github.com/ythyayat)
- linkedIn [@ythyayat](https://www.linkedin.com/in/ythyayat)
- ythyayathidayat2@gmail.com
