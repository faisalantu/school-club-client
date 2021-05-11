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
        console.log(res.data);
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
                      edit={true}
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
