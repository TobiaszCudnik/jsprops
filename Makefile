COFFEE = /home/bob/workspace/dropbox/engineer-thesis/node_modules/contracts.coffee/bin/coffee

all: build

build:
	$(COFFEE) -c --contracts -o lib-contracts src
	$(COFFEE) -c lib src
	$(COFFEE) -c test

test:
	make build
	./node_modules/.bin/mocha \
		--reporter list \
		test/properties.coffee \
		test/signals.coffee


.PHONY: test build