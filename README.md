# Project2Wine

Project Proposal: Visualizing Wine Reviews
Group Members: Peter Meyers, Andrew Mullenger, Theo Moreland, Danielle Perkins
Link to Dataset: https://www.kaggle.com/zynicide/wine-reviews/version/4?

Our goal for this project is to create a set of visualizations to show how wine varieties, pricing, and ratings vary by location in the United States. We also want to show how ratings and price differ between wine varieties. The data set we are using comes from a web scraping project that sourced data points on individual wines from WineEnthusiast back in 2017. The data points collected include country of origin, description, points (rating), region, price, variety, etc. 

Key Questions: 

1. Which types of wine have the highest ratings?
2. Which types of wine command the highest prices?  
3. Which states produce wines that command the highest prices?
4. Which states produce wines that 

Visualizations:
    Map Layers:
        - Bar graph markers showing average price and rating for wine grown in each state
        - Production heatmap showing where the most wine is produced. 
            - Filter by wine variety to show where different types of wine are commonly produced. 

    Basic graphs (not on map) :
        - Scatter plot showing the relationship between number of vineyards and avg wine price per state. 
        - Combined bar chart showing average bottle price for each wine variety and average rating per variety. 

For our new JavaScript library, we will be using a leaflet plugin called "Leaflet Data Visualization Framework" to create bar chart markers for average price and average rating per state. Here is the GitHub link for this plugin: https://github.com/humangeo/leaflet-dvf.

