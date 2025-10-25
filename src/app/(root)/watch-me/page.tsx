// pages/index.js or any other page
import PageContainer from "@/components/shared/page-container";
import TwitchEmbed from "@/components/twitch/twitch-embed";

const HomePage = () => {
  return (
    <PageContainer className="space-y-4">
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center">
        <h1 className="bg-linear-to-r from-teal-300 to-teal-700 text-transparent bg-clip-text text-3xl font-semibold">My Live Stream</h1>
        <p>If possable, I will always try to live stream projects. if i am working on a client project that is sensative, Obviously I would be able to do that</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <TwitchEmbed channel="justbenuk" width={1020} height={530} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
