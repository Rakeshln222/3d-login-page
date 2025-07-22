
# 🔐 3D Animated Login & Registration Web Application

The **3D Animated Login & Registration Web App** is a visually immersive, interactive, and responsive frontend application that features a card-flipping animation to switch between login and registration forms. Designed with modern UI/UX principles, this project makes use of **HTML5**, **CSS3 (with 3D transforms and animations)**, and **JavaScript (with localStorage)** to simulate basic user authentication functionality.

---

## 📁 Project Structure

```
3d-login-registration/
├── index.html       # Main HTML file with the login/register interface
├── style.css        # Styling for the 3D card, forms, animations, and responsiveness
└── script.js        # JavaScript logic for flipping, storing, and validating users
```

---

## 🚀 Features

| Feature                      | Description                                                         |
| ---------------------------- | ------------------------------------------------------------------- |
| 🔄 3D Flip Animation         | Smooth flip effect transitions between login and registration forms |
| 👤 User Registration Form    | Collects name, phone, gender, email, and password                   |
| 🔐 Login Form                | Validates against locally stored user credentials                   |
| 🧠 Local Storage Integration | Stores registration data locally in browser                         |
| 🎨 SVG 3D Avatar             | Decorative floating SVG avatar adds a playful aesthetic             |
| 🌈 Modern UI                 | Gradient backgrounds, soft borders, shadows, and hover effects      |
| 🧩 Responsive Design         | Mobile-friendly layout with flexible sizing                         |
| 📋 Input Validation          | HTML5 validation patterns and required fields                       |
| 🌙 Dark-Themed Aesthetic     | Uses cool, contrasting colors for a futuristic look                 |

---

## 🧠 How It Works

### 🔄 Card Flip Mechanism

* The login and registration forms are on two sides of a 3D card.
* The `#card` element rotates on the Y-axis using CSS when a toggle button is clicked.

```javascript
toLogin.onclick = () => card.classList.add('flipped');
toRegister.onclick = () => card.classList.remove('flipped');
```

### 📝 Registration Flow

* User fills in the registration form.
* On submit:

  * Data is collected and stored in `localStorage`.
  * UI automatically flips to the login view.

```javascript
localStorage.setItem('user', JSON.stringify(data));
```

### 🔐 Login Flow

* User submits name and password.
* JavaScript fetches stored user data and validates the credentials.
* Displays appropriate success or error alerts.

---

## 💡 Code Highlights

### index.html

* Contains the 3D flipping card component.
* Two `.side` containers: `.front` for register, `.back` for login.
* Uses semantic elements and built-in validation attributes (e.g., `required`, `pattern`).

### style.css

* Uses `transform-style: preserve-3d`, `perspective`, and `rotateY` for 3D card effect.
* Gradient backgrounds and modern input styling.
* Floating animation for SVG avatar via `@keyframes float`.
* Fully responsive layout with media queries for smaller screens.

```css
.card.flipped {
    transform: rotateY(180deg);
}
```

### script.js

* Uses `FormData` to extract form inputs efficiently.
* Stores data using `localStorage.setItem()` and retrieves using `getItem()`.
* Toggles classes for animation and resets forms after use.

```javascript
const data = Object.fromEntries(new FormData(registerForm));
```

---

## 📱 Responsive Design

| Screen Width | Behavior                                 |
| ------------ | ---------------------------------------- |
| > 500px      | Fixed card width and height              |
| ≤ 500px      | Card resizes to fill 98% of the viewport |
| All screens  | Centered alignment with flexible padding |

---

## ✅ Validations & Safeguards

* Uses `pattern` for validating phone numbers.
* Ensures all fields are filled before processing.
* Provides user-friendly `alert()` messages for success and failure.
* `localStorage` prevents registration data loss on refresh.

---

## 🔧 Technologies Used

| Technology | Purpose                                               |
| ---------- | ----------------------------------------------------- |
| HTML5      | Semantic structure and form elements                  |
| CSS3       | Styling, layout, 3D transforms, and responsive design |
| JavaScript | Form handling, event listeners, localStorage logic    |
| SVG        | Avatar graphics and animation                         |

---

## 🧪 Test the App

1. Open `index.html` in any browser.
2. Fill the registration form and submit.
3. Once registered, switch to login and enter the same name and password.
4. See success or error messages based on input.
5. Resize the window to see responsiveness in action.

---

## 🛠️ Potential Enhancements

* ⛅ Add a backend and database integration.
* 🔒 Hash and securely store passwords.
* ✅ Add real-time form validation and error messages.
* 🧾 Show dashboard or logged-in UI after login.
* 🌗 Toggle between dark/light themes.
* 📲 Support social login options (Google, Facebook).
* 🔃 Remember me & session persistence with cookies.

---

## 📜 License

This project is open-source and freely available for **educational and personal use**. Attribution is appreciated.

---

## 👨‍💻 Author

**Rakesh L N**


