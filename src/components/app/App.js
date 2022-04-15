import PageHeader from "../layouts/page-header/page-header";
import PageFooter from "../layouts/page-footer/page-footer";
import PageMain from "../layouts/page-main/page-main";
import PageWrapper from "../layouts/page-wrapper/pageWrapper";
import GlobalStyles from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <PageWrapper>
        <PageHeader />
        <PageMain />
        <PageFooter />
      </PageWrapper>
    </>
  );
}

export default App;
