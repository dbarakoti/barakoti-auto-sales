
# 🚗 Barakoti Auto Sales

A modern full-stack car dealership web application built with React and Django, featuring live inventory listings, image galleries, and a sleek, responsive design.

---

## 📝 Project Overview

**As of 10/16/2025**

### 📌 Project Name:

**Barakoti Auto Sales**

### 🎯 Goal of the App

The goal is to build a customer-facing app that mimics a used car shopping experience using React.js as the primary frontend tool. This project serves as a personal learning platform to gain hands-on experience with:

- React.js
- Python
- Django
- PostgreSQL
- Cloudinary

> **Note:** This is not a commercial application but a personal project for learning and portfolio purposes.

### 🚀 What the App Does

- Users land on a homepage with a video background and clear navigation.
- From there, they can access the **Inventory** page to view available vehicles.
- Selecting a vehicle reveals a **Details View** with additional images and specifications.
- Future enhancements will include features like: loan applications, admin dashboard in React, print/share options, and more.

---

## 🧰 Tech Stack

### Frontend

- React
- Bootstrap
- Axios

### Backend

- Python
- Django
- PostgreSQL

### Other Tools

- **Cloudinary**: Used for hosting car images

---

## ✨ Main Features

- 🎞️ Home page with video background and entry point to browse inventory
- 🚘 Dynamic inventory listings with detailed car specs
- 🖼️ Image galleries (interior/exterior) managed via Django Admin (one-to-many model relationship)
- ⚙️ Admin dashboard setup in Django for managing listings (React-based admin panel planned)

---

## 🛠️ How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/barakoti-auto-sales.git
cd barakoti-auto-sales
```

### 2. Backend Setup (Django)

```bash
cd backend  # or wherever your Django project lives
python -m venv env
source env/bin/activate  # Windows: env\Scripts\activate
pip install -r requirements.txt
```

#### .env File for Django (Backend)

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DB_NAME=barakoti_auto
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
```

### 3. Database Setup

- Install PostgreSQL and pgAdmin (optional but recommended)
- Create a database matching your `.env` values
- Run migrations:

```bash
python manage.py migrate
python manage.py createsuperuser  # optional
```

### 4. Frontend Setup (React)

```bash
cd ../frontend
npm install
```

#### .env File for React (Frontend)

```env
REACT_APP_API_BASE_URL=http://localhost:8000/api
```

### 5. Run the Project

- Backend:

```bash
python manage.py runserver
```

- Frontend:

```bash
npm start
```

---

## 🗂️ Folder Structure

```bash
BarakotiAuto
├── .venv/
├── appfrontend/
├── barakotiauto/
├── inventories/
├── node_modules/
├── .env
├── db.sqlite3
├── manage.py
├── package.json
├── package-lock.json
```

---

## 🔒 Security

- Environment variables stored in `.env` files
- `.env` is included in `.gitignore`

---

## 🚧 Future Enhancements

- 💰 Apply for financing
- 📿 Print/share functionality
- 🧑‍💼 React-based Admin Dashboard

---

## 📷 Screenshots or Demo

> *Coming Soon*

---

## 🌐 Deployment

- Not deployed yet.

---

## 👌 Acknowledgments

- Bootstrap
- React Icons
- Django & DRF
- Cloudinary

---

📊 React Capabilities Used so far: 

✅ Component-Based Architecture – Built modular UI with reusable components

✅ React Router – Client-side routing for multi-page app experience

✅ Hooks (useState, useEffect, useLocation) – For managing state and lifecycle

✅ Axios – To fetch and post data to Django backend

✅ Conditional Rendering – To toggle UI elements and route-based highlights

✅ Responsive Design – Using Bootstrap with custom CSS

✅ Image Handling Logic – Gallery thumbnails and main image selection

✅ Environment Variables – Configured for both frontend and backend

✅ Scalable File Structure – Organized code for growth and maintainability


## 📜 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Dipesh Barakoti

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 💬 Contact

For questions or feedback, contact **Dipesh Barakoti** at [barakotiautosales@gmail.com](mailto\:dbarakoti@gmail.com).



