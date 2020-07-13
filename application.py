from flask import (Flask, render_template)

from flask_sqlalchemy import SQLAlchemy

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from sqlalchemy import inspect

application = Flask(__name__)
application.config['DEBUG'] = True

# The database URI
application.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///resources/wine2.SQLite"

DB = SQLAlchemy(application)

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(DB.engine, reflect=True)

# Save references to each table
States = Base.classes.States
Top10 = Base.classes.Top10

# Create database tables
@application.before_first_request
def setup():
    global States_table_data, Top10_table_data

    DB.create_all()

    States_table_data = DB.session.query(States.province
                                        , States.avg_price
                                        , States.avg_score
                                        , States.Latitude
                                        , States.Longitude).all()

    Top10_table_data = DB.session.query(Top10.id
                                        , Top10.price
                                        , Top10.points
                                        , Top10.variety
                                        , Top10.designation
                                        , Top10.taster_name
                                        , Top10.taster_twitter_handle
                                        , Top10.winery
                                        , Top10.description).all()


@application.route("/")
def index():
    return render_template("index.html")


@application.route("/stats")
def stats():
    global States_table_data, Top10_table_data

    # Create lists from the query States_table_data
    state = [row[0] for row in States_table_data]
    price = [row[1] for row in States_table_data]
    score = [row[2] for row in States_table_data]
    lat = [row[3] for row in States_table_data]
    lng = [row[4] for row in States_table_data]


    # Create lists from the query Top10_table_data
    ids = [row[0] for row in Top10_table_data]
    price = [int(row[1]) for row in Top10_table_data]
    points = [int(row[2]) for row in Top10_table_data]
    variety = [row[3] for row in Top10_table_data]
    designation = [row[4] for row in Top10_table_data]
    taster_name = [row[5] for row in Top10_table_data]
    taster_twitter_handle = [row[6] for row in Top10_table_data]
    winery = [row[7] for row in Top10_table_data]
    description = [row[8] for row in Top10_table_data]


    top10 = []
    for row in Top10_table_data:
        sample_metadata = {}
        sample_metadata["ids"] = row[0]
        sample_metadata["price"] = row[1]
        sample_metadata["points"] = row[2]
        sample_metadata["variety"] = row[3]
        sample_metadata["designation"] = row[4]
        top10.append(sample_metadata)

    # Generate the plot trace
    states = {
        "state": state,
        "avg_price": price,
        "avg_score": score,
        "lat": lat,
        "lng": lng
    }

    table10 = {
        "id": ids,
        "price": price,
        "points": points,
        "grape" : variety,
        "designation" : designation,
        "taster_name" : taster_name,
        "taster_twitter_handle": taster_twitter_handle,
        "winery": winery,
        "description" : description
    }

    return render_template("stats.html", states=states, top10=top10, table10=table10)


@application.route("/map")
def map():
    global States_table_data

    # Create lists from the query States_table_data
    state = [row[0] for row in States_table_data]
    price = [row[1] for row in States_table_data]
    score = [row[2] for row in States_table_data]
    lat = [row[3] for row in States_table_data]
    lng = [row[4] for row in States_table_data]

    # Generate the plot trace
    states = {
        "state": state,
        "avg_price": price,
        "avg_score": score,
        "lat": lat,
        "lng": lng
    }

    return render_template("map.html", states=states)


@application.route("/credits")
def credits():
    return render_template("credits.html")


if __name__ == "__main__":
    application.run()