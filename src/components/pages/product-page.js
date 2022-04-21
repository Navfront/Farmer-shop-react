import Products from "../blocks/products/products";
import Container from "../layouts/container/container";
import PageFooter from "../layouts/page-footer/page-footer";
import PageHeader from "../layouts/page-header/page-header";
import PageMain from "../layouts/page-main/page-main";
import PageWrapper from "../layouts/page-wrapper/pageWrapper";

const ProductPage = () => {
  return (
    <PageWrapper>
      <PageHeader />
      <PageMain>
        <Container>
          <Products />
        </Container>
      </PageMain>
      <PageFooter />
    </PageWrapper>
  );
};

export default ProductPage;
