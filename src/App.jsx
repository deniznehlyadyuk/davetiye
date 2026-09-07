import styled from '@emotion/styled';
import { HeroSection } from './components/HeroSection';
import { InvitationSection } from './components/InvitationSection';
import { CountdownSection } from './components/CountdownSection';
import { ScheduleSection } from './components/ScheduleSection';
import { RsvpSection } from './components/RsvpSection';

const SnapContainer = styled.main`
  height: 100vh;
  height: 100svh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  overscroll-behavior-y: contain;
`;

export default function App() {
  return (
    <SnapContainer>
      <HeroSection />
      <InvitationSection />
      <CountdownSection />
      <ScheduleSection />
      <RsvpSection />
    </SnapContainer>
  );
}
