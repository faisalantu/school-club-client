//todo
// 1. make everything component based

import { connect } from "react-redux";
import Tags from "../../components/postPageComponent/tags";
import UserInfoAndDate from "../../components/postPageComponent/userInfoAndDate";
import Reaction from "../../components/postPageComponent/reaction";
import { AiOutlineHeart } from "react-icons/ai";
import ContainerWrapper from "../../components/containerWrapper";
import { wrapper } from "../../store/store";

const Post = (props) => {
  return (
    <>
      <ContainerWrapper>
        <div className='p-2 mx-5'>
          <div className=' border-b-2 pb-4'>
            <h1 className=' text-3xl font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              facilis ea tempore.
            </h1>
            <Tags />
            <div className='mt-3'>
              <UserInfoAndDate
                name='Faisal Antu'
                role='CSE Club President'
                imgUrl='/portrait-2.jpeg'
                date='3 Feb 2021'
              />
            </div>
            <p className='mt-4 text-lg font-serif'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              porro distinctio, nulla dolorem inventore hic nam neque dolor,
              enim debitis quidem. Magnam fugiat voluptatibus soluta velit minus
              modi eum quibusdam, error maxime optio ex explicabo nesciunt cum
              nobis obcaecati repudiandae earum consequatur fuga necessitatibus
              ipsum sed nam non incidunt. Pariatur dolorum, corrupti molestias
              illum dolores eius rem assumenda, expedita, eos nobis repellat
              culpa tenetur. Tempore, quod blanditiis expedita laboriosam iure
              earum quis nam quo consectetur illo molestiae quos sequi quibusdam
              officiis tenetur alias nobis fuga ut porro perferendis ullam
              doloribus sapiente amet rem! Cumque assumenda ducimus sunt eos
              nobis quaerat.
            </p>
            <p className='mt-4 text-lg font-serif'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              porro distinctio, nulla dolorem inventore hic nam neque dolor,
              enim debitis quidem. Magnam fugiat voluptatibus soluta velit minus
              modi eum quibusdam, error maxime optio ex explicabo nesciunt cum
              nobis obcaecati repudiandae earum consequatur fuga necessitatibus
              ipsum sed nam non incidunt. Pariatur dolorum, corrupti molestias
              illum dolores eius rem assumenda, expedita, eos nobis repellat
              culpa tenetur. Tempore, quod blanditiis expedita laboriosam iure
              earum quis nam quo consectetur illo molestiae quos sequi quibusdam
              officiis tenetur alias nobis fuga ut porro perferendis ullam
              doloribus sapiente amet rem! Cumque assumenda ducimus sunt eos
              nobis quaerat.
            </p>
            <Reaction reactions='12' className="mt-4"/>
          </div>
          <div>
            <h1 className='pt-3 text-xl'>Comments</h1>
            <form action='#'>
              <textarea
                name='roleExplanation'
                className='w-full rounded-md p-3 mt-2 border-2 border-gray-300'
                rows='3'
              ></textarea>
            </form>
          </div>
          <div className='p-3 border-gray-300 border-2 rounded-md mt-4'>
            <div className='mt-3'>
              <UserInfoAndDate
                name='Junayed Khan Noor'
                imgUrl='/portrait-2.jpeg'
                date='3 Feb 2021'
              />
            </div>
            <p className='mt-4'>
              We should start with HTML and CSs first , learn the absolute
              basics, follow good channels like brad traversy on youtube or Colt
              Steele's Web developer bootcamp on Udemy. You can spend around 2
              weeks on HTML, CSS basics and then start with javascript. Do more
              practicals and understand the necessary theories and concepts.
            </p>
            <Reaction reactions='' className="mt-1"/>
          </div>
        </div>
      </ContainerWrapper>
    </>
  );
};

// redux setup
export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(null, mapDispatchToProps)(Post);
