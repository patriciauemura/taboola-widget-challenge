# Taboola Widget Challenge [![Netlify](https://img.shields.io/netlify/aa16f20a-c09d-4144-8c96-3695c18e19ab?style=plastic&label=Project%20Preview)](https://taboola-widget-challenge.netlify.app/)

## Overview

This project is a responsive Taboola widget built using pure HTML, CSS, and JavaScript. It consumes the Taboola Recommended API and displays a grid of recommended items, adapting its layout for desktop, tablet, and mobile devices.

## Features

- **Responsive Layout:**  
  - **Desktop/Tablet:** 3 columns x 2 rows (3x2), thumbnail aspect ratio 6:5.
  - **Mobile:** 1 column x 6 rows (1x6), thumbnail aspect ratio 3:2.
- **Interactive Elements:**  
  - Thumbnail image, item title, and branding are clickable links that open the item's URL.
- **Header:**  
  - Customizable header at the top of the widget.
- **Disclosure:**  
  - "Sponsored Links by Taboola" displayed in the top right corner.
- **Bonus Features:**  
  1. Item titles are limited to three lines, with longer titles truncated by an ellipsis (...).
  2. Item categories are displayed if available.
  3. Header text adapts to the user's country: English for US visitors, another language for others (e.g., Portuguese).

## API

The widget fetches data from Taboola Recommended API

## How It Works

1. The widget requests recommendations from the Taboola API.
2. It renders each item with a thumbnail, title, branding, and category (if available).
3. The layout and aspect ratio of images adjust automatically based on the device screen size.
4. The header text changes based on the user's country, detected via IP geolocation.

## Widget Glossary

- **Header:** Widget title at the top.
- **Disclosure:** "Sponsored Links by Taboola" label.
- **Thumbnail Image:** Clickable image for each item.
- **Item Title:** Clickable title below the image.
- **Branding:** Clickable branding text below the title.
- **Category:** Displayed if available.

## Example Layout

![Taboola Widget Example](/Imagem1.png)

## License

This project is for educational

<div align="center">
<h2><u>Find-me / Encontre-me :</u></h2>  

  [![Gmail Badge](https://img.shields.io/badge/-patriciauemura53@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:patriciauemura53@gmail.com)](mailto:patriciauemura53@gmail.com) 
  [![Linkedin Badge](https://img.shields.io/badge/in_Patricia_Uemura-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/patriciauemura53/)](https://www.linkedin.com/in/patriciauemura53/) 
  <a href="https://web.dio.me/users/patriciadev53?tab=achievements" target="_blank"><img src="https://hermes.digitalinnovation.one/assets/diome/logo.svg" target="_blank" width="50px"></a>  
</div>