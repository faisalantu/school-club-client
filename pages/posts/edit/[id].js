import ContainerWrapper from "../../../components/containerWrapper";
import EditPost from "../../../components/global/editPost";
import { useRouter } from "next/router";
function Id() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <ContainerWrapper>{id ? <EditPost pid={id} /> : null}</ContainerWrapper>
    </div>
  );
}

export default Id;
