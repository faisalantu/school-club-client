import ContainerWrapper from "../../components/containerWrapper";
import AddRoles from "../../components/admin/addRoles";

const AdminAddRoles = (props) => {
  //tag data from tag component
//   const getTags = (tags) => console.log(tags);
  return (
    <>
      <ContainerWrapper>
        <AddRoles />
      </ContainerWrapper>
    </>
  );
};

export default AdminAddRoles;