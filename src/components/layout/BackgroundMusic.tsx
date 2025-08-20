import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-nutr-gray-200">
      <audio
        ref={audioRef}
        src="/audio/background-music.m4a"
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={togglePlay}
          className="h-8 w-8 p-0 hover:bg-nutr-green-100"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 text-nutr-green-600" />
          ) : (
            <Play className="h-4 w-4 text-nutr-green-600" />
          )}
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMute}
          className="h-8 w-8 p-0 hover:bg-nutr-green-100"
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4 text-nutr-gray-400" />
          ) : (
            <Volume2 className="h-4 w-4 text-nutr-green-600" />
          )}
        </Button>
        
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="w-16 h-2 bg-nutr-gray-200 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #10b981 0%, #10b981 ${volume * 100}%, #e5e7eb ${volume * 100}%, #e5e7eb 100%)`
          }}
        />
        
        <span className="text-xs text-nutr-gray-500 min-w-[2rem]">
          {Math.round(volume * 100)}%
        </span>
      </div>
      
      <div className="text-xs text-nutr-gray-400 mt-1 text-center">
        Música ambiente
      </div>
    </div>
  );
}