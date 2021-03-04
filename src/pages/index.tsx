import { Container } from '../components/Container';
import { Main } from '../components/Main';

import Navbar from '../components/navbar/Navbar';

const Index = () => (
  <>
    <Navbar />
    <Container height='100vh'>
      {/* <Hero title='Monkfish baby' /> */}
      <Main>hi</Main>
    </Container>
  </>
);

export default Index;
