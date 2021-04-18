import ClubCard from "./clubsCard";
export default function home({route}) {
  return (
    <div className='m-3'>
      <div className='grid grid-cols-3 gap-5 m-1'>
        <ClubCard route={route?route:'clubinfo/cse'} clubName='Computer Science & Engineering' />
        <ClubCard route={route?route:'clubinfo/cse'} clubName='Electrical and Electronics Engineering' />
        <ClubCard route={route?route:'clubinfo/cse'} clubName='Computer Science & Engineering' />
        <ClubCard route={route?route:'clubinfo/cse'} clubName='Computer Science & Engineering' />
        <ClubCard route={route?route:'clubinfo/cse'} clubName='Computer Science & Engineering' />
        <ClubCard route={route?route:'clubinfo/cse'} clubName='Electrical and Electronics Engineering' />
      </div>
    </div>
  );
}
