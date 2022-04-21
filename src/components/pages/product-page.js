import Products from "../blocks/products/products";
import Container from "../layouts/container/container";
import PageFooter from "../layouts/page-footer/page-footer";
import PageHeader from "../layouts/page-header/page-header";
import PageWrapper from "../layouts/page-wrapper/pageWrapper";

const ProductPage = () => {
  return (
    <PageWrapper>
      <PageHeader />
      <main>
        <Container>
          <Products />
        </Container>
      </main>
      <PageFooter />
    </PageWrapper>
  );
};

export default ProductPage;
