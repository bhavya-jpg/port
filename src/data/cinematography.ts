export interface FilmProject {
  title: string;
  role: string;
  year: string;
  camera: string;
  image: string;
  link?: string;
}

export const cinematographyData: FilmProject[] = [
  {
    title: "Echoes of the Valley",
    role: "Director of Photography",
    year: "2024",
    camera: "BMPCC 6K Pro",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
    link: "https://vimeo.com"
  },
  {
    title: "Neon Nights",
    role: "Director / DP",
    year: "2023",
    camera: "Sony FX3",
    image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2071&auto=format&fit=crop",
    link: "https://vimeo.com"
  },
  {
    title: "The Last Artisan",
    role: "Cinematographer",
    year: "2023",
    camera: "RED Komodo",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop"
  }
];
