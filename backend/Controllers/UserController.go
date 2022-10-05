package controllers

import (
	"go-react/Models"
	"go-react/config"

	"github.com/gofiber/fiber/v2"
)

func UserIndex(c *fiber.Ctx) error {
	users := []Models.User{}
	config.DB.Find(&users)
	responseUsers := []Models.User{}
	for _, user := range users {
		responseUser := Models.CreateResponseUser(user)
		responseUsers = append(responseUsers, responseUser)

	}
	return c.Status(200).JSON(responseUsers)

}
func UserStore(c *fiber.Ctx) error {
	var User Models.User
	if err := c.BodyParser(&User); err != nil {
		return c.Status(400).JSON(err.Error())
	}
	config.DB.Create(&User)
	responseUser := Models.CreateResponseUser(User)
	return c.Status(200).JSON(responseUser)

}
func UserGetId(c *fiber.Ctx) error {
	id := c.Params("id")
	var user Models.User
	config.DB.Find(&user, "id=?", id)
	return c.Status(200).JSON(&user)

}
func UserUpdate(c *fiber.Ctx) error {
	id := c.Params("id")
	user := new(Models.User)
	config.DB.Find(&user, "id=?", id)
	if err := c.BodyParser(&user); err != nil {
		return c.Status(500).SendString(err.Error())
	}
	config.DB.Save(&user)
	return c.JSON(&user)

}

func UserDestroy(c *fiber.Ctx) error {
	id := c.Params("id")
	var user Models.User
	config.DB.Find(&user, "id=?", id).Delete(&user)
	return c.SendString("User is deleted.")
}
