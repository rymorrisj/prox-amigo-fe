/**
 * @description All auth routes
 */
const AUTH = '/auth';
const AUTH_SIGNIN = `${AUTH}/login`;
const AUTH_LOGOUT = `${AUTH}/logout`;
const AUTH_SIGNUP = `${AUTH}/register`;
const AUTH_REFRESH_TOKENS = `${AUTH}/refresh-tokens`;
const AUTH_RESET_PASSWORD = `${AUTH}/reset-password`;
const AUTH_FORGOT_PASSWORD = `${AUTH}/forgot-password`;
const AUTH_SEND_VERIFICATION_EMAIL = `${AUTH}/send-verification-email`;
const AUTH_SEND_VERIFY_EMAIL = `${AUTH}/verify-email`;

const AUTH_ROUTES = Object.freeze({
    AUTH,
    AUTH_SIGNIN,
    AUTH_LOGOUT,
    AUTH_SIGNUP,
    AUTH_REFRESH_TOKENS,
    AUTH_RESET_PASSWORD,
    AUTH_FORGOT_PASSWORD,
    AUTH_SEND_VERIFICATION_EMAIL,
    AUTH_SEND_VERIFY_EMAIL
});

export default AUTH_ROUTES;