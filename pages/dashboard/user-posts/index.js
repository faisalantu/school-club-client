import ContainerWrapper from "../../../components/containerWrapper";
import axios from "../../../axios";
import { useEffect, useState } from "react";
import PostCard from "../../../components/global/postCard";

const Index = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    (async function () {
      try {
        let res = await axios.get("/posts/user");
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <ContainerWrapper>
        <div className='px-5'>
          {posts
            ? posts.map((post) => {
                return (
                  <div key={post._id}>
                    <PostCard
                      tags={post.tags}
                      imgUrl={post.userlist[0].imageObj.url}
                      name={
                        post.userlist[0].firstname +
                        " " +
                        post.userlist[0].lastname
                      }
                      date={post.date}
                      title={post.title}
                      slug={post.slug}
                      postId={post._id}
                      edit={true}
                      deleteMode={true}
                      apiUrl={`/likepost`}
                    />
                  </div>
                );
              })
            : "loading"}
        </div>
      </ContainerWrapper>
    </>
  );
};

export default Index;
