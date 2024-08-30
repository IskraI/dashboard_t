import { user } from '../data/userInfo';
import { refs } from './refs';

export function renderUserInfo(user) {
  const userInfoTemplate = user => `
 <img class="user-card__photo" src="${user.photo}" />
 <div  class="user-card__descr">
    <p class="user-card__name">${user.name}</p>
    <p class="user-card__title"> ${user.jobTitle}</p>
    </div>
  `;

  return userInfoTemplate(user);
}
refs.containerUserInfo.innerHTML = renderUserInfo(user);
