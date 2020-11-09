import shortid from "shortid";
import dayjs from "dayjs";

/**
 * @property {string} id - generate id.
 * @property {string} name - 고객사 이름.
 * @property {string} createDt - 생성일.
 */
class User {
  id;
  name;
  createDt;
}

export default class UserRepo {
  static users = [];
  get users() {
    return this.users;
  }
}

/**
 * 초기화용 테스트 데이터
 */
const initData = [
  {
    id: shortid.generate(),
    name: "kuby",
    createDt: dayjs().toISOString(),
  },
  {
    id: shortid.generate(),
    name: "kakao",
    createDt: dayjs().toISOString(),
  },
  {
    id: shortid.generate(),
    name: "naver",
    createDt: dayjs().toISOString(),
  },
  {
    id: shortid.generate(),
    name: "google",
    createDt: dayjs().toISOString(),
  },
  {
    id: shortid.generate(),
    name: "apple",
    createDt: dayjs().toISOString(),
  },
];
UserRepo.users.push(...initData);
