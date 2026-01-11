# 3D Roller Coaster Builder

An interactive 3D roller coaster builder built with React, Three.js, and Vite. Design and ride your own roller coasters with loops, hills, and realistic wood supports.

## Features

- Interactive track building with drag-and-drop control points
- Create loops and hills
- Build mode and ride mode cameras
- Realistic wood support structures with cross-bracing
- Night lighting with track lights
- Smooth coaster car animation

## Live Demo

Visit: https://jimenez537.github.io/roller-coaster-builder/

## Fork and Deploy Your Own

1. **Fork this repository** - Click the "Fork" button on GitHub

2. **Enable GitHub Pages**:
   - Go to your forked repo's **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Click **Save**

3. **Trigger deployment**:
   - Make any small change (like editing this README) and push
   - Or go to **Actions** → **Deploy to GitHub Pages** → **Run workflow**

4. **Access your site**:
   - Your site will be live at: `https://YOUR-USERNAME.github.io/roller-coaster-builder/`

## Local Development

```bash
npm install
npm run dev
```

The app will be available at http://localhost:5000

## Controls

- **Click** on the ground to add track points
- **Drag** points to reshape the track
- **Click** a point and use the menu to add loops or delete points
- **Ride** button to experience your coaster from the car's perspective

## Built With

- React
- Three.js / React Three Fiber
- Vite
- Tailwind CSS
- Zustand (state management)
