# 🚀 Development Stack

## 📖 About The Project

Development Stack is a simple and user-friendly web application for exploring different development technologies and building a personal technology stack.

Users can explore different technologies, see their category, description, rating, and difficulty level. They can also add technologies to their own stack and remove them when needed.

This project was built to practice React, TypeScript, Tailwind CSS, components, props, state, conditional rendering, and other React concepts.

---

## 🌐 Live Demo

🔗 Live Website: https://dynamic-hummingbird-8db23b.netlify.app/

---

## 💻 GitHub Repository

🔗 GitHub Repository: https://github.com/mahedi406/DevStack/tree/master

---

## 🛠️ Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Toastify
- Vite
- HTML
- CSS
- JSON

---

## ✨ Features

### 1. Explore Development Technologies

Users can explore different development technologies such as React, JavaScript, TypeScript, Node.js, Docker, PostgreSQL, and more.

Each technology card shows:

- Technology name
- Category
- Description
- Rating
- Difficulty level
- Technology icon

---

### 2. Build Your Own Stack

Users can add any technology to their personal stack by clicking the **Add to Stack** button.

After adding a technology:

- The card gets a green border.
- The card becomes highlighted.
- The button changes to **Already Added**.
- The button becomes disabled.
- A toast message appears.

This helps users easily understand which technologies they have already selected.

---

### 3. Manage Your Stack

Users can manage their selected technologies from the **Your Stack** section.

They can:

- See all selected technologies.
- See the total number of selected technologies.
- Remove a single technology.
- Remove all technologies at once.
- Get toast messages when technologies are added or removed.

---

## 📱 Responsive Design

The website is responsive and works on different screen sizes.

On smaller screens, the technology cards and the **Your Stack** section are shown in a single column.

On larger screens, the technology cards and the **Your Stack** section are shown side by side.

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.

It makes React code easier to read and helps us create the user interface easily.

Example:

```tsx
<h1>Hello React</h1>
```

---

## 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.

State is used to store data inside a component that can change over time.

For example, in this project, `content` is passed to the card using props, while `stack` is stored as state.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook that allows us to store and update data in a component.

I used `useState` in the `Content.tsx` component to store the technologies selected by the user.

```tsx
const [stack, setStack] = useState<IContent[]>([]);
```

When a user adds or removes a technology, the `stack` state is updated.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is a React Hook that is used to run code after a component renders.

It is often used for tasks like fetching data or working with APIs.

In this project, I did not use `useEffect` to load the JSON data.

Instead, I used `fetch()` with a Promise and React's `use()` and `Suspense`.

```tsx
const ContentPromise = async (): Promise<IContent[]> => {
    const res = await fetch('/data.json');
    const data = await res.json();
    return data;
};
```

So, `useEffect` was not necessary for loading the JSON data in this project.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which item has changed, been added, or been removed.

For example:

```tsx
{Contents.map((content) => (
    <ContentCard
        key={content.id}
        content={content}
    />
))}
```

Here, `content.id` is used as the unique key.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something only when a certain condition is true.

For example, I used conditional rendering to show whether a technology has already been added to the stack.

```tsx
{isAdded ? 'Already Added' : 'Add to Stack'}
```

If `isAdded` is true, it shows:

```text
Already Added
```

Otherwise, it shows:

```text
Add to Stack
```

I can also show an empty stack message using conditional rendering:

```tsx
{stack.length === 0 && (
    <p>Your stack is empty.</p>
)}
```

The message appears only when there are no technologies in the stack.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child component using props.

For example:

```tsx
<ContentCard
    content={content}
    onAdd={addIteam}
/>
```

Here, `content` and `onAdd` are passed from the parent component to the child component.

The child can send something back to the parent by calling a function received through props.

For example:

```tsx
<button onClick={() => onAdd(content)}>
    Add to Stack
</button>
```

When the button is clicked, the child calls the `onAdd()` function and sends the selected `content` back to the parent.

---


## ⭐ Thank You

Thank you for checking out my project!

If you like this project, feel free to give it a ⭐ on GitHub.
