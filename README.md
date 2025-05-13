# Family Gallery Website

A personalized, interactive family gallery website featuring:

- **Login system** with role-based redirection (Brother: Birthday Page, Parents: Anniversary Page)
- **Birthday Page**: 
  - Gallery wall with hanging, swaying images
  - Animated confetti background
  - Typewriter/glowing congratulatory message
  - Clickable images open a modal with a larger view and unique family message
- **Anniversary Page**:
  - Gallery wall with hanging, swaying images
  - Romantic hearts/bokeh background
  - Elegant fade-in congratulatory message
  - Clickable images open a modal with a larger view and unique family message
- **Responsive design** using Tailwind CSS
- **Smooth animations** and interactive effects

## Setup & Usage

1. **Clone or download this repository**
2. Place your images in the project folder, named as `birthday1.jpg`, `anniversary1.jpg`, etc.
3. Open `index.html` in your browser, or for best results, run a local server:
   - With Python 3:
     ```sh
     python -m http.server 8000
     ```
   - Then visit [http://localhost:8000](http://localhost:8000)
4. Login as:
   - **Brother**: Username: `brother`, Password: `14/05/2008` (or as set in `script.js`)
   - **Parents**: Username: `parents`, Password: `14/05/2008` (or as set in `script.js`)

## Customization
- To change modal messages, edit the `data-modal-msg` attribute on each image in the HTML.
- To add more images, copy them into the folder and update the HTML accordingly.
- All styles and effects are in `styles.css` and the respective JS files.

## Features
- Parallax swinging and hanging effect for images
- Animated backgrounds (confetti, hearts)
- Interactive modals for image viewing
- Elegant, modern UI with Tailwind CSS

---

**Enjoy your family gallery!** 