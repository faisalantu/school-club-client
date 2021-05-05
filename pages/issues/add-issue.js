import ContainerWrapper from "../../components/containerWrapper";
import AddPost from "../../components/global/addPost";
export default function addIssue() {
  return (
    <>
      <ContainerWrapper>
        <AddPost postCategory='issue' anonymousMode={true} />
      </ContainerWrapper>
    </>
  );
}
