import Image from "next/image";
import { Inter } from "next/font/google";
import VideoCard from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard 
        title= {"How learn coding in 30 days"}
        image={'youtube_thumbnail.jpg'} 
        thumb_image= {'logo.jpg'}
        author = {'Raghu Anand'}
        views = {'46M'}
        timestamp = {'13 days ago'}
      />
    </div>
  );
}
