# Portfolio (React + Vite)

## Chalane ke liye
    npm install
    npm run dev

## Folder structure
    src/
      data/portfolio.js        <- Naam, projects, skills, experience (sirf yahi badlo)
      styles/portfolio.css     <- Poora design / colors / animations
      hooks/                   <- useTyping (typing effect), useScrollEffects (navbar, progress, reveal)
      components/              <- Har section ki alag file (Hero, About, Experience, Skills, Projects, Contact...)
      App.jsx                  <- Saare sections yahan jud ke page banate hain
      main.jsx                 <- Entry point
    public/
      me.jpg                   <- Apni photo (phir data/portfolio.js me photo: "/me.jpg")
      projects/                <- Project screenshots (optional)
