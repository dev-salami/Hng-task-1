import Avatar from "../asset/AvatarMaker.png";
import Slack from "../asset/th.jpg";
import Zuri from "../asset/zuri.svg";
import { FaGithub } from "react-icons/fa";
import Ingressive from "../asset/ingressive.jpg";
function Home() {
  return (
    <section className="mx-auto container p-10">
      <header>
        <div className="w-fit mx-auto ">
          <img className="rounded-full w-40 h-40 " src={Avatar} alt="" />
          <p className="font-bold text-center text-xl p-4">_Salamy_</p>
        </div>
      </header>
      <main>
        <div className="flex flex-col space-y-6">
          <a className="link" href="https://twitter.com/Harhdeyhdarhmo1">
            Twitter Link
          </a>
          <a className="link" href="https://training.zuri.team/">
            Zuri Team
          </a>
          <a className="link" href="http://books.zuri.team/">
            Zuri Books
          </a>
          <a className="link" href="https://books.zuri.team/">
            Python Books
          </a>
          <a className="link" href="https://background.zuri.team/">
            Background Check for Coders
          </a>
          <a className="link" href="https://books.zuri.team/design-rules">
            Design Books
          </a>
        </div>
        <div className="mx-auto container w-fit flex mt-12">
          <img className="mr-6 w-8" src={Slack} alt="slack" />
          <FaGithub size={36} />
        </div>
      </main>
      <footer>
        <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-6 sm:justify-between items-center md:justify-around  mt-12">
          <img className="h-6" src={Zuri} alt="" />
          <p className="font-bold ">HNG Internship 9 Frontend Task</p>
          <img className="h-6" src={Ingressive} alt="" />
        </div>
      </footer>
    </section>
  );
}
export default Home;
