# 🎨 Vanilla Projects

> **A 77-project journey to master web development fundamentals**  
> Built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies.

[![Projects](https://img.shields.io/badge/projects-26%2F77-orange)](https://github.com/CyberStill-GmbH/vanilla-projects)
[![Progress](https://img.shields.io/badge/progress-33.8%25-yellow)](https://github.com/CyberStill-GmbH/vanilla-projects)
[![Phase](https://img.shields.io/badge/focus-JavaScript%20fundamentals%20%2B%20DOM-blue)](https://github.com/CyberStill-GmbH/vanilla-projects)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## 📖 Overview

This repository documents a structured path for mastering web development from first principles. Every project is self-contained and focuses on a specific concept: semantic HTML, responsive layouts, CSS architecture, DOM manipulation, events, reusable JavaScript patterns, and eventually full browser applications.

**Core idea:** master the fundamentals before leaning on frameworks. A strong vanilla foundation makes React, Vue, Angular, Svelte, and backend-rendered interfaces easier to understand because the browser stops feeling like magic.

### Why Vanilla?

- ✅ **Foundation first:** understand what frameworks abstract away.
- ✅ **Framework agnostic:** the skills transfer to any frontend stack.
- ✅ **Performance aware:** learn how much can be done without dependencies.
- ✅ **Problem-solving focused:** build behavior from scratch instead of only configuring libraries.
- ✅ **Interview useful:** many technical interviews still test HTML, CSS, DOM, and vanilla JavaScript.

---

## 📊 Progress Dashboard

### Overall Statistics

| Metric | Value |
|--------|-------|
| **Total Projects** | 26 / 77 |
| **Completion Rate** | 33.8% |
| **Current Focus** | JavaScript fundamentals + DOM interactions |
| **Completed Ranges** | 01-26 |
| **Latest Project** | 26. Calculator |
| **Deployment** | GitHub Pages |
| **Repository Status** | Active development |

### Phase Breakdown

```text
Phase 1: HTML & CSS Foundations    [██████████] 20/20 (100%)
Phase 2: JavaScript Fundamentals   [███░░░░░░░]  6/20 (30%)
Phase 3: Advanced JavaScript       [░░░░░░░░░░]  0/20 (0%)
Phase 4: Complex Applications      [░░░░░░░░░░]  0/17 (0%)
```

### Learning Metrics

| Skill Area | Progress | Current Level |
|------------|----------|---------------|
| Semantic HTML | 20/20 | ⭐⭐⭐⭐⭐ Completed Phase 1 |
| CSS Layouts | 20/20 | ⭐⭐⭐⭐⭐ Completed Phase 1 |
| Responsive Design | 8/10 | ⭐⭐⭐⭐☆ Strong foundation |
| CSS Grid / Flexbox | 12/15 | ⭐⭐⭐⭐☆ Strong foundation |
| Vanilla JavaScript | 10/25 | ⭐⭐⭐☆☆ Building consistency |
| DOM Manipulation | 10/20 | ⭐⭐⭐☆☆ Building consistency |
| Async JavaScript | 2/12 | ⭐⭐☆☆☆ Clipboard API and simulated async flows |
| APIs Integration | 0/8 | ⭐☆☆☆☆ Not started |

---

## 🚀 Next Challenge

### 27 - Tip Calculator

The next project focuses on form inputs, numeric parsing, calculations, validation, and user feedback.

**Main goals:**

- Handle numeric user input safely.
- Calculate tips and total bills dynamically.
- Practice parsing, validation, and formatting.
- Improve state synchronization between inputs and outputs.
- Keep the interface simple while strengthening JavaScript logic.

---

## 🧩 Recently Fixed Bugs

This repository is also a record of real debugging practice, not just finished UI screenshots.

| Area | Bug / Issue | Fix |
|------|-------------|-----|
| Responsive navigation | Hamburger menu appeared where it was not needed on tablet layouts. | Added the correct tablet breakpoint behavior and hid the hamburger with `.hamburger { display: none; }` where appropriate. |
| Mobile menu behavior | Menu state could remain visually inconsistent after viewport changes or link clicks. | Improved open/close logic with class toggling, link-click closing, and outside-click handling. |
| HTML structure | A misplaced or overlapping HTML section affected layout behavior. | Cleaned the document structure so sections render in the expected order. |
| Dynamic rendering | Repeated card markup made updates harder to maintain. | Used JavaScript data arrays with `forEach()` and `innerHTML` to generate cards dynamically. |
| Responsive dashboard | Cards needed to adapt cleanly across desktop, tablet, and mobile. | Used `grid-template-columns`, `minmax()`, and responsive breakpoints for a stable multi-device layout. |
| Animated buttons | Some hover styles targeted a generic `.btn:hover` selector and one `transition` declaration missed a comma. | Scoped hover styles to the correct button class and used explicit transition properties instead of relying on `transition: all`. |
| Loading spinners | Loaders needed distinct animation behavior instead of repeated circular motion. | Built multiple loaders using `@keyframes`, `animation-delay`, `cubic-bezier()`, pseudo-elements, and `position: relative/absolute`. |
| Modal component | `aria-hidden` changed correctly but the modal did not appear visually. | Added `.is-open` with `classList` to separate accessibility state from visual UI state. |
| Dropdown menu | A small syntax error in the keyboard handler broke the entire script. | Fixed the invalid comma/const declaration, then organized helper functions for opening, closing, focus, and keyboard navigation. |
| Custom form elements | Showing the email error accidentally affected the password section display. | Targeted the correct error element and kept validation helpers scoped to specific message nodes. |
| Text Analyzer | Long text and live analysis required several different counters to stay synchronized. | Separated the logic into helper functions for characters, words, sentences, paragraphs, reading time, average length, and frequency metrics. |
| Text Analyzer | Frequent use of `innerHTML` could encourage unsafe rendering habits and future XSS-prone patterns. | Rebuilt dynamic frequency rows with `document.createElement()`, `textContent`, `classList.add()`, and `append()` instead of injecting raw HTML. |
| Text Analyzer | Clipboard reading was new compared to previous copy-only behavior. | Used `navigator.clipboard.readText()` with `async/await`, `try...catch`, UI updates, and textarea focus management after paste. |
| Calculator | Calculator buttons required handling many actions without attaching dozens of event listeners. | Implemented event delegation using a single keypad listener combined with `.closest()`, `data-action`, and `data-value`. |
| Calculator | Chained operations and overwrite behavior caused inconsistent state transitions. | Centralized logic in a state object containing current value, previous value, operator, and overwrite mode. |
| Calculator | A scrollbar unexpectedly appeared inside the result display. | Hid the display scrollbar with `::-webkit-scrollbar { display: none; }` and improved the visual polish of the calculator screen. |

---

## 🗂️ Repository Structure

```text
vanilla-projects/
├── 01-recipe-page/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── README.md
│   └── assets/
│
├── 25-text-analyzer/
│   ├── index.html
│   ├── css/
│   ├── js/
│   ├── images/
│   └── README.md
│
├── 26-calculator/
│   ├── index.html
│   ├── css/
│   ├── js/
│   ├── images/
│   └── README.md
│
├── docs/
│   ├── LEARNING_PATH.md
│   ├── BEST_PRACTICES.md
│   └── RESOURCES.md
│
├── .gitignore
├── LICENSE
└── README.md
```

Each project follows the same basic structure: semantic HTML, pure CSS, vanilla JavaScript, project-specific assets, and a short README explaining what was built and what was learned.

---

## 🎯 Project Catalog

### 📘 Phase 1: HTML & CSS Foundations (01-20)

| # | Project | Status | Main Focus |
|---|---------|--------|------------|
| 01 | Recipe Page | ✅ Completed | Semantic HTML, lists, basic structure |
| 02 | Personal Landing Page | ✅ Completed | Page sections, navigation, layout |
| 03 | Product Page | ✅ Completed | Images, links, accessibility |
| 04 | Blog Article | ✅ Completed | Typography, article structure |
| 05 | Documentation Page | ✅ Completed | Tables, code blocks, internal navigation |
| 06 | Simple Card Component | ✅ Completed | Box model, spacing, borders |
| 07 | Navigation Bar | ✅ Completed | Flexbox alignment |
| 08 | Photo Gallery Grid | ✅ Completed | CSS Grid, `auto-fit`, `minmax()` |
| 09 | Pricing Cards | ✅ Completed | Card layouts, responsive spacing |
| 10 | Footer Component | ✅ Completed | Multi-column footer layout |
| 11 | Mobile-First Landing | ✅ Completed | Mobile-first responsive design |
| 12 | Responsive Nav Menu | ✅ Completed | Hamburger menu, transitions, JS toggle |
| 13 | Flexible Card Grid | ✅ Completed | Responsive grid systems |
| 14 | Adaptive Typography | ✅ Completed | `clamp()`, fluid text sizing |
| 15 | Multi-Device Dashboard | ✅ Completed | Dashboard layout across desktop, tablet, and mobile |
| 16 | Animated Button Collection | ✅ Completed | Transitions, transforms, hover states, pseudo-elements |
| 17 | Loading Spinners | ✅ Completed | Keyframes, animation timing |
| 18 | Modal Component | ✅ Completed | Overlays, z-index, fixed positioning |
| 19 | Dropdown Menu | ✅ Completed | Nested menus, focus states |
| 20 | Custom Form Elements | ✅ Completed | Styled inputs, form states |

### 📗 Phase 2: JavaScript Fundamentals (21-40)

| # | Project | Status | Main Focus |
|---|---------|--------|------------|
| 21 | Dynamic Counter | ✅ Completed | Events, state, DOM updates |
| 22 | Color Flipper | ✅ Completed | Random values, style manipulation |
| 23 | Quote Generator | ✅ Completed | Arrays, random selection |
| 24 | Background Changer | ✅ Completed | Events, CSS variables, dynamic styles |
| 25 | Text Analyzer | ✅ Completed | Regex, text statistics, clipboard API |
| 26 | Calculator | ✅ Completed | Event delegation, state management, arithmetic operations |
| 27 | Tip Calculator | ⏳ Not Started | Forms, parsing, validation |
| 28 | BMI Calculator | ⏳ Not Started | Formula implementation |
| 29 | Temperature Converter | ⏳ Not Started | Unit conversion, input sync |
| 30 | Age Calculator | ⏳ Not Started | Date handling |
| 31 | To-Do List | ⏳ Not Started | CRUD, localStorage |
| 32 | Notes App | ⏳ Not Started | JSON, persistence |
| 33 | Expense Tracker | ⏳ Not Started | Array methods, calculations |
| 34 | Shopping List | ⏳ Not Started | `filter`, `map`, `find` |
| 35 | Contact Book | ⏳ Not Started | Objects, search, filtering |
| 36 | Rock Paper Scissors | ⏳ Not Started | Game logic |
| 37 | Tic Tac Toe | ⏳ Not Started | 2D state, win conditions |
| 38 | Memory Card Game | ⏳ Not Started | Matching logic, shuffling |
| 39 | Whack-a-Mole | ⏳ Not Started | Timers, interaction |
| 40 | Simon Game | ⏳ Not Started | Sequences, pattern matching |

### 📕 Phase 3: Advanced JavaScript (41-60)

| Range | Projects | Focus | Status |
|-------|----------|-------|--------|
| 41-45 | Weather App, Movie Database, Recipe Finder, GitHub Profile Viewer, Currency Converter | Async JS, APIs, `fetch`, error handling | ⏳ Not Started |
| 46-50 | Drag and Drop List, Infinite Scroll, Image Carousel, Filterable Gallery, Sortable Table | Advanced DOM and events | ⏳ Not Started |
| 51-55 | Multi-Step Form, Registration Form, Survey Form, Password Checker, File Upload | Forms and validation | ⏳ Not Started |
| 56-60 | Tabs, Accordion, Toast Notifications, Tooltip System, Progress Bar | Reusable UI components | ⏳ Not Started |

### 📙 Phase 4: Complex Applications (61-77)

| Range | Projects | Focus | Status |
|-------|----------|-------|--------|
| 61-65 | Markdown Previewer, Pomodoro Timer, Kanban Board, Budget App, Habit Tracker | Full browser apps | ⏳ Not Started |
| 66-70 | Bar Chart, Pie Chart, Line Graph, Dashboard, Real-time Display | Data visualization | ⏳ Not Started |
| 71-75 | SPA Router, State Management, Event System, Virtual DOM, Component System | Architecture patterns | ⏳ Not Started |
| 76-77 | E-commerce Product Page, Social Media Feed | Final challenges | ⏳ Not Started |

---

## 🧠 Lessons Learned So Far

- Semantic HTML makes layouts easier to style, debug, and maintain.
- CSS Grid is strong for page-level layouts, while Flexbox is better for one-dimensional alignment.
- `grid-template-columns`, `auto-fit`, and `minmax()` are essential for responsive card systems.
- Mobile-first CSS keeps breakpoints cleaner and avoids fighting the layout later.
- DOM manipulation becomes easier when the data is separated from the markup.
- `forEach()` plus template strings can reduce repeated HTML and make card generation more maintainable.
- Small UI bugs often come from state mismatch: the DOM says one thing, CSS classes say another, and the viewport changes the rules.
- Modularizing CSS and JavaScript early prevents small projects from turning into messy files.
- Animated UI effects feel cleaner when transitions target specific properties like `transform`, `box-shadow`, and `color` instead of relying on `transition: all`.
- Pseudo-elements with `position: relative`, `z-index`, and `overflow: hidden` are useful for slide backgrounds, border-draw effects, and decorative button animations.
- `cubic-bezier()` can make transitions feel more dynamic and natural than a basic `ease` curve.
- `@keyframes` make it possible to break animations into phases instead of only relying on simple transitions.
- `position: relative` on a parent and `position: absolute` on pseudo-elements are useful for internal animated parts, overlays, loaders, and decorative UI.
- ARIA attributes like `aria-expanded`, `aria-hidden`, `aria-controls`, and `aria-describedby` describe state, but CSS classes still control the visual state.
- `classList` is essential for keeping interactive UI components readable and predictable.
- Keyboard-friendly components need explicit focus management with `.focus()`, `:focus-visible`, `Escape`, arrow keys, `Home`, and `End`.
- `event.preventDefault()` is useful before custom keyboard behavior to avoid fighting the browser's default interactions.
- Form validation becomes cleaner when error helpers update specific message elements instead of broad containers.
- `async` and `await` can simulate a real backend flow with loading, success, and error states before an API exists.
- Regular expressions are useful for text cleaning, word extraction, whitespace removal, sentence parsing, and input analysis.
- `navigator.clipboard.readText()` makes paste flows possible, but it should be wrapped with `try...catch` and followed by UI synchronization.
- `document.createElement()` plus `textContent` is safer than injecting user-controlled strings with `innerHTML`.
- `Map` is useful for frequency counting, ranking values, and building dynamic UI from computed data.
- Event delegation keeps interactive components cleaner by routing many button actions through a single parent listener.
- A centralized state object makes calculator-like interfaces easier to reason about because display, previous values, operators, and overwrite behavior stay synchronized.
- Fatigue creates avoidable bugs: typos, wrong variable names, missed function calls, and inconsistent naming. Shorter focused sessions produce cleaner code.

---

## 🎓 Learning Path

```mermaid
graph LR
    A[HTML Semantics] --> B[CSS Layouts]
    B --> C[Responsive Design]
    C --> D[JavaScript Basics]
    D --> E[DOM Manipulation]
    E --> F[Async JavaScript]
    F --> G[Advanced Patterns]
    G --> H[Full Applications]
```

### Time Investment Estimates

| Phase | Projects | Estimated Hours | Average per Project | Difficulty |
|-------|----------|-----------------|---------------------|------------|
| **Phase 1** | 20 | 60-80 | 3-4 hours | ⭐☆☆☆☆ |
| **Phase 2** | 20 | 90-120 | 4.5-6 hours | ⭐⭐☆☆☆ |
| **Phase 3** | 20 | 120-160 | 6-8 hours | ⭐⭐⭐☆☆ |
| **Phase 4** | 17 | 190-270 | 11-16 hours | ⭐⭐⭐⭐☆ |
| **Total** | **77** | **460-630** | **~6 hours** | — |

---

## 🛠️ Technical Standards

### HTML

- Semantic HTML5 elements used appropriately.
- Clear heading hierarchy.
- Descriptive alt text for images.
- Labels connected to form controls.
- No unnecessary wrapper elements.

### CSS

- Mobile-first responsive design.
- CSS variables for repeated values.
- Flexbox and Grid used intentionally.
- Avoid deep selector nesting.
- Avoid magic numbers when a reusable spacing/token would be clearer.

### JavaScript

- Use `const` and `let` instead of `var`.
- Keep DOM queries clear and intentional.
- Separate data, rendering, and event handling when possible.
- Use readable functions with a single responsibility.
- Handle invalid user input when forms are involved.
- Prefer `textContent` and DOM node creation over unsafe HTML injection.
- Use event delegation when many similar elements share related behavior.
- Keep UI state centralized for interactive components that depend on multiple values.

---

## 🎯 Daily Workflow

```text
1. Pick the next project
   └─ Read the requirements
   └─ Identify the main concept

2. Plan before coding
   └─ Sketch the structure
   └─ Define the layout
   └─ List the required interactions

3. Build
   └─ Write semantic HTML
   └─ Style mobile-first with CSS
   └─ Add JavaScript behavior
   └─ Test desktop, tablet, and mobile

4. Debug and refactor
   └─ Fix layout bugs
   └─ Clean repeated code
   └─ Improve naming and structure

5. Document and commit
   └─ Write project notes
   └─ Update progress
   └─ Push with a meaningful commit message
```

### Commit Message Convention

```bash
feat(project-15): add multi-device dashboard layout
fix(project-12): correct hamburger menu behavior on tablet
style(project-13): improve responsive card grid spacing
docs(readme): update progress and lessons learned
refactor(project-24): simplify dynamic background rendering
feat(project-25): add text analyzer project
feat(project-26): add v1.0 calculator project
```

---

## 📈 Milestones

| Milestone | Status | Meaning |
|-----------|--------|---------|
| **10 Projects** | ✅ Done | HTML/CSS basics are no longer abstract. |
| **20 Projects** | ✅ Done | Phase 1 completed: HTML/CSS foundations plus essential UI component patterns. |
| **26 Projects** | ✅ Done | JavaScript fundamentals are now active through text analysis, event delegation, state handling, and dynamic DOM rendering. |
| **40 Projects** | ⏳ Pending | JavaScript fundamentals solid. |
| **60 Projects** | ⏳ Pending | Advanced DOM, APIs, and UI patterns practiced. |
| **77 Projects** | ⏳ Pending | Full vanilla web development roadmap completed. |

---

## 📚 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/) — HTML, CSS, and JavaScript reference.
- [JavaScript.info](https://javascript.info/) — modern JavaScript explanations.
- [The Odin Project](https://www.theodinproject.com/) — structured web development curriculum.
- [Frontend Mentor](https://www.frontendmentor.io/) — real-world UI challenges.
- [CSS-Tricks](https://css-tricks.com/) — CSS techniques and layout references.

---

## 🤝 Contributing

This is a personal learning repository, but suggestions and feedback are welcome.

- 🐛 Found a bug? Open an issue.
- 💡 Have a cleaner implementation idea? Start a discussion.
- 📖 Found a typo? Submit a pull request.

---

## 📄 License

MIT License — free to use for learning purposes.

See [LICENSE](LICENSE) for full details.

---

## 📬 Connect

- **GitHub:** [@CyberStill-GmbH](https://github.com/CyberStill-GmbH)
- **Repository:** [vanilla-projects](https://github.com/CyberStill-GmbH/vanilla-projects)
- **Issues:** [Report a problem](https://github.com/CyberStill-GmbH/vanilla-projects/issues)

---

## 📊 Repository Stats

![GitHub last commit](https://img.shields.io/github/last-commit/CyberStill-GmbH/vanilla-projects)
![GitHub repo size](https://img.shields.io/github/repo-size/CyberStill-GmbH/vanilla-projects)
![GitHub language count](https://img.shields.io/github/languages/count/CyberStill-GmbH/vanilla-projects)

---

<div align="center">

**Current Status:** 🟢 Active Development  
**Next Milestone:** Reach 40 projects and complete JavaScript fundamentals  
**Daily Goal:** Build consistently, debug intentionally, and document lessons learned  
**Final Goal:** Master vanilla web development fundamentals before moving deeper into frameworks

---

*Built with discipline, consistency, and curiosity.*

</div>
