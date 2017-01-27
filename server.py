"""Portfolio website.

Author: Therese Diede
"""

from jinja2 import StrictUndefined

from flask import (Flask, render_template)
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.secret_key = 'jfsajweWlkakNjakswpclI_fictitious'
app.jinja_env.undefined = StrictUndefined


@app.route('/')
def index():
    """Single page web application."""

    return render_template("index.html")


if __name__ == "__main__":
    import doctest

    result = doctest.testmod()
    if not result.failed:
        print("ALL TESTS PASSED. GOOD WORK!")


####################################################################


if __name__ == "__main__":
    # We have to set debug=True here, since it has to be True at the
    # point that we invoke the DebugToolbarExtension
    # app.debug = True

    app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

    # Use the DebugToolbar
    DebugToolbarExtension(app)

    app.run(host='0.0.0.0')
