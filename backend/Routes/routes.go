package routes

import (
	controllers "go-react/Controllers"

	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {

	api := app.Group("/api") // /api
	//User Group
	user := api.Group("/user")
	user.Get("/getAll", controllers.UserIndex)
	user.Post("/create", controllers.UserStore)
	user.Post("/update/:id", controllers.UserUpdate)
	user.Get("/get/:id", controllers.UserGetId)
	user.Delete("/delete/:id", controllers.UserDestroy)
	//User Group End

}
