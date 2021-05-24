import ContainerWrapper from "../../../components/containerWrapper";
import EditEvent from "../../../components/global/editEvent";
import { useRouter } from "next/router";
function Id() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <ContainerWrapper>{id ? <EditEvent pid={id} /> : null}</ContainerWrapper>
    </div>
  );
}

export default Id;
