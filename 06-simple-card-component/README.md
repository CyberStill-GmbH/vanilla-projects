# Project 06: Simple Card Component 🧩

A vanilla HTML/CSS component focused on practicing spacing, visual hierarchy, semantic structure, and clean UI composition through a project management card.

## 👁️ Interface Views

![Main View](./project-img/image.png)

---

## 🕵️‍♂️ Challenges & Lessons Learned

### 1. Spacing System & Visual Breathing

* **The Problem:** The first layout needed better separation between content blocks to avoid visual noise.
* **The Lesson:** Starting with generous spacing and then refining it helped create a cleaner, more intentional component structure.

### 2. Semantic Structure with `<article>`

* **The Problem:** Using too many generic `<div>` elements made the structure less meaningful.
* **The Lesson:** The card was wrapped in an `<article>` because it represents an independent unit of content inside a project dashboard.

### 3. Visual Hierarchy

* **The Problem:** Some elements competed for attention, especially metadata, priority, progress, and avatar.
* **The Lesson:** Font weight, color contrast, and spacing were adjusted so the title leads first, followed by description, metadata, and footer information.

### 4. Image Control with `object-fit`

* **The Problem:** The avatar image needed to stay contained without distortion or layout breaking.
* **The Lesson:** `object-fit: cover` allowed the image to keep a stable crop inside its container.

### 5. Progress Indicator

* **The Problem:** The percentage value needed stronger visual support.
* **The Lesson:** A circular SVG progress indicator made the progress information feel more intentional and product-like.

---

## 🛠️ Technologies & Techniques

* **HTML5:** Semantic card structure using `<article>`.
* **CSS:** Spacing system, typography hierarchy, borders, shadows, and layout composition.
* **SVG:** Circular progress indicator.
* **UI/UX Practice:** Visual hierarchy, progressive disclosure, clean spacing, and reduced cognitive load.

---

## ✅ Final Result

This project helped transform UI/UX reading into real practice by building a clean, structured, and visually balanced project card from scratch.