import Header from "@/components/shared/header";
import Container from "@/components/shared/container";
import MainMenu from "@/components/MainMenuPanel";
export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Container>
          <Header />
        </Container>
      </div>
      <MainMenu/>
    </>
  );
}
