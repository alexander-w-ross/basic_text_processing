import time
from flask import Flask, request

app = Flask(__name__)

@app.route('/text')
def get_current_time():

    print(request.args.get('text_to_proc'))
    dummy_text = str(request.args.get('text_to_proc')) + "___555"
    print(dummy_text)

    return {"text": dummy_text}
    # return {'time': 4}