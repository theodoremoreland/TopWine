# Top Wine

Visualizations and analysis of wine quality based on reviews from the country's top 10 wine critics. This was a group project at _Washington University's Data Analytics Boot Camp (2019)_.

<img src="presentation/thumbnail.png" width="700">

[View the application](https://top-wine-container-service.tw35szt7qqpz2.us-east-2.cs.amazonlightsail.com/)

## Table of contents

- [Overview](#overview)
  - [The team](#the-team-by-github-username)
  - [Key questions](#key-questions)
  - [Visualizations](#visualizations)
  - [Dataset](#dataset)
- [Technologies Used](#technologies-used)
- [How to run locally](#how-to-run-locally)
  - [Run on Windows](#run-on-windows)
  - [Run on Docker](#run-on-docker)
- [Screenshots](#screenshots)
  - [Desktop](#desktop)
  - [Mobile](#mobile)

## Overview

Our goal for this project is to create a set of visualizations to show how wine varieties, pricing, and ratings vary by location in the United States. We also want to show how ratings and price differ between wine varieties. The data set we are using comes from a web scraping project that sourced data points on individual wines from WineEnthusiast back in 2017. The data points collected include country of origin, description, points (rating), region, price, variety, etc.

### The team (by GitHub username)

- [@amullenger](https://github.com/amullenger)
- [@petersmyers](https://github.com/petersmyers)
- [@dperkins2315](https://github.com/dperkins2315)
- [@theodoremoreland](https://github.com/theodoremoreland)

### Key Questions

1. Which types of wine have the highest ratings?
2. Which types of wine command the highest prices?
3. Which states produce wines that command the highest prices?
4. Which states produce wines that have the highest ratings?

### Visualizations

- Map Layers:

  - Bar graph markers showing average price and rating for wine grown in each state
  - Production heatmap showing where the most wine is produced.
    - Filter by wine variety to show where different types of wine are commonly produced.

- Basic graphs (not on map):

  - Scatter plot showing the relationship between number of vineyards and avg wine price per state.
  - Combined bar chart showing average bottle price for each wine variety and average rating per variety.

For our new JavaScript library, we will be using a leaflet plugin called "Leaflet Data Visualization Framework" to create bar chart markers for average price and average rating per state. Here is the GitHub link for this plugin: <https://github.com/humangeo/leaflet-dvf>.

### Dataset

Link to Dataset: <https://www.kaggle.com/zynicide/wine-reviews/version/4>?

## Technologies used

Python version `3.8` (`3.8.10` specifically) was tested and works for the current packages used in `requirements.txt`. Conversely, other versions such as Python `3.11` were tested and do not work thus will require an update to the aforementioned packages to resolve version conflicts.

- Data Wrangling (Python, Pandas, R)
- Storage (SQLite)
- Backend (Python, Flask)
- Frontend (JavaScript, Bootstrap 4, HTML5/CSS3)
- Containerization (Docker)
- Web Host (AWS)

## How to run locally

Whether you are running the app directly on a Windows OS or indirectly via Docker, there are a few things you need to do in order to setup the application:

- Create your own Open Street Map account and API key @ <https://www.openstreetmap.org/user/new>
- Create a file named `apiKey.js` and place it in the `application/static/js` folder.
- Copy the contents of `apiKey.example.js` into the `apiKey.js` file you just created wherein the value of `const API_KEY` is your Open Street Map api key.

- If you are trying to run this application directly on a Windows OS, you will need to install `Python 3.8`.
- Otherwise, you will need to install Docker so you can run the application through Docker.

### Run on Windows

Assumes you are using a modern Windows client OS such as Windows 11 or Windows 10 and that Python 3.8 is installed.

**It is assumed the user is at the root of this project and is using a UNIX style command line environment when referencing the CLI commands below.**

Open terminal at root of this project then move into application/ directory:

```bash
cd application/
```

Create venv folder in application folder using Python 3.8:

```bash
python3.8 -m venv venv
```

Activate venv:

```bash
source venv/Scripts/activate
```

Install python packages to venv:

```bash
pip install -r requirements.txt
```

Start application:

```bash
python application.py
```

### Run on Docker

Firstly, confirm that Docker is installed and running. Next confirm that no other application is using port `5000` as port `5000` is needed for the Flask server. If you need to run Flask on an alternative port, you can modify the last line in the `application/application.py` file and the ports in the `docker-compose.yml` file.

**It is assumed the user is at the root of this project and is using a UNIX style command line environment when referencing the CLI commands below.**

Build Docker image and start Docker container:

```bash
docker compose up --build
```

Visit: <http://localhost:5000> to use the application.

## Screenshots

### Desktop

#### Home page

<img src="presentation/thumbnail.png" width="700">

#### Home page 2 (scrolled down)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/2.png" width="650">

#### Home page 3 (scrolled down)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/3.png" width="650">

#### Home page 4 (scrolled down)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/4.png" width="650">

#### Home page 5 (scrolled down)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/5.png" width="650">

#### Visualizations page (KPIs)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/6.png" width="650">

#### Visualizations page 2 (mini map)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/7.png" width="650">

#### Visualizations page 3 (stacked bar graph)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/8.png" width="650">

#### Visualizations page (scatter plot)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/9.png" width="650">

#### Fullscreen map - Price vs Rating (Dark)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/10.png" width="650">

#### Fullscreen map - State Rating vs Price Ratio (Dark)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/11.png" width="650">

#### Fullscreen map - Price vs Rating and State Rating vs Price Ratio (Light)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/26.png" width="650">

### Mobile

#### Home

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/12.png" width="250">

#### Home 2 (scrolled down)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/13.png" width="250">

#### Home 3 (scrolled down)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/14.png" width="250">

#### Home 4 (scrolled down)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/15.png" width="250">

#### Home 5 (scrolled down)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/16.png" width="250">

#### Home 6 (scrolled down)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/17.png" width="250">

#### Visualizations (KPIs)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/18.png" width="250">

#### Visualizations 2 (KPIs)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/19.png" width="250">

#### Visualizations page (mini map)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/20.png" width="250">

#### Visualizations page (stacked bar graph)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/21.png" width="250">

#### Visualizations page (scatter plot)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/22.png" width="250">

#### Fullscreen map - Price vs Rating (Dark)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/23.png" width="250">

#### Fullscreen map - State Rating vs Price Ratio (Dark)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/24.png" width="250">

#### Fullscreen map - Price vs Rating and State Rating vs Price Ratio (Light)

<img src="https://dj8eg5xs13hf6.cloudfront.net/top-wine/25.png" width="250">
