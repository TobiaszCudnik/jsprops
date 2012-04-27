NODE = node-harmony
NODE_DEBUG = node debug --harmony
MOCHA = node_modules/.bin/mocha
BUILDER = node_modules/contracts.coffee/bin/coffee

# TODO
RUN = ~/node_modules/.bin/runjs

POST_PARAMS = -R spec

TESTS = test/properties.js \
		test/signals.js

all: build

build:
	$(NODE) -c --contracts -o lib-contracts src
	$(NODE) -c -o lib src/properties.coffee
	$(NODE) -c test

build-contracts-live:
	$(BUILDER) \
		--contracts \
		-o lib-contracts \
		-cw src

build-test-live:
	$(BUILDER) \
		-cw test

test-live:
	$(RUN) \
		$(MOCHA) \
		$(TESTS) \
		$(POST_PARAMS)

test:
	./node_modules/.bin/mocha \
		--reporter list \
		test/properties.js \
		test/signals.js

test-contracts:
	$(NODE) \
		$(MOCHA) \
		test/bootstrap/contracts.js \
		$(TESTS) \
		$(POST_PARAMS)


.PHONY: test break build

