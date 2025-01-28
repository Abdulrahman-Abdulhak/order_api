import CustomApiError from "./CustomApiError.js";

export default class NotFoundError extends CustomApiError {
  constructor(msg: string) {
    super(msg, 404);
  }
}
