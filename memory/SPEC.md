# Portfolio Specification

## Purpose
Static personal portfolio for Mochamad Novanda Vianizar, presented in Bahasa Indonesia and tailored for a PKL application at ParagonCorp.

## Content model
- Identity: name, headline, SMK Telkom Malang, Malang, Indonesia
- Skills: Figma, Canva, CapCut; learning Adobe Illustrator and Lightroom
- Projects: Sport4All, PDAM Smart Management, Sports App Wireflow; each has role, description, tool, and a real screenshot carousel. Sport4All has four screens; PDAM and Sports App Wireflow each have five screens.
- Contact: novandavianizar@gmail.com, LinkedIn, GitHub

## Key flows
- Pill navigation uses smooth anchor scrolling between Beranda, Tentang, Project, and Kontak
- Mobile hamburger opens the same navigation as a responsive overlay
- Hero CTA jumps to the project list
- Contact links open email or the provided external profiles

## Data and auth
All portfolio content is static in the frontend. No auth, roles, or seeded accounts are used. Backend remains the template health/status API only.

## Media
The uploaded recording remains the primary visual reference. The Hero uses the uploaded portrait photo with a stable chest-up crop. Sport4All uses four screenshots, while PDAM and Sports App Wireflow each use five screenshots in accessible arrow/dot carousels with circular touch swipe. All three project visuals use compact editorial filmstrips: the active portrait is large, adjacent screens peek from the sides, and a strong offset lime shadow mirrors the profile frame. Cream remains dominant while lime asterisks, soft glows, and orbit lines decorate the Hero and Project backgrounds. Clicking any carousel image or its expand control opens a dark fullscreen preview with arrow, swipe, and keyboard navigation.