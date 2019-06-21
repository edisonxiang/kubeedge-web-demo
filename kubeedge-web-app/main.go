package main

import (
	"github.com/astaxie/beego"
	"github.com/edisonxiang/kubeedge-web-demo/kubeedge-web-app/controllers"
)

func main() {
	beego.Router("/", new(controllers.TrackController), "get:Index")
	beego.Router("/track/play/:trackId", new(controllers.TrackController), "get,post:PlayTrack")
	beego.Router("/track/stop", new(controllers.TrackController), "post:StopTrack")

	beego.Run(":80")
}
