# 🌦️ Secure Weather Information App

This is a secure, full-stack weather application that uses the **OpenWeatherMap API** and **Auth0** for authentication and authorization. It displays live weather information for predefined cities with user login, Multi-Factor Authentication (MFA), and API token protection.

---

## 🔧 Technologies Used

### Frontend
- React + Vite
- Auth0 React SDK
- Tailwind CSS
- Axios

### Backend
- Node.js + Express + TypeScript
- Auth0 (JWT validation via middleware)
- Axios for API requests
- In-memory caching

---

## 🧩 Features

- ✅ Responsive UI (Mobile + Desktop)
- ✅ Login with Auth0
- ✅ MFA via email
- ✅ Protected API routes (JWT-based)
- ✅ Displays weather info:
  - 🌆 City Name
  - 🌤️ Weather Description
  - 🌡️ Temperature
- ✅ 5-minute in-memory caching
- ❌ No public signups (only predefined users)

---

## 🔐 Test Credentials

Use the following Auth0 test user account:

```txt
Email: careers@fidenz.com  
Password: Pass#fidenz
```

## ⚙️ Environment Variables
### Frontend (.env)
- VITE_AUTH0_DOMAIN=dev-wtl5y5x84gpisrb8.us.auth0.com
- VITE_AUTH0_CLIENT_ID=PmSch3J22ajkQVbvPtjfKu32JVbDT5zo
- VITE_AUTH0_AUDIENCE=https://weather-api.assignment.com

### Backend (.env)
- OPEN_WEATHER_API_KEY=your_openweather_api_key
- AUTH0_DOMAIN=dev-wtl5y5x84gpisrb8.us.auth0.com
- AUTH0_AUDIENCE=https://weather-api.assignment.com
- PORT=3000

# 🚀 Getting Started
## 1. Clone the Repository
   ```
git clone https://github.com/your-username/secure-weather-app.git
cd secure-weather-app
```
## 2. Backend Setup
```
cd backend
npm install
npm run start
Server will start at: http://localhost:3000
```
## 3. Frontend Setup
```
cd frontend
npm install
npm run dev
App runs at: http://localhost:5173
```
