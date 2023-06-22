from flask import Flask

app = Flask(__name__)

@app.route('/members')
def members():
  return dict({
    '131425': {
      'name': 'Naomi Lago',
      'age': 20,
      'occupation': 'Data Scientist'
    }
  })
  
