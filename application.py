import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import (
    Flask,
    render_template)

from flask_sqlalchemy import SQLAlchemy

application = Flask(__name__)
application.config['DEBUG'] = True

# The database URI
application.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///wine2.SQLite"

db = SQLAlchemy(application)

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(db.engine, reflect=True)

print(Base.classes.keys())

# Save references to each table
States = Base.classes.States
Top10 = Base.classes.Top10

# Create database tables
@application.before_first_request
def setup():
    # Recreate database each time for demo
    # db.drop_all()
    db.create_all()

@application.route("/")
def index():
    return render_template("index.html")

@application.route("/stats")
def stats():

    results = db.session.query(States.province, States.avg_price, States.avg_score, States.Latitude, States.Longitude).all()
    results2 = db.session.query(Top10.id, Top10.price, Top10.points, Top10.variety, Top10.designation).all()

    # Create lists from the query results
    state = [result[0] for result in results]
    price = [result[1] for result in results]
    score = [result[2] for result in results]
    lat = [result[3] for result in results]
    lng = [result[4] for result in results]


    # Create lists from the query results
    ids = [result[0] for result in results2]
    price = [int(result[1]) for result in results2]
    points = [int(result[2]) for result in results2]
    variety = [result[3] for result in results2]
    designation = [result[4] for result in results2]
    

    # Generate the plot trace
    states = {
        "state": state,
        "avg_price": price,
        "avg_score": score,
        "lat": lat,
        "lng": lng
    }

    top10 = {
        "id": ids,
        "price": price,
        "points": points,
        "grape" : variety,
        "designation" : designation
    }

    return render_template("stats.html", states=states, top10=top10)

@application.route("/scrape/<critic>")
def scrape(critic):
    return "you scraped, " + str(critic)

@application.route("/dataset")
def dataset():
    return render_template("table.html")


if __name__ == "__main__":
    application.run()