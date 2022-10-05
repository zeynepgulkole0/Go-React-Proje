package main

import (
	routes "go-react/Routes"
	"go-react/config"

	"github.com/gofiber/fiber/v2"
)

func main() {
	config.Connect()

	app := fiber.New()
	routes.Setup(app)
	app.Listen(":3001")

}
