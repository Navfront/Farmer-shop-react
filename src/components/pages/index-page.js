import PageFooter from "../layouts/page-footer/page-footer";
import PageHeader from "../layouts/page-header/page-header";
import PageMain from "../layouts/page-main/page-main";
import PageWrapper from "../layouts/page-wrapper/pageWrapper";

const IndexPage = () => {
  return (
    <PageWrapper index="true">
      <PageHeader />
      <PageMain />
      <PageFooter />
    </PageWrapper>
  );
};

export default IndexPage;
