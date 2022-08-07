

class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.message}`)
  }

   // отрисовка карточек с сервера
   async getInitialCards() {
    const res = await fetch(this.url + "/cards", {
      headers: this.headers
    });
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Ошибка: ${res.message}`);
  }


    // получаем информацию о пользователе
    getUserInfo() {
      return fetch("https://nomoreparties.co/v1/cohort-45/users/me", {
        method: "GET",
        headers: {
          authorization: '34063916-fb53-4e1b-84c7-1baa3625af58',
          'Content-Type': 'application/json'
        },
      })
      .then(this._checkResponse)
    }




  // Редактирование профиля
  editProfile(data) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-45/users/me", {
    method: "PATCH",
    headers: {
      authorization: '34063916-fb53-4e1b-84c7-1baa3625af58',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify(data)
    })
    .then(this._checkResponse)
  }



  // Обновление аватара пользователя
  handleUserAvatar(userAvatar) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-45/users/me/avatar", {
      method: 'PATCH',
      headers: {
        authorization: '34063916-fb53-4e1b-84c7-1baa3625af58',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userAvatar)
    })
    .then(this._checkResponse)
  }



  // Добавление новой карточки
  createCardApi(data) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-45/cards", {
      method: "POST",
      headers: {
        authorization: '34063916-fb53-4e1b-84c7-1baa3625af58',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)

    })
    .then(this._checkResponse)
  }


  // Отображение количества лайков карточки
  toggleLike(id, isLiked) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-45/cards/${id}/likes`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: {
        authorization: '34063916-fb53-4e1b-84c7-1baa3625af58',
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse);
  }



    //Удаление карточки
    deleteCard(id) {
      return fetch(`https://mesto.nomoreparties.co/v1/cohort-45/cards/${id}`, {
        method: "DELETE",
        headers: {
          authorization: '34063916-fb53-4e1b-84c7-1baa3625af58',
          'Content-Type': 'application/json'
        },
      })
      .then(this._checkResponse)
    }

}


const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-45',
  headers: {
    authorization: '34063916-fb53-4e1b-84c7-1baa3625af58',
    'Content-Type': 'application/json'
  }
});

export default api;