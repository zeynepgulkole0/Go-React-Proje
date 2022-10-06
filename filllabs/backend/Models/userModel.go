package Models

import "time"

type User struct {
	Id        uint      `json:"id"`
	Name      string    `json:"name"`
	Surname   string    `json:"surname"`
	Phone     string    `json:"phone"`
	Email     string    `json:"email"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

func CreateResponseUser(UserModel User) User {
	return User{Id: UserModel.Id, Name: UserModel.Name, Surname: UserModel.Surname, Phone: UserModel.Phone, Email: UserModel.Email}
}
