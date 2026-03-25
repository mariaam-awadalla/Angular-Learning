# Angular Session 1 - Basics 🚀

## 📚 Overview

In this session, I started learning Angular fundamentals through **hands-on practice**, not just theory.

I worked on core concepts like:

* Interpolation
* Property Binding
* Structural Directives (ngFor)
* Event Binding
* Conditional Rendering (ngIf)

---

## 🧠 Angular Flow (Core Concept)

```
Component (TypeScript)
        ↓
       Data
        ↓
Template (HTML)
        ↓
     Binding
        ↓
        UI
```

---

# 🟢 Level 1 — Easy (Foundation)

## ✅ Task 1 — Profile Component

### 🎯 Goal

Create a simple component to display basic data.

### 📌 Requirements:

* Display name
* Display image
* Display location

### 🛠️ Used:

* Interpolation → `{{ }}`
* Property Binding → `[src]`

### 💡 Idea:

Bind data from TypeScript to the HTML template and render it in the UI.

---

## ✅ Task 2 — ngFor

### 🎯 Goal

Work with arrays and render list data.

### 📌 Example:

```ts
skills = ['HTML', 'CSS', 'JS'];
```
Render using Angular structural directive: `*ngFor`
```


### 💡 Idea:

Angular loops through the array and displays each item dynamically.

---

# 🟡 Level 2 — Medium (Real Thinking)

## ✅ Task 3 — Stores List

### 🎯 Goal

Work with **array of objects** and nested data.

### 📌 Data Structure:

```ts
stores: IStore[] = [
  {
    name: 'H&M',
    imgUrl: 'https://fakeimg.pl/300/',
    branches: ['Cairo','Alex']
  },
  {
    name: 'Zara',
    imgUrl: 'https://fakeimg.pl/300/',
    branches: ['Giza','Mansoura']
  }
];
```

---

### 🧩 UI Requirements:

* Display a card for each store
* Show:

  * Store name
  * Image
  * Branches list

---

### 💡 Hint:

* Use `ngFor` for stores
* Use nested `ngFor` for branches

---

### 🧠 Key Idea:

Handling **nested loops**

```
stores[]
   ↓
store
   ↓
branches[]
```

---

# 🔴 Level 3 — Challenge (Very Important)

## ✅ Task 4 — Toggle Branches

### 🎯 Goal

Add interaction and control UI behavior

---

### 📌 Requirements:

* Add a button: **Show / Hide Branches**
* On click:

  * Show branches
  * Hide branches

---

### 🛠️ Used:

* Event Binding → `(click)`
* Conditional Rendering → `*ngIf`

---

### 💡 Logic:

```ts
show = true;

toggle() {
  this.show = !this.show;
}
```

---

### 🧠 Explanation:

```
true  → element is visible
false → element is hidden
```

Angular renders elements based on state.

---

# 🚀 Mini Project — Simple Store App

## 🎯 Goal

Apply all concepts in a real UI example

---

## 🧩 Features:

* Title: **My Stores**
* Display list of stores
* Each store in a card layout
* Show branches
* Toggle button for each store

---

## 🧠 Idea:

Transform concepts into a real application:

* Data → TypeScript
* UI → HTML
* Logic → Component

---

# 🎯 Bonus (Advanced Level 🔥)

* Each card has its own toggle button
* Each store manages its own state independently

---

# 🧠 What I Learned

* Thinking like a developer, not just following tutorials
* Understanding Angular data flow
* Working with:

  * Arrays
  * Objects
  * Nested data
* Building dynamic UI
* Handling user interaction

---

# 🚀 Next Step

I will move forward to:

* Component Reusability
* Input / Output
* Services & API Integration

---
✨ Goal: Build real-world Angular applications independently without relying on tutorials



## ▶️ Run the Project

```bash
npm install
ng serve -o


