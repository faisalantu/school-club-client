import Carousel from "./home/carousel";
import ClubCard from "./home/clubCard";
export default function home() {
  return (
    <div className='m-3'>
      <Carousel />
      <div className='grid grid-cols-3 gap-5 m-1'>
        <ClubCard clubName='Computer Science & Engineering' />
        <ClubCard clubName='Computer Science & Engineering' />
        <ClubCard clubName='Electrical and Electronics Engineering' />
        <ClubCard clubName='Computer Science & Engineering' />
        <ClubCard clubName='Computer Science & Engineering' />
        <ClubCard clubName='Electrical and Electronics Engineering' />
      </div>
    </div>
  );
}
