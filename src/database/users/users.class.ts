// Model.
import { usersModel } from "./users.model";

// Interface.
import { UsersShape } from "./users.interface";

/**
 * Users.
 */
export class Users {

  #model = usersModel;
  #user: UsersShape;

  constructor(user?: UsersShape) {
    this.#user =  user;
  }

  public find(find: object): Promise<any> {
    return this.#model.find(find);
  }

  public findOne(find: object): Promise<any> {
    return this.#model.findOne(find);
  }

  public save(): Promise<any> {
    return this.#user && this.#model.create(this.#user);
  }
}
