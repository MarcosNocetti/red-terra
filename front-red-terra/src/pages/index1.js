import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import { GlobalStyle } from '../components/Styles/GlobalStyles';
import { Provider } from 'react-redux';
import store from '../store';
import { useFooterRequest } from '../store/hooks/footer';
import { useContactRequest } from '../store/hooks/contact';
import { useWhatsHappeningRequest } from '../store/hooks/whatsHappening';
import { useWhatWeDoRequest } from '../store/hooks/whatWeDo';
import { useWhoWeAreRequest } from '../store/hooks/whoWeAre';
import { useAwardsRequest } from '../store/hooks/awards';

function HomeComponent() {

  useFooterRequest();
  useContactRequest();
  useWhatsHappeningRequest();
  useWhatWeDoRequest();
  useWhoWeAreRequest();
  useAwardsRequest();

  return (
    <main>
      <GlobalStyle />
      <Header />
      <Hero />
    </main>
  );
}

export default function Home1() {
  return (
    <Provider store={store}>
      <HomeComponent />
    </Provider>
  );
}

export const Head = () => <title>Red Terra</title>;
