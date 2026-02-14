import LeaderCard from "../components/Layout/MainGrid/LeaderCard";
import MainGrid from "../components/Layout/MainGrid/MainGrid";
import Sidebar from "../components/Layout/Sidebar";
import TopBar from "../components/Layout/TopBar";
import UserNav from "../components/UserNav";

function UserPage(){
 return(
<div className="
  min-h-screen
  rounded-3xl
  overflow-hidden
  grid
  grid-cols-[auto_1fr_300px]
">
  <Sidebar />

  {/* Main Content */}
  <div className="flex flex-col gap-2 ml-5 mt-1">
    <TopBar />
    <MainGrid />
  </div>

  {/* Right Column */}
  <div className="pr-6">
    <LeaderCard />
  </div>

</div>
 )
}


export default UserPage;