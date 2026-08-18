# React Practice Project

A responsive React application built with **React** and **Vite** as part of a hands-on React development activity. The project demonstrates core React concepts including components, JSX, props, state, dynamic rendering, user events, and responsive CSS.

## 📌 Project Overview

This project was created to practice building a complete React frontend from scratch using Vite. The application is organized into reusable components and displays dynamic data rather than placing the entire interface inside a single component.

The project demonstrates the following React concepts:

* React components
* JSX
* Props
* State with `useState()`
* Dynamic list rendering with `.map()`
* User events such as `onClick` and `onChange`
* Responsive CSS
* Basic React project structure
* Preparation for future backend API integration

These are the main concepts required by the project activity.

## 🛠️ Technologies Used

* **React**
* **Vite**
* **JavaScript**
* **HTML**
* **CSS**
* **Node.js**
* **npm**

The project is created using Vite with the React JavaScript template.

## 📂 Project Structure

A typical project structure looks like this:

```text
react-practice/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── CourseCard.jsx
│   │   └── CourseList.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

The exact structure can vary depending on the application, but the project is organized around reusable components rather than putting the entire application inside `App.jsx`.

## ⚙️ Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

Check your Node.js version:

```bash
node --version
```

Check npm:

```bash
npm --version
```

If both commands return version numbers, your environment is ready.

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

Navigate into the project:

```bash
cd react-practice
```

Install dependencies:

```bash
npm install
```

### Run the Development Server

Start the Vite development server:

```bash
npm run dev
```

Vite will provide a local development URL in the terminal. Open that URL in your browser to view the application.

## 🧩 React Concepts Demonstrated

### Components

The application is divided into logical and reusable components. For example:

* `Header`
* `CourseCard`
* `CourseList`

A reusable component can receive different data through props and display it without containing information specific to one item.

### Props

Data is passed from parent components to child components using props.

For example:

```jsx
<CourseCard
  name={course.name}
  instructor={course.instructor}
  status={course.status}
/>
```

This allows the same component to display different items.

### Dynamic Rendering

The project uses `.map()` to render multiple items from a dataset:

```jsx
{courses.map((course) => (
  <CourseCard
    key={course.id}
    name={course.name}
    instructor={course.instructor}
    status={course.status}
  />
))}
```

This allows React to automatically generate components for every item in the dataset.

### State

The application uses React's `useState()` hook to manage changing information.

Example:

```jsx
const [showCourses, setShowCourses] = useState(true);
```

State can be used for features such as:

* Showing or hiding information
* Changing a status
* Selecting an item
* Counting items
* Filtering data
* Searching

### User Interaction

The application includes meaningful user interaction through React events such as:

```jsx
onClick
```

or:

```jsx
onChange
```

The general flow is:

```text
User Action
    ↓
Event Handler
    ↓
State Changes
    ↓
React Re-renders
    ↓
UI Updates
```

## 📱 Responsive Design

The application includes responsive CSS so that the interface remains usable on:

* Desktop
* Tablet
* Mobile

For example, a grid layout can adapt to smaller screens using CSS media queries.

## 🔮 Future Backend Integration

The current application can use data stored directly inside the React frontend.

A future version can retrieve data from a backend API such as **FastAPI** or **Flask**.

A possible architecture is:

```text
React Frontend
      │
      │ HTTP Request
      ↓
FastAPI / Flask API
      │
      ↓
Database
```

For example, a future API could provide:

```http
GET /api/courses
```

React could then request the data and use the same components to display it. API integration is not required for the current activity.

## ✅ Requirements Demonstrated

This project covers the main requirements of the activity:

* [x] React project created using Vite
* [x] Node.js and npm environment
* [x] Multiple React components
* [x] Dataset containing multiple objects
* [x] Props
* [x] Dynamic rendering with `.map()`
* [x] State using `useState()`
* [x] User interaction
* [x] CSS styling
* [x] Responsive layout
* [x] Organized project structure

These correspond to the required tasks specified in the project guide.

## 🎯 Learning Goals

The main goal of this project is to build a practical understanding of how React applications are structured and how different React concepts work together.

The key data flow is:

```text
Dataset
   ↓
map()
   ↓
Component
   ↓
Props
   ↓
Rendered UI
```

The project also demonstrates how user actions can change state and cause React to update the interface.

## 📄 License

This project was created for educational and training purposes.
