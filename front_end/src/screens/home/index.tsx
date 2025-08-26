import AppContainer from "../../components/appContainer";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import ContentContainer from "../../components/contentContainer";
import DaystreakInfo from "../../components/daystreakinfo";
import SectionMenu from "../../components/sectionMenu";
import CardContainer from "../../components/cardContainer";
import Card from "../../components/card";
import AddCard from "../../components/addCard";
import DailyHabitChecklist from "../../components/dailyHabitChecklist";
import RecoveryToolkit from "../../components/recoveryToolkit";

export default function Home() {
  return (
    <AppContainer>
      <Sidebar />
      <ContentContainer>
        <Header />
        <DaystreakInfo/>
        <SectionMenu/>
        <CardContainer>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <AddCard/>
        </CardContainer>
        <DailyHabitChecklist/>
        <RecoveryToolkit/>
      </ContentContainer>
    </AppContainer>
  );
}
