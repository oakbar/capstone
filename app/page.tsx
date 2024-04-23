import Navbar  from '../components/Navbar';
import Hero  from '../components/Hero';
import Chatbot  from '../components/Chatbot';
import Logos from '../components/Logos';
import Analytics  from '../components/Analytics';
import Rank  from '../components/Rank';
import Card  from '../components/Card'; 
import Kanban  from '../components/Kanban';
import Feature  from '../components/Feature';
import Blog  from '../components/Blog';
import Management  from '../components/Management'; 
import Chart  from '../components/Chart';
import Radar  from '../components/Radar';
import FAQ  from '../components/FAQ';
import Footer  from '../components/Footer';

import { ScrollProvider } from '../components/Scroll';

export default function Home() {
  return (
    <ScrollProvider>
      <>
        <Navbar />
        <Hero />
        <Chatbot />
        <Card />
        <Kanban />
        <Blog />
        <FAQ />
        <Footer />
      </>
    </ScrollProvider>
  );
}
