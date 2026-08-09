# Week 8: React Fundamentals

## Author
- **Name:** Gilbert Mungai
- **GitHub:** [@dream333wxrld-juice](https://github.com/dream333wxrld-juice)
- **Date:** August 9, 2026

## Project Description
An introduction to React fundamentals built with Vite. This project covers JSX, functional components, props, composition patterns, the useState hook, event handling, and lifting state up, all combined into a single-page demo app. It was built alongside leading a 3-person team on the CommunityHub mini-project.

## Technologies Used
- React
- Vite
- JavaScript (JSX)
- CSS3

## Features
- Dynamic JSX content: personalized intro, live date, and time-of-day greeting
- Reusable components: Header, Footer, Sidebar, Button, Card, Greeting
- Dynamic list rendering with `.map()` and proper `key` usage (PostList, UserList)
- Default prop values and props destructuring
- Component composition using the `children` prop
- Three conditional rendering patterns: `&&`, ternary, and early return
- useState hook examples: Counter, Toggle, multi-field form
- Controlled ContactForm with a single shared change handler
- TodoList with add/toggle/delete, using correct non-mutating state updates
- Lifted state shared between components, with a working post-like feature
- Reusable Button component with variant, size, disabled, and loading props

## How to Run
1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`
4. Open the local server URL shown in your terminal (usually `http://localhost:5173`)

## Lessons Learned
The biggest lesson this week was learning to never mutate state directly, always create a new array or object with spread syntax so React can detect and re-render on the change. Lifting state up also made it clear how sibling components can share and stay in sync through a common parent component.

## Challenges Faced
I ran into a few environment issues while working through this: a merge conflict between an auto-generated GitHub README and the Vite-generated one, a duplicate-export bug from pasting updated code without removing the old version, and a nested folder created by cloning into an already-existing directory. Working through each one was a good exercise in reading error messages carefully and understanding what git and Vite were actually telling me.

## Screenshots
_Not included._

## Live Demo
_Not deployed._