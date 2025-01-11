import Hero from "./components/hero";
import Newest from "./components/Newest";
import { CartProvider } from 'use-shopping-cart';

export default function Home() {
  return (
  <>
  <Hero />
  <Newest />
  </>
  );
}
