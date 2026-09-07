import styled from '@emotion/styled';
import { Section } from './ui/Section';
import { WEDDING } from '../constants/wedding';

const Hero = styled(Section)`
  background: linear-gradient(rgba(0, 0, 0, .22), rgba(0, 0, 0, .22)), url('/images/editorial-couple.jpg') center / cover no-repeat;
  display: grid;
  place-items: center;
  color: white;
  text-align: center;
`;

const Mark = styled.div`
  position: relative;
  z-index: 3;
  text-shadow: 0 2px 20px rgba(0, 0, 0, .26);

  .initials {
    font-family: 'Great Vibes', cursive;
    font-size: clamp(5.4rem, 26vw, 8.5rem);
    line-height: .78;
    font-weight: 400;
  }

  .couple {
    margin-top: 1rem;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.08rem;
    letter-spacing: .2em;
    text-transform: uppercase;
  }

  .date {
    margin-top: .5rem;
    font-size: .72rem;
    letter-spacing: .22em;
    text-transform: uppercase;
  }
`;

export function HeroSection() {
  return (
    <Hero aria-label="Düğün davetiyesi kapak">
      <Mark>
        <div className="initials">{WEDDING.initials}</div>
        <div className="couple">{WEDDING.couple}</div>
        <div className="date">{WEDDING.dateLabel}</div>
      </Mark>
    </Hero>
  );
}
