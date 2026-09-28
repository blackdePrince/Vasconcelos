import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Escritorio from '@/components/Escritorio';
import AreasAtuacao from '@/components/AreasAtuacao';
import Diferenciais from '@/components/Diferenciais';
import Equipe from '@/components/Equipe';
import Depoimentos from '@/components/Depoimentos';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Escritorio />
        <AreasAtuacao />
        <Diferenciais />
        <Equipe />
        <Depoimentos />
        <Blog />
        <FAQ />
        <CTA />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
