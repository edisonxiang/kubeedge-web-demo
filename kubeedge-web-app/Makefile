.PHONY: all build kubeedge-web-app docker clean

all:build

build:kubeedge-web-app

kubeedge-web-app:
	go build -o kubeedge-web-app main.go

docker:kubeedge-web-app
	docker build . -t xiangxinyong/kubeedge-web-app:v2.6

clean:
	rm -rf ./kubeedge-web-app
