# Top Wine

Visualizations and analysis of wine quality based on reviews from the country's top 10 wine critics.

<img src="presentation/thumbnail.png" width="700">

## Table of contents

- [Overview](#overview)
  - [Group members](#group-members)
  - [Key questions](#key-questions)
  - [Visualizations](#visualizations)
  - [Dataset](#dataset)
- [Technologies Used](#technologies-used)
- [How to run locally](#how-to-run-locally)
  - [Run on Windows](#run-on-windows)
  - [Run on Docker](#run-on-docker)
- [Screenshots](#screenshots)

# Overview

Our goal for this project is to create a set of visualizations to show how wine varieties, pricing, and ratings vary by location in the United States. We also want to show how ratings and price differ between wine varieties. The data set we are using comes from a web scraping project that sourced data points on individual wines from WineEnthusiast back in 2017. The data points collected include country of origin, description, points (rating), region, price, variety, etc.

### Group Members:

Peter Meyers, Andrew Mullenger, Theodore Moreland, Danielle Perkins

### Key Questions:

1. Which types of wine have the highest ratings?
2. Which types of wine command the highest prices?
3. Which states produce wines that command the highest prices?
4. Which states produce wines that have the highest ratings?

### Visualizations:

- Map Layers:

  - Bar graph markers showing average price and rating for wine grown in each state
  - Production heatmap showing where the most wine is produced.
    - Filter by wine variety to show where different types of wine are commonly produced.

- Basic graphs (not on map):

  - Scatter plot showing the relationship between number of vineyards and avg wine price per state.
  - Combined bar chart showing average bottle price for each wine variety and average rating per variety.

For our new JavaScript library, we will be using a leaflet plugin called "Leaflet Data Visualization Framework" to create bar chart markers for average price and average rating per state. Here is the GitHub link for this plugin: https://github.com/humangeo/leaflet-dvf.

### Dataset

Link to Dataset: https://www.kaggle.com/zynicide/wine-reviews/version/4?

# Technologies used:

Python version `3.8` (`3.8.10` specifically) works for the current packages used in `requirements.txt`. Conversely, other versions such as Python `3.11` were tested and do not work thus will require an updated to the aforementioned packages to resolve version conflicts.

- Data Wrangling (Python, Pandas, R)
- Storage (SQLite)
- Backend (Python, Flask)
- Frontend (JavaScript, Bootstrap 4, HTML5/CSS3)
- Containerization (Docker)
- Web Host (AWS)

# How to run locally

Whether you are running the app directly on a Windows OS or indirectly via Docker, there are a few things you need to do in order to setup the application:

- Create your own Open Street Map account and API key @ https://www.openstreetmap.org/user/new
- Create a file named `apiKey.js` and place it in the `application/static/js` folder.
- Copy the contents of `apiKey.example.js` into the `apiKey.js` file you just created wherein the value of `const API_KEY` is your Open Street Map api key.

- If you are trying to run this application directly on a Windows OS, you will need to install `Python 3.8`.
- Otherwise, you will need to install Docker so you can run the application through Docker.

## Run on Windows

Assumes you are using a modern Windows client OS such as Windows 11 or Windows 10 and that Python 3.8 is installed.

**It is assumed the user is at the root of this project and is using a UNIX style command line environment when referencing the CLI commands below.**

Open terminal at root of this project then move into application/ directory:

```
cd application/
```

Create venv folder in application folder using Python 3.8:

```
python3.8 -m venv venv
```

Activate venv:

```
source venv/Scripts/activate
```

Install python packages to venv:

```
pip install -r requirements.txt
```

Start application:

```
python application.py
```

## Run on Docker

Firstly, confirm that Docker is installed and running. Next confirm that no other application is using port `5000` as port `5000` is needed for the Flask server. If you need to run Flask on an alternative port, you can modify the last line in the `application/application.py` file.

**It is assumed the user is at the root of this project and is using a UNIX style command line environment when referencing the CLI commands below.**

Open terminal at root of this project then move into docker/ directory:

```
cd docker/
```

Build Docker image and start Docker container:

```
docker compose up --build
```

Visit: http://localhost:5000 to use the application.

# Screenshots:

# Landing page - View #1 (Mobile)

<img src="presentation/1.PNG" width="200">

# Landing page - View #1 (Desktop)

<img src="presentation/2.png" width="800">

# Landing page - View #2 (Desktop)

<img src="presentation/3.PNG" width="800">

# Landing page - View #3 (Desktop)

<img src="presentation/4.PNG" width="800">

# Landing page - View #4 (Desktop)

<img src="presentation/5.PNG" width="800">

# Visualizations page - View #1 (Desktop)

<img src="presentation/6.PNG" width="800">

# Visualizations page - View #2 (Desktop)

<img src="presentation/7.PNG" width="800">

# Visualizations page - View #3 (Desktop)

<img src="presentation/8.PNG" width="800">

# Visualizations page - View #4 (Desktop)

<img src="presentation/9.PNG" width="800">

# Credits page (Desktop)

<img src="presentation/10.PNG" width="800">
