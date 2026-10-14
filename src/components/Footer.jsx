import { ME } from "../data/portfolio";

export default function Footer() {
  return <footer>© {new Date().getFullYear()} {ME.name}. All rights reserved. Designed &amp; developed by {ME.name}.</footer>;
}
