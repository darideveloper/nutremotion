import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  textOnly?: boolean;
}

export default function Logo({ className = "", textOnly = false }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center space-x-2 ${className}`}>
      {!textOnly && (
        <img 
          src="/images/newest-logo.png" 
          alt="NutrEmotion Logo" 
          className="h-32 w-auto"
        />
      )}
      {textOnly && (
        <span className="font-serif text-2xl font-bold text-nutr-green-500">
          Nutr<span className="text-nutr-purple-500">Emotion</span>
        </span>
      )}
    </Link>
  );
}