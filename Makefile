.PHONY: all

all: bellhop.js

out:
	mkdir out

bellhop.js: out
	cat node_modules/lunr/lunr.min.js src/BellHop.js > out/bellhop.js