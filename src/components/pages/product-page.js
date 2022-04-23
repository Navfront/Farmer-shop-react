import Products from "../blocks/products/products";
import Container from "../layouts/container/container";
import PageFooter from "../layouts/page-footer/page-footer";
import PageHeader from "../layouts/page-header/page-header";
import PageMain from "../layouts/page-main/page-main";
import PageWrapper from "../layouts/page-wrapper/pageWrapper";
import ScrollToTop from "./../ui/scroll-to-top/scroll-to-top";

const ProductPage = () => {
  return (
    <>
      <ScrollToTop />
      <PageWrapper>
        <PageHeader />
        <PageMain isProductPage>
          <Container>
            <Products />
          </Container>
        </PageMain>
        <PageFooter />
      </PageWrapper>
    </>
  );
};

export default ProductPage;
