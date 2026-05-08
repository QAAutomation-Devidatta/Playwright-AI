// JavaScript Identifier Cases/Naming Conventions

// 1. camelCase - First letter lowercase, subsequent words capitalized
// Used for: variables, functions, methods, object properties
let firstName = "John";
let lastName = "Doe";
let userEmailAddress = "user@example.com";
function calculateTotalPrice() { return 100; }
function getUserProfile() { return {}; }
let myObject = {
    userId: 1,
    userName: "john_user",
    userAge: 25
};

// 2. PascalCase (UpperCamelCase) - All words capitalized
// Used for: classes, constructors, interfaces
class Person { }
class UserProfile { }
class CustomerAccount { }
function MyConstructor() { }
let UserManager = class { };

// 3. UPPER_CASE - All letters uppercase with underscores
// Used for: constants, static constants
const MAX_USERS = 100;
const DEFAULT_TIMEOUT = 5000;
const API_KEY = "abc123xyz";
const DB_HOST = "localhost";
const MIN_PASSWORD_LENGTH = 8;

// 4. snake_case - Lowercase words separated by underscores
// Used for: file names, database tables, sometimes in some languages
let user_first_name = "John";
let user_last_name = "Doe";
let user_email_address = "user@example.com";
function get_user_profile() { }
let user_account = {
    user_id: 1,
    user_name: "john_user"
};

// 5. kebab-case - Lowercase words separated by hyphens
// Used for: HTML attributes, CSS classes, file names (NOT for JS identifiers)
// Cannot use in JavaScript variable names, but can use in strings:
let cssClass = "user-profile-container";
let htmlAttribute = "data-user-id";
let fileName = "user-profile.js";

// 6. SCREAMING_SNAKE_CASE - All uppercase with underscores
// Used for: global constants, environment variables
const MAX_RETRY_ATTEMPTS = 3;
const APP_VERSION = "1.0.0";
const FEATURE_FLAG_ENABLED = true;

// 7. Mixed cases for different purposes:

// Private variables (convention) - leading underscore
let _privateVariable = 10;
let __doubleUnderscore = 20;
function _privateMethod() { }

// Public/Protected variables - no leading underscore
let publicVariable = 10;

// Special variables - leading dollar sign (jQuery convention)
let $container = null;
let $form = null;

// Boolean variables - prefix with is, has, can, should
let isActive = true;
let hasPermission = false;
let canDelete = true;
let shouldValidate = true;

// 8. Practical examples combining conventions:

// API configuration
const API_CONFIG = {
    BASE_URL: "https://api.example.com",
    TIMEOUT: 5000,
    MAX_RETRIES: 3
};

// User class
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._password = null;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    _validatePassword(pwd) {
        return pwd.length >= MIN_PASSWORD_LENGTH;
    }
}

// Constants for the application
const DEFAULT_LANGUAGE = "en";
const SUPPORTED_LANGUAGES = ["en", "es", "fr"];

// Variables
let currentUser = null;
let isLoggedIn = false;

// Functions
function authenticateUser(username, password) { }
function getUserById(userId) { }
function validateEmail(email) { }

// 9. Summary of naming conventions:
/*
camelCase      - variables, functions, methods
PascalCase     - classes, constructors
UPPER_CASE     - constants
snake_case     - some languages, NOT recommended for JavaScript
_privateVar    - private/internal variables
$variable      - jQuery or special library variables
isFlag, hasX   - boolean variables
SCREAMING_SNAKE_CASE - environment constants, global constants
*/
