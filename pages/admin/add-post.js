import ContainerWrapper from "../../components/containerWrapper";
import AddPost from "../../components/admin/addPost";

const AdminPost = (props) => {
  //tag data from tag component
  const getTags = (tags) => console.log(tags);
  return (
    <>
      <ContainerWrapper>
        <AddPost postCategory="club"/>
      </ContainerWrapper>
    </>
  );
};

export default AdminPost;
