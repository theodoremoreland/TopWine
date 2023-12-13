from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.automap import automap_base

application = Flask(__name__)
application.config["DEBUG"] = True
application.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/wine2.SQLite"
application.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

DB = SQLAlchemy(application)

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(DB.engine, reflect=True)

# Save references to each table
StatesModel = Base.classes.States
ReviewsModel = Base.classes.Top10


# Create database tables
@application.before_first_request
def setup():
    global results_from_states_query, results_from_reviews_query

    DB.create_all()

    results_from_states_query = DB.session.query(
        StatesModel.province,
        StatesModel.avg_price,
        StatesModel.avg_score,
        StatesModel.Latitude,
        StatesModel.Longitude,
    ).all()

    results_from_reviews_query = DB.session.query(
        ReviewsModel.id,
        ReviewsModel.price,
        ReviewsModel.points,
        ReviewsModel.variety,
        ReviewsModel.designation,
        ReviewsModel.taster_name,
        ReviewsModel.taster_twitter_handle,
        ReviewsModel.winery,
        ReviewsModel.description,
    ).all()


@application.route("/")
def index():
    return render_template("index.html")


@application.route("/visualizations")
def stats():
    global results_from_states_query, results_from_reviews_query
    extracted_reviews_list = []

    for row in results_from_reviews_query:
        review_metadata = {}
        review_metadata["ids"] = row[0]
        review_metadata["price"] = row[1]
        review_metadata["points"] = row[2]
        review_metadata["variety"] = row[3]
        review_metadata["designation"] = row[4]
        extracted_reviews_list.append(review_metadata)

    # Create lists from the results_from_states_query
    state = [row[0] for row in results_from_states_query]
    price = [row[1] for row in results_from_states_query]
    score = [row[2] for row in results_from_states_query]
    lat = [row[3] for row in results_from_states_query]
    lng = [row[4] for row in results_from_states_query]

    # Generate the plot trace
    extracted_states_dict = {
        "state": state,
        "avg_price": price,
        "avg_score": score,
        "lat": lat,
        "lng": lng,
    }

    # Create lists from results_from_reviews_query
    ids = [row[0] for row in results_from_reviews_query]
    price = [int(row[1]) for row in results_from_reviews_query]
    points = [int(row[2]) for row in results_from_reviews_query]
    variety = [row[3] for row in results_from_reviews_query]
    designation = [row[4] for row in results_from_reviews_query]
    taster_name = [row[5] for row in results_from_reviews_query]
    taster_twitter_handle = [row[6] for row in results_from_reviews_query]
    winery = [row[7] for row in results_from_reviews_query]
    description = [row[8] for row in results_from_reviews_query]

    # Generate the plot trace
    extracted_reviews_dict = {
        "id": ids,
        "price": price,
        "points": points,
        "grape": variety,
        "designation": designation,
        "taster_name": taster_name,
        "taster_twitter_handle": taster_twitter_handle,
        "winery": winery,
        "description": description,
    }

    return render_template(
        "visualizations.html",
        states=extracted_states_dict,
        top10=extracted_reviews_list,
        table10=extracted_reviews_dict,
    )


@application.route("/map")
def map():
    global results_from_states_query

    # Create lists from the query results_from_states_query
    state = [row[0] for row in results_from_states_query]
    price = [row[1] for row in results_from_states_query]
    score = [row[2] for row in results_from_states_query]
    lat = [row[3] for row in results_from_states_query]
    lng = [row[4] for row in results_from_states_query]

    # Generate the plot trace
    extracted_states_dict = {
        "state": state,
        "avg_price": price,
        "avg_score": score,
        "lat": lat,
        "lng": lng,
    }

    return render_template("map.html", states=extracted_states_dict)


@application.route("/credits")
def credits():
    return render_template("credits.html")


if __name__ == "__main__":
    application.run(host="0.0.0.0", port=5000)
