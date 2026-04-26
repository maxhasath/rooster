export default class ENV {
  public static BASE_URL = process.env.BASE_URL;
  public static LOGIN_LINK = process.env.LOGIN_LINK;
  public static HOME_PAGE_LINK = process.env.HOME_PAGE_LINK;
  public static TIME_OFF_URL = process.env.TIME_OFF_URL;

  //Login
  public static VALID_EMAIL = process.env.VALID_EMAIL;
  public static VALID_PASSWORD = process.env.VALID_PASSWORD;
  public static INVALID_CREDENTIALS_MESSAGE = process.env.INVALID_CREDENTIALS_MESSAGE;
  public static NONEXISTING_EMAIL = process.env.NONEXISTING_EMAIL;

  //Profile
  public static PROFILE_REQUIRED_ERROR = process.env.PROFILE_REQUIRED_ERROR;
  public static PROFILE_SUCCESS_MESSAGE = process.env.PROFILE_SUCCESS_MESSAGE;
}
