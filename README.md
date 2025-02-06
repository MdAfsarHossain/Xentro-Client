# [Xentro Info Tech](https://xentro-task.web.app)

`Xentro` is a dynamic and user-friendly `e-commerce` platform offering a wide range of `products`, including `mobile phones`, `tablets`, `laptops`, and more. Designed to provide a seamless `shopping` experience, Xentro allows users to explore an extensive catalog of products, `view` detailed descriptions of each item, and `add` their own custom products to the platform.

## [Key Features]()

- Dashboard:

  - It's has a admin dashboard.
  - The dashboard has a sidebar for navigation (All Users and Products) and a main content area.

- Data Display:

  - Fetch and display a list of users from the provided RESTful API (GET: https://jsonplaceholder.typicode.com/users).
  - Display user information such as name, email, and city name.
  - For each user, provide an option to view their full details. - Fetch and display a list of Products(GET: https://api.restful-api.dev/objects).
  - Add a Product (POST: https://api.restful-api.dev/objects).
  - Find that single Product you added (GET: https://api.restful-api.dev/objects/:id).
  - Deleted a Product (DELETE:https://api.restful-api.dev/objects/:id)

- Sorting and Searching:
  - Sorting and searching functionalities for users and Products.
- Authentication
  - Firebase Authentication for login and register

## [Technology Stack]()

- `Frontend:` React, Tailwind CSS, Daisy UI.
- `Backend:` Node.js, Express.js.
- `Authentication:` Firebase.
- `APIs:` RESTful APIs for data retrieval and management.

## [Dependencies]()

- `@tailwindcss/vite`: ^4.0.3
- `@tanstack/react-query`: ^5.66.0
- `@tanstack/react-query-devtools`: ^5.66.0
- `axios`: ^1.7.9
- `firebase`: ^11.2.0
- `prop-types`: ^15.8.1
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-helmet-async`: ^2.0.5
- `react-hook-form`: ^7.54.2
- `react-hot-toast`: ^2.5.1
- `react-icons`: ^5.4.0
- `react-router-dom`: ^6.29.0
- `react-spinners`: ^0.15.0
- `tailwindcss`: ^4.0.3

## [Installation]()

- Run `npm install` to install project Dependencies

## [How to Run]()

1. Clone the repository

```js
git clone https://github.com/MdAfsarHossain/Xentro-Server.git
cd xentro-client
```

2. Install dependencies using

```js
npm install
```

3. Setup Environment Variables

- Create `.env.local` in the root directory.
- Add `VITE_API_URL` variable and put your server url here.
- Create a firebase project and add config here firebase config will look like

```js
VITE_apiKey;
VITE_authDomain;
VITE_projectId;
VITE_storageBucket;
VITE_messagingSenderId;
VITE_appId;
```

4. Run the website to locally

```js
npm run dev
```

5. Open the website in your local browser http://localhost:5173

## [Deployment]()

- Hosted on Netlify or Vercel for a fast and reliable experience.
- Firebase Authentication requires authorized domains to ensure secure access.

## [Contributions]()

- Contributions are welcome! Fork this repository, make your changes, and submit a pull request.

### [User Login Info]()

- `Email:` afsar@gmail.com
- `Password:` Afsar12345

### [Live Link](https://xentro-task.web.app)

### [Server Site Code](https://github.com/MdAfsarHossain/Xentro-Server)

### [Website Preview]()

<img src="https://raw.githubusercontent.com/MdAfsarHossain/Xentro-Client/refs/heads/main/xentro-info-tech.png">
