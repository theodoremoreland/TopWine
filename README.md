# Project2Wine

Link to finished product: http://www.project2wine.com/ (currently shut down due to cost)

Project Proposal: Visualizing Wine Reviews
Group Members: Peter Meyers, Andrew Mullenger, Theo Moreland, Danielle Perkins
Link to Dataset: https://www.kaggle.com/zynicide/wine-reviews/version/4?

Our goal for this project is to create a set of visualizations to show how wine varieties, pricing, and ratings vary by location in the United States. We also want to show how ratings and price differ between wine varieties. The data set we are using comes from a web scraping project that sourced data points on individual wines from WineEnthusiast back in 2017. The data points collected include country of origin, description, points (rating), region, price, variety, etc. 

Key Questions: 

1. Which types of wine have the highest ratings?
2. Which types of wine command the highest prices?  
3. Which states produce wines that command the highest prices?
4. Which states produce wines that have the highest ratings?

Visualizations:
    Map Layers:
        - Bar graph markers showing average price and rating for wine grown in each state
        - Production heatmap showing where the most wine is produced. 
            - Filter by wine variety to show where different types of wine are commonly produced. 

    Basic graphs (not on map) :
        - Scatter plot showing the relationship between number of vineyards and avg wine price per state. 
        - Combined bar chart showing average bottle price for each wine variety and average rating per variety. 

For our new JavaScript library, we will be using a leaflet plugin called "Leaflet Data Visualization Framework" to create bar chart markers for average price and average rating per state. Here is the GitHub link for this plugin: https://github.com/humangeo/leaflet-dvf.

# Technologies used:

   - IDEs (VS Code and Jupyter Notebook)
   - Data Wrangling (Ptyhon-Pandas, R)
   - Storage (SQLite)
   - Backend (Python-Flask)
   - Frontend (JavaScript, Bootstrap 4, HTML5/CSS3)
   - Web Host (AWS)
   
# Demonstration (<a href="https://www.youtube.com/watch?v=-aHoOTVym0c" target="_blank">click here for video</a>):

# Landing page (Default View)
<img src="static/img2/step1.PNG" width="900">

# Landing page (Stats View)
<img src="static/img2/step2.PNG" width="900">

# Statistics page (Summary view)
<img src="static/img2/step3.PNG" width="900">

# Statistics page (Map view)
<img src="static/img2/step4.PNG" width="900">

# Map
<img src="static/img2/step5.PNG" width="900">

# Map (After interaction)
<img src="static/img2/step6.PNG" width="900">

# Statistics page (Bar chart view)
<img src="static/img2/step7.PNG" width="900">

# Bar chart (After interaction)
<img src="static/img2/step8.PNG" width="900">

# Statistics page (Scatter plot view)
<img src="static/img2/step9.PNG" width="900">

# Scatter plot (After interaction)
<img src="static/img2/step10.PNG" width="900">

# Landing page (Conclusions View)
<img src="static/img2/step11.PNG" width="900">

# Landing page (Credits View)
<img src="static/img2/step12.PNG" width="900">

Last updated 8/2/2019
