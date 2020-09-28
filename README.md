# Tao Leadership Technical Challenge

Able to create a simple CURD api using django. But not able to write any tests or fully complete the UI.

Please note that the ```http://127.0.0.1:8001/api/pokemons``` is available sometimes at port 8001 instead of 8000

## Getting Started

This project contains a Django app for the back end and a React.js app for the
front end. Neither app os properly configured for deployment and should be run
in development mode.

### Back end (Python/Django)

To use this app, install the dependencies, create a database, and run the Django
server.

```sh
python3 -m venv venv
venv/bin/python -m pip install -r requirements.txt
```

You can enter the virtual environment with:

```sh
. ./venv/bin/activate
```

The rest of the setup can be completed with:

```sh
python manage.py migrate
python manage.py runserver
```

This app is written to be used with Python 3.8 or greater.

### Front end (JS/TS and React)

The front end app is in the `pokedex/` directory. The following instructions
assume that this is your current working directory. You will also need Node.js
and Yarn installed.

Install the dependencies for the app with

```sh
yarn install
```

You can then run the development server with

```sh
yarn start
```

and navigate to the app at <http://localhost:3000>

The app was written with Node.js v14.7.0 and Yarn 1.22.4.

## Tests

Sorry not able to write any tests
