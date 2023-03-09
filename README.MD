Client side app for a Property Rental Dashboard built with React.
You can find the server side code for this here :- https://github.com/XooTB/property-dashboard-server

## Introduction

This is the client side app for a Property Rental Dashboard. It's built with React and depends on refine for CRUD operations. It uses _Material UI_ for it's layout and _Tailwind_ for styling. It's built with _TypeScript_ so it's pretty stable on the client side with minimal hiccups.

### Technologies used

- _React.js_
- _TypeScript_
- _Tailwind CSS_
- _Refine_
- _Material UI_
- _Vite_

## Detailed Outlines

### Overview

This app uses Refine to handle it's CRUD operations. Refine comes with CRA as the default Build tool. But I changed it to use `Vite` instead of `CRA`. It also uses `Material UI` for it's Layout. It was also a good opportunity to learn material UI for me, so I decided to use it extensively througout the whole project. The whole project is built with `TypeScript` instead of Vanilla JavaScript.

### Styling

Instead of using the default styling used with Material UI. I instead configured it to work with Tailwind CSS. So it works perfectly with Tailwind and can be configred as needed. The layout is pretty simple and provides easy to configure charts.

### Authentication

All Authentication is handled by `Google Auth`. Only the details of the logged in users are stored in the server. The default avatar of the user will be the same as the google profile avatar.

## Purpose

This was a self-project for me to learn more about building CRUD dashboards with React and how to handle the different aspects that comes with CRUD opertions.
