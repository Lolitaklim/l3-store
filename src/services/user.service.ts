// код представляет службу пользователя (UserService), 
// которая используется для управления идентификатором пользователя в приложении. 

import localforage from 'localforage';
import { genUUID } from '../utils/helpers';

// константа ID_DB содержит имя ключа для хранения идентификатора 
// пользователя в локальном хранилище браузера.
const ID_DB = '__wb-userId';

class UserService {

  // Метод init() класса UserService инициализирует службу пользователя. 
  // Он вызывает метод getId() для получения идентификатора пользователя и выводит его в консоль.

  async init() {
    const id = await this.getId();
    console.warn('UserID: ', id);
  }

  // Метод getId() возвращает идентификатор пользователя. 
  // Он сначала пытается получить идентификатор из локального хранилища. 
  // Если идентификатор не найден (!id), то вызывается приватный метод _setId() 
  // для установки нового идентификатора.

  async getId(): Promise<string> {
    let id = await localforage.getItem(ID_DB) as string;

    if (!id) id = await this._setId();

    return id;
  }

  // Приватный метод _setId() генерирует новый идентификатор пользователя 
  // с помощью функции genUUID(), сохраняет его в локальное хранилище и возвращает его.

  private async _setId(): Promise<string> {
    const id = genUUID();
    await localforage.setItem(ID_DB, id);
    return id;
  }
}

export const userService = new UserService();

// В итоге, при инициализации службы пользователя, 
// она получает идентификатор пользователя из локального хранилища. 
// Если идентификатор не существует, то генерируется новый и сохраняется в локальном хранилище.