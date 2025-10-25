'use client'
import Script from 'next/script';
import { useEffect, useRef } from 'react';

// Extend the Window interface to include Twitch
declare global {
  interface Window {
    Twitch?: {
      Embed: new (container: HTMLElement, options: {
        width: number;
        height: number;
        channel: string;
        layout: string;
      }) => void;
    };
  }
}

interface TwitchEmbedProps {
  channel: string;
  width?: number;
  height?: number;
}

const TwitchEmbed = ({ channel, width = 854, height = 480 }: TwitchEmbedProps) => {
  const embedContainerRef = useRef<HTMLDivElement>(null);
  const twitchEmbedLoaded = useRef(false);

  useEffect(() => {
    if (window.Twitch?.Embed && embedContainerRef.current && !twitchEmbedLoaded.current) {
      new window.Twitch.Embed(embedContainerRef.current, {
        width: width,
        height: height,
        channel: channel,
        layout: 'video-with-chat', // or 'video'
      });
      twitchEmbedLoaded.current = true;
    }
  }, [channel, height, width]);

  return (
    <>
      {/* Load the Twitch embed script */}
      <Script
        src="https://embed.twitch.tv/embed/v1.js"
        strategy="lazyOnload"
      />
      {/* Add a placeholder for the Twitch embed */}
      <div ref={embedContainerRef}></div>
    </>
  );
};

export default TwitchEmbed;
