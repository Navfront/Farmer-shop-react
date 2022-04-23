import About from "../blocks/about/about";
import Adventages from "../blocks/adventages/adventages";
import PageFooter from "../layouts/page-footer/page-footer";
import PageHeader from "../layouts/page-header/page-header";
import PageMain from "../layouts/page-main/page-main";
import PageWrapper from "../layouts/page-wrapper/pageWrapper";
import ScrollToTop from "../ui/scroll-to-top/scroll-to-top";

const IndexPage = () => {
  return (
    <>
      <ScrollToTop />
      <PageWrapper>
        <PageHeader />
        <PageMain>
          <About />
          <Adventages />
        </PageMain>
        <PageFooter />
      </PageWrapper>
    </>
  );
};

export default IndexPage;
