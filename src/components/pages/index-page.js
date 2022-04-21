import About from "../blocks/about/about";
import Adventages from "../blocks/adventages/adventages";
import PageFooter from "../layouts/page-footer/page-footer";
import PageHeader from "../layouts/page-header/page-header";
import PageMain from "../layouts/page-main/page-main";
import PageWrapper from "../layouts/page-wrapper/pageWrapper";

const IndexPage = () => {
  return (
    <PageWrapper index>
      <PageHeader buyButton />
      <PageMain>
        <About />
        <Adventages />
      </PageMain>
      <PageFooter />
    </PageWrapper>
  );
};

export default IndexPage;
