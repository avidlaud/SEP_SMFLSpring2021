README
	This readme contains information regarding frontend and backend integration testing


FRONTEND
For the frontend, we used Jest, a well known Javascript testing framework, along with Enzyme, which is a testing utility that works with Jest to test React components.

To run these tests, simply `cd ../code/frontend/src` and run `jest`. If you would like to see test coverage, simply run the previous command with the `--coverage` flag.


BACKEND
Integration tests are served within our test suites, which cover both unit tests as well as interaction tests between services. 

Tests for the league service and stock service are listed in the directories below.
	../code/app/services/league/tests/
	../code/app/services/stock/tests/

Additionally, you may click the symlinks in this folder to be redirected to the directory containing the integration testing source code.

To run these tests, ensure that all required packages are installed by following the instructions in ../code/README1.txt.

Additionally, the environment variable `TEST_DB_URL` must be added to the .env file in both stock and league.

If all packages are installed, running `npm test` in either the league or stock directories will run our test suite. 
Note that for the league tests to be completed, the stock service must be running.

AUTHORS
	(Refer to ../code/README1.txt)
