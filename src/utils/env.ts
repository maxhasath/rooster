export default class ENV {
  public static BASE_URL = process.env.BASE_URL;
  public static LOGIN_LINK = process.env.LOGIN_LINK;
  public static HOME_PAGE_LINK = process.env.HOME_PAGE_LINK;
  public static TIME_OFF_URL = process.env.TIME_OFF_URL;
  public static ONBOARD_URL = process.env.ONBOARD_URL;
  public static ONBOARD_NEW_EMPLOYEE_URL = process.env.ONBOARD_NEW_EMPLOYEE_URL;
  public static PEOPLE_URL = process.env.PEOPLE_URL;
  public static PAYROLL_URL = process.env.PAYROLL_URL;
  public static NEW_PAYROLL_CYCLE_URL = process.env.NEW_PAYROLL_CYCLE_URL;
  public static REQUESTS_URL = process.env.REQUESTS_URL;
  public static NO_DATA_MESSAGE = process.env.NO_DATA_MESSAGE;

  //Login
  public static VALID_EMAIL = process.env.VALID_EMAIL;
  public static VALID_PASSWORD = process.env.VALID_PASSWORD;
  public static INVALID_CREDENTIALS_MESSAGE = process.env.INVALID_CREDENTIALS_MESSAGE;
  public static NONEXISTING_EMAIL = process.env.NONEXISTING_EMAIL;
  public static NO_EMPLOYEES_MESSAGE = process.env.NO_EMPLOYEES_MESSAGE;
  public static INVALID_SEARCH_TERM = process.env.INVALID_SEARCH_TERM;
  public static INVALID_EMAIL = process.env.INVALID_EMAIL;
  public static INVALID_PASSWORD = process.env.INVALID_PASSWORD;

  //Profile
  public static PROFILE_REQUIRED_ERROR = process.env.PROFILE_REQUIRED_ERROR;
  public static PROFILE_SUCCESS_MESSAGE = process.env.PROFILE_SUCCESS_MESSAGE;
}
