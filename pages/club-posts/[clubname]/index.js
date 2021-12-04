import ContainerWrapper from "../../../components/containerWrapper";
import PostCard from "../../../components/global/postCard";
import { API_URL } from "../../../config";
import axios from "axios";

const Index = ({ posts }) => {
  return (
    <>
      <ContainerWrapper>
        <div className='px-5'>
          {posts.map((post) => {
            return (
              <div key={post._id}>
                <PostCard
                  tags={post.tags}
                  imgUrl={post.userlist[0].imageObj.url}
                  name={
                    post.userlist[0].firstname + " " + post.userlist[0].lastname
                  }
                  date={post.date}
                  title={post.title}
                  slug={post.slug}
                  postId={post._id}
                  apiUrl={`/likepost`}
                />
              </div>
            );
          })}
        </div>
      </ContainerWrapper>
    </>
  );
};

export async function getServerSideProps({ params: { clubname } }) {
  console.log(clubname);
  try {
    const res = await axios.get(
      `${API_URL}/posts?category=club&club=${clubname}`
    );
    return {
      props: { posts: res.data },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}

export default Index;
