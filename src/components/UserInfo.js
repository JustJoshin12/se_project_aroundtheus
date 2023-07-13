export default class UserInfo {
    constructor(nameSelector,infoSelector,imageSelector){
        this._name = document.querySelector(nameSelector);
        this._info = document.querySelector(infoSelector);
        this._image = document.querySelector(imageSelector)
    }

    getUserInfo(){
        return {
            name: this._name.textContent,
            info: this._info.textContent,
            avatar: this._image.src
        }
    }

    setUserInfo(name,info){ 
        this._name.textContent = name;
        this._info.textContent = info;
    }


    setUserImage(avatar){
        this._image.src = avatar;
    }
}

