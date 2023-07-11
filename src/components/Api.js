export default class Api {
  constructor(url) {
    this._baseUrl = url.baseUrl;
    this._header = url.headers;
  }

 _checkRequest(res) {
   if(res.ok) {
    return res.json();
   } 
 }


   // methods for working with the API =========================================

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._header,
    })
    .then(this._checkRequest);
  }

  editProfile(data) {
    return fetch(`${this._baseUrl}/user/me`, {
      method: "PATCH",
      headers: this._header,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    })
    .then(this._checkRequest);
  }

  editProfileImage(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._header,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    })
    .then(this._checkRequest);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._header,
    })
    .then(this._checkRequest);
  }

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._header,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    })
    .then(this._checkRequest);
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._header,
    })
    .then(this._checkRequest);
  }

  likeCountAdd(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._header,
    })
    .then(this._checkRequest);
  }

  likeCountRemove(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._header,
    })
    .then(this._checkRequest);
  }

  likeCount(cardId) {
   return fetch(`${this._baseUrl}/cards/${cardId}`, {
    headers: this._header,
   })
   .then(this._checkRequest)
  }

  loadData() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()])
  }
}
